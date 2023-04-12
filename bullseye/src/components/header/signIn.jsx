import React, { useState, useEffect, useRef } from "react";



const SignInMenu = ({ isSignInMenuVisible, setIsSignInMenuVisible }) => {

    return (
      
      <div
        className={`sign-in-menu ${isSignInMenuVisible ? "visible" : ""}`}
        onClick={() => setIsSignInMenuVisible(false)}
      >
        look at this content
        <>testing</>
      </div>
    );
  };
  
  export default SignInMenu