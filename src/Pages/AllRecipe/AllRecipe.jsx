import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import banner from '../../assets/banner2.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import './AllRecipe.css'
import RecipeCard from '../RecipeCard/RecipeCard';
import { FaThumbsUp } from 'react-icons/fa';
const AllRecipe = () => {
    const data = useLoaderData()
    const recipes = data.recipe;

    if (!recipes){
        return <Navigate to='*'></Navigate>
    }

    const { name,bio, numberOfRecipes, likes, yearsOfExperience, picture } = data;
    return (
        <div>
            <div className=' custom1 d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <Container >
                    <Row className='align-items-center' >
                        <Col className='text-center' sm>
                            <img src={picture} style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "50%" }} alt="" />
                            <h3 className='text-warning mt-3'>{name}</h3>
                        </Col>
                        <Col sm>
                            <h6 className='mt-1 text-warning text-left custom2'>{bio}</h6>
                            <p className='text-white'>  Experience: <span className='text-warning'>{yearsOfExperience}years</span></p>
                            <p className='text-white'>Total Recipes: <span className='text-warning'>{recipes.length}</span></p>
                            <div className='d-flex align-items-center'>
                                <div><p className='text-white'>Likes: <span className='text-warning'>{likes}</span>  </p> </div>
                                <div className=' text-warning mx-2 mb-4'><FaThumbsUp></FaThumbsUp> </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

           <div className='my-3'><h1 className='text-warning text-center'>Recipes</h1></div>
           <hr />

            <div>
        
                <Row className='g-4' xs={1} md={3}>


                    {
                        
                        recipes?.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} ></RecipeCard>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default AllRecipe;