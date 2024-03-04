import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.jpg';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {  SiCodingninjas} from "react-icons/si"


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Aman Prajapati</b></h1>
          <Typed/>   
        </div>

        <div className='links'>
        <a href="https://github.com/aman02022003" target='_blank'>Github Profile : <FaGithub/></a>
        <a href="https://www.codingninjas.com/studio/profile/aman02" target="_blank">Coding ninjas profile : <SiCodingninjas/></a>
        <a href="https://www.linkedin.com/in/aman-prajapati02/" target='_blank'>Linkedin Profile : <FaLinkedin/></a>
        <a href='mailTo:amanprajapati02022003@gmail.com' target='_blank'>Email id : <GrMail/></a>
      </div>
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'><b>About me</b></h1>
          <p>
            I love to solve Data Structures and Algorithms (DSA) problems using c++ programming language 
            i solved 300+ DSA problem on coding ninjas platform 
            <br /><br />
            Also <b>i love to do Development </b> i Developed many Projects using <b>MERN</b> stack 
            <br />
            I am fluent in <b>DSA using C++</b> and know a bit of <b>java</b> <br />
   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home