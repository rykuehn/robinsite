import React from 'react';
import ProjectsBlock from './ProjectsBlock';
import '../scss/components/_projects.scss';

import reaction from '../static/reactionmain.png';
import oneupelder from '../static/oneupelder.png';
import tagme from '../static/tagme.png';

const Projects = () => {
  return(
    <div className="skills">
      <p className="projectsHeading"> PROJECTS </p>

      <div className="holding">
        <div className="box">
          <img className="bigPic" src={reaction} />
          <p className="projDescription"> React-Ion is a developer tools for users to make mockups of their website using fully customizable React Components. </p>
       </div>

       <div className="secondary">
        <div  className="box Two leftBox">
          <img className="smallPic" src={oneupelder} />
          <p className="projDescription"> One Up Elder Care was an attempt to solve real world problems with the way we search for nursing home care. </p>
        </div>

        <div  className="box Two">
          <img className="tagME" src={tagme} />
          <p className="projDescription"> Tag Me is a photo journaling App </p>
        </div>
        </div>
      </div>
    </div>

  )
}


export default Projects;