import React, { useState, useRef, useEffect } from "react";


const Specification = ( { nikon } ) => { 


    // for future programers that look at this. I'm sorry, had to hard code a lot of this.

    return (
        <div className="specification-container">
            <h2 className= 'details-header-specification'>Specifications</h2>
            <div className="specification-details"><strong>Dimensions(Overall): </strong>{nikon.description}</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Weight: </strong>{nikon.weight}</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>CPSC Choking Hazard Warnings </strong>{nikon.choking ? 'Choking_hazard_small_parts' : 'no :)'}</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Maximum Resolution: </strong>3840 x 2160</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>View Finder Type: </strong>{nikon.view}</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Compatible With: </strong>{nikon.lens}</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Data storage capacity: </strong> {nikon.data} gb</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Megapixels: </strong> {nikon.megapixels} mp</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Screen Size: </strong> {nikon.screen_size} inches</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Battery: </strong>{nikon.battery ? 'Required, Included' : 'no :('}</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Warranty:  </strong>No Applicable Warranty. To obtain a copy of the manufacturer's or supplier's warranty for this item prior to purchasing the item, please call Target Guest Services at 1-800-591-3869</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>TCIN: </strong>{nikon.tcin}</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>UPC: </strong>{nikon.upc}</div>
            <div className="about-separator-specification"></div>
            <div className="specification-details"><strong>Origin: </strong>{nikon.origin}</div>
            <div className="about-separator-specification"></div>
            <p className="specification-details">The above item details were provided by the Target Plus™ Partner. Target does not represent or warrant that this information is accurate or complete. On occasion, manufacturers may modify their items and update their labels.</p>
            <p className="specification-details">We recommend that you do not rely solely on the information presented. If you have a specific question about this item, you may consult the item's label, contact the manufacturer directly or call Target Guest Services at 1-800-591-3869.</p>
            <p className="specification-details"> If the item details above aren’t accurate or complete, we want to know about it. Report incorrect product info.</p>
        </div>
    )            
}

export default Specification