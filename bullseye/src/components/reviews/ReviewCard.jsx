import React, { useState, useContext } from "react";
import ProductContext from "../context/ProductContext.js";
import StarRatings from 'react-star-ratings';
import './Reviews.css';

function ReviewCard(props) {
    const { review, stars, account_id, helpful, title, date } = props.rev;
    const { random } = props;
    const { accounts } = useContext(ProductContext);
    const [count, setCount] = useState(helpful)
    const [reported, setReported] = useState(false)
    const [isHelpful, setIsHelpful] = useState(false);
    
    // Matches the user name from the database to the review
    let user;
    for (let i=0;i<accounts.length;i++) {
        if (accounts[i].id == account_id) {
            user = accounts[i].user_name;
        } else {
            continue;
        }
    }

    // This was an attempt to calculate the difference in date between original posting and current date, not functioning
    // function getMonths(time) {
    //     let millis = (1000 * 3600 * 24)
    //     let revDate = new Date(time);
    //     let revDateMS = (revDate.getMilliseconds() / millis);
    //     console.log(revDateMS)
    //     let today = (Date.now() / millis);
    //     let daysBetween = Math.abs(revDateMS - today);
    //     let months = Math.floor(daysBetween / 32);
    //     return months;
        
    // }

    // This function changes 'reported' state and will toggle the underline on the "Report review" element
    function handleClick(e) {
        setReported(!reported ? true : false);
        (!reported ? e.target.style.textDecoration = "none" : e.target.style.textDecoration = "underline");
    }

    // These two functions handle the count variable for if the review is "Helpful" or "Not Helpful"
    function handleClickUp() {
        setCount(count + 1);
        setIsHelpful(true);
    }
    function handleClickDown() {
        setCount(count - 1);
        setIsHelpful(true);
    }

    return (
      <div className="review-card">
        <h4 className="review-header">{!title ? 'Loading...' : title}</h4>
        {/* This component is from react-star-ratings and displays the stars on the review. Other attributes configured in Reviews.css */}
        <StarRatings
            rating={!stars ? 0 : stars}
            starRatedColor="gold"
            starEmptyColor="white"
            numberOfStars={5}
            starDimension="17px"
            starSpacing="1px"
            name="star-rating"
        />
        <p className="review-user-date">{!user ? 'Loading...' : user} - {random} months ago</p>
        <div className="inner-review-container">
            <p className="review-description">{!review ? 'Loading...' : review}</p>
            <div className="inner-review-secondary-container">
                <p className="review-helpful">Did you find this review helpful?</p>
                <div className="report-link-div">
                    {/* This ternary will display the Helpful/Not Helpful buttons until clicked, then will display number of users that found helpful */}
                    {(isHelpful === false) ? <><button className="button-helpful" onClick={handleClickUp}>Helpful</button>
                    <button className="button-not-helpful" onClick={handleClickDown}>Not helpful</button></>
                    : <p className="helpful-after">{count} people found this review helpful</p>}
                    <p className="report-link" onClick={handleClick}>{!reported ? 'Report review' : 'Review reported'}</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ReviewCard;