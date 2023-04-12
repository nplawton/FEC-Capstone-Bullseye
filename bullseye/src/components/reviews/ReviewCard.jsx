import React from "react";
import './Reviews.css';

function ReviewCard({rev}) {
    const { review } = rev;

    return (
      <div className="review-card">
        <h4 className="review-header">Review title goes here</h4>
        <p className="review-user-date">user name - how long ago</p>
        <p className="review-description">{!review ? 'Loading...' : review}</p>
        <p className="review-helpful">Did you find this review helpful?</p>
        <button className="button-helpful">Helpful</button>
        <button className="button-not-helpful">Not helpful</button>
        <p className="report-link">Report review</p>

      </div>
    );
  }
  
  export default ReviewCard;