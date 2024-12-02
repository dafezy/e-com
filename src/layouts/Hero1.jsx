import React from "react";
import "../styles/hero.css";
import useFetch from "../customHook/useFetch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from  "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const Hero1 = ({handleAddToCart}) => {
    const {data: data, loading: loading}= useFetch('https://fakestoreapi.com/products/14')

    const{data: data2, loading:loading2}= useFetch("https://fakestoreapi.com/products/category/men's clothing")
    // const{data: data3, loading:loading3}= useFetch('https://fakestoreapi.com/products/category/jewelery')
    const notify =()=>{
        toast("am item has been added",{
            // position:toast.POSITION.TOP_CENTER
        })
    }
    return (
    <div className='container mt-4 hero-container'>
        <h1 className="text-center">{loading && <ClipLoader/>}</h1>
        <div className='row justify-content-between gap-5'>

       <div className='col-lg-6 col-sm-12 shadow-sm'>
        <Card style={{width:'100%'}}>
            <Link to={`/SingleProduct/${data.id}`}>
        <Card.Img variant="top" src={data.image} />
        </Link>
        <Card.Body>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>

      <div className='col-lg-5 col-sm-12'>
        <div className='card-container'>
            {
                data2.map((datum2)=>{
                    const {id,title, image,price}= datum2
                    return(
                    <div key={id} className='card-inner text-center h-25'>
      <Card className='class' style={{ width: '18rem' }}>
      <Link to={`/SingleProduct/${data.id}`}>
      <Card.Img variant="top" src={image} className='w-75 card-container-img'/>
      </Link>
        <Card.Body>
          <Card.Title>{title.slice(0.5)}</Card.Title>
          <Card.Text>
           ${price}
          </Card.Text>
          <Button onClick={()=>{handleAddToCart(datum2);notify()}} variant="primary">add to cart</Button>
                        <ToastContainer/>
        </Card.Body>
      </Card>
      </div>
                    )
                })
            }
      </div>
      </div>
      </div>
      </div>
      {/* <div>
      <div className='col-lg-5 col-sm-12'>
        <div className='card-container'>
            {
                data3.map((datum2)=>{
                    const {id,title, image,price}= datum2
                    return(
                    <div key={id} className='card-inner text-center h-25'>
      <Card className='class' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} className='w-75 card-container-img'/>
        <Card.Body>
          <Card.Title>{title.slice(0.5)}</Card.Title>
          <Card.Text>
           ${price}
          </Card.Text>
          <Button variant="primary">add to cart</Button>
        </Card.Body>
      </Card>
      </div>}
      </div> */}
    </div>
  )
}

export default Hero1
