import '../stylesheets/Home.css'
import '../stylesheets/Background.css'
import DataContext from '../context/Datacontext'
import { useContext, useEffect } from 'react'
import imageone from './homeimageone.png'
import imagetwo from './homeimagetwo.png'
import dondark from './downloadblack.png'
import donlight from './downloadwhite.png'
import whatlight from './whatsapplight.png'
import whatdark from './whatsappdark.png'

const Home = () => {

  const { navigate, dark } = useContext(DataContext)

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
          <h1 className={!dark ? "TopLine" : "dTopLine"}>Olaitan Oluwaseun</h1>
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
            <button className='donbtnhome' onClick={download}>
              Download CV
              {!dark ?
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
              <button className='donbtnhome1' onClick={(e)=>{move1(e)}}>
                Contact Me
                {!dark ?
                  <img src={whatlight} className="whatsappimg" alt="whatlight"/>
                :
                  <img src={whatdark} className="whatsappimg" alt="whatdark"/>
                }
              </button>
            </a>
          </div>
        </div>
        <div className={!dark ? "rightside" : "drightside"}>
          <img src={imagetwo} className={!dark ? "lonerlogo" : "dlonerlogo"} alt="lonerhalf"/>          
        </div>
      </div>
  </div>
  )
}

export default Home
