
//var React = require('react');

import React from 'react';

const Header = () => {
  return ( 
    <div style ={styles.container}>
      <p style={styles.title}>About</p>
      <p style={styles.title}> Contact </p>
      <p style={styles.name}> Robin Kuehn </p>
      <p style={styles.title}> Work </p>
      <p style={styles.title}> Resume </p>
    </div> )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '10vh',
    fontFamily: 'Pavanam',
    alignItems: 'center'
  },
  title: {
    flexBasis: '50vmin',
    textAlign: 'center',
    fontSize: '18px'
  },
  name: {
    flexBasis: '80vmin',
    textAlign: 'center',
    fontSize: '30px'
  }
} 

export default Header;

