import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import MostRecentContent from './MostRecentContent.jsx';
import './Reviews.css';


// This component has proper visibility but no functionality for sorting the reviews
function MostRecentDropdown() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropDownMenu = document.getElementById("recent-drop-holder");

    function handleClick() {
        setShowDropdown(!showDropdown ? true : false);
    }

    return (
        <div className='drop-down-block'>
            <button className="drop-down-menu" id="recent-down-menu" onClick={handleClick}>sort by <b>most recent ᐯ</b></button>
            {showDropdown && createPortal(
                <MostRecentContent className="most-recent-table" onClose={handleClick} />,
                dropDownMenu
            )}
            <div id='recent-drop-holder'></div>
        </div>
    )
}

export default MostRecentDropdown;