import React from 'react';
// import faker from 'faker';

const CommentDetails = props => {
//    console.log('props=========>', props);
//    console.log('faker', faker.date.past(10));
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="user profile" src={props.avatar} />
        </a>
        <div className="content">
    <a href="/" className="author">{props.author}</a>
          <div className="metadata">
    <span className="date">{props.commentTime}</span>
          </div>
    <div className="text"> {props.userComment}</div>
        </div>
      </div>
    );

}

export default CommentDetails;