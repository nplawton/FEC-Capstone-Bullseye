import React from "react";
import { ReviewProvider } from "../context/ReviewContext.js";
import './Reviews.css';
import ReviewContainer from "./ReviewContainer.jsx";
import ReviewFilter from "./ReviewFilter.jsx";
import ReviewDropdown from "./ReviewDropdown.jsx";

function Reviews() {


    return (
      <ReviewProvider>
        <ReviewFilter />
        <ReviewDropdown />
        <ReviewContainer />
      </ReviewProvider>
    );
  }
  
  export default Reviews;