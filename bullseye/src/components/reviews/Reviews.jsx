import React from "react";
import { ReviewProvider } from "../context/ReviewContext.js";
import './Reviews.css';
import ReviewContainer from "./ReviewContainer.jsx";

function Reviews() {


    return (
      <ReviewProvider>
        <ReviewContainer />
      </ReviewProvider>
    );
  }
  
  export default Reviews;