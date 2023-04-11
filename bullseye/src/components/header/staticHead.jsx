import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { BiBuildingHouse } from "react-icons/bi";
import LocationMenu from "./location";

const StaticHead = ({ grey, setGrey }) => {

    const [isLocationMenuVisible, setLocationMenuVisible] = useState(false);


    const toggleMenu = () => {
        setLocationMenuVisible((prevState) => !prevState);
      };

    return (
        <div className="static-header">
            <div className="static-header-left">
                <button className="header-location"
                    onClick={() => { 
                        setGrey(true)
                        toggleMenu()
                        }}
                >
                    <IconContext.Provider value={{ className: "icon" }}> 
                        <IoLocationOutline />
                    </IconContext.Provider>
                    78023
                </button>
                <button className="header-location">
                    <IconContext.Provider value={{ className: "icon" }}> 
                        <BiBuildingHouse />
                    </IconContext.Provider>
                    San Antonio West
                </button>
            </div>
            <div className="static-header-right">
                <div className="header-text">
                    Registry   
                </div>
                <div className="header-text">
                    Weekly Ad
                </div>
                <div className="header-text">
                    RedCard
                </div>
                <div className="header-text">
                    Target Circle
                </div>
                <div className="header-text">
                    Find Stores
                </div>
                <LocationMenu
                isLocationMenuVisible={isLocationMenuVisible}
                setLocationMenuVisible={setLocationMenuVisible}
                />
            </div>
        </div>
    )

}

export default StaticHead