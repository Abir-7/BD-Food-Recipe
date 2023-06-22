import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../SharedPage/NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';

const LoginLogout = () => {
    return (
        <Container>
            <NavigationBar></NavigationBar>
                <Outlet></Outlet>
        </Container>
    );
};

export default LoginLogout;