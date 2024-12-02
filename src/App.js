import logo from './logo.svg';
import './App.css';
import Marque from './layouts/Marque';
import NavBar from './layouts/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Hero from './layouts/Hero';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct';
import Home from './pages/Home';
import { useEffect, useState } from 'react'
import Cart from './pages/Cart'



function App() {
  const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart'))||[]
  const [cart, setCart]= useState(cartItemsFromLocalStorage)
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  let handleAddToCart = (product)=>{
    const productSelected=cart.find(
      (singleCart)=> singleCart.id === product.id
    )
    if(productSelected){
      setCart(
        cart.map((oneItem)=>
        oneItem.id === product.id?{...productSelected,quantity: productSelected.quantity +1}:oneItem)
      )
    } else{
      setCart([...cart, {...product,quantity:1}])
    }
  }

  return (
    <div className="App ">
       
      <BrowserRouter>
      <NavBar cart={cart}/>
      <Routes>
        <Route  index element= {<Home cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>}/>
        <Route path='/SingleProduct/:id'  element={<SingleProduct />}/>

        <Route path='/Cart' element={<Cart cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>}/>
      
      </Routes>
      </BrowserRouter>
      
     
      </div>
  );
}

      


export default App;
