import React from 'react';
import Skill1 from './Skills1';
const About = () => {

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',
    fontSize: 70
  };

  const styles2 = {
    display: 'flex',
    alignItems: 'center',
    height: '20vh' ,
    justifyContent: "center",
    fontSize: 20
  };
  const styles3 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh' ,
    fontSize: 40

  };
  return (
    <section >
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <h4 style={styles} className='font-bold text-gradient' >
        About Me
      </h4>
      </div>
      <div className='container mx-auto '  >
      <div className='flex max-w-max gap-x-6 items-center mb-10 '>
      <div>
        <h2 style={styles3} className='font-secondary font-bold' >
          Profile
        </h2>
        <h2>
        The mesmerizing world of theoretical computer science, mind-bending puzzles, and cutting-edge accessibility and human-computer interaction has me hooked! It's all about pushing limits, unleashing mind-blowing potential, and weaving a tech-infused tapestry that bridges the gap between humans and machines. 
        </h2>
      </div>
      <div>
        <h2 style={styles3} className='font-secondary font-bold '  >
          Skills 
        </h2>
        <h2 >
          {/* <Skill1 /> */}
          <text>PYTHON :: EXPERT
            <br/>C++ :: EXPERT
            <br/>C :: ADVANCE        
          </text>
      </h2>
      </div>
      </div>
      </div>
    
    </section>

);
  }

export default About;
