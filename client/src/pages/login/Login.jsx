import React from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function navigateRegister() {
        navigate('/register')
    }

    function navigateHome() {
        navigate('/')
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">socialbook</h3>
                    <span className="loginDesc">Be social and connect to the world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput"></input>
                        <input placeholder="Password" className="loginInput"></input>
                        <button className="loginButton" onClick={() => navigateHome()}>Log In</button>
                        <button className='loginRegisterButton' onClick={() => navigateRegister()}>Create a New Account</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
