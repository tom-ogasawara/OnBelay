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
              placeHolder="Tell people a little about yourself."
              />
          </div>
        );
      } else {
        return <div></div>;
      }
    }
}

export default About;
