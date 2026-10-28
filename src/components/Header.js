import '../stylesheets/Header.css'
import { Link } from 'react-router-dom';
import DataContext from '../context/Datacontext'
import { useContext, useEffect, useState, useRef } from 'react'
import logo from '../Assets/Images/logo.png'
import lightimg from '../Assets/Images/light.png'
import darkimg from '../Assets/Images/dark.png' 
import { useScrollDirection } from './animations/ScrollUpHeader';

const Header = ({ title }) => {

  const { dark, setdark } = useContext(DataContext)
  const [slider, setslider] = useState(false)
  const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };
  
  const scrollDirection = useScrollDirection();
  const topRef = useRef(null);

  useEffect(() => {
    if (!slider) return;

    // Save previous styles
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    // Lock background scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Clean up / unlock when navbar closes
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [slider]);

//   const handleslider = () =>{
//     topRef.current?.scrollIntoView({ behavior: 'smooth' });
//     window.scrollTo(0,0)
//     setslider(!slider)
//     setIsActive(!isActive);
//   }





  const handleslider = () => {
    if (!slider) {
      // 1. Scroll to the top anchor instantly while the page is still allowed to scroll
      topRef.current?.scrollIntoView({ behavior: 'auto' });
      window.scrollTo(0, 0);

      // 2. Small micro-delay to let the browser execute the jump before locking overflow
      setTimeout(() => {
        setslider(true);
        setIsActive(true);
      }, 10);
    } else {
      // If closing the slider, toggle states normally
      setslider(false);
      setIsActive(false);
    }
  };






  
  const darkmode = async (e) => {
    e.preventDefault();
    const nextMode = !dark; // Calculate the new state
    setdark(nextMode); // Update React state
    localStorage.setItem('JMTL_Portfolio_DarkMode', JSON.stringify(nextMode)); // Save using the correct key

  }
  const smalldarkmode = async (e) => {
    setslider(false);
    setIsActive(false);
    e.preventDefault()    
    const nextMode = !dark; 
    setdark(nextMode); 
    localStorage.setItem('JMTL_Portfolio_DarkMode', JSON.stringify(nextMode)); 
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



      <div ref={topRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      <header  className={`smallHead ${scrollDirection === 'down' ? 'header--hidden' : ''}`}>
        <div className={!dark ? 'smallTopbar' : 'dsmallTopbar'}>
            <div className='smallTopLeft'>
                <img src={logo} className="logoimg" alt="logo"/> 
                <p className={!dark ? 'smallheadtxt lheadtxt' : 'smallheadtxt dheadtxt'}>The Loner</p> 
            </div>
            <div className='smallTopRight'>
                <button className={`hamburger ${isActive ? 'active' : ''}`} onClick={(e)=>handleslider(e)} aria-label="Toggle navigation" aria-expanded={isActive}>
                    <span className={!dark ? 'bar lbar' : 'bar dbar'}></span>
                    <span className={!dark ? 'bar lbar' : 'bar dbar'}></span>
                    <span className={!dark ? 'bar lbar' : 'bar dbar'}></span>
                </button>
            </div>                            
        </div>

        
        <div className={slider === true ? 'smalllinks' : 'smalllinksclosed'}>  
            <div className={!dark ? 'smallNavbar' : 'dsmallNavbar'}>



                <div className='navBarleft' onClick={(e)=>handleslider(e)}></div>
                <div className={!dark ? 'navBarright lightnav' : 'navBarright darknav'}>
                    <div className={!dark ? 'navbarhead lightnavbarborder1' : 'navbarhead darknavbarborder1'}>
                        <div className='navbarName'>
                            <p className={!dark ? 'navnametxt lheadtxt' : 'navnametxt dheadtxt'}>Olaitan Seun</p> 
                            <p className={!dark ? 'navdesctxt lheadtxt' : 'navdesctxt dheadtxt'}>Engineer</p> 
                        </div>
                        <div className='lightndark'>                           
                            <button  className='lightOrDarkbtn' onClick={(e) => {smalldarkmode(e)}}>
                                <img src={!dark ? lightimg : darkimg} className={dark ? 'lightimg' : 'darkimg'} alt="dark"/>
                            </button> 
                        </div>
                    </div>   

                    <div className='navbarBottom'>
                        <div className='smallListicle'>
                            <Link to={'/'} className={!dark ? 'navBarLinks lightnavbarborder' : 'navBarLinks darknavbarborder'}>
                                <div className='smallLinklist'>
                                    <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Home</div>
                                </div>
                            </Link>                     
                            <Link to={'/about'} className={!dark ? 'navBarLinks lightnavbarborder' : 'navBarLinks darknavbarborder'}>
                                <div className='smallLinklist'>
                                    <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>About</div>
                                </div>
                            </Link>                     
                            <Link to={'/skills'} className={!dark ? 'navBarLinks lightnavbarborder' : 'navBarLinks darknavbarborder'}>
                                <div className='smallLinklist'>
                                    <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Skills</div>
                                </div>
                            </Link>                     
                            <Link to={'/contact'} className={!dark ? 'navBarLinks lightnavbarborder' : 'navBarLinks darknavbarborder'}>
                                <div className='smallLinklist'>
                                    <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Contact</div>
                                </div>
                            </Link>                     
                            <Link to={'/projects'} className='navBarLinks'>
                                <div className='smallLinklist'>
                                    <div style={linkstyle} className={!dark ? 'linkbtn' : 'dlinkbtn'}>Projects</div>
                                </div>
                            </Link>    
                        </div>
                    </div> 
                </div>




                     
            </div>              
        </div>    
      </header>
    </>
)
}

export default Header
