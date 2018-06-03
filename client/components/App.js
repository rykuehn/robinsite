import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

import '../scss/main.scss';

const App = () => {
  return (
    <div className="app">
        <Header />
        <Intro />
        <About />
        <Resume />
        <Projects />
        <Contact />
    </div>
  )
}

export default App;

