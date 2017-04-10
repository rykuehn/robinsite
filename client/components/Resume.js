import React from 'react';
import InfoBlock from './infoBlock';

const Resume = () => {
  return ( 
    <div style={styles.container}>
      <div style={styles.check}>
        <div style={styles.heading}> Education </div>
        <div style={styles.list}>
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

      <div div style={styles.check}>
        <div style={styles.heading}> Work Experience </div>
        <div style={styles.list}>
          <InfoBlock heading="Software Engineer"
                     subheading="Capital One"
                     dates="2017 - present"
                     location="San Francisco, CA" />

          <InfoBlock heading="Software Engineering Fellow"
                     subheading="Hack Reactor"
                     dates="2016 - 2017"
                     location="San Francisco, CA"
                     bullets={["Taught a variety of workshops on special topics such as Flexbox and Redux.",
                              "Mentored students as they review recursion, data structures, and other Javascript fundamentals.",
                              "Collaborated with staff to identify struggling students and developed a learning plan for them."]} />

          <InfoBlock heading="2nd Grade Associate Teacher"
                     subheading="The Hamlin School"
                     dates="2015 - 2016"
                     location="San Francisco, CA"
                     bullets={["Designed a curriculum that encouraged the creative design process and the use of the laser printer.",
                              "Participated in professional development conferences in order to stay up to date with best practices."]} />

          <InfoBlock heading="8th Grade Teacher"
                     subheading="St. Francis School"
                     dates="2013 - 2014"
                     location="Lumberton, NM"
                     bullets={["Lead a team of middle school teachers in long-term curriculum and syllabus development.",
                              "Facilitated student-led tech talks during our morning meetings.",
                              "Supplemented textbook math lessons with coding exercises to emphasize real-life application."]} />
        </div>
      </div>

    </div> )
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5vmin',
    paddingBottom: '5vmin',
    backgroundColor: '#EFF2F4'
  },
  check: {
    border: '1px solid green',
    flexGrow: '1',
    width: '70%',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '3vmin'
  },
  heading: {
    fontFamily: 'Pavanam',
    fontSize: '20px',
    fontWeight: 'bold',
    borderBottom: '1px solid gray',
    flexBasis: '100px',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default Resume;