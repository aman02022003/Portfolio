import React from 'react';
import ProjectBox from './ProjectBox';
import crypto from '../images/crypto.png'
import gammingzone from '../images/gammingzone.png'
import idolstar from '../images/idolstar.png'
import iot from '../images/1.jpg'
import lms from '../images/lms.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={lms} projectName="learning_managment_system_subscription_based" />
        <ProjectBox projectPhoto={crypto} projectName="CryptoHunter" />
        <ProjectBox projectPhoto={gammingzone} projectName="gammingzone" />
        <ProjectBox projectPhoto={idolstar} projectName="idolstar" />
        <ProjectBox projectPhoto={iot} projectName="Accident_Alert_and_Notification_System" />

      </div>

    </div>
  )
}

export default Projects