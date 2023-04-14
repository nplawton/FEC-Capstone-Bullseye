import React from 'react';
import './Reviews.css';



function MostRecentContent({ onClose }) {

    return (
        <div className='recent-drop-modal'>
            <div className='recent-drop-content' onClick={onClose}>most recent</div>
            <div className='recent-drop-content' onClick={onClose}>highest rated</div>
            <div className='recent-drop-content' onClick={onClose}>lowest rated</div>
            <div className='recent-drop-content' id='last-content-drop' onClick={onClose}>most helpful</div>
        </div>
    )
}

export default MostRecentContent;