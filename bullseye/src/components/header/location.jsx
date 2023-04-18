import React, { useState, useEffect, useRef } from "react";



const LocationMenu = ({ isLocationMenuVisible, setLocationMenuVisible, grey, setGrey }) => {


  const toggleX = () => {
    setLocationMenuVisible(false);
    setGrey(false)
  };
    return (
      <div
        className={`location-menu ${isLocationMenuVisible ? "visible" : ""}`}
      >
        <div className="sign-in-head">
        <strong>Update Location</strong>
        <button className="location-close-btn" onClick={toggleX}>×</button>
        </div>
        <div className="separator-menu"></div>
        <div>Inventory and delivery options will change based on location.</div>
        <input placeholder="Zip code"></input>
      </div>
    );
  };
  
  export default LocationMenu