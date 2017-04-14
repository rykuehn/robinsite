import React from 'react';
import InfoBlock from './infoBlock';
import '../scss/components/_resume.scss';

const Resume = () => {
  return ( 
    <div className='container'>
    <p className="resume">RÉSUMÉ</p>
    <div className="resumeComponent">
      <div className="check">
        <div className='resumeHeading'> EDUCATION </div>
        <div className='list'>
          <InfoBlock heading="University of San Francisco"
                     subheading="Master's Degree in Teaching, CA Multiple Subject Teaching Credential"
                     dates="2014 - 2015"
                     location="San Francisco, CA" />

          <InfoBlock heading="University of San Francisco"
                     subheading="Bachelor's Degree in History"
                     dates="2009 - 2013"
                     location="San Francisco, CA" />
        </div>
      </div>

      <div className='check'>
        <div className='resumeHeading'> WORK EXPERIENCE </div>
        <div className='list'>
          <InfoBlock heading="Software Engineer"
                     subheading="Capital One"
                     dates="2017 - present"
                     location="San Francisco, CA" />

          <InfoBlock heading="Software Engineering Fellow"
                     subheading="Hack Reactor"
                     dates="2016 - 2017"
                     location="San Francisco, CA"
                     bullets={["My primary responsibilities as a Software Engineering Fellow were answering help desk requests and conducint applicant interviews for the coding school. Beyond helping students with questions about Node, React, and general algorithms, taught one hour workshops on Redux and FlexBox."]} />

          <InfoBlock heading="2nd Grade Associate Teacher"
                     subheading="The Hamlin School"
                     dates="2015 - 2016"
                     location="San Francisco, CA"
                     bullets={["As an associate teacher, I shared responsibility with another teacher for 20 second grade girls. I conducted reading assessments and made suggestions to improve their reading skills. Many girls jumped at least 4 levels because of our interventions and support throughout the year. Additionally, I designed social studies curriculum."]} />

          <InfoBlock heading="8th Grade Teacher"
                     subheading="St. Francis School"
                     dates="2013 - 2014"
                     location="Lumberton, NM"
                     bullets={["I lead a team of middle school teachers in long-term curriculum and syllabus development that incorprated Native American folktales as well as other resources and activities that supported culturally responsive teaching. In the classroom, I facilitated student-led tech talks during our morning meetings and supplemented textbook math lessons with coding exercises to emphasize real-life application."]} />
        </div>
      </div>
      </div>
    </div> )
}


export default Resume;