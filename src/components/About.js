import '../stylesheets/About.css'
import '../stylesheets/Background.css'
// import logo from './aboutimage.png'
import node from './node.jpg'
import express from './express.jpg'
import react from './react.jpg'
import python from './python.jpg'
import mongo from './mongo.jpg'
import pandas from './pandas.jpg'
import javascript from './javascript.jpg'
import { useEffect, useContext, useState } from 'react'
import DataContext from '../context/Datacontext'

const About = () => {

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
  const clickedTruejs = () =>{
    setbackState(true)
    setaboutClassname('AboutYellow')
  }
  const clickedTruereact = () =>{
    setbackState(true)
    setaboutClassname('AboutBlue')
  }
  const clickedTruemongo = () =>{
    setbackState(true)
    setaboutClassname('AboutLightGreen')
  }
  const clickedTrueexpress = () =>{
    setbackState(true)
    setaboutClassname('AboutYellowExpress')
  }
  const clickedTruenode = () =>{
    setbackState(true)
    setaboutClassname('AboutDarkGreen')
  }
  const clickedTruepython = () =>{
    setbackState(true)
    setaboutClassname('AboutBlueYellow')
  }
  const clickedTruepandas = () =>{
    setbackState(true)
    setaboutClassname('AboutDeepBlue')
  }
  const clickedFalse = () =>{
    backState ? 
      setbackState(false)
    :
      setbackState(true)
  }

  
  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    // <div className={!dark ? 'About' : 'dAbout'}> 
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
          <h1 className='overline'>What I do</h1>
          <div className={!dark ? 'bottomstory' : 'dbottomstory'}>
            <h1 className='bottomlineone'>
              JavaScript
            </h1>
            <h1 className='bottomlinetwo'>
              MERN Stack (Full stack) development
            </h1>
            <h1 className='bottomlinethree'>
              Python
            </h1>
            <h1 className='bottomlinefour'>
              Pandas (Machine Learning / AI)
            </h1>
          </div>
        </div> 
      </div>


      <div className='bottombox'>
        <ul className='accordion'
            onClick={()=>{clickedFalse()}}
            >
          <li
            onMouseEnter={()=>{backStaterTruejs()}}
            onMouseLeave={()=>{backStaterFalse()}}
            onClick={()=>{clickedTruejs()}}
          >
            <img src={javascript} alt='javascript'/>
            <div className='content'>
              <span>
                <h2>Javascript</h2>
                <p className='selftaught'>WEB DEVELOPMENT</p>
              </span>
            </div>
          </li>
          <li
            onMouseEnter={()=>{backStaterTruemongo()}}
            onMouseLeave={()=>{backStaterFalse()}}
            onClick={()=>{clickedTruemongo()}}
          >
            <img src={mongo} alt='mongo'/>
            <div className='content'>
              <span>
                <h2>mongodb</h2>
                <p className='selftaught'>DATABASE SERVICE</p>
              </span>
            </div>
          </li>
          <li
            onMouseEnter={()=>{backStaterTrueexpress()}}
            onMouseLeave={()=>{backStaterFalse()}}
            onClick={()=>{clickedTrueexpress()}}
          >
            <img src={express} alt='express'/>
            <div className='content'>
              <span>
                <h2>express</h2>
                <p className='selftaught'>BACKEND</p>
              </span>
            </div>
          </li>
          <li
            onMouseEnter={()=>{backStaterTruereact()}}
            onMouseLeave={()=>{backStaterFalse()}}
            onClick={()=>{clickedTruereact()}}
          >
            <img src={react} alt='react'/>
            <div className='content'>
              <span>
                <h2>react</h2>
                <p className='selftaught'>FRONTEND</p>
              </span>
            </div>
          </li>
          <li
            onMouseEnter={()=>{backStaterTruenode()}}
            onMouseLeave={()=>{backStaterFalse()}}
            onClick={()=>{clickedTruenode()}}
          >
            <img src={node} alt='node'/>
            <div className='content'>
              <span>
                <h2>node</h2>
                <p className='selftaught'>BACKEND</p>
              </span>
            </div>
          </li>
          <li
            onMouseEnter={()=>{backStaterTruepython()}}
            onMouseLeave={()=>{backStaterFalse()}}
            onClick={()=>{clickedTruepython()}}
          >
            <img src={python} alt='python'/>
            <div className='content'>
              <span>
                <h2>Python</h2>
                <p className='selftaught'>PROGRAMMING</p>
              </span>
            </div>
          </li>
          <li
            onMouseEnter={()=>{backStaterTruepandas()}}
            onMouseLeave={()=>{backStaterFalse()}}
            onClick={()=>{clickedTruepandas()}}
          >
            <img src={pandas} alt='pandas'/>
            <div className='content'>
              <span>
                <h2>pandas</h2>
                <p className='selftaught'>MACHINE LEARNING*</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
