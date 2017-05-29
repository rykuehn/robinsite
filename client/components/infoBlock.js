import React from 'react';
import '../scss/main.scss';
import '../scss/components/_infoblock.scss';



const InfoBlock = (props) => {

  var printResume = function(){
     var PDF = document.getElementById('resume');
     PDF.focus();
     PDF.contentWindow.print();
  }

  var divToDisplay = props.display ?  
    <div className="right">
       <p className="extraLocation">{props.location}</p>
       <p className="extra">{props.dates}</p>
      </div> :

    <div className="right">
       <div className="print">
        <i className="fa fa-print" aria-hidden="true"></i>
        <p onClick={printResume}> Print Resume </p>
       </div>
       <div className="print">
        <i className="fa fa-download" aria-hidden="true"></i>
        <a href="client/static/KuehnResume.pdf" download='client/static/KuehnResume.pdf'> Download Resume </a>
       </div>
    <iframe id="resume" style={styles.iframe} src="client/static/KuehnResume.pdf"></iframe>
     </div>
    var subheading = props.display ? 
      <h2 className="heading sub"> {props.subheading} </h2> :
      <h2 className="heading sub about"> {props.subheading} </h2>

  return (
    <div className="baseComponentContainer block">
      <div className="left">
        <h1 className="heading"> {props.heading} </h1>
        {subheading}
        {props.bullets !== undefined ? props.bullets.map((item, i) => {
          return <div className="bullet" key={i}>{item} </div>
        }) : ''}
      </div>
      {divToDisplay}
    </div>
  )
}

var styles ={
  iframe: {
    visibility: 'hidden'
  }
}

export default InfoBlock;