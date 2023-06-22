import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Provider/AuthProvider';
import './Login.css'
const Login = () => {
    const [sts, setSts] = useState('')
    const navigate=useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const {user,loginUser,googleSignin, githubSignin}=useContext(Authcontext)
    const handleLogin=(event)=>{
        setSts('')
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        loginUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setSts("Login in Successful ")
            navigate(from, { replace: true })
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setSts(errorMessage)
          });
    }

    const handleGGoogleSignin=()=>{
        googleSignin()
        .then((result) => {
            const googleUser = result.user;
           
            navigate(from, { replace: true })
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setSts(errorMessage)
          });
    }

    const handleGithubSignin=()=>{
        githubSignin()
        .then((result) => {
            const gituser = result.user;
            navigate(from, { replace: true })
          }).catch((error) => {
            const errorMessage = error.message;
            setSts(errorMessage)
          });
      }


    return (
        <div className='d-flex  justify-content-center mt-5 '>
           
            <Form onSubmit={handleLogin} className='custom6 shadow p-5 border border-warning  rounded'>
                <h1 className='text-center text-warning'>Please Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type="password" placeholder="Password" />
                </Form.Group>
        
                <Button className='text-white' variant="warning " type="submit">
                    Submit
                </Button>
                <hr />
                <div className='d-grid justify-content-center'>
                    <div><button onClick={handleGGoogleSignin} className='my-1 btn btn-outline-primary'> <FaGoogle></FaGoogle> Signin with Google</button></div>
                    <div><button onClick={handleGithubSignin} className='my-1 btn btn-outline-warning'><FaGithub></FaGithub> Signin with GitHub</button></div>
                </div>
                <hr />
                <p className='text-center text-muted'>Don't have an account?? <Link to='/user/register'>Please Register</Link> </p>
                <p className='text-danger'>{sts}</p>
            </Form>

        </div>
    );
};

export default Login;