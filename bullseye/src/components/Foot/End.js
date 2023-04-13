import React from "react";
import EndCSS from "./End.module.css";

const End =() =>{
  return(
    <div className={EndCSS.container}>
      <div className={EndCSS.contentwrap}>
      <p className={EndCSS.text}>
        <h6>Terms</h6>
      </p>
      <p className={EndCSS.text}>
        <h6>CA Supply Chain</h6>
      </p>
      <p className={EndCSS.text}>
        <h6>Privacy</h6>
      </p>
      <p className={EndCSS.text}>
        <h6>CA Privacy Rights</h6>
      </p>
      <p className={EndCSS.text}>
        <h6>Your Privacy Choices - CA</h6>
      </p>
      <p className={EndCSS.text}>
        <h6>Interest Based Ads</h6>
      </p>
      <p className={EndCSS.text}>
        <h6>TM & © 2023 Target Brands, Inc. - CA</h6>
      </p>
      </div>
    </div>
  )
}

export default End;