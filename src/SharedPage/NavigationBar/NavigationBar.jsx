import React, { useContext } from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Provider/AuthProvider';
import './NavigationBar.css';

const NavigationBar = () => {

  //////////tooltip//////////////

  const Links = ({ id, children, title }) => (
    <OverlayTrigger placement='bottom' overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a>{children}</a>
    </OverlayTrigger>
  );


  const { user, loader, logoutUser } = useContext(Authcontext)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>BD Food-Recipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2">
            <NavLink className={({ isActive }) => isActive ? " text-decoration-none mx-2 active" : "text-secondary text-decoration-none mx-2"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-decoration-none mx-2 active" : "text-secondary text-decoration-none mx-2"} to="/blog">Blog </NavLink>
          </Nav>
          <Nav>
            
       {  user ? <div>  <Links title={user?.displayName} id="t-1" ><img style={{ width: "40px", objectFit: "cover", height: "40px", borderRadius: "50%" }} src={user?.photoURL} alt="" /></Links>
              <button onClick={logoutUser} className='btn btn-warning text-white fw-bold my-2 mx-3'>Logout</button> </div> : <><button className='btn btn-warning text-white fw-bold mx-3'><Link className='text-white secondary text-decoration-none' to='/user/login'>Login</Link></button></>}
              
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
