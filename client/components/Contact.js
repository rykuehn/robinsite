import React from 'react';
import '../scss/components/_contact.scss';

const Contact = () => {
  return(
    <div className="footer">
      <div className='copyright'>
        <i className="fa fa-copyright" aria-hidden="true"><span className='words'> Robin Kuehn</span></i>
      </div>
      <div className="icons">
        <i className="fa fa-linkedin" aria-hidden="true"><span className='words'> /in/rykuehn</span></i>
        <i className="fa fa-github" aria-hidden="true"><span className='words'> @rykuehn</span></i>
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default Contact;