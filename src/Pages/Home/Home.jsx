import React from 'react';
import banner from '../../assets/banner.jpg'
import banner3 from '../../assets/banner3.jpg'
import Chefcard from './Chefcard';
import { useLoaderData } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css'
import { FaArrowRight } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Home = () => {
    const chefdata = useLoaderData();

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${banner})`, height: '500px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <div>
                    <h1 className='text-warning text-center ' >Welcome to BD Food-Recipe</h1>
                    <p className='text-white text-center' >Here you can find recipe that you want to try at home</p>
                </div>
            </div>

            <div className='mt-5' >
                <h1 className='text-warning p-0 mb-3 text-center'>Our Chefs</h1>
                <hr />
                <Row className='g-4' xs={1} md={3}>

                    {
                        chefdata.map(chef => <Chefcard key={chef.id} chef={chef} ></Chefcard>)
                    }

                </Row>
            </div>

            <div className='mx-0'>
                <h1 className='my-3 text-center text-warning'>Top recipes</h1>
                <hr></hr>
                <Row xs={1} md={3}>

                    <Col className='my-2'>
                        <Card className='bg-secondary text-white'>

                            <LazyLoad height={"100%"}>
                                <Card.Img variant="top" src={chefdata[2].recipe[3].image} />
                            </LazyLoad>

                            <Card.Body>
                                <Card.Title>{chefdata[2].recipe[3].name}</Card.Title>
                                <Card.Footer className='text-warning d-flex'>
                                    {chefdata[2].recipe[3].rating}
                                    <Rating className='mx-2' readOnly halfFillMode="svg" style={{ maxWidth: 100 }} value={chefdata[2].recipe[3].rating} />
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='my-2'>
                        <Card className='bg-secondary text-white'>
                            <LazyLoad height={"100%"}>
                                <Card.Img variant="top" src={chefdata[3].recipe[1].image} />
                            </LazyLoad>

                            <Card.Body>
                                <Card.Title>{chefdata[3].recipe[1].name}</Card.Title>
                                <Card.Footer className='text-warning d-flex'>
                                    {chefdata[3].recipe[1].rating}
                                    <Rating className='mx-2' readOnly halfFillMode="svg" style={{ maxWidth: 100 }} value={chefdata[3].recipe[1].rating} />
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='my-2'>

                        <Card className='bg-secondary text-white '>
                            <LazyLoad height={"100%"}>
                                <Card.Img variant="top" src={chefdata[1].recipe[1].image} />
                            </LazyLoad>
                            <Card.Body>
                                <Card.Title>{chefdata[1].recipe[1].name}</Card.Title>
                                <Card.Footer className='text-warning d-flex'>
                                    {chefdata[1].recipe[1].rating}
                                    <Rating className='mx-2' readOnly halfFillMode="svg" style={{ maxWidth: 100 }} value={chefdata[1].recipe[1].rating} />
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </div>

            <div className=''>
                <hr />
                <div className=' custom3 my-5 d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${banner3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                    <div>
                        <h1 className='text-warning text-center ' >Subscribe to my Newsletter</h1>
                        <p className='text-white text-center' >We will keep you posted with new recipes and updates!</p>
                        <div className='d-flex justify-content-center'>

                            <input className='form-control mx-2' type="email" />
                            <button className='btn btn-outline-warning mx-2'><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;