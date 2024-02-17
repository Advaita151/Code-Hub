import React, {useState,useEffect} from "react";
import axios from "axios";
import '../style.css';

export default function Board(){
    const getStartedButtonStyles = 'rounded-full bg-black py-1 px-2 text-white  hover:bg-green-900 focus:bg-green-900'; 
    const [leaderboard, setLeaderboard] = useState([]);
  const [currentLeaderboard, setCurrentLeaderboard] = useState('codeforces');

  useEffect(() => {
    fetchLeaderboard(currentLeaderboard);
  }, [currentLeaderboard]);

  const fetchLeaderboard = async (platform) => {
    try {
      const response = await axios.get(`http://localhost:5555/board/${platform}`);
      setLeaderboard(response.data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  const handleSelectLeaderboard = (platform) => {
    setCurrentLeaderboard(platform);
  };
    return(
        <div className="board">
          <h1 className=" text-4xl text-black-600 font-extrabold">Leaderboards</h1>
          <div className="platforms">
          <button onClick={() => handleSelectLeaderboard('codeforces')} className={getStartedButtonStyles}>CodeForces</button>
          <button onClick={() => handleSelectLeaderboard('codechef')} className={getStartedButtonStyles}>CodeChef</button>
          <button onClick={() => handleSelectLeaderboard('leetcode')} className={getStartedButtonStyles}>LeetCode</button>
          </div>
          <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.forcesRating}</td>
              </tr>
            ))}
          </tbody>
        </table>
          

        </div>
    )
}