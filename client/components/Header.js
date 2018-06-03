
import React from 'react';
import Scroll, {Link} from 'react-scroll';

import '../scss/main.scss';
import '../scss/components/_header.scss';

const Header = () => {
  return ( 
    <div className="baseComponentContainer Header">
      <Link to="about" spy={true} smooth={true} duration={500}> About </Link>
      <Link to="contact" spy={true} smooth={true} duration={500}> Contact </Link>
      <Link id="name" to="intro" spy={true} smooth={true} duration={500}> Robin Kuehn </Link>
      <Link to="projects" spy={true} smooth={true} duration={500}> Projects </Link>
      <Link to="resume" spy={true} smooth={true} duration={500}> Resume </Link>
    </div> 
  )
}


export default Header;

