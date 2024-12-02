import React from 'react'
import Marquee from 'react-fast-marquee'

const marque = () => {

    const adds = 'YOU ORDER WE DELIVER'
  return (
    <div>
        
      <Marquee style={{backgroundColor: 'red', color:'white', height:'4rem'}}>
      <div ></div>
        
      <h1>{adds} <span style={{backgroundColor: 'blue'}}> FOR FREE</span></h1>
      </Marquee>
     
    </div>
  )
}

export default marque
