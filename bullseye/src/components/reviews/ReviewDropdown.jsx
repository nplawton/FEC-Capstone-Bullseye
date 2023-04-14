import React from "react";
import MostRecentDropdown from "./MostRecentDropdown.jsx";
import AllRatingsDropdown from "./AllRatingsDropdown.jsx";
import './Reviews.css';


function ReviewDropdown() {
    function handleMouseEnter() {
        const revGraphic = document.getElementById('rev-graphic');
        revGraphic.style.opacity = 1;
        revGraphic.style.transform = 'translateY(-72px)';
    }

    function handleMouseLeave() {
        const revGraphic = document.getElementById('rev-graphic');
        revGraphic.style.opacity = 0;
        revGraphic.style.transform = 'translateY(-55px)';
    }

    return (
        <div>
            <div className="bg-hover-graphic">
                <button className="review-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Write a review</button>
                <div className="actual-graphic" id="rev-graphic"></div>
            </div>
            <div className="review-dropdown-main" id="review-dropdown-main">
                <MostRecentDropdown />
                <AllRatingsDropdown />
            </div>
        </div>
    );
  }
  
  export default ReviewDropdown;