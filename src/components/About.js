
import '../stylesheets/About.css'
import '../stylesheets/Background.css'
import { useEffect, useContext, useState, useRef } from 'react'
import DataContext from '../context/Datacontext'
import ClickSpark from './animations/TapSpark'
import VariableProximity from './animations/variableProximity'
import draw from '../Assets/Audio/lightsaber-whoosh-03.mp3'
import retract from '../Assets/Audio/lightsaber-whoosh-04.mp3'


const About = () => { 

  const colorList = ['#ff0000', '#3648ff', '#2ff924', '#9734d1ff', '#ffe600ff', '#fff']

  const [color, setColor] = useState(colorList[2])


  const selectcol = () =>{
    let num = (Math.random() * 6)
    let choice = Math.floor(num)
    setColor(colorList[choice])
  }


  const playSound = (sound)=>{
    var audio = new Audio(sound)
    audio.play()
  }

  const containerRef = useRef(null);

  const { dark, aboutClassname, setaboutClassname } = useContext(DataContext)
  const [backState, setbackState] = useState(false)
    
  const backStaterTruejs = () =>{
    setbackState(true)
    setaboutClassname('AboutYellow')
  }
  const backStaterTruereact = () =>{
    setbackState(true)
    setaboutClassname('AboutBlue')
  }
  const backStaterTruemongo = () =>{
    setbackState(true)
    setaboutClassname('AboutLightGreen')
  }
  const backStaterTrueexpress = () =>{
    setbackState(true)
    setaboutClassname('AboutYellowExpress')
  }
  const backStaterTruenode = () =>{
    setbackState(true)
    setaboutClassname('AboutDarkGreen')
  }
  const backStaterTruepython = () =>{
    setbackState(true)
    setaboutClassname('AboutBlueYellow')
  }
  const backStaterTruepandas = () =>{
    setbackState(true)
    setaboutClassname('AboutDeepBlue')
  }
  const backStaterTrueHTML = () =>{
    setbackState(true)
    setaboutClassname('AboutOrange')
  }
  const backStaterFalse = () =>{
    setbackState(false)
    setaboutClassname(null)
  }
  
  const skills = [    
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUz6r1F9YOKVCFabSLGAVu09xlfuRnG0-bwM3G-HNRVKAAbuz9MUZgzbM&s=10', alt:'Node Logo', enter:backStaterTruenode, leave:backStaterFalse, bodyName:'Node JS', bodyDesc:'JavaScript Runtime Environment'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqfWA9TQWsAMSNiNAYW8kMIV_M4ndF7reB96ncgwmY1gxtbPJ0yDdxCJL&s=10', alt:'Mongo Logo', enter:backStaterTruemongo, leave:backStaterFalse, bodyName:'Mongo DB', bodyDesc:'No-SQL DataBase Service'},
    {image:'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png', alt:'Express Logo', enter:backStaterTrueexpress, leave:backStaterFalse, bodyName:'Express JS', bodyDesc:'Node.JS Backend Framework'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgikH7si7qUep3b3vOkjx6WvjbeeqmhDz7Db62yLJ8nhqDBAVANIU9SjQ7&s=10', alt:'Javascript Logo', enter:backStaterTruejs, leave:backStaterFalse, bodyName:'JavaScript', bodyDesc:'High Level Programming Language (Web Development, Web Interactivity, UI Creation)'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetsa41CKUdb9nU53feUGsHtjVpd80nfJiAm7zQJR6vEXqZPKMzJglZHrs&s=10', alt:'Python Logo', enter:backStaterTruepython, leave:backStaterFalse, bodyName:'Python', bodyDesc:'High Level Programming Language (Scripting, Automation, Machine Learning)'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv3-8YNVbRW1uEb3XmofbmWWneY5Vi4jNupsjc4pxBJAzqHdaCxaj-go&s=10', alt:'Pandas Logo', enter:backStaterTruepandas, leave:backStaterFalse, bodyName:'Pandas*', bodyDesc:'Machine Learning, Data Manipulation & Analysis using Python'},
    {image:'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', alt:'React Logo', enter:backStaterTruereact, leave:backStaterFalse, bodyName:'React', bodyDesc:'JavaScript Library for building User Interfaces'},
    {image:'https://images.icon-icons.com/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png', alt:'PostgreSQL Logo', enter:backStaterTruepandas, leave:backStaterFalse, bodyName:'PostgreSQL', bodyDesc:'SQL Database Service'},
    {image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png', alt:'CSS Logo', enter:backStaterTruereact, leave:backStaterFalse, bodyName:'CSS', bodyDesc:'Cascading Style Sheet. (Web Styling)'},
    {image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png', alt:'HTML Logo', enter:backStaterTrueHTML, leave:backStaterFalse, bodyName:'HTML', bodyDesc:'HyperText Markup Language. (Web Structuring)'}
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <ClickSpark
      sparkColor={color}
      sparkSize={15}
      sparkRadius={25}
      sparkCount={8}
      duration={400}
    >
    
      <div className={
        !backState 
        ? 
          !dark ? 'About' : 'dAbout'
        :
          aboutClassname
        }
        onClick={()=>{selectcol()}}
      > 

        { !backState 
        ?
          <>
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
          </>
        :
          <></>
        }

        { backState ?
          <>
            <div className='backgroundspread'>
                <div className='jsbubbleone'></div>
            </div>
            <div className='backgroundspread'>
                <div className='jsbubbletwo'></div>
            </div>
            <div className='backgroundspread'>
                <div className='jsbubblethree'></div>
            </div>
            <div className='backgroundspread'>
                <div className='jsbubblefour'></div>
            </div>
            <div className='backgroundspread'>
                <div className='jsbubblefive'></div>
            </div>
            <div className='backgroundspread'>
                <div className='jsbubblesix'></div> 
            </div>
          </>
        :
        <></>    
      }

        <div className='covering'></div>
        <div className='topbox'>
          <div className={!dark ? 'story' : 'dstory'}>
            <h1 className='overline'>Who am I</h1>
            <p className={!dark ? 'bottomstory' : 'dbottomstory'}>

                <div
                ref={containerRef}
                style={{position: 'relative'}}
                >
                  <VariableProximity
                    label={"A FULL-STACK developer with lots of ideas and the power to bring them to life."}
                    fromFontVariationSettings="'wght' 300, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff='linear'
                  />
                  <br/>
                  <VariableProximity
                    label={"I'm all about Codes, Games, Music and quality meals. A loner with time to perfect his craft. Nothing is true and Everything is permitted when it comes to the fast and highly functional pages, operation or processes you deserve. You only need reach out with force!"}
                    fromFontVariationSettings="'wght' 300, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff='linear'
                  />
                  <br/>
                  <VariableProximity
                    label={" Hover over a card to see what I can do"}
                    fromFontVariationSettings="'wght' 300, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff='linear'
                  />
                </div>


            </p>
          </div> 
        </div>


        <div className='bottombox'>
          <ul 
            className='accordion'
            onMouseEnter={()=>{playSound(draw)}}
            onMouseLeave={()=>{playSound(retract)}}
          >
            {skills.map(
              (skill)=> (
                <li
                  onMouseEnter={()=>{skill.enter()}}
                  onMouseLeave={()=>{skill.leave()}}>
                  <img src={skill.image} alt={skill.alt}/>
                  <div className='content'>
                    <span>
                      <p className='selftaught'><p className='bold'>{skill.bodyName}</p><br/>{skill.bodyDesc}</p>
                    </span>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      
    </ClickSpark>
  )
}

export default About
