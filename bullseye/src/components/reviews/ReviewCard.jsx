import React, { useState, useContext } from "react";
import ProductContext from "../context/ProductContext.js";
import StarRatings from 'react-star-ratings';
import './Reviews.css';

function ReviewCard(props) {
    const { review, stars, account_id, helpful, title } = props.rev;
    const { accounts } = useContext(ProductContext);
    const [count, setCount] = useState(helpful)
    const [isHelpful, setIsHelpful] = useState(false);
    
    let user;

    for (let i=0;i<accounts.length;i++) {
        if (accounts[i].id == account_id) {
            user = accounts[i].user_name;
        } else {
            continue;
        }
    }

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
        <StarRatings
            rating={!stars ? 0 : stars}
            starRatedColor="gold"
            starEmptyColor="white"
            numberOfStars={5}
            starDimension="17px"
            starSpacing="1px"
            name="star-rating"
        />
        <p className="review-user-date">{!user ? 'Loading...' : user} - how long ago</p>
        <div className="inner-review-container">
            <p className="review-description">{!review ? 'Loading...' : review}</p>
            <div className="inner-review-secondary-container">
                <p className="review-helpful">Did you find this review helpful?</p>
                <div className="report-link-div">
                    {(isHelpful === false) ? <><button className="button-helpful" onClick={handleClickUp}>Helpful</button>
                    <button className="button-not-helpful" onClick={handleClickDown}>Not helpful</button></>
                    : <p className="helpful-after">{count} people found this review helpful</p>}
                    <p className="report-link">Report review</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default ReviewCard;