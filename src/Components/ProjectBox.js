import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    CryptoHunterDesc : " front-end webpage: A crypto tracker web app that I developed using ReactJS, Chakra-UI, and the CoinGecko API. This app provides an easy and efficient way to search for any cryptocurrency and view its latest price, market cap, and trading volume.",
    CryptoHunterGithub : "https://github.com/aman02022003/Crypto-Hunter-React-app",
    CryptoHunterWebsite : "https://crypto-hunter-react-app.vercel.app/",

    gammingzoneDesc : "front-end webpage: This project made for gaming community. gamer can share their gaming videos and collaborate with each others",
    gammingzoneGithub : "https://github.com/aman02022003/Gaming-zone-React-App",
    gammingzoneWebsite : "https://gaming-zone-react-app.vercel.app/",

    idolstarDesc : "front-end webpage: This project made for gaming community. gamer can share their gaming videos and collaborate with each others",
    idolstarGithub : "https://github.com/aman02022003/IdolStar-React-app",
    idolstarWebsite : "https://idol-star-react-app.vercel.app/",

    Accident_Alert_and_Notification_SystemDesc : "diploma project: Our project is totally hardware based. This project will help to decrease deaths happening due to accidents.  we use Arduino , gps and gsm. Through this it will send live location of the victim",
    Accident_Alert_and_Notification_SystemGithub : "https://github.com/aman02022003/Accident_Alert_and_Notification_System",
    Accident_Alert_and_Notification_SystemWebsite : "",

    learning_managment_system_subscription_basedDesc : "MERN stack project : subscription based course selling app with dashboard pannel and payment gateway",
    learning_managment_system_subscription_basedGithub : "https://github.com/aman02022003/Full-Stack-Courseinsta-",
    learning_managment_system_subscription_basedWebsite : "",

   
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }

    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
         

    

     
{
  desc[projectName + 'Website']!==""?(<a href={desc[projectName + 'Website']} target='_blank'>
        <button className='projectbtn'><CgFileDocument/> Demo</button>
        </a>):""
}
        
      
    

              
            
        </div>
    </div>
  )
}

export default  ProjectBox