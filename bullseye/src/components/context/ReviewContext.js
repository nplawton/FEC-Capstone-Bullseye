import {useState, createContext, useEffect} from 'react'

const ReviewContext = createContext()

export const ReviewProvider = ({children}) => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        (async () => {
          const response = await fetch('http://localhost:8000/reviews');
          const revs = await response.json();
          setReviews(revs);
          console.log(revs);
        })();
        return () => {};
      }, []);

    return <ReviewContext.Provider value={{
        reviews,
        setReviews
    }}>
        {children}
    </ReviewContext.Provider>
}

export default ReviewContext;