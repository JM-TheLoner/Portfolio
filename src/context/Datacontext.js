import { useState, createContext, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  
    const navigate = useNavigate()
    const [dark, setdark] = useState(true)
    const [aboutClassname, setaboutClassname] = useState('')

    useEffect(()=>{
      setdark(JSON.parse(localStorage.getItem('AfriPulseDarkMode')) || true) 
      !JSON.parse(localStorage.getItem('AfriPulseDarkMode')) ? localStorage.setItem('AfriPulseDarkMode', true) : console.log('')
    }, [])
  
    return (
        <DataContext.Provider value={{ dark, setdark, navigate, aboutClassname, setaboutClassname }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext
