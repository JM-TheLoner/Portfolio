import '../stylesheets/Portfolio.css'
import Header from './Header';
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
    {projectImg:"", projectName:"Opacon Ltd", projectLink:"https://github.com/JM-TheLoner", projectDescription:"FrontEnd", projectComponents:["React", "HTML", "CSS", "JavaScript"]}, 
    {projectImg:"", projectName:"Opacon Ltd", projectLink:"https://github.com/JM-TheLoner", projectDescription:"BackEnd", projectComponents:["Node", "MongoDB", "Express", "JavaScript"]}, 
    {projectImg:"", projectName:"Afri-Pulse", projectLink:"https://github.com/JM-TheLoner", projectDescription:"FrontEnd", projectComponents:["React", "HTML", "CSS", "JavaScript"]},
    {projectImg:"", projectName:"Opacon Ltd", projectLink:"https://github.com/JM-TheLoner", projectDescription:"FrontEnd", projectComponents:["React", "HTML", "CSS", "JavaScript"]}, 
    {projectImg:"", projectName:"Opacon Ltd", projectLink:"https://github.com/JM-TheLoner", projectDescription:"BackEnd", projectComponents:["Node", "MongoDB", "Express", "JavaScript"]}, 
    {projectImg:"", projectName:"Afri-Pulse", projectLink:"https://github.com/JM-TheLoner", projectDescription:"FrontEnd", projectComponents:["React", "HTML", "CSS", "JavaScript"]}
  ]

  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

  return (
    <div className={!dark ? 'Portfolio' : 'dPortfolio'}>
      <Header/> 
      
      <div className='portfolioContent'>
        <div className={!dark ? 'projTitle lightWrap' : 'projTitle darkWrap'}>
          <h1 className={!dark ? 'featured lightFeat' : 'featured darkFeat'}>Featured Projects</h1>  
          <h1 className={!dark ? 'recent lightWords' : 'recent darkWords'}>Some Of My Recent Work</h1>  
        </div>
        <div className='projectlister'
        >  
          {projectList.map((project)=>(
            <a href={project.projectLink}
            // onMouseEnter={()=>{playSound(whoosh1)}}
            // onMouseLeave={()=>{playSound(whoosh2)}}
            >
              <div className={!dark ? 'project' : 'dproject'}> 
                {/* <img className='image' src={project.projectImg || image} alt=''/>
                <p className={!dark ? 'projectname lightWords' : 'projectname darkWords'}>{project.projectName}</p>
                <p className={!dark ? 'projectdesc lightWords' : 'projectdesc darkWords'}>{project.projectDescription}</p> */}

              </div>
            </a>
          ))}
        </div>        
      </div>

    </div>
  )
}

export default Portfolio