import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Provider/AuthProvider';

const Register = () => {
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const { createUser, updateUserProfile } = useContext(Authcontext);
    const [sts, setSts] = useState('')
    const handleReg = (event) => {
        setSts('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password, photo, name)
   
        if (password.length <= 5) {
            setSts("Password Should be Six Charecters")
            console.log(password.length)
            return ;
        }
        if (!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/.test(password)) {
            setSts("Password Should Contain: One Uppercase,One Lower Case and One Number");
            return
          }

        createUser(email, password)
            .then((userCredential) => {
                const logedUser = userCredential.user;
                console.log(logedUser);
                updateUserProfile(name, photo)
                setSts('Account Create Successful')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setSts(errorMessage)
                console.log(errorMessage)
            });


    }

    return (
        <div className='d-flex  justify-content-center mt-5 '>

            <Form onSubmit={handleReg} className='shadow p-5 custom6 border border-warning  rounded'>
                <h1 className='text-center text-warning'>Please Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required name='name' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control required name='photo' type="text" placeholder="Enter Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button className='text-white' variant="warning " type="submit">
                    Register
                </Button>
                
                <hr />
                <p className='text-center text-muted'>Already have an account?? <Link to='/user/login'>Please Login</Link> </p>
                <p className='text-danger'>{sts}</p>
            </Form>

        </div>
    );
};

export default Register;