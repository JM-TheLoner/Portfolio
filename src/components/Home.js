import '../stylesheets/Home.css'
import '../stylesheets/Background.css'
import Header from './Header';
import DataContext from '../context/Datacontext'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import homeImage from '../Assets/Images/homeimage.png'
import homeImageTop from '../Assets/Images/homeimagetop.png'
import dondark from '../Assets/Images/downloadblack.png'
import donlight from '../Assets/Images/downloadwhite.png'
import pdfurl from '../Assets/Documents/MERN CV.pdf'
import DecryptedText from './animations/decryptedText'

const Home = () => {

  const [index, setIndex] = useState(0)
  const { dark } = useContext(DataContext)


  const phrases = [
    "HELLO, MY NAME IS",
    "FULL-STACK DEVELOPER",
    "ELECTRICAL ENGINEER"
  ]  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [phrases.length]);


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



  return (
    <>
      <div className={!dark ? 'Home' : 'dHome'}>
        <Header/>
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
              <div className='headLineContainer'>
                <div className={!dark ? "headWrap" : "dheadWrap"}>
                  <h1 key={index} className={!dark ? "headLine" : "dheadLine"}>{phrases[index]}</h1> 
                </div>
              </div>
              <div className={!dark ? "TopLine" : "dTopLine"}>
                <DecryptedText            
                  speed={100}
                  maxIterations={20}
                  text="Oluwaseun Olaitan"
                  animateOn="view"
                  revealDirection="start"
                />
              </div>                
              <div>
                <h1 className={!dark ? "LineThree" : "dLineThree"}>FULL-STACK DEV • ELECTRICAL ENGINEER</h1>          
              </div>
              <div className={!dark ? "LineFour" : "dLineFour"}>
                <p>I build purposeful web and mobile experiences by combining full-stack development with an engineering mindset to turn complex ideas into practical solutions.</p>                
              </div>

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
              <div className="clip-wrapper">
                <div className={!dark ? "backer" : "dbacker"}>
                  <img src={homeImage} className="homeImg" alt={'backing'}/>
                </div> 
                <div className='homeImgCont'>
                  <img src={homeImageTop} className="homeImgOut" alt={'Self Portrait'}/>                    
                </div>
              </div>
            </div> 

            {/* <div className="avatar-container"> */}
              {/* <!-- The Bottom Layer: Handles the sharp cut-off --> */}
              {/* <div className="clip-wrapper"> */}
                {/* <div className={!dark ? "blob-background" : "dblob-background"}></div> */}
                {/* <img src={homeImage} alt="Person" className="avatar-img image-bottom"></img> */}
              {/* </div> */}
              
              {/* <!-- The Top Layer: Handles the head popping out --> */}
              {/* <img src={homeImage} alt="Person" className="avatar-img1 image-top"></img> */}
            {/* </div> */}



          </div>

      </div>
    </>
  )
}

export default Home
