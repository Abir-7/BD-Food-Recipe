import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../SharedPage/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPage/Footer/Footer';
import './Mainpage.css'
const RecipePage = () => {
    return (

        <Container>
   <div>
   <div> <NavigationBar></NavigationBar></div>
          <div className='main'>  <Outlet></Outlet></div>
            <div className='mt-5 footer' >
                <Footer></Footer>
            </div>
   </div>
        </Container>

    );
};

export default RecipePage;