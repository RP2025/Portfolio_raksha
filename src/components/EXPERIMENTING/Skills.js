import React from 'react'

const Skills = () => {
  
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
<section>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <h4 style={styles} className='font-bold text-gradient' >
        Skills

      </h4>
      </div>
      <div className='container mx-auto '  >
      <div className='flex gap-x-6 items-center mb-10 '>
      <div>
  
      <h1>
        <br />
      </h1>
        <h2 >

        <text>PYTHON :: EXPERT
            <br/>C++ :: EXPERT
            <br/>C :: ADVANCE        
          </text></h2>
      </div>
      
      </div>
      </div>

</section>
);}

export default Skills;
;