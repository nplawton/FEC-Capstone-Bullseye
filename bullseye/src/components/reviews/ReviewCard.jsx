import React from "react";
import './Reviews.css';

function ReviewCard({review}) {

    return (
      <div className="review-card">
        <h2 className="review-header">Review title goes here</h2>
        <p className="review-user-date">user name - how long ago</p>
        <p className="review-description">Description goes here</p>
        <p className="review-helpful">Did you find this review helpful?</p>
        <button className="button-helpful">Helpful</button>
        <button className="button-not-helpful">Not helpful</button>
        <p className="report-link">Report review</p>

      </div>
    );
  }
  
  export default ReviewCard;