import './style.css';
import './head.css';
import './about.css';
import './working.css';
import './services.css';
import './tools.css';
import './team.css';
import './qualification.css';
import './mediaQueries.css';
import './hamburger.css';
import {useReducer, useState , useMemo , useEffect} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({t}){
  return(<>
  <div className="working-cards" onMouseEnter={(e)=>{
    e.preventDefault();
    e.target.style.boxShadow="0px 0px 40px #289961";
  }} 
  onMouseLeave={(e)=>{
    e.preventDefault();
    e.target.style.boxShadow="none";
  }} data-aos='flip-right'>
        <p className="working-cards-serial">{t.id}</p>
        <p className="working-cards-heading">{t.heading}</p>
        <p className="working-cards-content">{t.details}</p>
  </div>
  </>)
}

function Service({t}){
  return(<>
  <div className='services-list-cantainer' onMouseEnter={(e)=>{
    e.target.style.color="#16b364";
  }} 
  onMouseLeave={(e)=>{
    e.target.style.color="white";
  }}>
      <p className="services-list-serial">0{t.index}</p>
      <p className="services-list-heading">{t.work}
      <button class="services-list-btn">⮕</button></p>
      </div>
      <hr/>
  </>)
}

function Faq({t}){
  const [show, setShow]=useState(false);
  function handleShow(){
    setShow(!show);
  }
  
  return(<>
  <div className='faqs-individual-wrapper' onClick={(e)=>{handleShow();
  }} data-aos='fade-down'>
    <div className='faqs-wrapper-1'>
      <div className='faqs-wrapper-1-inner'>
        <p className='faqs-question'>{t.school}</p>
        <p className='faqs-course'>{t.course}</p>
        </div>
    </div>
    <div className='faqs-wrapper-2'>
      <p className='faqs-grade'>{show?(`Grade/CPI: ${t.grade}`):("")}</p>
      <p className='faqs-year'>{show?(`Year: ${t.year}`):("")}</p>
    </div>
    </div>
  </>)
}

function NavBar(){
  return(
    <>
     <ul className='head-navbar-ul' >
                <li><a href='#'>Home</a></li>
                <li><a href='#working-wrapper'>How It Work's</a></li>
                <li><a href='#services-wrapper'>Service</a></li>
                <li><a href='#tools-wrapper'>Tools</a></li>
                <li><a href='#team-wrapper'>About Me</a></li>
                <li><a href='#faqs-wrapper'>Qualification</a></li>
                <li><a href='C:\Users\user\OneDrive\Desktop\Resume.pdf' download='Srinjoy_Resume.pdf'><button id="head-btn">Resume</button></a></li>
            </ul>
    </>
  )
}

function  Hamburger(){
  
  return(<>
  <div className='hamburger' onClick={()=>{
    let t=document.getElementById('hamburger-navbar-ul');
    if(t.style.display=='none')
      t.style.display='flex';
    else
      t.style.display='none';
  }}>
  <div className='hamburger-line' id='hamburger-line-2'></div>
  <div className='hamburger-line' id='hamburger-line-1'></div>
  </div>
  <ul className='head-navbar-ul hamburger-ul' id='hamburger-navbar-ul'>
                <li><a href='#'>Home</a></li>
                <li><a href='#working-wrapper'>How It Work's</a></li>
                <li><a href='#services-wrapper'>Service</a></li>
                <li><a href='#tools-wrapper'>Tools</a></li>
                <li><a href='#team-wrapper'>About Me</a></li>
                <li><a href='#faqs-wrapper'>Qualification</a></li>
                {/* <li><a href='C:\Users\user\OneDrive\Desktop\Resume.pdf' download='Srinjoy_Resume.pdf'><button id="head-btn">Resume</button></a></li> */}
            </ul>
  </>)
}

export default function MyApp(){
  const cards_data=[
    {id:1, heading:'Discover' , details:'Prompt discussion to evaluate requirements and give quote,paving for our joint effort.'},
    {id:2, heading:'Develop' , details:'Project starts promptly with regular updates. Transparent workflow.'},
    {id:3, heading:'Deliver' , details:'Review your custom design or development, complete payment, receive files seamlessly.'}
  ]
  const services_data=[
    {index:1, work:'Developement'} ,{index:2, work:'UI/UX Design'}  , {index:3, work:'Brand Identity'} 
  ]
  const faqs_data=[
    {
      id:1,
      school:"Indian Instituition of Technology, Guwahati",
      year:"2023-27",
      course:"Bachelor in Technology in Chemical Science and Technology",
      grade:"7.19"
    },
    {
      id:2,
      school:"The Aryans School, Kolkata",
      year:"2021-2023",
      course:"ISC(PCM+Computer Science)",
      grade:"96%"
    },
    {
      id:3,
      school:"The Aryans School, Kolkata",
      year:"2013-2021",
      course:"ICSE",
      grade:"97%"
    }
    
];
  const tools_logo=[2,3,4,5,6,7,8,9,10,11,12];
  const [arrow, setArrow]=useState('');
  function HandleArrow(){
    if(arrow==='')
      setArrow('⮕');
    else
      setArrow('');
  }
  const [nav_state, useNav_state]=useState('false');
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  const [text]=useTypewriter({
    words:['Web Developer' , 'Web Designer' , 'Programmer' , 'Content Creator' , 'IITian'],
    loop:{}
  })

  const [hamburger, setHamburger]=useState(false);

  return(
    <>
    <body>
    <div id='head_id' className="head-wrapper">
         <div class="head-logo">
          <p>SRINJOY GHOSH</p>
          <ul className='head-connects-ul'>
             <li> <a href='https://www.instagram.com/adonis_._._._._/'><img src={require('./insta-removebg-preview.png')}/></a></li>
             <li> <a href='https://github.com/sgcodes7471'><img src={require('./image.png')}/></a></li>
             <li> <a href='https://www.youtube.com/channel/UCXiDi2SAozjEpgvLW9ab3Hw'><img src={require('./yt-removebg-preview.png')}/></a></li>
             <li> <a href='https://www.linkedin.com/in/srinjoy-ghosh-97a9852a4/'><img src={require('./lnkdn-removebg-preview.png')}/></a></li>
             {/* <li> <a href='/gmail'><img id='head-connects-special' src={require('./image2.png')}/></a></li> */}
            </ul>
        </div>
        <div className="head-navbar">
           <NavBar/>
        </div>
    </div> 

{/* navbar menu */}
{/* hamburger for responsive navbar */}
<Hamburger/>

{/* about section alright */}
    <div className="section-common" id="about-wrapper" >
        <p className="question" id="about-heading-question"><img src={require('./logo2.png')}/>Welcome to my Portfolio</p>
        <div className="main" id="about-heading-main">Hi There Fellas</div>
            <p className="extras" id="about-heading-extras">a Creative Brain which has always been Enthuasitic about Creating, fulfilling the forte with Web Technologies</p>
            <p id='about-heading-dynamicText'>
                I'm <span className='highlight-team-profile'>  {text}<Cursor/></span>
                
            </p>
        </div>

{/* Process of Work Section alright*/}
        <div className="section-common" id="working-wrapper" data-aos='fade-up'>
            <p className="question" id="working-heading-question"><img src={require('./logo2.png')}/>How It Works?</p>
            <div className="main" id="working-heading-main">My Process</div>
            <p className="extras" id="working-heading-extras">My process of working is very simple and straightforward</p>
            <div id="working-cards-wrapper">
                {cards_data.map((t)=>{
                  return(
                    <>
                    {Card({t})}
                    </>)})}
                </div>
            </div>

{/* Services section-need to fix the animation of green color on hover*/}
        <div className="section-common" id="services-wrapper" data-aos='fade-up'>
            <p className="question" id="services-heading-question"><img src={require('./logo2.png')}/>Our services</p>
            <div className="main" id="services-heading-main">What do I offer?</div>
            <p className="extras" id="services-heading-extras">I am focused on making your business growth easier. My services are designed to help you convert better and increase your revenue at an affordable price. Here’s what we offer.</p>
            <div id="services-list-wrapper">
                   {services_data.map((t)=>{
                    return(<>
                    {Service({t})}
                    </>)})}
            </div>
        </div>

{/*tools section alright */}
        <div className="section-common" id="tools-wrapper" data-aos='fade-left'>
            <p className="question" id="tools-heading-question"><img src={require('./logo2.png')}/>Tools</p>
            <div className="main" id="tools-heading-main">Tools I use</div>
            <p className="extras" id="tools-heading-extras">From concept to creation, engagement to discourse, these are the tools I use regularly and  the list is growing.</p> 
            <div className='tools-illustrations'>
              <div className='tools-illustrations-slider'>
              {tools_logo.map((t)=>{
                return(<>
                <img className='tools-logo' src={require(`./${t}.png`)}/>
                </>)
              })}
            </div>
              <div className='tools-illustrations-slider'>
              {tools_logo.map((t)=>{
                return(<>
                <img className='tools-logo' src={require(`./${t}.png`)}/>
                </>)
              })}
            </div>
            </div>
        </div>

{/* team section alright */}
        <div className='section-common' id='team-wrapper' data-aos='fade-up'>
              <p className='question' id='team-heading-question'><img src={require('./logo2.png')}/>Who am I?</p>
              <div className='main' id='team-heading-main'>Know About Me</div>
              <p className='extras' id='team-heading-extras'>Hi Everyone, I am Srinjoy Ghosh from Kolkata, West Bengal, India.
I am a 1st year student pursuing B.Tech in Chemical Science and Engineering from <span className='highlight-team-profile'>Indian Institute of Technology Guwahati</span>.</p>
<div id='team-profile'>
  <div id='team-profile-pic'>
                <img src={require('./artcode.avif')}/>
  </div>
  <div id='team-profile-more'>
                <div>
               <p>I love Creating and Developing.</p>
                <br/>
                <p>I am fluent in programming languages like JAVA, JavaScript and C</p>
                <br/>
                <p>My field of Interest are <span className='highlight-team-profile'>Web Developement</span> and <span className='highlight-team-profile'>DevOps</span></p>
              </div>
  </div>
  <div className='team-profile-line'>
    <hr/>
  </div>

        </div>
</div>

{/* faqs section- fix the bgcolor grey on click for each faq */}
        <div className="section-common" id="faqs-wrapper" >
          <div className='faqs-wrapper-left'>
            <div className="main" id="faqs-heading-main">Qualification</div>
                      </div>
                <div className='faqs-wrapper-right'>   
            <p className="question" id="faqs-heading-question" ><img src={require('./logo2.png')}/>My Education</p>  
                {faqs_data.map((t)=>{
                  return(<>
                  {Faq({t})}</>)
                })}
            </div>
        </div>
        </body>
         </>
  )
}

