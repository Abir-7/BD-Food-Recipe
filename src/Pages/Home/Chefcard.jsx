import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const Chefcard = ({ chef }) => {

    const { id, name, numberOfRecipes, likes, yearsOfExperience, picture } = chef
    return (
    
        <Col>
            <Card className='h-100 bg-dark text-white '>
                <div className='h-100'>
             

                <LazyLoad height={200}>
                <Card.Img variant="top" src={picture} />
                </LazyLoad>

                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <p>  Experience: <span className='text-warning'>{yearsOfExperience}years</span></p>
                    <p>Total Recipes: <span className='text-warning'>{chef.recipe.length}</span></p>

                </Card.Body>
                <Card.Footer className='d-flex align-items-center'>
                    <div className='flex-grow-1 d-flex align-items-center'> 
                   <div> <small className="text-muted">Likes: <span className='text-warning'>{likes}</span> </small></div>
                    <div className=' text-warning mx-2 mb-2'><FaThumbsUp></FaThumbsUp> </div>
                     </div>
                     <div> <Button className='btn btn-secondary '><Link className='text-warning text-decoration-none' to={`/chef/${id}`}>View Recipe</Link></Button></div>
                </Card.Footer>
            </Card>

        </Col>


    );
};

export default Chefcard;