import React from 'react';
import InfoBlock from './infoBlock';
import Scroll, { Element } from 'react-scroll';

import '../scss/main.scss';
import '../scss/components/_about.scss';


const About = () => {
  return (
    <Element name="about" className="baseComponentContainer about">
      <div> ABOUT </div>
        <div className='list'>
          <InfoBlock heading=''
                      subheading="I am a software engineer passionate about using React to create minimalistic, but engaging web and mobile applications. My background in education has provided me with many opportunities to think on my feet, solve multi-layered problems, and work cooperatively with various groups of people.The relationships that I built while teaching have guided the way I design apps so that they are accessible and easy to use for all users."
                      dates="Print Resume"
                      location="Download Resume"
                      display = {false} />
        </div>
    </Element>
  )
}

export default About;