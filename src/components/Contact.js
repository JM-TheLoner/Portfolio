import '../stylesheets/Contact.css'
import Header from './Header';
import { useEffect, useState, useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope } from 'react-icons/fa'; 
import { FaPhone } from 'react-icons/fa'
import DataContext from '../context/Datacontext' 
import whatlight from '../Assets/Images/whatsapplight.png'
import insta from '../Assets/Images/insta.png'
import twitter from '../Assets/Images/twitter.png'
import github from '../Assets/Images/github.png'
import linkedin from '../Assets/Images/linkedin.png'


const Contact = () => {
  const { dark, navigate } = useContext(DataContext)

  const form = useRef()

  const[fullname, setfullname] = useState('')
  const[contactemail, setcontactemail] = useState('')
  const[contactaddress, setcontactaddress] = useState('')
  const[message, setmessage] = useState('')
  const[nofullname, setnofullname] = useState(false)
  const[nocontactemail, setnocontactemail] = useState(false)
  const[nocontactaddress, setnocontactaddress] = useState(false)
  const[nomessage, setnomessage] = useState(false)


  useEffect(()=>{
    window.scrollTo(0,0)
 }, [])

 const fullnamer= () => {
  setnofullname(true)
} 
 const emailer= () => {
  setnocontactemail(true)
} 
 const addresser= () => {
  setnocontactaddress(true)
} 
 const messager= () => {
  setnomessage(true)
} 

 const handleContact = async (e) => { 
  e.preventDefault()
  setnofullname(false)
  setnocontactaddress(false)
  setnocontactemail(false)
  setnomessage(false)

  if (!fullname || !contactaddress || !contactemail || !message){
    alert(`All Fields Required`)
  }

  if (!fullname){
      fullnamer()
  }
  if (!contactaddress){
      addresser()
  }
  if (!contactemail){
      emailer()
  }
  if (!message){
      messager()
  }
  if (fullname && contactaddress && contactemail && message){
    setfullname('')
    setcontactaddress('')
    setcontactemail('')
    setmessage('')
    navigate('/')

    window.scrollTo(0,0)

    emailjs.sendForm(
      'service_vvqzpc3',
      'template_ptpiqax', 
      form.current, 
      {
        publicKey: 'w-lcX6zhEIsl_2A4U',
      }
    )
    .then( 
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }
}

  return ( 
    <>
      <div className={!dark ? 'Contact' : 'dContact'}>
        <Header/>

        <div className='contactPageCont'>
        <div className='testimonialSection'>
          hello
        </div>

        <div className='contactSection'>

          <div className='contactleft'>
            <div className='contacttext'>
              <div className='contHeadWrap'>
                <p className={!dark ? 'contacthead lightTextColor' : 'contacthead darkTextColor'}>LET'S WORK TOGETHER</p>
              </div>              
              <p className={!dark ? 'contactbody lightText' : 'contactbody darkText'}>Have a project in mind?</p>
              <p className={!dark ? 'contactbodylow lightText' : 'contactbodylow darkText'}>I'm always open to discussing new projects and<br/>opportunities. Let's create something amazing together!</p>
            </div>
            <div className='contFollowWrap'>
              <p className={!dark ? 'contacthead lightTextColor' : 'contacthead darkTextColor'}>FOLLOW ME</p>
            </div>              

            <div className='contLinks'>
              <div className='contactsamelinesocs'>
                <a
                    className="locwhat"
                    href="https://wa.me/qr/7K2XV7UM75H4N1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={whatlight} className="smlogo" alt="whatlight"/>
                  </a>
                <a
                    className="locinsta"
                    href="https://www.instagram.com/_the.loner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={insta} className="smlogo" alt="insta"/>
                  </a>
                <a
                    className="loctwitter"
                    href="https://x.com/JayMono7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} className="smlogo" alt="twitter"/>
                  </a>
                <a
                    className="loclinkedin"
                    href="https://www.linkedin.com/in/oluwaseun-olaitan-059b23201"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin} className="smlogo" alt="linkedin"/>
                  </a>
                <a
                    className="locgithub" 
                    href="https://github.com/JM-TheLoner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <img src={github} className="smlogo" alt="github"/>
                  </a>
              </div> 






            </div>
          
            <div className={!dark ? 'phoneNum' : 'phoneNum'}>
              <FaPhone size={24} className={!dark ? 'phoneImg' : 'dphoneImg'}/>
              <p>
                <a className={!dark ? 'lightText' : 'darkText'} href='tel:+234-902-328-2736'>+234 902 328 2736</a>            
              </p>
            </div>

            <div className={!dark ? 'emailText lightText' : 'emailText darkText'}>              
              <FaEnvelope size={24}  className={!dark ? 'emailImg' : 'demailImg'} />
              <p>
                <a className={!dark ? 'lightText' : 'darkText'} href='mailto:oolaitan13@gmail.com'>Oolaitan13@gmail.com</a>
              </p>                      
      
            </div>
       
          </div>

          <div className={!dark ? 'contactwrapper' : 'dcontactwrapper'}>
            <div className='contactsameline'>
              <h1 className={!dark ? 'fullnameText' : 'dfullnameText'}>Full Name</h1>
              <h1 className={!dark ? 'contactemailText' : 'dcontactemailText'}>Email</h1>
            </div>
            <form ref={form}>
              <div className='contactsameline'>
                <div className={!nofullname ? 'fullnameinputBox' : 'fullnameinputBoxred'}>
                  <input
                  type='text'
                  placeholder='Fullname'
                  required
                  value={fullname}
                  name='user_name'
                  onChange={(e)=>{setfullname(e.target.value)}}/>
                </div>

                <div className={!nocontactemail ? 'contactemailinputBox' : 'contactemailinputBoxred'}>
                  <input
                  type='email'
                  placeholder='example@untitled.com'
                  required
                  value={contactemail}
                  name='user_email'
                  onChange={(e)=>{setcontactemail(e.target.value)}}/>
                </div>
              </div>
              <h1 className={!dark ? 'contactaddressText' : 'dcontactaddressText'}>Subject</h1>
              <div className={!nocontactaddress ? 'contactaddressinputBox' : 'contactaddressinputBoxred'}>
                  <input
                  type='text'
                  placeholder='State, Country'
                  required
                  value={contactaddress}
                  name='user_address'
                  onChange={(e)=>{setcontactaddress(e.target.value)}}/>
              </div>

              <h1 className={!dark ? 'messageText' : 'dmessageText'}>Message</h1>
              <div className={!nomessage ? 'messageinputBox' : 'messageinputBoxred'}>
                  <textarea
                  type='text'
                  placeholder='Type Your Message Here'
                  required
                  value={message}
                  name='message'
                  onChange={(e)=>{setmessage(e.target.value)}}/>
              </div>
              <button type='submit' value='Send' className={!dark ? 'contactbutton' : 'dcontactbutton'} onClick={(e)=>{handleContact(e)}}>Send</button>   
            </form>
          </div>          

        </div>

        </div>


      </div>
    </>
  )
}

export default Contact
