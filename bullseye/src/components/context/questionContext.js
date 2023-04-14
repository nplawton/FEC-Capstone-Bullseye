import {useState, createContext, useEffect} from 'react'

const QAContext = createContext()

export const QAProvider = ({children}) => {
    const [QA, setQA] = useState([])
    
    useEffect(() => {
        (async () => {
          const response = await fetch('https://fec-deploy.onrender.com/questions');
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