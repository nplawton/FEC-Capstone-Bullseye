import React from "react";
import { ReviewProvider } from "../context/ReviewContext.js";
import './Reviews.css';
import ReviewContainer from "./ReviewContainer.jsx";
import ReviewFilter from "./ReviewFilter.jsx";

function Reviews() {


    return (
      <ReviewProvider>
        <ReviewFilter />
        <ReviewContainer />
      </ReviewProvider>
    );
  }
  
  export default Reviews;