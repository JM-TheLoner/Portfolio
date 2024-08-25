import '../stylesheets/Portfolio.css'
import '../stylesheets/Background.css'
import { useEffect, useContext, useState } from 'react'
import DataContext from '../context/Datacontext'
import image from './image.png'
import Sound from 'react-sound'
import swordSwipe from './draw-sword1-44724.mp3'

const Portfolio = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
) => {

  const { dark } = useContext(DataContext)
  const [opened, setopened] = useState(false)
  const [playSound, setplaySound] = useState(false)
  const [id, setid] = useState()

  const clickon = (e, new_id)=>{
    e.preventDefault()
    setopened(true)
    setid(new_id)
  }
  const soundon = ()=>{
    setplaySound(true)
    setTimeout(500)
    setplaySound(false)
  }
  const clickoff = (e)=>{
    e.preventDefault()
    setopened(false)
    setid(null)
  }

  let projectList = [
    {projectId:0, projectImg:"", projectImgwide:"", projectName:"Github Page", projectLink:"https://github.com/JM-TheLoner", projectDescription:"This is a link to my github page. Check it out to see more of my programs, codes and progress.", projectDate:null},
    {projectId:1, projectImg:"", projectImgwide:"", projectName:"Opacon Ltd(Frontend)", projectLink:"https://github.com/JM-TheLoner", projectDescription:"A template design for a Company's website frontend which customers can interact with to see and order the goods and services offered by the company or to contact the company through various means. There is also an inbuilt feature the company executives and employees to login and edit the details and products seen by customers, which reduces the need for developer input for these processes.", projectDate:"JULY 2025"}, 
    {projectId:2, projectImg:"", projectImgwide:"", projectName:"Opacon Ltd(Backend)", projectLink:"https://github.com/JM-TheLoner", projectDescription:"A backend and process work for a Company's website. It contains all the CRUD operations required to run a website. Creation, Reading, Updating and Deleting. It manipulates files in an online database where the company data is stored.", projectDate:"JULY 2025"}, 
    {projectId:3, projectImg:"", projectImgwide:"", projectName:"Afri-Pulse (NGO)", projectLink:"https://github.com/JM-TheLoner", projectDescription:"A template design for an NGO website that accepts donors and finds deserving recipients for it's goods. It can also act as an informant. Dates can be scheduled for donations or deliveries, nearby locations can be searched and Stock of the organisation inventory can be taken and monitored. The site has an inbuilt sign-up feature for viewers who wish to donate or recieve donations.", projectDate:"JULY 2025"}
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className={!dark ? 'Portfolio' : 'dPortfolio'}>
      
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

      <div className={!opened ? 'projectlister' : 'openedprojectlister'}>
        {projectList.map((project)=>(
          <div 
          className={!dark ? 'project' : 'dproject'}
          onClick={(e)=>{clickon(e, project.projectId)}}
          onMouseEnter={()=>{soundon()}}
          > 
            <p className={!dark ? 'projectname' : 'dprojectname'}>{project.projectName}</p>
            <img className='image' src={project.projectImg || image} alt=''/>
            <p className={!dark ? 'projectdesc' : 'dprojectdesc'}>{project.projectDescription.slice(0, 120)}... Read More</p>
          </div>
        ))}
      </div>

      <Sound
        url={swordSwipe}
        playStatus={
          playSound ? Sound.status.PLAYING : Sound.status.STOPPED
          
        }
        playFromPosition={0}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />

      {opened ? 
        <div 
        className='openedbackground'
        onClick={(e)=>{clickoff(e)}}
        >
          <div className='projectopened'>
            <div className='leftsideport'>
              <img className='imageopened' src={projectList[id].projectImgwide || image} alt=''/>
            </div>
            <div className='rightsideport'>
              <p className='projectnameopened'>{projectList[id].projectName}</p>
              <p className='projectdescopened'>{projectList[id].projectDescription}</p>
              <span>
                <a
                  className='projectlinkopened'
                  href={projectList[id].projectLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                > 
                  {projectList[id].projectLink}
                </a>
                <p className='projectdateopened'>{projectList[id].projectDate}</p>
              </span>
            </div>
          </div>
        </div>
      :
      null
      }
    </div>
  )
}

export default Portfolio
