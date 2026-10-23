import '../stylesheets/Header.css'
import { Link } from 'react-router-dom';
import DataContext from '../context/Datacontext'
import { useContext, useEffect, useState } from 'react'
import logo from '../Assets/Images/logo.png'
import lightimg from '../Assets/Images/light.png'
import darkimg from '../Assets/Images/dark.png' 
import { useScrollDirection } from './animations/ScrollUpHeader';

const Header = ({ title }) => {

  const { dark, setdark } = useContext(DataContext)
  const[slider, setslider] = useState(false)
  
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (!slider) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [slider]);

  const handleslider = () =>{
    setslider(!slider)
  }
  
  const darkmode = async (e) => {
    e.preventDefault()
    await localStorage.setItem('darkMode', !dark)
    await setdark(JSON.parse(localStorage.getItem('darkMode')))
  }

  const linkstyle = {
      textDecoration:"none"
  }

  return (     
    <> 
      <header className='Header'>
          <div className={!dark ? 'Topbar' : 'dTopbar'}>
              <div className='applogo'>
                <Link to={'/'}>
                    <img src={logo} className="logoimg" alt="logo"/>
                </Link>
                <div className='headtxt'>
                    <p className={!dark ? 'lheadtxt' : 'dheadtxt'}>The Loner</p>
                </div>
              </div>                     
              <div className='listicle'>
                <Link to={'/'}>
                    <div className={`linklist ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Home</div>
                    </div>
                </Link>                     
                <Link to={'/about'}>
                    <div className={`linklist ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>About</div>
                    </div>
                </Link>                     
                <Link to={'/skills'}>
                    <div className={`linklist ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Skills</div>
                    </div>
                </Link>                     
                <Link to={'/contact'}>
                    <div className={`linklist ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Contact</div>
                    </div>
                </Link>                     
                <Link to={'/projects'}>
                    <div className={`linklist ${!dark ? 'linklght' : 'linkdrk'}`}>
                        <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Projects</div>
                    </div>
                </Link>                     
              </div>

              <div className='lightndark'>
                <div className={`talkbtn ${!dark ? 'contlght' : 'contdrk'}`}>
                    <Link to={'/contact'} style={linkstyle}>
                        <div className={!dark ? 'talk' : 'dtalk'}>
                            <div className='btnarrowWord'>Let's Talk</div>
                            <div className='btnarrowSymbol'>&#x2192;</div>
                        </div> 
                    </Link>
                </div>             
                <button  className='lightOrDarkbtn' onClick={(e) => {darkmode(e)}}>
                    <img src={!dark ? lightimg : darkimg} className={dark ? 'lightimg' : 'darkimg'} alt="dark"/>
                </button> 
              </div>     
          </div>    
      </header>



      
      <header className={`smallHead ${scrollDirection === 'down' ? 'header--hidden' : ''}`}>
        <div className={!dark ? 'smallTopbar' : 'dsmallTopbar'}>
            <div className='smallTopLeft'>
                <img src={logo} className="logoimg" alt="logo"/> 
                <p className={!dark ? 'smallheadtxt lheadtxt' : 'smallheadtxt dheadtxt'}>The Loner</p> 
            </div>
            <div className='smallTopRight'>
                <button  className='menubtn' onClick={(e)=>handleslider(e)}>
                    <div className={!dark ? 'headbtnlineone lheadtxt' : 'headbtnlineone dheadtxt'}>
                        <p className=''>&#8801;</p>
                    </div>
                </button>  
            </div>                            
        </div>

        
        <div className={slider === true ? 'smalllinks' : 'smalllinksclosed'}>  
            <div className={!dark ? 'smallNavbar' : 'dsmallNavbar'}>
                <div className='smallTopCenter'>
                    <p className={!dark ? 'smallheadtxt lheadtxt' : 'smallheadtxt dheadtxt'}>The Loner</p> 
                </div>   
                        
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
                <div className='lightndark'>                           
                    <button  className='lightOrDarkbtn' onClick={(e) => {darkmode(e)}}>
                        <img src={!dark ? lightimg : darkimg} className={dark ? 'lightimg' : 'darkimg'} alt="dark"/>
                    </button> 
                </div>     
        </div>              
        </div>    
      </header>
    </>
)
}

export default Header
