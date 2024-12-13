import React from 'react';
import './register.css';

export default function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">socialbook</h3>
                    <span className="loginDesc">Reach out and connect to the world around you on socialbook</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input placeholder="Username" className="loginInput"></input>
                    <input placeholder="Email" className="loginInput"></input>
                        <input placeholder="Password" className="loginInput"></input>
                        <input placeholder="Retype Password" className="loginInput"></input>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}