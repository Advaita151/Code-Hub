// Login.js
import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../style.css';
import email_img from '../../resources/email.png';
import password_img from '../../resources/password.png';
import axios from "axios";



export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:5555/profile/login', { email, password });
        console.log('Login successful:', response.data);
        } catch (error) {
        console.error('Login failed:', error);
    }}

    return (
        <div className="gradient-background">
            <div className="container-login">
                <div className="header-login">
                    <div className="text-login"> Login </div>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input-group">
                        {/* For Email */}
                        <div className="input">
                            <img src={email_img} alt="" style={{ width: '28px', height: 'auto' }}/>
                            <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div> 
                    </div>
                    <div className="input-group">
                        {/* For Password */}
                        <div className="input">
                            <img src={password_img} alt="" style={{ width: '28px', height: 'auto' }}/>
                            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" onSubmit={handleSubmit} className="register-button">Login</button>
                    <div className="login-container">
                        <span style={{ marginRight: '0.4em' }}>New here ? </span>
                        
                        <Link to="/register" className="login-link">Register</Link>
                    </div>
                </div>
                </form>
                <div className="forgot">Forgot your password? <a href="rand.html">Click here</a></div>
            </div>
        </div>
    );
}
