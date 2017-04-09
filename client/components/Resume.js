import React from 'react';
import InfoBlock from './infoBlock';

const Resume = () => {
  return ( 
    <div style={styles.container}>
      <div style={styles.check}>
        <div style={styles.heading}> Education </div>
        <div style={styles.list}>
          <InfoBlock heading="Univeristy of San Francisco"
                     subheading="Master's Degree"
                     bullets={["ca teaching credential", "second bullet point"]} />
          <InfoBlock heading="Univeristy of San Francisco"
                     subheading="Bachelor's Degree"
                     bullets={["garden project", "lalala"]} />
        </div>
      </div>

      <div div style={styles.check}>
        <div style={styles.heading}> Projects </div>
        <div style={styles.list}>
          <InfoBlock heading="React-Ion"
                     subheading="Developer tool"
                     bullets={["react", "redux"]} />
          <InfoBlock heading="OneUp Eldercare"
                     subheading="nursing home search engine"
                     bullets={["react-router", "lalala"]} />
        </div>
      </div>

      <div div style={styles.check}>
        <div style={styles.heading}> Work Experience </div>
        <div style={styles.list}>
          <InfoBlock heading="Capital One"
                     subheading="Software Engineer"
                     bullets={["react", "redux"]} />
          <InfoBlock heading="Hack Reactor"
                     subheading="Software Engineering Fellow"
                     bullets={["react-router", "lalala"]} />
          <InfoBlock heading="The Hamlin School"
                     subheading="2nd grade associate Teacher"
                     bullets={["react-router", "lalala"]} />
          <InfoBlock heading="St. Francis School"
                     subheading="8th Grade Teacher"
                     bullets={["react-router", "lalala"]} />
        </div>
      </div>

    </div> )
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    alignItems: 'center',
    border: '1px solid red',
    marginTop: '5vmin'
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