import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend code for submitting review

    
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          changeRating={(newRating) => setRating(newRating)}
          numberOfStars={5}
          starDimension="30px"
          starSpacing="5px"
          name="rating"
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
