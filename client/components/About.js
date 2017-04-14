import React from 'react';

const About = () => {
  return(
    <div style={styles.container}>
      <div style={styles.aboutContainer}>
        <p> ABOUT </p>
          <div>
            My name Is Robin, and I've been a segway tour guide. I love to teacher blaallalalablbalbala.
          </div>
          <div>
            download pdf
            print pdf
          </div>
      </div>
    </div>
    )
}

const styles = {
  container: {
    height: '30vh',
    width: '100%',
    backgroundColor: '#004E98',
    display: 'flex',
    fontFamily: 'Pavanam',
    justifyContent: 'center'
  },
  aboutContainer: {
    width: '80vw',
    display: 'flex',
    justifyContent: 'space-around',
    color: '#E2E2E2'
  }
}

export default About;