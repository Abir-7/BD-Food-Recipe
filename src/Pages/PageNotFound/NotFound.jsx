import React from 'react';
import notfound from '../../assets/404.gif'

import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div style={{ backgroundImage: `url(${notfound})`,height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}} >
            <Link to="/"><button className='btn btn-dark m-5'>Go Home</button></Link>
        </div>
    );
};

export default NotFound;