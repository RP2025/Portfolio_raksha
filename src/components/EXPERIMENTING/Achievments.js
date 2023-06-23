import React from 'react'
import AchiList from './AchiList'
const Achievments = () => {
  
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
        fontSize: 50
      };
  
    return (
        <section> 
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h4 style={styles} className='font-bold btn2 btn2-sm3 ' >
                    Achievements and Awards<br />
                </h4> 
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <AchiList />
            </div>
        </section>
  )
}

export default Achievments
