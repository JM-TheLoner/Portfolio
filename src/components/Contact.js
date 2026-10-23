import '../stylesheets/Contact.css'
import Header from './Header';
import { useEffect, useState, useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPaperPlane, FaPhone, FaQuoteLeft  } from 'react-icons/fa';
import DataContext from '../context/Datacontext' 
import whatlight from '../Assets/Images/whatsapplight.png'
import defProfPic from '../Assets/Images/default_profile.jpg'
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

  const reviews =[
    {id: 0, name: "Ebatamehi Andrew", descriptor: "Email Marketer", profilePic: "", review: "Working with him was a great experience. He understood the requirements and delivered a solution that met our needs."},
    {id: 1, name: "Solomon-Eseh Emmanuel", descriptor: "Entrepreneur", profilePic: "", review: "He was professional, creative, and attentive to detail throughout the project."},
    {id: 2, name: "Olubajo Abednego", descriptor: "Entrepreneur", profilePic: "", review: "He was professional, detail-oriented, and efficient throughout the design process, with great communication and excellent delivery."}
  ]

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
    if (fullname){        
      if (contactemail){        
        if (contactaddress){          
          if (message){
          } else{
            alert('Please Type a Message')
          }
        } else{
          alert('Please Type A Subject/Headline')
        }        
      } else{
        alert('Please Type Your Email')
      }      
    } else{
      alert('Please Type Your Name')
    }
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
        alert('Message Sent!');
        setfullname('')
        setcontactaddress('')
        setcontactemail('')
        setmessage('')
        navigate('/')        
        window.scrollTo(0,0)
      },
      (error) => {
        alert('FAILED. Please Try Again');
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
            <p className={!dark ? 'testimonialhead lightTextColor' : 'testimonialhead darkTextColor'}>Testimonials</p>
            <h1 className={!dark ? 'testimonialTxt lightWords' : 'testimonialTxt darkWords'}>What Clients Say</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              {reviews.map((review)=>(
                <div className={!dark ? 'review' : 'dreview'} key={review.id}>   
                  <div className='reviewWords'>
                    <FaQuoteLeft size={24} color={!dark ? '#e213fd' : '#7f58ff'} />
                    <p className={!dark ? 'reviewText lightWords' : 'reviewText darkWords'}>{review.review}</p>
                  </div>
                  <div className='reviewIdentity'>
                    <img className='profImage' src={review.profilePic || defProfPic} alt='Profile Img'/>
                    <div className='profId'>
                      <p className={!dark ? 'reviewName lightWords' : 'reviewName darkWords'}>{review.name}</p>
                      <p className={!dark ? 'reviewPos lightWords' : 'reviewPos darkWords'}>{review.descriptor}</p>
                    </div>
                  </div>                
                </div>
              ))}
            </div>
            
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
                <div className='phoneNumSection'>
                  <FaPhone size={18} color={!dark ? '#e213fd' : '#7f58ff'} style={{rotate:'90deg'}}/>
                  <p className='phoneNum'>
                    <a className={!dark ? 'lightText' : 'darkText'} href='tel:+234-902-328-2736'>+234 902 328 2736</a>            
                  </p>
                </div>

                <div className='emailSection'>              
                  <FaEnvelope size={18} color={!dark ? '#e213fd' : '#7f58ff'} />
                  <p className='emailText'>
                    <a className={!dark ? 'lightText' : 'darkText'} href='mailto:oolaitan13@gmail.com'>Oolaitan13@gmail.com</a>
                  </p>                      
                </div>
              </div>   
            </div>

            <div className='contactRight'>
              <div className={!dark ? 'contactwrapper' : 'dcontactwrapper'}>
                <form ref={form}>
                  <div className='contactsameline'>
                    <div className='fullnameinputBox'>
                      <input
                      type='text'
                      placeholder='Your Name'
                      required
                      className={!nofullname ? 'regularBox' : 'errorBox'}
                      value={fullname}
                      name='user_name'
                      onChange={(e)=>{setfullname(e.target.value)}}/>
                    </div>

                    <div className='contactemailinputBox'>
                      <input
                      type='email'
                      placeholder='Your Email'
                      required
                      className={!nocontactemail ? 'regularBox' : 'errorBox'}
                      value={contactemail}
                      name='user_email'
                      onChange={(e)=>{setcontactemail(e.target.value)}}/>
                    </div>
                  </div>
                  <div className='contactsameline'>
                    <div className='contactaddressinputBox'>
                      <input
                      type='text'
                      placeholder='Your Project'
                      required
                      className={!nocontactaddress ? 'regularBox' : 'errorBox'}
                      value={contactaddress}
                      name='user_address'
                      onChange={(e)=>{setcontactaddress(e.target.value)}}/>
                    </div>
                  </div>
                  <div className='contactsameline'>
                    <div className='messageinputBox'>
                      <textarea
                      type='text'
                      placeholder='Your Message'
                      required
                      className={!nomessage ? 'regularBox' : 'errorBox'}
                      value={message}
                      name='message'
                      onChange={(e)=>{setmessage(e.target.value)}}/>
                    </div>
                  </div>
                  <div className='contactsameline'>
                    <button type='submit' value='Send' className={!dark ? 'contactbutton' : 'dcontactbutton'} onClick={(e)=>{handleContact(e)}}>
                      <div className='contactBtnTxt darkText'>
                        Send Message
                        <FaPaperPlane  size={16} color='#F5F4F9' style={{marginLeft:"10px"}} />                        
                      </div>  
                    </button>   
                  </div>           
                </form>
              </div>      
            </div>      

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
