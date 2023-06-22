import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../SharedPage/NavigationBar/NavigationBar';
import Footer from '../SharedPage/Footer/Footer';
import "./Mainpage.css"

const Mainpage = () => {
    return (
        <Container>
            <div className='main'>
                <div>
                    <NavigationBar></NavigationBar>
                </div>
                <div className='outlet'>
                    <Outlet></Outlet>
                </div>
                <div className='footer'>
                    <Footer ></Footer>
                </div>
            </div>
        </Container>
    );
};

export default Mainpage;