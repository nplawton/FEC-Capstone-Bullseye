import React, { useState, useRef, useEffect } from "react";

const Shipping = () => { 

    return (
        <>
            <div className="shipping-details">
                <h3 className="shipping-title">Shipping details</h3>
                <div>
                    <p>Estimated ship dimensions: 8.07 inches length x 6.69 inches width x 4.92 inches height</p>
                    <p>Estimated ship weight: 2.65 pounds</p>
                    <p>This item cannot be shipped to the following locations: APO/FPO, American Samoa, Guam, Northern Mariana Islands, Puerto Rico, United States</p>
                    <p>Minor Outlying Islands, Virgin Islands, U.S., Alaska, Hawaii</p>
                    <p>item ships from third party seller: Focus Camera</p>
                </div>
                <h3 className="shipping-title">Return details</h3>
                <div>
                    <p>This item must be returned to any Target store.</p>
                    <p>This item must be returned within 30 days of the date it was purchased in store, shipped, delivered by a Shipt shopper, or made ready for pickup.</p>
                    <p>See the return policy for complete information.</p>
                </div>
            </div>
        </>
    )
    
}

export default Shipping