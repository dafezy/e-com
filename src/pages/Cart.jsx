import React from 'react'
import { RiH1 } from 'react-icons/ri'

const Cart = ({cart,setCart}) => {
    function handleIncrease (product){
        const productSelected = cart.find((singleCartItem)=> singleCartItem.id===product.id)
        if (productSelected){
            setCart(
                cart.map((oneItem)=>oneItem.id === product.id? {...productSelected,quantity:productSelected.quantity+1}: oneItem)
            )
        }
    }
    // function handleDecrease (product){
    //     const productSelected = cart.find((singleCartItem)=> singleCartItem.id=== product.id)
    //     if (productSelected.quantity === 1){
    //         setCart(cart.filter((oneItem)=>oneItem.id !== product.id))
    //     } else{
    //         setCart(
    //             cart.map((dd)=>
    //             dd.id === product.id?
    //             {...productSelected,quantity: productSelected.quantity-1}:dd))
    //             }
    //     }

    // }


    function handleDecrease (product){
        const productSelected = cart.find(
            (singleCartItem)=> singleCartItem.id === product.id
        )
        if(productSelected.quantity === 1){
            setCart(cart.filter((oneItem)=> oneItem.id !== product.id))
        } else {
            setCart(
                cart.map((dd)=>
                dd.id === product.id?
            {...productSelected,quantity: productSelected.quantity-1}: dd)
            )
        }
    }

    const totalPrice = cart.reduce((price,item)=> price+item.quantity * item.price,0)

  return (
    <div className='container'> 
   <div>
        {cart.length === 0 &&(
          <div className='text-center '>
            <h3 className='fs-1 fst-italic fw-bolder text-danger'>No item(s) in the cart</h3>
            <p className='fw-bolder text-success'>keep shopping....</p>
            <hr />
          </div>
        )}
      </div>
      <div>
        {cart.map((singleCrt)=>{
            const{image,id,title,price,quantity}= singleCrt
            return(
                <div key={id} 
                className='row justify-content-between align-items-center'> 
                    <div className='col-md-5 text-center' >
                        <img src={image} alt=""  className='w-75'/>
                    </div>
                    <div className='col-md-5  d-flex flex-column '>
                        <h2 className='text-danger'> {title}</h2>
                    </div>
                    <div>
                        <h4>{quantity}*{price}</h4>
                        <div className='d-flex gap-3'>

                        <div >
                            <button onClick={()=> handleIncrease(singleCrt)} className='btn btn-success btn-lg'>increase</button>
                
                        </div>
                        <div >
                            <button onClick={()=>handleDecrease(singleCrt)

                            } className='btn btn-danger btn-lg'>Decrease</button>
                
                        </div>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
      <div className='text-center'>
        {cart.length>=1 && (
            <div>
                <button onClick={()=> setCart([])} className='w-50 btn btn-danger mt-5 fs-5 fw-bold'>
                    {cart.length ===1 ?'clear item':'clear All'}</button>
            </div>
        )}
      </div>
      
      <div className='text-center'>
        {totalPrice===0? '': <h1>Total price:{totalPrice}</h1>} 
      </div>
      </div>
  )
}

export default Cart
