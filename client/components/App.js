import React, {Component} from 'react';
import Header from './Header';
import Intro from './Intro';
import Resume from './Resume';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

export default class App extends Component {
  render() {
    return (
     <div style={styles.container}>
        <Header />
        <Intro />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contact />

      </div>);
  }
}

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0'
  }
}