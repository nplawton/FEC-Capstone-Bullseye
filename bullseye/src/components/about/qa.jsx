import React, { useContext } from "react";
import QAContext from "../context/questionContext.js";

const QuestionAnswer = () => { 
    const { QA } = useContext(QAContext);


    // taking the crappy date provided from the database and adjusting it so that it says a more readable version
    // on when it was posted
    function timeAgo(dateString) {
        const date = new Date(dateString);
        const currentDate = new Date();
        const diffInSeconds = Math.floor((currentDate - date) / 1000);
      
        const secondsInMinute = 60;
        const secondsInHour = 3600;
        const secondsInDay = 86400;
        const secondsInMonth = 2592000; // assuming 30 days in a month
        const secondsInYear = 31536000;
      
        if (diffInSeconds < 60) {
          return 'posted recently';
        } else if (diffInSeconds < secondsInHour) {
          const minutes = Math.floor(diffInSeconds / secondsInMinute);
          return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
        } else if (diffInSeconds < secondsInDay) {
          const hours = Math.floor(diffInSeconds / secondsInHour);
          return `${hours} hour${hours === 1 ? '' : 's'} ago`;
        } else if (diffInSeconds < secondsInMonth) {
          const days = Math.floor(diffInSeconds / secondsInDay);
          return `${days} day${days === 1 ? '' : 's'} ago`;
        } else if (diffInSeconds < secondsInYear) {
          const months = Math.floor(diffInSeconds / secondsInMonth);
          return `${months} month${months === 1 ? '' : 's'} ago`;
        } else {
          const years = Math.floor(diffInSeconds / secondsInYear);
          return `${years} year${years === 1 ? '' : 's'} ago`;
        }
      }

      console.log('data:', QA)

    return (
        <>
        <div className="shipping-details">
            <div>
                {QA.map((QAformat, index) => (
                    <div key={index}>
                    <div className="question-header">Q: {QAformat.question}</div>
                    <div className="question-question-date">{timeAgo(QAformat.date_question)}</div>

                    <div className="question-answer-details">
                    <div className="question-answer-section-align">
                        <div className="question-answer">{QAformat.answer ? (
                            <>
                                <strong>A:</strong> {QAformat.answer}
                            </>
                        )  : ''} </div>
                        <div className="question-answer-help-container">
                            <div className="question-answer-helpful">{QAformat.answer ? `Helpful (${QAformat.helpful})` : ''}</div>
                            <div className="question-answer-helpful">{QAformat.answer ? `Not Helpful (0)` : ''}</div>
                            <div className="question-answer-helpful"> {QAformat.answer ? `Report` : ''} </div>
                        </div>
                    </div>
                    <button className="details-button">Answer It</button>
                    <div className="question-answer-separator"></div>
                    </div>
                    </div>
                ))}
            </div>
            <h3 className="shipping-title"></h3>
            <button className="ask-question">Ask a question</button>
        </div>
    </>
    )
    
}

export default QuestionAnswer