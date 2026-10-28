import { useState, createContext, useEffect, useRef } from 'react' 
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  
    const navigate = useNavigate()
    const [dark, setdark] = useState(null)
    const [aboutClassname, setaboutClassname] = useState('')

    useEffect(()=>{
      // 1. Check if a preference already exists in localStorage
      const savedMode = localStorage.getItem('JMTL_Portfolio_DarkMode');
      
      if (savedMode !== null) {
        // 2. If it exists, parse and apply it (handles both true and false correctly)
        setdark(JSON.parse(savedMode));
      } else {
        // 3. If it doesn't exist, default to light mode (true) and save it
        setdark(true);
        localStorage.setItem('JMTL_Portfolio_DarkMode', JSON.stringify(true));
      }
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
