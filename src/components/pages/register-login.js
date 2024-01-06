import React from "react";
import '../style.css';
import email_img from '../../resources/email.png';
import person_img from '../../resources/person.png';
import password_img from '../../resources/password.png';
import leetcode_img from '../../resources/leetcodeicon.png';
import codechef_img from '../../resources/codecheficon.png';
import codeforces_img from '../../resources/codeforcesicon.png';
import college_img from '../../resources/college.png';

export default function Register()
{
    return(<div className="gradient-background">
        <div className="container-login">
            <div className="header-login">
                <div className="text-login"> Singup</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

   {/* For name  */}

                <div className="input">
                    <img src={person_img} alt="" style={{ width: '30px', height: 'auto' }}/>
                    <input type="text"/>
                </div>

{/* For Email  */}

                <div className="input">
                    <img src={email_img} alt="" style={{ width: '28px', height: 'auto' }}/>
                    <input type="email"/>
                </div> 

{/* For Password */}

                <div className="input">
                    <img src={password_img} alt="" style={{ width: '28px', height: 'auto' }}/>
                    <input type="password"/>
                </div>

{/* For CodeForces handle */ } 

                <div className="input">
                    <img src={codeforces_img} alt="" style={{ width: '25px', height: 'auto' }}/>
                    <input type="text"/>
                </div>

{/* For CodeChef handle */} 

                <div className="input">
                    <img src={codechef_img} alt="" style={{ width: '23px', height: 'auto' }}/>
                    <input type="text"/>
                </div>

{/* For LeetCode handle */} 

                <div className="input">
                    <img src={leetcode_img} alt="" style={{ width: '22px', height: 'auto' }}/>
                    <input type="text"/>
                </div>

{/* For College name  */ }

                <div className="input">
                    <img src={college_img} alt="" style={{ width: '35px', height: 'auto' }}/>
                    <input type="text"/>
                </div>


            </div>
            <div className="forgot">Lost you Password ? <span>Click here</span></div>
            <div className="submit-container">
                <div className="">Register</div>
                <div className="">Login</div>
            </div>
  

        </div> </div>
    )
}