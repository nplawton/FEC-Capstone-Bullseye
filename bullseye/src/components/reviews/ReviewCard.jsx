import React from "react";
import './Reviews.css';

function ReviewCard() {
    return (
      <div>
        <h2 className="review-header">Review title goes here</h2>
        <p className="review-user-date">user name - how long ago</p>
        <p className="review-description">Description goes here</p>
      </div>
    );
  }
  
  export default ReviewCard;