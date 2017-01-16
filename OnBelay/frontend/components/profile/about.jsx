import React from 'react';
import AboutAnswer from './about_answer';

class About extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (this.props.profile) {

        return(
          <div className="profile-content">
            <AboutAnswer
              dataName="summary"
              answerTitle="About me"
              answerText={ this.props.profile.summary }
              currentUser={ this.props.currentUser }
              profile={ this.props.profile }
              updateProfile={ this.props.updateProfile }
              placeHolder="Write a little about yourself. Do it."
              />
            <AboutAnswer
              dataName="doing"
              answerTitle="What I plan to do with my life"
              answerText={ this.props.profile.doing }
              currentUser={ this.props.currentUser }
              profile={ this.props.profile }
              updateProfile={ this.props.updateProfile }
              placeHolder="Don't overthink this one. You know you're not doing anything."
              />
            <AboutAnswer
              dataName="good_at"
              answerTitle="I'm really great at"
              answerText={ this.props.profile.good_at }
              currentUser={ this.props.currentUser }
              profile={ this.props.profile }
              updateProfile={ this.props.updateProfile }
              placeHolder="Go on, brag a little (or a lot). We won't judge (yes we will)."
              />
            <AboutAnswer
              dataName="favorites"
              answerTitle="Favorite coding languages, books, anything"
              answerText={ this.props.profile.favorites }
              currentUser={ this.props.currentUser }
              profile={ this.props.profile }
              updateProfile={ this.props.updateProfile }
              placeHolder="Help you potential anti-matches find un-common interests."
              />
            <AboutAnswer
              dataName="thinking"
              answerTitle="I spend a good amount of time thinking about"
              answerText={ this.props.profile.thinking }
              currentUser={ this.props.currentUser }
              profile={ this.props.profile }
              updateProfile={ this.props.updateProfile }
              placeHolder="Global warming, today's lunch, or nothing at all."
              />
            <AboutAnswer
              dataName="friday"
              answerTitle="On an average Friday night I am"
              answerText={ this.props.profile.friday }
              currentUser={ this.props.currentUser }
              profile={ this.props.profile }
              updateProfile={ this.props.updateProfile }
              placeHolder="Netflix and chill, or partying your pants off -- what's the deal?"
              />
            <AboutAnswer
              dataName="message_if"
              answerTitle="You should message me if"
              answerText={ this.props.profile.message_if }
              currentUser={ this.props.currentUser }
              profile={ this.props.profile }
              updateProfile={ this.props.updateProfile }
              placeHolder="Put up a few tips to help potential matches win (or lose) you over."
              />
          </div>
        );
      } else {
        return <div></div>;
      }
    }
}

export default About;
