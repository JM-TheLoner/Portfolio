import '../stylesheets/Lost.css'
import '../stylesheets/Background.css'
import DataContext from '../context/Datacontext'
import { useContext, useEffect } from 'react'

const Lost = () => {

  const { dark, navigate } = useContext(DataContext)

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const movehome = (e) =>{
  e.preventDefault()
  navigate('/')
}

  return (
      <div className={!dark ? 'Lost' : 'dLost'}>
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
            <div className={!dark ? 'lostbubbleone' : 'dlostbubbleone'}>404</div>
        </div>
        <div className='backgroundspread'>
            <div className={!dark ? 'lostbubbletwo' : 'dlostbubbletwo'}>404</div>
        </div>
        <div className='backgroundspread'>
            <div className={!dark ? 'lostbubblethree' : 'dlostbubblethree'}>404</div>
        </div>
        <div className='backgroundspread'>
            <div className={!dark ? 'lostbubblefour' : 'dlostbubblefour'}>404</div>
        </div>
        <div className='backgroundspread'>
            <div className={!dark ? 'lostbubblefive' : 'dlostbubblefive'}>404</div>
        </div>
        <div className='backgroundspread'>
            <div className={!dark ? 'lostbubblesix' : 'dlostbubblesix'}>404</div>
        </div>
  
        <div className='backgroundspread'>
          <h1 className={!dark ? 'four' : 'dfour'}>4</h1>
        </div>      
        <div className='backgroundspread'>
          <div className={!dark ? 'zero' : 'dzero'}></div>
        </div>      
        <div className='backgroundspread'>
          <h1 className={!dark ? 'fourtwo' : 'dfourtwo'}>4</h1>
        </div>
        <div className="topline">
          <h1 className={!dark ? 'first' : 'dfirst'}>Seems like you're lost</h1>
        </div>
        <div>
          <button className='bottomline' onClick={(e)=>{movehome(e)}}>
            Go back to the home page
          </button>
        </div>
      </div>
  )
}

export default Lost