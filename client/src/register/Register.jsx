import React from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    function navigateLogin() {
        navigate('/login')
    }

    //save info once sumbitted to db, refresh to log in 
    
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">socialbook</h3>
                    <span className="loginDesc">Be social and connect to the world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input placeholder="Username" className="loginInput"></input>
                    <input placeholder="Email" className="loginInput"></input>
                        <input placeholder="Password" className="loginInput"></input>
                        <input placeholder="Retype Password" className="loginInput"></input>
                        <button className="loginButton" onClick={() => navigateLogin()}>Sign Up</button>
                        <button className="loginRegisterButton" onClick={() => navigateLogin()}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}