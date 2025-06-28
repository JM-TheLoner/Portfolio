import { useState, createContext, useEffect, useRef } from 'react' 
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  
    const navigate = useNavigate()
    const [dark, setdark] = useState(true)
    const [aboutClassname, setaboutClassname] = useState('')

    useEffect(()=>{
      setdark(JSON.parse(localStorage.getItem('JMTL_Portfolio_DarkMode')) || true) 
      !JSON.parse(localStorage.getItem('JMTL_Portfolio_DarkMode')) ? localStorage.setItem('JMTL_Portfolio_DarkMode', true) : JSON.parse(localStorage.getItem('JMTL_Portfolio_DarkMode'))
    }, [])

    function useInterval(callback, delay) {
      const savedCallback = useRef();
    
      // Remember the latest callback.
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);
    
      // Set up the interval.
      useEffect(() => {
        function tick() {
          savedCallback.current();
        }
        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
    }
  
    return (
        <DataContext.Provider value={{ dark, setdark, navigate, aboutClassname, setaboutClassname, useInterval }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext
