import Header from './Header';
import '../stylesheets/Skills.css'
import ProgressBar from './animations/ProgressBar'
import { useEffect, useContext, useState } from 'react'
import DataContext from '../context/Datacontext'
import ClickSpark from './animations/TapSpark'
import { FaSearch, FaPenNib, FaCode, FaBug } from 'react-icons/fa';
import { IoRocket } from 'react-icons/io5' ;
import htmlLogo from '../Assets/Images/html-1.svg'
import cssLogo from '../Assets/Images/css-3.svg'
import javascriptLogo from '../Assets/Images/javascript-1.svg'
import reactLogo from '../Assets/Images/react-2.svg'
import nodeLogo from '../Assets/Images/nodejs-3.svg'
import mongoLogo from '../Assets/Images/mongodb-icon-1.svg'
import postgresLogo from '../Assets/Images/postgresql.svg'
import pythonLogo from '../Assets/Images/python-5.svg'
import pandasLogo from '../Assets/Images/pandas-2.svg'
import gitLogo from '../Assets/Images/git-icon.svg';
import { FiCornerLeftDown } from "react-icons/fi";
// import draw from '../Assets/Audio/lightsaber-whoosh-03.mp3'
// import retract from '../Assets/Audio/lightsaber-whoosh-04.mp3'


//to play sound on entering portfolio item, uncomment lines 8-9 (import of sounds), _______ (defining sound playing function) and ________ (calling functions on entering item)


const About = () => { 

  const [progress, setProgress] = useState(null);

  const { dark } = useContext(DataContext)

  const colorList = ['#ff0000', '#3648ff', '#2ff924', '#ffe600ff', '#00cfdd', '#f57200', '#00f9c7', '#8c00ff', '#ff00e6', '#fd0585']

  const [color, setColor] = useState(colorList[8])
  const [size, setSize] = useState(15)
  const [rad, setRad] = useState(15)

  const selectColandSize = () =>{
    let num = (Math.random() * 10)
    let choice = Math.floor(num)
    setColor(colorList[choice])

    let num1 = (Math.random() * 5)
    let choice1 = Math.floor(num1)
    setSize((choice1 + 1) * 3)

    let num2 = (Math.random() * 3)
    let choice2 = Math.floor(num2)
    setRad((choice2 + 3)* 5)
  }

  // const playSound = (sound)=>{
  //   var audio = new Audio(sound)
  //   audio.play()
  // }
    
  const process = [
    {key:'01', symbol:<FaSearch size={30} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, title:'Discover', description: 'Understand the user needs, project goals, and the problem to solve.'},
    {key:'02', symbol:<FaPenNib size={30} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, title:'Design', description: 'Plan the structure, user experience, and visual direction of the solution.'},
    {key:'03', symbol:<FaCode size={30} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, title:'Develop', description: 'Turn the concepts and designs into functional, reliable digital solutions.'},
    {key:'04', symbol:<FaBug size={30} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, title:'Debug', description: 'Identify issues, evaluate performance, and improve usability and quality.'},
    {key:'05', symbol:<IoRocket size={30} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms'}} />, title:'Deliver', description: 'Launch the finished solution and identify opportunities for future improvements.'}
  ]

  const skills = [    
    {key: '0', image:htmlLogo, alt:'HTML Logo', name:'HTML', progress:80},
    {key: '1', image:cssLogo, alt:'CSS Logo', name:'CSS', progress:80},
    {key: '2', image:javascriptLogo, alt:'Javascript Logo', name:'JavaScript', progress:75},
    {key: '3', image:reactLogo, alt:'React Logo', name:'React', progress:75},
    {key: '4', image:nodeLogo, alt:'Node Logo', name:'Node JS', progress:70},
    {key: '5', image:mongoLogo, alt:'Mongo Logo', name:'Mongo DB', progress:75},
    {key: '6', image:postgresLogo, alt:'PostgreSQL Logo', name:'PostgreSQL', progress:75},
    {key: '7', image:pythonLogo, alt:'Python Logo', name:'Python', progress:80},
    {key: '8', image:pandasLogo, alt:'Pandas Logo', name:'Pandas', progress:40},
    {key: '9', image:gitLogo, alt:'Git Logo', name:'Git', progress:75}
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <ClickSpark sparkColor={color} sparkSize={size} sparkRadius={rad} sparkCount={8} duration={400}>      
      <div className={ !dark ? 'skills' : 'dskills' } onClick={()=>{selectColandSize()}}> 
        <Header/>
        <div className='skillsContainer'>

          {/* <div className='covering'></div> */}
          <div className='skillsTopBox'>
            <div className='processTitle'>
              <h1 className={!dark ? 'processStory lightTextColor' : 'processStory darkTextColor'}>MY PROCESS FLOW</h1>            
            </div>
            <div className='processDesc'>
              <h1 className={!dark ? 'processStoryDesc lightText' : 'processStoryDesc darkText'}>Logic Meets Creativity</h1>            
            </div>
            <div className='processList'>                
              {process.map((step)=>(
                <div className={!dark ? 'stepItem lightStepBorder' : 'stepItem darkStepBorder'} key={step.key}>  
                  <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div className={!dark ? 'stepSymbol lightStepSymbol' : 'stepSymbol darkStepSymbol'}>
                      {step.symbol}
                    </div>
                    <div className={!dark ? 'stepNum lightText lightNumBG' : 'stepNum darkText darkNumBG'}>
                      {step.key}
                    </div>
                  </div>
                  <div className={!dark ? 'stepName lightTextColorA' : 'stepName darkTextColorA'}>
                    {step.title}
                  </div>
                  <div className={!dark ? 'stepDesc lightText' : 'stepDesc darkText'}>
                    {step.description}
                  </div>
                </div>
                
              ))}
            </div>      
          </div>

          <div className='skillsBottomBox' style={{width:'100%'}}>
            <div className='processTitle'>
              <h1 className={!dark ? 'processStory lightTextColor' : 'processStory darkTextColor'}>MY TECH STACK</h1>            
            </div>
            <div className='processDesc'>
              <h1 className={!dark ? 'processStoryDesc lightText' : 'processStoryDesc darkText'}>Technologies I Work With</h1> 
              <div style={{display:'flex'}}>
                <FiCornerLeftDown  size={15} color={!dark ? '#f700ff' : '#b458ff'} style={{transition: '150ms ease-in-out 0ms', marginRight:'5px', marginTop:'5px'}} />
                <h1 className={!dark ? 'techStoryLead lightTextColorB' : 'techStoryLead darkTextColorB'}>Hover to explore</h1> 
              </div>              
            </div>
            <div className='accordion'>
            {skills.map(
              (skill)=> (
                <div className={!dark ? 'skillItem lightTechBorder' : 'skillItem darkTechBorder'} key={skill.key} onMouseEnter={()=>{setProgress(skill.progress)}}
                 // onMouseEnter={()=>{playSound(draw)}} // onMouseLeave={()=>{playSound(retract)}}
                > 
                  <div className='SkillItemImgCont' >
                    <div className={!dark ? 'lightTechSymbol' : 'darkTechSymbol'}>
                      <img className='skillItemImg' src={skill.image} alt={skill.alt}/>
                    </div>                    
                  </div>                  
                  <div className='content'>
                    <div className='skillText'>
                      <p className={!dark ? 'skillName lightTextColorB' : 'skillName darkTextColorB'}>{skill.name}</p>
                      <p className={!dark ? 'skillPro lightText' : 'skillPro darkText'}>{skill.progress}%</p>
                    </div>
                    <div className='progressBar'>
                      <ProgressBar percentage={progress} />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          </div>
          


        </div>
      </div>     
    </ClickSpark>
  )
}

export default About
