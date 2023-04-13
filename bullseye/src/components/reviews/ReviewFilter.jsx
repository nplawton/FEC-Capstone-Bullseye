import React, { useContext, useState, useEffect } from "react";
import ReviewContext from "../context/ReviewContext.js";
import RatingBar from './RatingBar.jsx';
import GuestRatings from "./GuestRatings.jsx";
import Loading from '../carousel/Loading.jsx';
import './Reviews.css';

function ReviewFilter() {
    const { reviews } = useContext(ReviewContext);
    const [averages, setAverages] = useState([]);
    
    function getStarCount() {
      let five = 0;
      let four = 0;
      let three = 0;
      let two = 0;
      let one = 0;
      if (reviews.length > 0){
        for (let i=0;i<reviews.length;i++){
          switch (reviews[i].stars) {
            case 5:
              five++;
              continue;
            case 4:
              four++;
              continue;
            case 3:
              three++;
              continue;
            case 2:
              two++;
              continue;
            case 1:
              one++;
              continue;
          }
        }
      }
      let countArray = [five, four, three, two, one];
      let finalAverage = countArray.map(item => {
        return Math.round((item / reviews.length) * 100);
      })
      return finalAverage;
    }

    useEffect(() => {
      const newAverage = getStarCount()
      setAverages(newAverage);
      console.log(newAverage);
    }, [reviews])
  

    return (
      <div className="review-filter">
        <h3 className="guest-rating-header">Guest Ratings & Reviews</h3>
        <div className="div-to-center">
          <div className="review-rating-bars">
            {(averages === []) ? <Loading /> :
            <>
            <div className="bars-container">
              <p className="percentage-review">5 stars</p>
              <RatingBar className="rating-bar" bgcolor="#008300" progress={averages[0]} height={8} />
              <p className="percentage-number">{averages[0]}%</p>
            </div>
            <div className="bars-container">
              <p className="percentage-review">4 stars</p>
              <RatingBar className="rating-bar" bgcolor="#008300" progress={averages[1]} height={8} />
              <p className="percentage-number">{averages[1]}%</p>
            </div>
            <div className="bars-container">
              <p className="percentage-review">3 stars</p>
              <RatingBar className="rating-bar" bgcolor="#008300" progress={averages[2]} height={8} />
              <p className="percentage-number">{averages[2]}%</p>
            </div>
            <div className="bars-container">
              <p className="percentage-review">2 stars</p>
              <RatingBar className="rating-bar" bgcolor="#008300" progress={averages[3]} height={8} />
              <p className="percentage-number">{averages[3]}%</p>
            </div>
            <div className="bars-container">
              <p className="percentage-review">1 star</p>
              <RatingBar className="rating-bar" bgcolor="#008300" progress={averages[4]} height={8} />
              <p className="percentage-number">{averages[4]}%</p>
            </div>
            </>
            }
          </div>
          <div className="guest-ratings-container">
            <GuestRatings />
          </div>
        </div>
      </div>
    );
  }
  
  export default ReviewFilter;