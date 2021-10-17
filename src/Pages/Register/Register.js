import React, { useState } from 'react';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication()
const auth = getAuth();

const Register = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


            })
            .catch((error) => {

            });
    }
    return (
        <div>
            <div className="register d-flex align-items-center justify-content-center">
                <div className="register-container">
                    <div className="register-box">
                        <h2 className="text-info">Pease Register</h2>
                        <form onSubmit={handleOnSubmit}>

                            <input
                                onChange={handleEmailChange}
                                className="input-felid p-2 mb-2"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                required
                            />
                            <br />
                            <input
                                onChange={handlePasswordChange}
                                className="input-felid p-2"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                required
                            />
                            <input
                                className="mt-3 w-50 btn-register m-auto"
                                type="submit"
                                value="Register"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;