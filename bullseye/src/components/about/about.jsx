import React, { useState, useRef, useEffect, useContext } from "react";
import Details from "./details";
import QuestionAnswer from "./qa"
import Shipping from "./shipping"
import ProductContext from "../context/ProductContext.js";
import { QAProvider } from "../context/questionContext.js";


import "./about.css"

const About = () => {

    const { products } = useContext(ProductContext)
    const [showMore, setShowMore] = useState(false);
    const [activeTab, setActiveTab] = useState("details")


    const nikon = products[0]

    const handleShowMoreClick = () => {
      setShowMore(!showMore);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
    

    return (
        <>
        <div className="main-content-container">
            <h2 className="about-this-item">About this item</h2>
            <div className="product-details-tab">
                <div className="product-details-button-wrap">
                    <ul className="product-details-tab-buttons">
                        <li 
                         className={`tab-button ${activeTab === "details" ? "active" : ""}`}
                         onClick={() => handleTabClick("details")}
                         >
                            Details
                        </li>
                        <li
                            className={`tab-button ${activeTab === "shipping" ? "active" : ""}`}
                            onClick={() => handleTabClick("shipping")}
                        >
                            Shipping & Returns
                        </li>
                        <li
                            className={`tab-button ${activeTab === "qa" ? "active" : ""}`}
                            onClick={() => handleTabClick("qa")}
                        >
                            Q&A
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className="about-separator"></div>
            <div className="content-container">
                {activeTab === 'details' && (
                    < Details 
                    nikon={nikon}
                    showMore={showMore}
                    />
                )}
                <QAProvider
                >
                    {activeTab === 'qa' && (
                        < QuestionAnswer
                        />
                    )}
                </QAProvider>
                {activeTab === 'shipping' && (
                    < Shipping
                    products={products}
                    />
                )}
            </div>
                {activeTab === "details" ? (
                    <button className="details-button" onClick={handleShowMoreClick}>
                    {showMore ? (
                <>
                    <span>Show</span>&nbsp;
                    <span>Less</span>
                </>
                ) : (
                <>
                    <span>Show</span>&nbsp;
                    <span>More</span>
                </>
                )}
            </button>
            ) : null}
        </div>

    </>
    )
}

export default About