import '../stylesheets/Portfolio.css'
import Header from './Header';
import { useEffect, useContext } from 'react'
import DataContext from '../context/Datacontext'
import defaultImage from '../Assets/Images/image.png'
import githubImage from '../Assets/Images/GitHub-Logo.png'
// import whoosh1 from '../Assets/Audio/hidden-blade-draw.mp3'
// import whoosh2 from '../Assets/Audio/hidden-blade-retract.mp3'


//to play sound on entering portfolio item, uncomment lines 7-8 (import of sounds), 18-21 (defining sound playing function) and 46 (calling functions on entering item)


const Portfolio = () => {

  const { dark } = useContext(DataContext)

  // const playSound = (sound)=>{
  //   var audio = new Audio(sound)
  //   audio.play()
  // }

  let projectList = [
    {key:'0', projectImg: githubImage, projectName:"Explore My GitHub Profile", projectLink:"https://github.com/JM-TheLoner", projectDescription:"Browse my repositories, code, and experiments.", projectComponents:["React", "HTML", "CSS", "JavaScript"]}, 
    {key:'1', projectImg:"", projectName:"Opalcon", projectLink:"https://github.com/JM-TheLoner", projectDescription:"A website for a branding service", projectComponents:["Node", "MongoDB", "Express", "JavaScript"]}, 
    {key:'2', projectImg:"", projectName:"Afri-Pulse", projectLink:"https://github.com/JM-TheLoner", projectDescription:"A blood drive website for people or hospitals looking to donate or recieve", projectComponents:["React", "HTML", "CSS", "JavaScript"]},
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
            // onMouseEnter={()=>{playSound(whoosh1)}} onMouseLeave={()=>{playSound(whoosh2)}}
            key={project.key}
            >
              <div className={!dark ? 'project' : 'dproject'}> 
                <div className={project===projectList[0] ? 'gitImageContainer' : 'imageContainer'}>
                  <img className='image' src={project.projectImg || defaultImage} alt=''/>
                </div>
                <div className='projectWords'>
                  <p className={!dark ? 'projectname lightWords' : 'projectname darkWords'}>{project.projectName}</p>
                  <p className={!dark ? 'projectdesc lightWords' : 'projectdesc darkWords'}>{project.projectDescription}</p>
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