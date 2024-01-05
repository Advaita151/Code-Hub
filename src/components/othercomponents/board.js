import React from "react";
import '../style.css';
export default function Board(){
    const getStartedButtonStyles = 'rounded-full bg-black py-1 px-2 text-white  hover:bg-green-900 focus:bg-green-900'; 
    return(
        <div className="board">
          <h1 className=" text-4xl text-black-600 font-extrabold">Leaderboards</h1>
          <div className="platforms">
          <button className={getStartedButtonStyles}>CodeForces</button>
          <button className={getStartedButtonStyles}>CodeChef</button>
          <button className={getStartedButtonStyles}>LeetCode</button>
          </div>

        </div>
    )
}