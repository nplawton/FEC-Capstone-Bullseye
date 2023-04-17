import React, { useContext } from "react";
import ReviewContext from "../context/ReviewContext.js";
import './Reviews.css';
import ReviewCard from "./ReviewCard.jsx";

function ReviewContainer() {
    const { reviews } = useContext(ReviewContext);

    // These functions handle the pop-up that happens when you mousover the "Write a review" button
    function handleMouseEnter() {
      const revGraphic = document.getElementById('rev-graphic2');
      revGraphic.style.opacity = 1;
      revGraphic.style.transform = 'translateY(-72px)';
    }
    function handleMouseLeave() {
      const revGraphic = document.getElementById('rev-graphic2');
      revGraphic.style.opacity = 0;
      revGraphic.style.transform = 'translateY(-55px)';
    }

    return (
      <div className="review-container">
        {reviews.map((review, index)=>(
            <ReviewCard rev={review} key={'review'+index} random={Math.floor((Math.random() * 19) + 1)}/>
        ))}
        <div className="bg-hover-graphic">
            <button className="review-button" id="review-button2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Write a review</button>
            <div className="actual-graphic" id="rev-graphic2"></div>
        </div>
      </div>
    );
  }
  
  export default ReviewContainer;