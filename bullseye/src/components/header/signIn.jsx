import React, { useState, useEffect, useRef } from "react";



const SignInMenu = ({ isSignInMenuVisible, setIsSignInMenuVisible, setGrey }) => {

  const closeSignIn = () => {
    setIsSignInMenuVisible(false);
    setGrey(false);
  }

    return (
        <div
          className={`sign-in-menu ${isSignInMenuVisible ? "visible" : ""}`}
        >
          <div className="sign-in-head">
            <div><strong>Account</strong></div>
            <button className="sign-in-close-btn" onClick={closeSignIn}>×</button>
          </div>
          <div className="separator-menu"></div>
          <div>Sign in</div>
          <div className="separator-menu"></div>
          <div>Create Account</div>
          <div className="separator-menu"></div>
          <div>Orders</div>
          <div className="separator-menu"></div>
          <div>Target Circle</div>
          <div className="separator-menu"></div>
          <div>Gift Cards</div>
          <div className="separator-menu"></div>
          <div>RedCard</div>
          <div className="separator-menu"></div>
          <div>Registry</div>
          <div className="separator-menu"></div>
          <div>My Store</div>
        </div>
    );
  };
  
  export default SignInMenu