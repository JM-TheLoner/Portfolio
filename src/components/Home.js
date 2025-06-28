import '../stylesheets/Home.css'
import '../stylesheets/Background.css'
import DataContext from '../context/Datacontext'
import { useContext, useEffect, useState } from 'react'
import imageone from './homeimageone.png'
import imagetwo from './homeimagetwo.png'
import dondark from './downloadblack.png'
import donlight from './downloadwhite.png'
import whatlight from './whatsapplight.png'
import whatdark from './whatsappdark.png'
import DecryptedText from './animations/decryptedText'

const Home = () => {

  const { navigate, dark, useInterval } = useContext(DataContext)
  const [insidedon, setinsidedon] = useState(false)
  const [insidewhat, setinsidewhat] = useState(false)
  const imagelist = [imageone, imagetwo]
  const [show, setshow] = useState(0)

  let num_images = imagelist.length

  const revolver = () => {
    let fake = show + 1
    if (fake < num_images) {
      setshow(fake)
    } else{
      setshow(0)
    }
  }

  useInterval(revolver, 5000);

  const changeInsidedon = (newstate) => {
    setinsidedon(newstate)
  }
  const changeInsidewhat = (newstate) => {
    setinsidewhat(newstate)
  }

  const download = () =>{
    const pdfurl = "MERN CV.pdf"
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

  const move1 = (e) =>{
    e.preventDefault()
    navigate('/contact')
  }
  

  return (
    <div className={!dark ? 'Home' : 'dHome'}>
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
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer" 
            > 
              I-Leverage
            </a>
             Branding Agency
            </h1>
          <div className='sidebuttons'>
            <button className='donbtnhome' onClick={download} onMouseEnter={()=>{changeInsidedon(true)}} onMouseLeave={()=>{changeInsidedon(false)}}>
              Download CV
              {!insidedon ?
                <img src={donlight} className="downloadimg" alt="donlight"/>
              :
                <img src={dondark} className="downloadimg" alt="dondark"/>
              }
              
            </button>
            <a
              className="whatlink"
              href="https://wa.me/qr/7K2XV7UM75H4N1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='donbtnhome1' onClick={(e)=>{move1(e)}} onMouseEnter={()=>{changeInsidewhat(true)}} onMouseLeave={()=>{changeInsidewhat(false)}}>
                Contact Me                
                  {!insidewhat ?
                    <img src={whatlight} className="whatsappimg" alt="whatlight"/>                    
                  :
                    <img src={whatdark} className="whatsappimg" alt="whatdark"/>
              }                
              </button>
            </a>
          </div>
        </div>

    
        <div className="rightside" id='imgone'>
          <div className={!dark ? "backer" : "dbacker"}></div> 
          <div className='imager'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner great-positioner">
                <div className="carousel-item active w-100 image_actual">
                  <img src={imagetwo} className="d-block" height='650' alt="image_two"/>
                </div>
                <div className="carousel-item w-100 image_actual_one">
                  <img src={imageone} className="d-block" height='650' alt="image_one"/>
                </div>
              </div>
            </div>
          </div>
        </div> 

      </div>

  </div>
  )
}

export default Home
