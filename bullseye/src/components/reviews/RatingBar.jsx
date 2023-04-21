import React from 'react'
  
const RatingBar = ({bgcolor,progress,height}) => {
    // These are CSS settings for the progress bars for "Guest Ratings & Reviews" element
    const Parentdiv = {
        height: height,
        width: '70%',
        backgroundColor: '#f7f7f7',
        borderRadius: 40,
        margin: 0,
        display: 'inline-block'
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 0,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
    </div>
    )
}
  
export default RatingBar;