import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import AllRatingsContent from './AllRatingsContent.jsx'
import './Reviews.css';

// This component has proper visibility but no functionality for sorting the reviews
function AllRatingsDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropDownMenu = document.getElementById("ratings-drop-holder")

    function handleClick() {
        setShowDropdown(!showDropdown ? true : false);
    }

    return (
        <div className='drop-down-block'>
            <button className="drop-down-menu" id="ratings-down-menu" onClick={handleClick}>filter by <b>all ratings ᐯ</b></button>
            {showDropdown && createPortal(
                <AllRatingsContent className="all-ratings-table" onClose={handleClick} />,
                dropDownMenu
            )}
            <div id='ratings-drop-holder'></div>
        </div>
    )
}

export default AllRatingsDropdown;