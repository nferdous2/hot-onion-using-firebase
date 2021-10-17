import React, { useState } from 'react';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "firebase/auth";
import './Login.css'
import { Link } from 'react-router-dom';
import initializeAuthenticatio from '../../Firebase/firebase.init'
import Button from '@restart/ui/esm/Button';
initializeAuthenticatio()
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
const Login = () => {
    const auth = getAuth();
    const [loggedInUser, setLoggedInUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // handle google sign in

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
            console.error("password must need to be at leaset 6 characters");
            return;
        } else {
            setPassword(e.target.value);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const { email, name, PhotoURL } = result.user;
                const userInfo = {
                    name: name,
                    email: email,
                    photo: PhotoURL,
                };
                setLoggedInUser(userInfo);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    const hanleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => { })
            .catch((err) => {
                console.log(err.message);
            });
    };
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const { email, name, PhotoURL } = result.user;
                const userInfo = {
                    name: name,
                    email: email,
                    photo: PhotoURL,
                };
                setLoggedInUser(userInfo);
                setError("");
            })
            .catch((err) => setError(err.message));
    };
    console.log(loggedInUser);
    return (
        <div>

            <h2>{loggedInUser.email}</h2>
            <div className="login-form d-flex align-items-center justify-content-center">
                <div className="login">
                    <div className="login-box">
                        <h2 className="text-info">Pease Login</h2>
                        <p className="text-danger">{error}</p>
                        <form onSubmit={handleLogin}>
                            <input
                                onChange={handleEmailChange}
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <input
                                onChange={handlePasswordChange}
                                className="input-felid"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <br />
                            <input
                                className="btn-log m-auto mt-3 w-25"
                                type="submit"
                                value="Login"
                            />
                        </form>
                        <Link to="/" className="forget">Forgot password</Link><br />
                        <span>Create a new account
                            <br /> <Link to="/register"><Button className="btn-log w-25">Register</Button></Link></span><br />
                        <p >----- Or login -----</p>
                    </div>
                    <div>
                        <button className="btn-log" onClick={handleGoogleSignIn}><i class="fab fa-google" />
                            Login with Google
                        </button>

                        <button className="btn-log" onClick={handleGithubSignIn}><i class="fab fa-twitter"></i>
                            Login with Github
                        </button>

                        <button className="btn-log" onClick={hanleResetPassword}>
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;