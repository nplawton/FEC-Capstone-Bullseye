import {useState, createContext, useEffect} from 'react'

const QAContext = createContext()

export const QAProvider = ({children}) => {
    const [QA, setQA] = useState([])
    
    useEffect(() => {
        (async () => {
          const response = await fetch('http://localhost:8000/questions');
          const questions = await response.json();
          setQA(questions);
          
        })();
        return () => {};
    }, []);

    return <QAContext.Provider value={{
        QA,
        setQA
    }}>
        {children}
    </QAContext.Provider>
}

export default QAContext;