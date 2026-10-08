import '../stylesheets/Header.css'
import { Link } from 'react-router-dom';
import DataContext from '../context/Datacontext'
import { useContext, useState } from 'react'
import logo from '../Assets/Images/logo.png'
import lightimg from '../Assets/Images/light.png'
import darkimg from '../Assets/Images/dark.png' 

const Header = ({ title }) => {

  const { dark, setdark, aboutClassname} = useContext(DataContext)
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
  if (aboutClassname === 'AboutOrange'){
    headstate = 'TopbarOrange'
  }

  const linkstyle = {
      textDecoration:"none"
  }

  return (     
    <> 
      <header className='Header'>
          <div className={
          !aboutClassname 
          ? 
            !dark ? 'Topbar' : 'dTopbar'
          :
            headstate
          }>
              {/* <div onClick={(e) => {navhome(e)}} className='appbtn'> */}
              <div className='applogo'>
                <img src={logo} className="logoimg" alt="logo"/>
                <div className='headtxt'>
                    <p className={!dark ? 'lheadtxt' : 'dheadtxt'}>The Loner</p>
                </div>
              </div>                     
              <div className='listicle'>
                <Link to={'/'}>
                    <div className={`linklist1 ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Home</div>
                    </div>
                </Link>                     
                <Link to={'/about'}>
                    <div className={`linklist2 ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>About</div>
                    </div>
                </Link>                     
                <Link to={'/skills'}>
                    <div className={`linklist3 ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Skills</div>
                    </div>
                </Link>                     
                <Link to={'/contact'}>
                    <div className={`linklist4 ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Contact</div>
                    </div>
                </Link>                     
                <Link to={'/projects'}>
                    <div className={`linklist5 ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Projects</div>
                    </div>
                </Link>                     
              </div>

              <div className='lightndark'>
                <div className={`talkbtn ${!dark ? 'contlght' : 'contdrk'}`}>
                    <Link to={'/contact'} style={linkstyle}>
                        <div className={!dark ? 'talk' : 'dtalk'}>
                            <div className='btnarrow' style={{fontSize: '15px'}}>Let's Talk</div>
                            <div className='btnarrow' style={{fontSize: '25px'}}>&#x2192;</div>
                        </div> 
                    </Link>
                </div>
                { !dark ?                 
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
      <header className='smallHead'>
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
              <img src={logo} className="logoimg" alt="logo"/>             
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
