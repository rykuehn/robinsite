import React from 'react';
import '../scss/main.scss';

const SkillBar = (props) => {
  return (
    <div className="skillsgraph">
      <div> {props.name} </div>
      <div className="holder">
        {props.numbers.map(num => {
          if(num === 0){
            return <div className="skillbar zero"></div>;
          } else if (num === 1){
            return <div className="skillbar one"></div>;
          } else {
            return <div className="skillbar two"></div>;
          }
        }).reduce((prev, curr) => [prev, curr])}
      </div>
    </div>
  )
}

const Skills = () => {
  return(
    <div className="moveDown">
    <p className="projectsHeading"> SKILLS </p>
     <div className="centerIt"> 
      <div className="hello" >
        <SkillBar name="Javascript" numbers={[1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        <SkillBar name="React/Redux" numbers={[1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        <SkillBar name="HTML/CSS" numbers={[1, 1, 1, 1, 1, 1, 1, 1, 1]} />
        <SkillBar name="React-Native" numbers={[1, 1, 1, 1, 1, 1, 1, 0, 0]} />
        <SkillBar name="SQL" numbers={[1, 1, 1, 1, 1, 1, 1, 1, 0]} />
        <SkillBar name="MongoDB" numbers={[1, 1, 1, 1, 1, 1, 1, 1, 0]} />
        <SkillBar name="Node" numbers={[1, 1, 1, 1, 1, 1, 0, 0, 0]} />
        <SkillBar name="Express" numbers={[1, 1, 1, 1, 1, 1, 0, 0, 0]} />
      </div>
    </div>
  </div>
  )
}

export default Skills;