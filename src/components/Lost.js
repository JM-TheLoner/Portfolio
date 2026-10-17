import '../stylesheets/Lost.css'
import '../stylesheets/Background.css'
import Header from './Header';
import DataContext from '../context/Datacontext'
import { useContext, useEffect } from 'react'
import darklostImage from '../Assets/Images/darkLostImg.png'
import lightlostImage from '../Assets/Images/lightLostImg.png'
import darklostbg from '../Assets/Images/darklostbg.png'
import lightlostbg from '../Assets/Images/lightlostbg.png'

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
      <div className={!dark ? 'Lost' : 'dLost'} style={!dark ? {backgroundImage: `url(${lightlostbg})`} : {backgroundImage: `url(${darklostbg})`} }>
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


        <div className='lostDiv'>
          <div className='lostLeft'>
            <div className="topline">
              <p className={!dark ? 'losthead lightTextColor' : 'losthead darkTextColor'}>404 ERROR</p>
              <h1 className={!dark ? 'firstLine lightText' : 'firstLine darkText'}>Oops, This Page</h1>
              <h1 className={!dark ? 'secondLine lightTextColor1' : 'secondLine darkTextColor1'}>Doesn't Exist</h1>
              <p className={!dark ? 'thirdLine lightText' : 'thirdLine darkText'}>You've probably typed a wrong URL, you can't get here any other way. <br/> Congratulations, I guess ;)</p>
              <div >
                <button className='bottomline' onClick={(e)=>{movehome(e)}}>
                  <div className='lostWork'>
                          <div className='lostbtnswarrow' style={{fontSize: '25px'}}>&#8592;</div>
                          <div className='lostbtnswarrow' style={{fontSize: '15px'}}>Back To Home</div>
                      </div> 
                </button>
              </div>
            </div>            
          </div>
          <div className='lostRight'>            
            <img src={!dark ? lightlostImage: darklostImage} className={!dark ? 'lostImg' : 'dlostImg' } alt="You're lost img"/>
          </div>
        </div>
        
      </div>
  )
}

export default Lost