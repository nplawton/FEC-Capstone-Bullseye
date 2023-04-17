import { useContext, useState, useEffect } from "react";
import ReviewContext from "../context/ReviewContext.js";
import StarRatings from 'react-star-ratings';
import Loading from '../carousel/Loading.jsx';
import './Reviews.css';


function GuestRatings() {
    const {reviews} = useContext(ReviewContext);
    const [stars, setStars] = useState(0)

    // This function gets the average star rating based on all reviews of the product. Will be between 1 and 5.
    const averageStars = function(arr) {
        let count = 0;
        if (arr.length > 0) {
            for (let i=0;i<arr.length;i++) {
                count += arr[i].stars;
            }
        }
        return count/arr.length;
    }

    // This will update the average every time the 'reviews' state from ReviewContext gets updated
    useEffect(() => {
        const finalAverage = averageStars(reviews);
        setStars(finalAverage);
        console.log(finalAverage);
    }, [reviews])

    return (
      <div className="guest-rating">
        <p className="avg-rating-number">{!stars ? 0 : stars.toFixed(1)}</p>
        <div className="big-star-rating">
            <StarRatings
                rating={!stars ? 0 : stars}
                starRatedColor="gold"
                starEmptyColor="white"
                numberOfStars={5}
                starDimension="25px"
                starSpacing="1px"
                name="review-star-rating"
            />
        </div>
        <p className="number-reviews">{reviews.length > 0 ? reviews.length : 0} star ratings</p>
      </div>
    );
  }
  
  export default GuestRatings;