import React, { Component } from 'react';
import FBImgGrid from 'react-fb-image-grid';
import Emojis from 'react-facebook-emoji';
import icon from './user.png';
import './FBpost.css';

class FBpost extends Component {

  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    const { createdBy, avatar, description, images, createdAt, likes } = this.props;

    return (
      <div className="App">
        <div className="post">

          <div className="post-header">
            <div className="avatar">
              <img src={avatar} alt=""/>
            </div>

            <div className="details">
              <div className="name">
                {createdBy}
              </div>

              <div className="time">
                {createdAt}
              </div>
            </div>
          </div>

          <div className="post-body">
            <div className="content">
              {description}
            </div>
            <div className="photos">
              <FBImgGrid images={images} />
            </div>
            <div className="likes">
              {likes[0]}, {likes[1]} and {likes.length-2} others like this.
            </div>
          </div>

          <div className="post-footer">
            <Emojis type="like" />
            <span className="like">like</span>
            <span className="comment">comment</span>
            <span className="share">share</span>
          </div>

        </div>
      </div>
    );
  }
}

FBpost.defaultProps = {
  createdBy : "Anonymous",
  avatar : icon,
  images : [],
  createdAt : new Date().toLocaleTimeString,
  likes : [],
}

export default FBpost;