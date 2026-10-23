import Footer from './Footer';
import Header from './Header';
import '../stylesheets/About.css'
import '../stylesheets/Background.css'
import { useEffect, useContext, useRef } from 'react'
import DataContext from '../context/Datacontext'
import VariableProximity from './animations/variableProximity'
import { BsCodeSlash, BsCheckCircle } from 'react-icons/bs';
import { FaBolt } from 'react-icons/fa'; 
import { MdCalendarToday } from 'react-icons/md'; 
import FSLogo from '../Assets/Images/fullstackLogo.png'
import FELogo from '../Assets/Images/frontendLogo.png'
import BELogo from '../Assets/Images/backendLogo.png'
import DBLogo from '../Assets/Images/databaseLogo.png'
import EELogo from '../Assets/Images/seesLogo.png'


const About = () => { 

  const containerRef = useRef(null);
  const { dark } = useContext(DataContext)

  const servicesOffered = [
    {key:'0', image: FSLogo, alt: 'Full-Stack Icon', name:'Full-Stack Development', description:'I build complete web applications, from the user interface to the systems that power them behind the scenes.'},
    {key:'1', image: FELogo, alt: 'Frontend Icon', name:'Frontend Development', description:'I create attractive, responsive websites that are intuitive to use and work smoothly across devices.'},
    {key:'2', image: BELogo, alt: 'Backend Icon', name:'Backend Development', description:'I build the behind-the-scenes systems that process information, power features, and connect applications.'},
    {key:'3', image: DBLogo, alt: 'Database Icon', name:'Database Design & Management', description:'I Design databases, organize information, and manage how applications interact with the data.'},
    {key:'4', image: EELogo, alt: 'Electrical Engineering Icon', name:'Electrical Engineering', description:'I apply engineering principles to electrical systems, technical challenges, and practical problems.'}
  ]

  const currentYear = new Date().getFullYear()

  const highlights = [
    {key:'0', symbol: <BsCodeSlash size={23} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, name:'Full-Stack', description:'Development'},
    {key:'1', symbol: <FaBolt size={23} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, name:'Electrical', description:'Engineering'},
    {key:'2', symbol: <MdCalendarToday size={23} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, name:`${currentYear-2020}+`, description:'Years Experience'},
    {key:'3', symbol: <BsCheckCircle size={23} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, name:'20+', description:'Projects Completed'}
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

return (
  <div className={!dark ? 'About' : 'dAbout'}> 
    <Header/>
    <div className='aboutContainer'>
      <div className='aboutTopBox'>
        <div className='aboutTopLeft'>
          <div className='aboutTitle'>
            <h1 className={!dark ? 'story lightTextColorA' : 'story darkTextColorA'}>ABOUT ME</h1>            
          </div>
          <div className='aboutDesc'>
            <h1 className={!dark ? 'storyDesc lightText' : 'storyDesc darkText'}>Design with Purpose, Build to Elevate</h1>            
          </div>
          <div className={!dark ? 'aboutItems lightAboutBorder' : 'aboutItems darkAboutBorder'}>
            <div className='highlightList'>
              {highlights.map((highlight)=>(
                <div className='highlightItem' key={highlight.key}> 
                  <div className={!dark ? 'highlightSymbol lightHighlightSymbol' : 'highlightSymbol darkHighlightSymbol'}>
                    {highlight.symbol}
                  </div>
                  <div className={!dark ? 'highlightName lightText' : 'highlightName darkText'}>
                    {highlight.name}
                  </div>
                  <div className={!dark ? 'highlightDesc lightText' : 'highlightDesc darkText'}>
                    {highlight.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={!dark ? 'aboutTopRight lightAboutBorder' : 'aboutTopRight darkAboutBorder'}>
          <h2 className={!dark ? 'topRightHead lightTextColor' : 'topRightHead darkTextColor'}>
            Who Am I
          </h2>
          <div className={!dark ? 'lightText' : 'darkText'}>
            <p ref={containerRef} style={{position: 'relative'}}>
              <VariableProximity
                label={"I'm a full-stack developer and electrical engineer who enjoys figuring out how things work and finding ways to make them better. I love turning ideas into practical solutions, whether that's building a web application or tackling an engineering problem. I bring creativity, curiosity, and an analytical mindset to everything I do."}
                fromFontVariationSettings="'wght' 300, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={50}
                falloff='linear'
              />
            </p>
          </div>
        </div>
      </div>


      <div className='aboutBottomBox'>
        <div className='aboutBottom'>
          <div className='aboutBottomTitle'>
            <h1 className={!dark ? 'story lightTextColorA' : 'story darkTextColorA'}>WHAT I DO</h1>            
          </div>
          <div className='aboutBottomDesc'>
            <h1 className={!dark ? 'storyDesc lightText' : 'storyDesc darkText'}>Areas of Expertise</h1>            
          </div>
          <div className='serviceList'>
            {servicesOffered.map((service)=>(
              <div className={!dark ? 'serviceItem lightAboutBorder' : 'serviceItem darkAboutBorder'} key={service.key}>  
                <div className={!dark ? 'serviceSymbol lightserviceSymbol' : 'serviceSymbol darkserviceSymbol'}>
                  <img src={service.image} className='serviceImage' alt={service.alt}/>
                </div>
                <div className={!dark ? 'serviceName lightTextColorA' : 'serviceName darkTextColor'}>
                  {service.name}
                </div>
                <div className={!dark ? 'serviceDesc lightText' : 'serviceDesc darkText'}>
                  {service.description}
                </div>
              </div>
            ))}
          </div>
            
        </div>        
      </div>    
    </div>
    <Footer/>   
  </div>       
  )
}

export default About
