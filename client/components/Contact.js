import React from 'react';
import {Element} from 'react-scroll';
import '../scss/components/_contact.scss';

const Contact = () => {
  return(
    <Element name="contact" className="footer">
      <div className='copyright'>
        <i className="fa fa-copyright" aria-hidden="true"><span className='words'> Robin Kuehn</span></i>
      </div>
      <div className="icons">
        <i className="fa fa-linkedin" aria-hidden="true"><span className='words'> <a href="https://www.linkedin.com/in/rykuehn">/in/rykuehn</a></span></i>
        <i className="fa fa-github" aria-hidden="true"><span className='words'> <a href="https://www.github.com/rykuehn"> @rykuehn </a></span></i>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
      </div>
    </Element>
  )
}

export default Contact;