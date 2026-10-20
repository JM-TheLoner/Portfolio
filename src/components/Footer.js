import DataContext from '../context/Datacontext'
import { useContext } from 'react'
import '../stylesheets/Footer.css'

const Footer = () => {

  const { dark } = useContext(DataContext)

  return (  
    <>
      <footer className={ !dark ? 'Footer' : 'dFooter' }>
        <div className='Footerwords'>
          <h5 className={!dark ? 'footText lightText' : 'footText darkText'}>&copy; 2023 - All Rights Reserved by J.M_TheLoner</h5>
        </div>
      </footer>
    </>
  )
}

export default Footer
