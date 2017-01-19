import React from 'react';
import { Link, withRouter } from 'react-router';
import AboutContainer from './about_container';
import TabsContainer from '../tabs/tabs_container';
import QuestionsContainer from '../question/questions_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };

    this.handleLike = this.handleLike.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.profileActions = this.profileActions.bind(this);
    this.likeButton = this.likeButton.bind(this);
    this.cloudinate = this.cloudinate.bind(this);
    this.profPic = this.profPic.bind(this);
  }


  componentDidMount() {
    this.props.fetchCurrentProfile(this.props.params.userId)
      .then(() => {
        this.props.fetchResponses(this.props.profile.id);
        this.setState({ imageUrl: this.props.profile.image_url });
      });
    this.props.fetchConversations();
    this.props.fetchLikes(this.props.currentUser.id);
    this.props.fetchQuestions();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.fetchCurrentProfile(nextProps.params.userId)
        .then(() => this.setState({ imageUrl: this.props.profile.image_url }));
    }
  }

  cloudinate(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'tomogasawara',
        upload_preset: 'qpdvaovq',
        theme: 'minimal',
      },
      (errors, imageInfo) => {
        if (errors === null) {
          let cloud_url = imageInfo[0].url;
          this.setState({
            imageUrl: cloud_url
          });
          const user = this.props.profile;
          const formData = new FormData();
          formData.append("user[image]", cloud_url);
          this.props.updateImage(formData, user);
        }
      }
    );
  }

  handleLike(e) {
    e.preventDefault();

    let liked = false;
    let like_id = {};

    Object.keys(this.props.likes).forEach((like) => {
      if (this.props.likes[like].to_id === this.props.profile.id) {
        liked = true;
        like_id = like;
      }
    });

    if (liked) {
      this.props.destroyLike(like_id);
    } else {
      this.props.createLike({from_id: this.props.currentUser.id, to_id: this.props.profile.id});
    }
  }

  handleMessage(e) {
    e.preventDefault();
    let existingThread = {};


    Object.keys(this.props.conversations).forEach((conversation) => {
      if (conversation === "order") {
        return;
      } else if (
        this.props.conversations[conversation].started_user.id === this.props.profile.id ||
        this.props.conversations[conversation].received_user.id === this.props.profile.id
      ) {
        existingThread = conversation;
      }
    });

    if (Object.keys(existingThread).length > 0) {
      this.props.router.push(`/conversations/${existingThread}`);
    } else {
      const conversation = {
        user_one_id: this.props.currentUser.id,
        user_two_id: this.props.profile.id
      };
      this.props.createConversation(conversation)
        .then((conversation) => {
          this.props.router.push(`/conversations/${conversation.currentConversation.conversationId}`);
        });
    }
  }

  likeButton() {
    let liked = false;
    Object.keys(this.props.likes).forEach((like) => {
      if (this.props.likes[like].to_id === this.props.profile.id) {
        liked = true;
      }
    });

    const star = liked ? "★ Liked" : "☆ Like";

    if (liked) {
      return <button className="profile-like-button liked" onClick={ this.handleLike }>{star}</button>;
    } else {
      return <button className="profile-like-button not-liked" onClick={ this.handleLike }>{star}</button>;
    }
  }

  profileActions() {
    if (this.props.currentUser.id === this.props.profile.id) {
      return <div></div>;
    } else {
      return (
        <div className="profile-actions">
          {this.likeButton()}
          <button className="profile-message-button" onClick={ this.handleMessage }>Message</button>
        </div>
      );
    }
  }



  profPic() {
    if (this.props.currentUser.id === this.props.profile.id) {
      return (
        <div>
          <img className="prof-pic" src={this.state.imageUrl} ></img>
          <button className="update-image-block" onClick={this.cloudinate}>Update</button>

        </div>
      );
    } else {
      return (
        <img className="prof-pic non-user" src={this.state.imageUrl} ></img>
      );
    }
  }

  render() {

    if (!this.props.profile || !this.props.currentUser) {
      return <div></div>;
    } else {
      return(
        <main className="profile-main">
          <div className="profile-header">
            <div className="profile-header-content group">
              <div className="user-basics group">
                <div className="user-thumb">
                  {this.profPic()}
                </div>
                <div className="user-info group">
                  <h2 className="user-name">
                    {this.props.profile.username}
                  </h2>
                  <h3 className="user-details">
                    {this.props.profile.age} • {this.props.profile.indoorsoutdoors} • {this.props.profile.discipline}
                  </h3>
                </div>
              </div>
              {this.profileActions()}
            </div>
          </div>
          <TabsContainer
            tabs={ [ <AboutContainer />, <QuestionsContainer questions={ this.props.questions }/> ] }
            tabNames={ ["About", "Questions"] }
            styling="profile-tabs"
            />
        </main>
      );
    }
  }
}

export default withRouter(Profile);
