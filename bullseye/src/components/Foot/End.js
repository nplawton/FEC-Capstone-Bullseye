import React from "react";
import EndCSS from "./End.module.css";

const End =() =>{
  return(
    <div className={EndCSS.container}>
      <div className={EndCSS.contentwrap}>
      <p className={EndCSS.text}>
        <h6 className={EndCSS.text}> Terms</h6>
      </p>
      <p className={EndCSS.text}>
        <h6 className={EndCSS.text}>CA Supply Chain</h6>
      </p>
      <p className={EndCSS.text}>
        <h6 className={EndCSS.text}>Privacy</h6>
      </p>
      <p className={EndCSS.text}>
        <h6 className={EndCSS.text}>CA Privacy Rights</h6>
      </p>
      <p className={EndCSS.text}>
        <h6 className={EndCSS.text}>Your Privacy Choices - CA</h6>
      </p>
      <p className={EndCSS.text}>
        <h6 className={EndCSS.text}>Interest Based Ads</h6>
      </p>
      <p className={EndCSS.text}>
        <h6 className={EndCSS.text}>TM & © 2023 Target Brands, Inc. - CA</h6>
      </p>
      </div>
    </div>
  )
}

export default End;