// Register.js
import React from "react";
import { Link } from "react-router-dom";
import '../style.css';
import email_img from '../../resources/email.png';
import person_img from '../../resources/person.png';
import password_img from '../../resources/password.png';
import leetcode_img from '../../resources/leetcodeicon.png';
import codechef_img from '../../resources/codecheficon.png';
import codeforces_img from '../../resources/codeforcesicon.png';
import college_img from '../../resources/college.png';

export default function Register() {
    return (
        <div className="gradient-background">
            <div className="container-login">
                <div className="header-login">
                    <div className="text-login"> SignUp</div>
                </div>
                <div className="inputs">
                    <div className="input-group">
                        {/* For name */}
                        <div className="input">
                            <img src={person_img} alt="" style={{ width: '30px', height: 'auto' }}/>
                            <input type="text" placeholder="Enter your Name"/>
                        </div>
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
                        {/* For CodeForces handle */}
                        <div className="input">
                            <img src={codeforces_img} alt="" style={{ width: '25px', height: 'auto' }}/>
                            <input type="text"placeholder="Codeforces Username" />
                        </div>
                    </div>
                    <div className="input-group">
                        {/* For CodeChef handle */}
                        <div className="input">
                            <img src={codechef_img} alt="" style={{ width: '23px', height: 'auto' }}/>
                            <input type="text" placeholder="Codechef Username"/>
                        </div>
                        {/* For LeetCode handle */}
                        <div className="input">
                            <img src={leetcode_img} alt="" style={{ width: '22px', height: 'auto' }}/>
                            <input type="text" placeholder="Leetcode Username"/>
                        </div>
                    </div>
                    {/* For College name */}
                    <div className="input-group">
                        <div className="input">
                            <img src={college_img} alt="" style={{ width: '35px', height: 'auto' }}/>
                            <input type="text" placeholder="Enter your College Name"/>
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    <button className="register-button">Register</button>
                    <div className="login-container">
                        <span style={{ marginRight: '0.4em' }}>Already have an account? </span>
                       
                        <Link to="/login" className="login-link">Log In</Link>
                    </div>
                </div>
                <div className="forgot">Forgot your password? <a href="rand.html">Click here</a></div>
            </div>
        </div>
    );
}
