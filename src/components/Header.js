import '../stylesheets/Header.css'
import { Link } from 'react-router-dom';
import DataContext from '../context/Datacontext'
import { useContext, useState } from 'react'
import logo from './logo.png'
import lightimg from './light.png'
import darkimg from './dark.png'

const Header = ({ title }) => {

  const { dark, setdark, navigate, aboutClassname } = useContext(DataContext)
  const[slider, setslider] = useState(false)

  const handleslider = () =>{
    setslider(!slider)
  }

  const darkmode = async (e) => {
    e.preventDefault()
    await localStorage.setItem('darkMode', !dark)
    await setdark(JSON.parse(localStorage.getItem('darkMode')))
  }

  var headstate

  if (aboutClassname === 'AboutYellow'){
    headstate = 'TopbarYellow'
  }
  if (aboutClassname === 'AboutBlue'){
    headstate = 'TopbarBlue'
  }
  if (aboutClassname === 'AboutLightGreen'){
    headstate = 'TopbarLightGreen'
  }
  if (aboutClassname === 'AboutYellowExpress'){
    headstate = 'TopbarYellowExpress'
  }
  if (aboutClassname === 'AboutDarkGreen'){
    headstate = 'TopbarDarkGreen'
  }
  if (aboutClassname === 'AboutBlueYellow'){
    headstate = 'TopbarBlueYellow'
  }
  if (aboutClassname === 'AboutDeepBlue'){
    headstate = 'TopbarDeepBlue'
  }

  const navhome = (e) =>{            
      navigate('/')
      setslider(false)
  }
  // const navport = (e) =>{        
  //     navigate('/portfolio')
  //     setslider(false)
  // }
  // const navabout = (e) =>{        
  //     navigate('/skills')
  //     setslider(false)
  // }
  // const navcontact = (e) =>{        
  //     navigate('/contact')
  //     setslider(false)
  // }

  const linkstyle = {
      textDecoration:"none"
  }

  return (     
    <> 
      <header className={!dark ? 'Header' : 'dHeader'}>
          <div className={
          !aboutClassname 
          ? 
            !dark ? 'Topbar' : 'dTopbar'
          :
            headstate
          }>
              <div onClick={(e) => {navhome(e)}} className='appbtn'>
                <img src={logo} className="App-logo2" alt="logo"/>
              </div>              
              <p className={!dark ? 'headbtnlinetwo' : 'dheadbtnlinetwo'}>J.M_TheLoner</p>  
              <div className='listicle'>                     
                <div className='linklist1'>
                    <Link to={'/'} style={linkstyle} className={!dark ? 'homepos' : 'dhomepos'}>Home</Link>
                </div>
                <div className='linklist2'>
                    <Link to={'/about'} style={linkstyle} className={!dark ? 'aboutpos' : 'daboutpos'}>About</Link>
                </div>
                <div className='linklist3'>
                    <Link to={'/contact'} style={linkstyle} className={!dark ? 'contpos' : 'dcontpos'}>Contact</Link>
                </div>
                <div className='linklist5'>
                    <Link to={'/login'} style={linkstyle} className={!dark ? 'portpos' : 'dportpos'}>Portfolio</Link>
                </div>
              </div>
              <div className='lightndark' onClick={(e) => {darkmode(e)}}>
                  { dark ?                 
                      <button  className='darkbtn' onClick={(e) => {darkmode(e)}}>
                          <img src={darkimg} className="darkimg" alt="dark"/>
                      </button>  
                  :
                      <button  className='lightbtn' onClick={(e) => {darkmode(e)}}>
                          <img src={lightimg} className="lightimg" alt="light"/>                        
                      </button>  
                  }     
              </div>     
          </div>    
      </header>
      <header className={!dark ? 'smallHead' : 'dsmallHead'}>
          <div className={!dark ? 'smallTopbar' : 'dsmallTopbar'}>
              <button  className='menubtn' onClick={(e)=>handleslider(e)}>
                  <div className='headbtnline'>
                      <p className='headbtnlineone'>=</p>
                  </div>
              </button>              
              <p className={!dark ? 'smallheadbtnlinetwo' : 'dsmallheadbtnlinetwo'}>J.M_TheLoner</p>  
              <div className='lightndark' onClick={(e) => {darkmode(e)}}>
                  { dark ?                 
                      <button  className='darkbtn' onClick={(e) => {darkmode(e)}}>
                          <img src={darkimg} className="darkimg" alt="dark"/>
                      </button>  
                  :
                      <button  className='lightbtn' onClick={(e) => {darkmode(e)}}>
                          <img src={lightimg} className="lightimg" alt="light"/>                        
                      </button>  
                  }     
              </div> 
          </div>
          <div className={slider === true ? 'smalllinks' : 'smalllinksclosed'}>  
            <div className={!dark ? 'smallNavbar' : 'dsmallNavbar'}>   
              <button  className='menubtn' onClick={(e)=>handleslider(e)}>
                  <div className='headbtnline'>
                      <p className='headbtnlineone'>=</p>
                  </div>
              </button>   
              <img src={logo} className="App-logo2" alt="logo"/>             
              <div className='smalllinklist'>
                  <Link to={'/'} style={linkstyle} className={!dark ? 'homepos' : 'dhomepos'}>Home</Link>
              </div>
              <div className='smalllinklist'>
                  <Link to={'/about'} style={linkstyle} className={!dark ? 'aboutpos' : 'daboutpos'}>Skills</Link>
              </div>
              <div className='smalllinklist'>
                  <Link to={'/contact'} style={linkstyle} className={!dark ? 'contpos' : 'dcontpos'}>Contact</Link>
              </div>
              <div className='smalllinklist'>
                  <Link to={'/login'} style={linkstyle} className={!dark ? 'portpos' : 'dportpos'}>Portfolio</Link>
              </div>  
            </div>              
          </div>    
      </header>
    </>
)
}

export default Header
