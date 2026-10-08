import '../stylesheets/Home.css'
import '../stylesheets/Background.css'
import Header from './Header';
import DataContext from '../context/Datacontext'
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react'
import imageone from '../Assets/Images/homeimageone.png'
import dondark from '../Assets/Images/downloadblack.png'
import donlight from '../Assets/Images/downloadwhite.png'
import pdfurl from '../Assets/Documents/MERN CV.pdf'
import DecryptedText from './animations/decryptedText'

const Home = () => {

  const { dark } = useContext(DataContext)
  // const { navigate, dark, useInterval, decrypted, setDecrypted } = useContext(DataContext)
  const displayImage = {image: imageone, alt: 'Image One', class: "carousel-item active w-100 image_actual"}


  const download = () =>{
    const link = document.createElement("a")
    link.href = pdfurl
    link.download = "Olaitan Oluwaseun CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  const linkstyle = {
    textDecoration:"none"
  }
  
  // const decryptOnce = (text) => {
  //   if (decrypted === false) {
  //     setDecrypted(true)
  //     return (
  //       <DecryptedText            
  //         speed={80}
  //         maxIterations={20}
  //         text={text}
  //         animateOn="view"
  //         revealDirection="start"
  //       />
  //     )
  //   } else {
  //     return (
  //       <h1>{text}</h1>
  //     )
  //   }
  // }


  return (
    <>
      <div className={!dark ? 'Home' : 'dHome'}>
        <Header/>
          <div className='backgroundspread'>
            <div className='wave3'>
              <div className='bg3'></div>
            </div>
          </div>
          <div className='backgroundspread'>
            <div className='wave2'>
              <div className='bg2'></div>
            </div>
          </div>
          <div className='backgroundspread'>
            <div className='wave1'>
              <div className='bg1'></div>
            </div>
          </div> 

          <div className='backgroundspread'>
            <div className='bubbleone'></div>
        </div>
        <div className='backgroundspread'>
            <div className='bubbletwo'></div>
        </div>
        <div className='backgroundspread'>
            <div className='bubblethree'></div>
        </div>
        <div className='backgroundspread'>
            <div className='bubblefour'></div>
        </div>
        <div className='backgroundspread'>
            <div className='bubblefive'></div>
        </div>
        <div className='backgroundspread'>
            <div className='bubblesix'></div>
        </div>

          <div className='spliting'>
            <div className='leftside'>

              <div className={!dark ? "TopLine" : "dTopLine"}>
                {/* {decryptOnce("hellooooooooooo")} */}
                <DecryptedText            
                  speed={80}
                  maxIterations={20}
                  text="Olaitan"
                  animateOn="view"
                  revealDirection="start"
                />
              </div>
              <div className={!dark ? "TopLine" : "dTopLine"}>
                <DecryptedText            
                  speed={80}
                  maxIterations={20}
                  text="Oluwaseun . N"
                  animateOn="view"
                  revealDirection="start"
                />
              </div>        
              
              <h1 className={!dark ? "LineThree" : "dLineThree"}>Full-stack Developer || Software Engineer || Electrical Engineer</h1>          
              <h1 className={!dark ? "LineFour" : "dLineFour"}>
                Co-founder of 
                <a
                  className="levlink"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer" 
                > 
                  I-Leverage
                </a>
                Agency
                </h1>
              <div className='sidebuttons'>
                <Link to={'/projects'} style={linkstyle}>
                  <button className='donbtnhome1'>
                    <div className={!dark ? 'seeWork' : 'dseeWork'}>
                        <div className='btnswarrow' style={{fontSize: '15px'}}>View My Work</div>
                        <div className='btnswarrow' style={{fontSize: '25px'}}>&#x2192;</div>
                    </div>                      
                  </button>
                </Link>
                <button className='donbtnhome' onClick={download}>
                  Download CV
                  {dark?
                    <img src={donlight} className="downloadimg" alt="donlight"/>
                  :
                    <img src={dondark} className="downloadimg" alt="dondark"/>
                  }
                  
                </button>
              </div>
            </div>

        
            <div className="rightside" id='imgone'>
              <div className={!dark ? "backer" : "dbacker"}></div> 
              <div className='imager'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner great-positioner">
                      <div className={displayImage.class}>
                        <img src={displayImage.image} className="d-block" height='650' alt={displayImage.alt}/>
                      </div>
                  </div>
                </div>
              </div>
            </div> 

          </div>

      </div>
    </>
  )
}

export default Home
