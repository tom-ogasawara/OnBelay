import React from 'react';
import MatchItem from './match_item';
import { withRouter } from 'react-router';

class Matches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: 500,
      sortBy: "match percentage"
    };

    this.findMatchPercentage = this.findMatchPercentage.bind(this);
    this.calculateQuestionImportance = this.calculateQuestionImportance.bind(this);
    this.calculateQuestionScore = this.calculateQuestionScore.bind(this);
    this.matchListItems = this.matchListItems.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.sortedUsers = this.sortedUsers.bind(this);
    this.sortOptions = this.sortOptions.bind(this);
    this.distanceOptions = this.distanceOptions.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.disciplinePreference = this.disciplinePreference.bind(this);
    this.preferences = this.preferences.bind(this);
    this.usernameSort = this.usernameSort.bind(this);
    this.display = this.display.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers(this.state.distance);
    this.props.fetchLikes(this.props.currentUser.id);
    this.props.fetchQuestions();
    this.setState({ distance: 500 });
  }

  disciplinePreference(user) {
    if (this.props.currentUser.discipline === "climb") {
      return (
        this.props.users[user.user].discipline === "climb" &&
        this.props.users[user.user].discipline === "boulder" &&
        this.props.users[user.user].discipline === "topRope" &&
        this.props.users[user.user].discipline === "lead"
      );
    } else if (this.props.currentUser.discipline === "boulder") {
      return (
        this.props.users[user.user].discipline === "boulder"
      );
    } else if (this.props.currentUser.discipline === "topRope") {
      return (
        this.props.users[user.user].discipline === "topRope"
      );
    } else if (this.props.currentUser.discipline === "lead") {
      return (
        this.props.users[user.user].discipline === "lead"
      );
    }
  }


  preferences() {
    let climbLocation;

    if (this.props.currentUser.indoorsoutdoors === "indoors") {
      climbLocation = "indoors";
    } else if (this.props.currentUser.indoorsoutdoors === "outdoors") {
      climbLocation = "outdoors";
    } else {
      climbLocation = "everywhere";
    }

    return (
      <div className="preferences-bar">
        <p className="browse-large">Looking for people who climb {climbLocation} </p>
      </div>
    );

  }
  handleSort(e) {
    this.setState({ sortBy: e.currentTarget.value });
  }

  handleDistance(e) {
    this.props.fetchUsers(parseInt(e.currentTarget.value));
    this.setState({ distance: parseInt(e.currentTarget.value) });
  }

  findMatchPercentage(user) {
    let currentUserPoints = 0;
    let currentUserQuestionTotal = 0;
    let otherUserPoints = 0;
    let otherUserQuestionTotal = 0;

    const userQuestions = this.props.currentUser.questions.map((question) => {
      return question.id;
    });

    const otherUserQuestions = user.questions.map((question) => {
      return question.id;
    });

    const commonQuestions = Object.keys(this.props.questions).map((question) => {
      if (userQuestions.includes(parseInt(question)) && otherUserQuestions.includes(parseInt(question))) {
        return this.props.questions[question];
      }
    }).filter((question) => question !== undefined);

    if (commonQuestions.length === 0) {
      return 0;
    }

    commonQuestions.forEach((question) => {
      currentUserPoints += this.calculateQuestionScore(question, this.props.currentUser, user);
      currentUserQuestionTotal += this.calculateQuestionImportance(question, this.props.currentUser);
      otherUserPoints += this.calculateQuestionScore(question, user, this.props.currentUser);
      otherUserQuestionTotal += this.calculateQuestionImportance(question, user);
    });

    const currentUserPercent = (currentUserPoints / currentUserQuestionTotal);
    const otherUserPercent = (otherUserPoints / otherUserQuestionTotal);

    const multiplied = currentUserPercent * otherUserPercent;
    const root = commonQuestions.length;
    let matchPercent = Math.floor((Math.sqrt(multiplied) - (1 / (2 * root))) * 100);

    if (matchPercent < 0) {
      matchPercent = 0;
    }
    return matchPercent;
  }

  calculateQuestionImportance(question, user) {
    let questionImportance = 0;
    const answers = question.answers.map((answer) => answer.id);

    user.responses.forEach((response) => {
      if (answers.includes(response.answer_id)) {
        questionImportance = response.importance;
      }
    });

    return questionImportance;
  }

  calculateQuestionScore(question, user, otherUser) {
    const answers = question.answers;
    const answerIds = question.answers.map((answer) => answer.id);
    let otherUserAnswer = null;
    let userAcceptables = null;
    let userImportance = 0;

    answers.forEach((answer) => {
      otherUser.responses.forEach((response) => {
        if (response.answer_id === answer.id) {
          otherUserAnswer = answer.body;
        }
      });
    });

    user.responses.forEach((response) => {
      if (answerIds.includes(response.answer_id)) {
        userAcceptables = response.acceptable_answers;
        userImportance = response.importance;
      }
    });

    if (userAcceptables.includes(otherUserAnswer)) {
      return userImportance;
    } else {
      return 0;
    }

  }

  usernameSort(a, b) {
    if (this.props.users[a.user].username < this.props.users[b.user].username) {
      return -1;
    } else if (this.props.users[a.user].username > this.props.users[b.user].username) {
      return 1;
    } else {
      return 0;
    }
  }

  sortedUsers() {
    return Object.keys(this.props.users).map((user) => {
      let userLike = {};

      Object.keys(this.props.likes).forEach((like) => {
        if (this.props.likes[like].to_id === this.props.users[user].id) {
          userLike = { id: like };
        }
      });

      const matchPercentage = this.findMatchPercentage(this.props.users[user]);

      return {
        matchPercentage,
        userLike,
        user
      };

    }).sort((a, b) => {
      if (this.state.sortBy === "match percentage") {
        return b.matchPercentage - a.matchPercentage;
      } else if (this.state.sortBy === "username") {
        return this.usernameSort(a, b);
      } else {
        return this.props.users[a.user].age - this.props.users[b.user].age;
      }
    }).filter((user) =>
      this.props.users[user.user].age > this.state.minAge &&
      this.props.users[user.user].age < this.state.maxAge &&
      this.disciplinePreference(user)
    );
  }


  matchListItems() {
    const matches = this.sortedUsers().map((user) => {
      return (
        <li key={ user.user }>
          <MatchItem
            matchPercentage={ user.matchPercentage }
            currentUser={ this.props.currentUser }
            user={ this.props.users[user.user] }
            like={ user.userLike }
            createLike={ this.props.createLike }
            destroyLike={ this.props.destroyLike }
            />
        </li>
      );
    });
    return matches;
  }

  sortOptions() {
    return (
      <select className="sort-dropdown" onChange={ this.handleSort }>
        <option value="match percentage">Match Percentage</option>
        <option value="username">Username</option>
        <option value="age">Age</option>
      </select>
    );
  }

  distanceOptions() {
    return (
      <select className="sort-dropdown" onChange={ this.handleDistance }>
        <option value="500">Any</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    );
  }

  display() {
    if (this.matchListItems().length === 0) {
      return (
        <div className="no-matches">No matches found</div>
      );
    } else {
      return this.matchListItems();
    }
  }

  render(){
    if (!this.props.currentUser) {
      return null;
    }

    return (
      <div className="browse-main">
        {this.preferences()}
        <div className="sort-box group">
          <div className="sort-text-container">Sort by:
            {this.sortOptions()}
          </div>
          <div className="distance-container">Distance:
            {this.distanceOptions()}
          </div>
        </div>
        <div className="match-container">
          <ul className="group">
            {this.display()}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Matches);
