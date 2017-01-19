import React from 'react';
import { withRouter } from 'react-router';

class MatchItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleLike = this.handleLike.bind(this);
    this.likeButton = this.likeButton.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.matchTextColor = this.matchTextColor.bind(this);
  }

  handleLike(e) {
    e.preventDefault();

    if (Object.keys(this.props.like).length > 0) {
      this.props.destroyLike(this.props.like.id);
    } else {
      this.props.createLike({from_id: this.props.currentUser.id, to_id: this.props.user.id});
    }
  }

  handleProfile(e) {
    e.preventDefault();

    this.props.router.push(`/profile/${this.props.user.id}`);
  }

  likeButton() {
    const star = Object.keys(this.props.like).length > 0 ? "★ Liked" : "☆ Like";

    if (Object.keys(this.props.like).length > 0) {
      return <button className="browse-like-button browse-liked" onClick={ this.handleLike }>{star}</button>;
    } else {
      return <button className="browse-like-button browse-not-liked" onClick={ this.handleLike }>{star}</button>;
    }
  }

  matchTextColor() {
    if (this.props.matchPercentage > 60) {
      return "high-match-percentage";
    } else if (this.props.matchPercentage > 40) {
      return "medium-match-percentage";
    } else {
      return "low-match-percentage";
    }
  }

  render() {
    return (
      <div className="match-item-wrapper">
        <div className="match-item">
          <img src={this.props.user.image_url} className="browse-pic" onClick={ this.handleProfile }></img>
          <div className="match-text">
            <p className="username-text">{this.props.user.username}</p>
            <p className="user-browse-info">{this.props.user.age} · {this.props.user.discipline}</p>
            <p className={"match-percentage" + this.matchTextColor()}>{this.props.matchPercentage}% Match</p>
            {this.likeButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MatchItem);
