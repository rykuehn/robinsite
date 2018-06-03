import React from 'react';
import {Element} from 'react-scroll';
import tire from '../static/tire.svg';
import computer from '../static/computer.svg';
import '../scss/main.scss';
import '../scss/components/_intro.scss';

const Intro = () => {
  return(
    <Element name="intro" className="baseComponentContainer intro">
        <img className="computer" src={computer} />
        <div className="plus"> + </div>
        <img className="loader" src={tire} />
        <div className="plus equal"> = </div>
        <div><div className="heart"></div></div>
    </Element>
    )
}

export default Intro;

