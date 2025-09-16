import '../stylesheets/Portfolio.css'
import '../stylesheets/Background.css'
import { useEffect, useContext } from 'react'
import DataContext from '../context/Datacontext'
import image from './image.png'
// import swordSwipe from './draw-sword1-44724.mp3' 

const Portfolio = () => {

  const { dark } = useContext(DataContext)

  // const soundon = ()=>{
  //   var audio = new Audio(swordSwipe)
  //   audio.play()
  // }

  let projectList = [
    {projectImg:"", projectName:"Opacon Ltd", projectLink:"https://github.com/JM-TheLoner", projectDescription:"FrontEnd", projectComponents:["React", "HTML", "CSS", "JavaScript"], projectDate:"JULY 2025"}, 
    {projectImg:"", projectName:"Opacon Ltd", projectLink:"https://github.com/JM-TheLoner", projectDescription:"BackEnd", projectComponents:["Node", "MongoDB", "Express", "JavaScript"], projectDate:"JULY 2025"}, 
    {projectImg:"", projectName:"Afri-Pulse", projectLink:"https://github.com/JM-TheLoner", projectDescription:"FrontEnd", projectComponents:["React", "HTML", "CSS", "JavaScript"], projectDate:"JULY 2025"},
    {projectImg:"", projectName:"Opacon Ltd", projectLink:"https://github.com/JM-TheLoner", projectDescription:"FrontEnd", projectComponents:["React", "HTML", "CSS", "JavaScript"], projectDate:"JULY 2025"}, 
    {projectImg:"", projectName:"Opacon Ltd", projectLink:"https://github.com/JM-TheLoner", projectDescription:"BackEnd", projectComponents:["Node", "MongoDB", "Express", "JavaScript"], projectDate:"JULY 2025"}, 
    {projectImg:"", projectName:"Afri-Pulse", projectLink:"https://github.com/JM-TheLoner", projectDescription:"FrontEnd", projectComponents:["React", "HTML", "CSS", "JavaScript"], projectDate:"JULY 2025"}
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
      <div className='projectlister'>  
        <h1 className={!dark ? 'projTitle lightWords' : 'projTitle darkWords'}>My Projects</h1>
        {projectList.map((project)=>(
          <a    href={project.projectLink}>
            <div 
            className={!dark ? 'project' : 'dproject'}
            // onMouseEnter={()=>{soundon()}}
            > 
              <img className='image' src={project.projectImg || image} alt=''/>
              <p className={!dark ? 'projectname lightWords' : 'projectname darkWords'}>{project.projectName}</p>
              <p className={!dark ? 'projectdesc lightWords' : 'projectdesc darkWords'}>{project.projectDescription}</p>
            
              <div className='d-flex complist'>
                {project.projectComponents.map((component)=>(
                  <div className='comp'>
                    <div className='siteComponent'>
                      {component}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Portfolio