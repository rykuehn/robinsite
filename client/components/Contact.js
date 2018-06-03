import React from 'react';
import {Element} from 'react-scroll';
import '../scss/components/_contact.scss';

const Contact = () => {
  return(
    <Element name="contact" className="footer">
      <span className='copyright'>
        <i className="fa fa-copyright" aria-hidden="true"><span className='words'> Robin Kuehn</span></i>
      </span>
      <div className="icons">
      <span className='words'> <a href="https://www.linkedin.com/in/rykuehn"><i className="fa fa-linkedin" aria-hidden="true"></i></a></span>
      <span className='words'> <a href="https://www.github.com/rykuehn"><i className="fa fa-github" aria-hidden="true"></i></a></span> 
      <i className="fa fa-envelope-o" aria-hidden="true"></i>
      </div>
    </Element>
  )
}

export default Contact;