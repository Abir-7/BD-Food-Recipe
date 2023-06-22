import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import LazyLoad from 'react-lazyload';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'







const RecipeCard = ({recipe}) => {
    const [fav,setFav]=useState(true)
   const favChng=()=>{
    setFav(false)
    toast("Add To Favorite")
   }

    let key=0;
    const{name,ingredients,cookingMethod,rating,image}=recipe;

    return (
        <Col>
        <Card className='h-100 bg-dark text-white '>
            <div>
                <LazyLoad height={"100%"}>
                <Card.Img variant="top" src={image} />
                {/* <img width={"100%"} src={image} alt="" /> */}
                </LazyLoad>
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
        <p className='fw-bold text-warning'>Ingredients</p>
        <ul>
            {
                ingredients.map(item=><li key={key++}>{item}</li>)
            }
        </ul>
        <p className='text-warning'> Cooking-Mathods: <span className='text-white' >{cookingMethod}</span></p>
                   
      
            </Card.Body>


            <Card.Footer className='d-flex align-items-center'>
        <div className='flex-grow-1'> <small className="text-muted d-flex"><span className='text-warning d-flex '>{rating} <Rating className='mx-2' readOnly halfFillMode="svg" style={{ maxWidth: 100 }} value={rating} /> </span> </small> </div>
            <div><button onClick={favChng} className={fav ? "btn btn-warning":"btn btn-warning disabled"} ><FaHeart></FaHeart></button> </div>
            <ToastContainer />
            </Card.Footer>
        </Card>
    </Col>
    );
};

export default RecipeCard;