import React from 'react';
import MatchItem from './match_item';
import { withRouter } from 'react-router';

class Matches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: 2500,
      sortBy: "match percentage"
    };

    this.display = this.display.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
    this.sortParams = this.sortParams.bind(this);
    this.distanceParams = this.distanceParams.bind(this);
    this.sortedUsers = this.sortedUsers.bind(this);
    this.sortByUsername = this.sortByUsername.bind(this);
    this.locationPreference = this.locationPreference.bind(this);
    this.disciplinePreference = this.disciplinePreference.bind(this);
    this.findMatchPercentage = this.findMatchPercentage.bind(this);
    this.calculateQuestionImportance = this.calculateQuestionImportance.bind(this);
    this.calculateQuestionScore = this.calculateQuestionScore.bind(this);
    this.matchListItems = this.matchListItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers(this.state.distance);
    this.props.fetchLikes(this.props.currentUser.id);
    this.props.fetchQuestions();
    this.setState({ distance: 2500 });
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
      return (this.props.users[user.user].discipline === "boulder");
    } else if (this.props.currentUser.discipline === "topRope") {
      return (this.props.users[user.user].discipline === "topRope");
    } else if (this.props.currentUser.discipline === "lead") {
      return (this.props.users[user.user].discipline === "lead");
    }
  }


  locationPreference() {
    let climbLocation;

    if (this.props.currentUser.indoorsoutdoors === "indoors") {
      climbLocation = "indoors";
    } else if (this.props.currentUser.indoorsoutdoors === "outdoors") {
      climbLocation = "outdoors";
    } else {
      climbLocation = "everywhere";
    }

    return (
      <div className="browse-header">
        <p className="browse-header-text">Searching for people who climb {climbLocation} </p>
      </div>
    );

  }

  handleDistance(e) {
    this.props.fetchUsers(parseInt(e.currentTarget.value));
    this.setState({ distance: parseInt(e.currentTarget.value) });
  }

  handleSort(e) {
    this.setState({ sortBy: e.currentTarget.value });
  }

  findMatchPercentage(user) {
    let currentUserScore = 0;
    let otherUserScore = 0;
    let currentUserQuestionScore = 0;
    let otherUserQuestionScore = 0;

    const userQuestions = this.props.currentUser.questions.map((question) => {
      return question.id;
    });

    const otherUserQuestions = user.questions.map((question) => {
      return question.id;
    });

    const sharedQuestions = Object.keys(this.props.questions).map((question) => {
      if (userQuestions.includes(parseInt(question)) && otherUserQuestions.includes(parseInt(question))) {
        return this.props.questions[question];
      }
    }).filter((question) => question !== undefined);

    if (sharedQuestions.length === 0) {
      return 0;
    }

    sharedQuestions.forEach((question) => {
      currentUserScore += this.calculateQuestionScore(question, this.props.currentUser, user);
      otherUserScore += this.calculateQuestionScore(question, user, this.props.currentUser);
      currentUserQuestionScore += this.calculateQuestionImportance(question, this.props.currentUser);
      otherUserQuestionScore += this.calculateQuestionImportance(question, user);
    });

    const currentUserPercent = (currentUserScore / currentUserQuestionScore);
    const otherUserPercent = (otherUserScore / otherUserQuestionScore);

    const multiplied = currentUserPercent * otherUserPercent;
    const root = sharedQuestions.length;
    let matchPercent = Math.floor((Math.sqrt(multiplied) - (1 / (2 * root))) * 100);

    if (matchPercent < 0) {
      matchPercent = 0;
    } else if (isNaN(matchPercent)) {
      matchPercent = 54;
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
    let otherUserAnswer = null;
    let userAcceptables = null;
    let userImportance = 0;

    const answers = question.answers;
    const answerIds = question.answers.map((answer) => answer.id);

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

  sortByUsername(a, b) {
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
        return this.sortByUsername(a, b);
      } else {
        return this.props.users[a.user].age - this.props.users[b.user].age;
      }
    });
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

  sortParams() {
    return (
      <select className="sort-dropdown" onChange={ this.handleSort }>
        <option value="match percentage">Match Percentage</option>
        <option value="username">Username</option>
      </select>
    );
  }

  distanceParams() {
    return (
      <select className="sort-dropdown" onChange={ this.handleDistance }>
        <option value="2500">Any</option>
        <option value="5">5 miles</option>
        <option value="10">10 miles</option>
        <option value="25">25 miles</option>
        <option value="50">50 miles</option>
        <option value="100">100 miles</option>
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
        {this.locationPreference()}
        <div className="sort-box group">
          <div className="sort-text-container">Sort by:
            {this.sortParams()}
          </div>
          <div className="distance-container">Distance:
            {this.distanceParams()}
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
