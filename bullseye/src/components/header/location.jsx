import React, { useState, useEffect, useRef } from "react";



const LocationMenu = ({ isLocationMenuVisible, setLocationMenuVisible }) => {

    return (
      <div
        className={`location-menu ${isLocationMenuVisible ? "visible" : ""}`}
        onClick={() => setLocationMenuVisible(false)}
      >
        look at this content
      </div>
    );
  };
  
  export default LocationMenu