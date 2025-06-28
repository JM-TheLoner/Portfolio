import '../stylesheets/About.css'
import '../stylesheets/Background.css'
import { useEffect, useContext, useState, useRef } from 'react'
import DataContext from '../context/Datacontext'
import ClickSpark from './animations/TapSpark'
import VariableProximity from './animations/variableProximity'


const About = () => { 

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
  const backStaterFalse = () =>{
    setbackState(false)
    setaboutClassname(null)
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  return (
    <ClickSpark
      sparkColor='#fff'
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
        }> 

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
          <ul className='accordion'>
            <li
              onMouseEnter={()=>{backStaterTruejs()}}
              onMouseLeave={()=>{backStaterFalse()}}>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgikH7si7qUep3b3vOkjx6WvjbeeqmhDz7Db62yLJ8nhqDBAVANIU9SjQ7&s=10"} alt='javascript'/>
              <div className='content'>
                <span>
                  <p className='selftaught'>Framework Systems <br/>The Force that BREATHES through, SURROUNDS and BINDS all things TOGETHER</p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={()=>{backStaterTruemongo()}}
              onMouseLeave={()=>{backStaterFalse()}}>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqfWA9TQWsAMSNiNAYW8kMIV_M4ndF7reB96ncgwmY1gxtbPJ0yDdxCJL&s=10"} alt='mongo'/>
              <div className='content'>
                <span>
                  <p className='selftaught'>DATABASE SERVICE <br/> The ARCHIVES that hold the DATA</p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={()=>{backStaterTrueexpress()}}
              onMouseLeave={()=>{backStaterFalse()}}>
              <img src={"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"} alt='express'/>
              <div className='content'>
                <span>
                  <p className='selftaught'>BACKEND <br/>Works in the DARK to serve the LIGHT.</p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={()=>{backStaterTruereact()}}
              onMouseLeave={()=>{backStaterFalse()}}>
              <img src={"https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png"} alt='react'/>
              <div className='content'>
                <span>
                  <p className='selftaught'>FRONTEND <br/>Controls EVERYTHING the light TOUCHES and MORE</p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={()=>{backStaterTruenode()}}
              onMouseLeave={()=>{backStaterFalse()}}>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUz6r1F9YOKVCFabSLGAVu09xlfuRnG0-bwM3G-HNRVKAAbuz9MUZgzbM&s=10"} alt='node'/>
              <div className='content'>
                <span>
                  <p className='selftaught'>BACKEND <br/>The FOUNDATION on which FUNCTIONS and OPERATIONS run</p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={()=>{backStaterTruepython()}}
              onMouseLeave={()=>{backStaterFalse()}}>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetsa41CKUdb9nU53feUGsHtjVpd80nfJiAm7zQJR6vEXqZPKMzJglZHrs&s=10"} alt='python'/>
              <div className='content'>
                <span>
                  <p className='selftaught'>PROGRAMMING<br/>My GATEWAY into this LIFE. It CHOSE me</p>
                </span>
              </div>
            </li>
            <li
              onMouseEnter={()=>{backStaterTruepandas()}}
              onMouseLeave={()=>{backStaterFalse()}}>
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNv3-8YNVbRW1uEb3XmofbmWWneY5Vi4jNupsjc4pxBJAzqHdaCxaj-go&s=10"} alt='pandas'/>
              <div className='content'>
                <span>
                  <p className='selftaught'>MACHINE LEARNING*<br/>let the MACHINES take over.</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      
    </ClickSpark>
  )
}

export default About
