// Login.js
import React from "react";
import { Link } from "react-router-dom";
import '../style.css';
import email_img from '../../resources/email.png';
import password_img from '../../resources/password.png';

export default function Login() {
    return (
        <div className="gradient-background">
            <div className="container-login">
                <div className="header-login">
                    <div className="text-login"> Login </div>
                </div>
                <div className="inputs">
                    <div className="input-group">
                        {/* For Email */}
                        <div className="input">
                            <img src={email_img} alt="" style={{ width: '28px', height: 'auto' }}/>
                            <input type="email" placeholder="Enter your Email"/>
                        </div> 
                    </div>
                    <div className="input-group">
                        {/* For Password */}
                        <div className="input">
                            <img src={password_img} alt="" style={{ width: '28px', height: 'auto' }}/>
                            <input type="password" placeholder="Enter your password"/>
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    <button className="register-button">Login</button>
                    <div className="login-container">
                        <span style={{ marginRight: '0.4em' }}>New here ? </span>
                        
                        <Link to="/register" className="login-link">Register</Link>
                    </div>
                </div>
                <div className="forgot">Forgot your password? <a href="rand.html">Click here</a></div>
            </div>
        </div>
    );
}
