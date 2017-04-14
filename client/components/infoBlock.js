import React from 'react';
import '../scss/components/_infoblock.scss';

const InfoBlock = (props) => {
  return (
    <div className="block">
      <div className="left">
        <h1 className="heading"> {props.heading} </h1>
        <h2 className="subheading"> {props.subheading} </h2>
        {props.bullets !== undefined ? props.bullets.map((item, i) => {
          return <div className="bullet" key={i}>{item} </div>
        }) : ''}
      </div>
      <div className="location">
       <p className="extraLocation">{props.location}</p>
       <p className="extra">{props.dates}</p>
      </div>
    </div>
    )
}

export default InfoBlock;