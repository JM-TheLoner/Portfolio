import '../stylesheets/Portfolio.css'
import '../stylesheets/Background.css'
import { useEffect, useContext } from 'react'
import DataContext from '../context/Datacontext'
import image from '../Assets/Images/image.png'
import whoosh1 from '../Assets/Audio/hidden-blade-draw.mp3'
import whoosh2 from '../Assets/Audio/hidden-blade-retract.mp3'

const Portfolio = () => {

  const { dark } = useContext(DataContext)

  const playSound = (sound)=>{
    var audio = new Audio(sound)
    audio.play()
  }

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
      <div>
        <h1 className={!dark ? 'projTitle lightWords' : 'projTitle darkWords'}>My Projects</h1>
        <div className='projectlister'
          onMouseEnter={()=>{playSound(whoosh1)}}
          onMouseLeave={()=>{playSound(whoosh2)}}
        >  
          {projectList.map((project)=>(
            <a    href={project.projectLink}>
              <div className={!dark ? 'project' : 'dproject'}> 
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

    </div>
  )
}

export default Portfolio