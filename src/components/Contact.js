import '../stylesheets/Contact.css'
// import email from './email.png'
// import lov from './lov.png'
// import phone from './phone.png'
import { useEffect, useState, useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import DataContext from '../context/Datacontext'
import whatlight from './whatsapplight.png'
import whatdark from './whatsappdark.png'
import insta from './insta.png'
import twitter from './twitter.png'
import github from './github.png'
import linkedin from './linkedin.png'


const Contact = () => {
  const { dark, navigate } = useContext(DataContext)

  const form = useRef()

  const[fullname, setfullname] = useState('')
  const[contactemail, setcontactemail] = useState('')
  const[contactaddress, setcontactaddress] = useState('')
  const[message, setmessage] = useState('')
  const[contacted, setcontacted] = useState(false)
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
    setcontacted(true)


    console.log(`Full Name: ${fullname}`)
    console.log(`Email: ${contactemail}`)
    console.log(`Address: ${contactaddress}`)
    console.log(`Message: ${message}`)

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

const handleContacted = async(e) =>{
  e.preventDefault()
  setcontacted(false)
  navigate('/')
}


  return ( 
    <div className={!dark ? 'Contact' : 'dContact'}>
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


      <div className='contactleft'>
        <div className='contacttext'>
          <p className={!dark ? 'contacthead' : 'dcontacthead'}>Talk To Me</p>
          <p className={!dark ? 'contactbody' : 'dcontactbody'}>Trying to reach a brand new target audience in the modern world? Send a message and let's get you online.</p>
        </div>
        <div className='contactsameline'>
          {/* <img src={lov} className="ogo1" alt="logo" /> */}
          <figcaption className='ImgTag'>
            <a
              className="loc"
              href="https://maps.app.goo.gl/bLeBW9cEfVpSCGK86"
              target="_blank"
              rel="noopener noreferrer"
              >
              <div className={!dark ? 'holes' : 'dholes'}>
                <p className='line1'>Plot 13D, Block 2, Lonex Gardens Estate, Isheri-North, Lagos, Nigeria</p>
              </div>
            </a>
          </figcaption> 
        </div>
        <div className='contactsameline'>
          {/* <img src={phone} className="ogo2" alt="logo" /> */}
          <figcaption className='ImgTag'>
            <div className={!dark ? 'phone1' : 'dphone1'}>
              <p>+234 902 328 2736</p>
              <p>+234 815 892 1148</p>
            </div>
          </figcaption>
        </div>
        <div>
          {/* <img src={email} className="ogo3" alt="logo" /> */}
          <figcaption className='ImgTag'>
            <p className={!dark ? 'email' : 'demail'}>Oolaitan13@gmail.com</p>
          </figcaption>
        </div>
        <div>
          <div className='contactsamelinesocs'>
            <a
                className="locwhat"
                href="https://wa.me/qr/7K2XV7UM75H4N1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {!dark ?
                  <img src={whatdark} className="contwhatsappimg" alt="whatdark"/>
                :
                  <img src={whatlight} className="contwhatsappimg" alt="whatlight"/>
                }
              </a>
            <a
                className="locinsta"
                href="https://www.instagram.com/_the.loner?igsh=MTF0Zzk0ZmQ1OHBkZg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} className="instaimg" alt="insta"/>
              </a>
            <a
                className="loctwitter"
                href="https://x.com/JayMono7?t=xIJr3zKtuCv6LZM1U3A1_w&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} className="twitterimg" alt="twitter"/>
              </a>
            <a
                className="loclinkedin"
                href="https://www.linkedin.com/in/oluwaseun-olaitan-059b23201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} className="linkedinimg" alt="linkedin"/>
              </a>
            <a
                className="locgithub" 
                href="https://github.com/JM-TheLoner"
                target="_blank"
                rel="noopener noreferrer"
              >
                  <img src={github} className="githubimg" alt="github"/>
              </a>
          </div>
        </div>        
      </div>


      <div className={!dark ? 'contactwrapper' : 'dcontactwrapper'}>
        <div className='getin'><h1 className={!dark ? 'right1' : 'dright1'}>Send A </h1><h2 className={!dark ? 'right2' : 'dright2'}>Message</h2></div>        
        <h2 className={!dark ? 'right3' : 'dright3'}>I'd Love To Hear From You!</h2>
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
          <h1 className={!dark ? 'contactaddressText' : 'dcontactaddressText'}>Address</h1>
          <div className={!nocontactaddress ? 'contactaddressinputBox' : 'contactaddressinputBoxred'}>
              <input
              type='text'
              placeholder='State, Country'
              required
              value={contactaddress}
              name='user_address'
              onChange={(e)=>{setcontactaddress(e.target.value)}}/>
          </div>

          <h1 className={!dark ? 'messageText' : 'dmessageText'}>Your Message</h1>
          <div className={!nomessage ? 'messageinputBox' : 'messageinputBoxred'}>
              <textarea
              type='text'
              placeholder='Type Your Message Here'
              required
              value={message}
              name='message'
              onChange={(e)=>{setmessage(e.target.value)}}/>
          </div>
          <button type='submit' value='Send' className={!dark ? 'contactbutton' : 'dcontactbutton'} onClick={(e)=>{handleContact(e)}}>Submit</button>   
        </form>
      </div>

      {contacted
      ? 
        <div className='contactedbackground' onClick={(e)=>{handleContacted(e)}}>
          <div className='contacted'>
            <div className='contactedtop'>
              <p className='contactedline'>Your message has been sent</p>
              <button type='submit' className='contactedbutton' onClick={(e)=>{handleContacted(e)}}>X</button>
            </div>
            <p className='contactedlineone'>Thank You for Contacting Me</p>
            <p className='contactedlinetwo'>I will get back to you in 3-5 Business days</p>
          </div>
        </div>
      :
        <div></div>
      }
    </div>
  )
}

export default Contact
