import React, { useState, useEffect, useRef } from "react";



const LocationMenu = ({ isLocationMenuVisible, setLocationMenuVisible }) => {

    return (
      <div
        className={`location-menu ${isLocationMenuVisible ? "visible" : ""}`}
        onClick={() => setLocationMenuVisible(false)}
      >
        <strong>Update Location</strong>
      
        <div className="separator-menu"></div>
        <div>Inventory and delivery options will change based on location.</div>
        <input placeholder="Zip code"></input>
      </div>
    );
  };
  
  export default LocationMenu