import React from 'react';

const InfoBlock = (props) => {
  return (
    <div style={styles.block}>
      <div>
        <h1 style={styles.heading}> {props.subheading} </h1>
        <h2 style={styles.subheading}> {props.heading} </h2>
        {props.bullets !== undefined ? props.bullets.map((item, i) => {
          return <div style={styles.bullet} key={i} > - {item} </div>
        }) : ''}
      </div>
      <div>
       <p style={styles.extra}>{props.location}</p>
       <p style={styles.extra}>{props.dates}</p>
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
  },
  heading: {
    fontFamily: 'Pavanam',
    fontSize: '18px',
    border: '1px solid blue',
    paddingTop: '0px',
    marginTop: '0px',
    marginBottom: '0px',
    marginRight: '5vmin'
  },
  subheading: {
    fontFamily: 'Pavanam',
    fontSize: '15px',
    border: '1px solid green',
    marginTop: '0px'
  },
  bullet: {
    border: '1px solid red'
  },
  extra: {
    margin: '0px'
  }
}

export default InfoBlock;