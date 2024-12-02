import React from 'react'
import Hero1 from '../layouts/Hero1'





const Home = ({cart, handleAddToCart,setCart}) => {
  return (
    <div>
        <Hero1 cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
       
       </div>
  )
}

export default Home
