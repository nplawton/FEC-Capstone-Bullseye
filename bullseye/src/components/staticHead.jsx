import React, { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { BiBuildingHouse } from "react-icons/bi";

const StaticHead = () => {

    return (
        <div className="static-header">
            <div className="static-header-left">
                <div className="header-location">
                    <IconContext.Provider value={{ className: "icon" }}> 
                        <IoLocationOutline />
                    </IconContext.Provider>
                    78023
                </div>
                <div className="header-location">
                    <IconContext.Provider value={{ className: "icon" }}> 
                        <BiBuildingHouse />
                    </IconContext.Provider>
                    San Antonio West
                </div>
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
            </div>
        </div>
    )

}

export default StaticHead