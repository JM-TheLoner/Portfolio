import DataContext from '../context/Datacontext'
import { useContext } from 'react'
import '../stylesheets/Footer.css'

const Footer = () => {

  const { dark, aboutClassname } = useContext(DataContext)

  var footstate

  if (aboutClassname === 'AboutYellow'){
    footstate = 'FooterYellow'
  }
  if (aboutClassname === 'AboutBlue'){
    footstate = 'FooterBlue'
  }
  if (aboutClassname === 'AboutLightGreen'){
    footstate = 'FooterLightGreen'
  }
  if (aboutClassname === 'AboutYellowExpress'){
    footstate = 'FooterYellowExpress'
  }
  if (aboutClassname === 'AboutDarkGreen'){
    footstate = 'FooterDarkGreen'
  }
  if (aboutClassname === 'AboutBlueYellow'){
    footstate = 'FooterBlueYellow'
  }
  if (aboutClassname === 'AboutDeepBlue'){
    footstate = 'FooterDeepBlue'
  }

  return (  
    <>
      <footer className={
        !aboutClassname 
        ? 
          !dark ? 'Footer' : 'dFooter'
        :
          footstate
        }>
        <div className={!dark ? 'Footertext' : 'dFootertext'}>
          <h5 className={!dark ? 'FooterCopyright' : 'dFooterCopyright'}>&copy; 2023 - All Rights Reserved by J.M_TheLoner</h5>
        </div>
      </footer>
    </>
  )
}

export default Footer
