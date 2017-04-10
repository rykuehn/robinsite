import React from 'react';

const Contact = () => {
  return(
    <div style={styles.skills}>
      <i className="fa fa-copyright" aria-hidden="true">Robin Kuehn</i>
      <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      <i className="fa fa-github-square" aria-hidden="true"></i>
      <i className="fa fa-envelope-o" aria-hidden="true"></i>
    </div>
  )
}

const styles ={
  skills: {
    height: '30vh',
    width: '100%',
    backgroundColor: 'red'
  }
}

export default Contact;