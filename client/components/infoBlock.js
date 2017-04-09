import React from 'react';

const InfoBlock = (props) => {
  return (
    <div style={styles.block}>
      <div>
        <h1 style={styles.heading}> {props.subheading} </h1>
        <h2> {props.heading} </h2>
        {props.bullets.map((item, i) => {
          return <div key={i} > - {item} </div>
        })}
      </div>
      <div>
      May 2017-April 2018
      </div>
    </div>
    )
}

const styles = {
  block: {
     fontFamily: 'Pavanam',
     display: 'flex',
     border: '1px solid green',
     justifyContent: 'space-between',
     width: '100vmin'
  },
  heading: {
    fontFamily: 'Pavanam',
    fontSize: '18px',
    border: '1px solid blue',
    paddingTop: '0px',
    marginTop: '0px'
  }
}

export default InfoBlock;