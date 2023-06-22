import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="mt-5 bg-dark text-white p-5 custom4">
            <Container >
                <Row >
                    <Col lg={4} md={6} sm={12}>
                        <div>              
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sagittis dolor. Aenean vitae ante sed nisl elementum maximus ac eu lectus.</p>
                            </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} >
                        <div>        
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li>123 Main Street</li>
                                <li>City, State 12345</li>
                                <li>Phone: (123) 456-7890</li>
                                <li>Email: info@example.com</li>
                            </ul>
                            </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div>
                            <h4>Follow Us</h4>
                            <ul  >
                                <li ><a className='text-decoration-none text-warning' href="#">Facebook</a></li>
                                <li><a className='text-decoration-none text-warning' href="#">Twitter</a></li>
                                <li><a className='text-decoration-none text-warning' href="#">Instagram</a></li>
                                <li><a className='text-decoration-none text-warning' href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;