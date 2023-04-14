import React from 'react';
import './Reviews.css';



function MostRecentContent({ onClose }) {

    return (
        <div className='rating-drop-modal'>
            <div className='rating-drop-content'>
                <input type='checkbox' id='five-star-cb' className='drop-down-cb'></input>
                <label for="five-star-cb" className='rating-label'>5 stars</label>
            </div>
            <div className='rating-drop-content'>
                <input type='checkbox' id='four-star-cb' className='drop-down-cb'></input>
                <label for="four-star-cb" className='rating-label'>4 stars</label>
            </div>
            <div className='rating-drop-content'>
                <input type='checkbox' id='three-star-cb' className='drop-down-cb'></input>
                <label for="three-star-cb" className='rating-label'>3 stars</label>
            </div>
            <div className='rating-drop-content'>
                <input type='checkbox' id='two-star-cb' className='drop-down-cb'></input>
                <label for="two-star-cb" className='rating-label'>2 stars</label>
            </div>
            <div className='rating-drop-content'>
                <input type='checkbox' id='one-star-cb' className='drop-down-cb'></input>
                <label for="one-star-cb" className='rating-label'>1 stars</label>
            </div>
            
        </div>
    )
}

export default MostRecentContent;