import React from 'react'
import useFetch from '../customHook/useFetch'
import { useParams } from 'react-router-dom'
import Card from "react-bootstrap/Card";

const SingleProduct = () => {
  const{id}= useParams()
    const {data,loading}= useFetch(`https://fakestoreapi.com/products/${id}`)
    const{title,price,image,description}= data
  return (
    <div>
        <div>
        <div className='row justify-content-between align-items-center mt-4'>
                <div className='col-sm-12 text-center col-md-4'>
                <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={image} className="img-fluid " />
                 </Card>
                </div>

                <div className='col-sm-12 col-md-7'>
                    <h1 className='text-danger fw-
                    bold'>{title}</h1>
                    <h4 className='text-success lh-base'>{description}</h4>
                    <h3>{price}</h3>
                <button className="btn btn-primary btn-lg w-50 fs-5">Add Cart</button>
              
                </div>
                
                

            </div>
        </div>

    </div>
  )
}

export default SingleProduct
