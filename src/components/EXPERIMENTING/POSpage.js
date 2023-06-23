import React from 'react'
import POSlist from './POSlist'
const POS = () => {
  
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
                Positions of responsibility<br />
                </h4> 
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <POSlist />
            </div>
        </section>
  )
}

export default POS
