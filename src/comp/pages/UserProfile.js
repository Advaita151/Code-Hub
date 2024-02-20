import React, { useState } from 'react';
import bg from '../../resources/bg2.mp4';
import '../UserProfile.css'; 
import img from '../../resources/adi.jpeg'

const UserProfile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({
    name: "Sample Name",
    email: "SampleName@example.com",
    codeforcesUsername: "SampleName_cf",
    codechefUsername: "SampleName_cc",
    leetcodeUsername: "SampleName_lc",
  });

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    // function to handle the save click
    setIsEditable(false); 
    // send updated userData to the server
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const videoStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const navStyles = {
    backgroundColor: 'rgba(0, 0, 0, 1)', 
    padding: '10px',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navTitleStyles = {
    margin: 0, 
    fontSize: '1.5rem', 
    transition: 'font-size 0.3s ease', 
  };

  const navItemStyles = {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none',
    padding: '8px 16px', 
    borderRadius: '5px', 
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const profileCircleStyles = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: 'auto', 
  };

  const mainStyles = {
    overflowX: 'hidden', 
  };

  const scrollToSection = () => {
    const section = document.getElementById('leaderboards-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={mainStyles}>
      <div style={navStyles}>
        <div>
          <h2 style={navTitleStyles} className="text-white">Code Hub</h2>
        </div>
        <div className='hoverstyle' style={{ display: 'flex', alignItems: 'center' }}>
          <a style={navItemStyles} href="#home">Home</a>
          <a style={navItemStyles} href="#home">About Us</a>
          <a style={navItemStyles} href="#leaderboards" onClick={scrollToSection}>Leaderboards</a>
          <a style={navItemStyles} href="#question-bank">Practice</a>
          <div style={profileCircleStyles}>P</div>
        </div>
      </div>

      <main className="relative h-screen w-screen">
        <video autoPlay loop muted style={videoStyles}>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='user-detail-container'>
          <div className='user-detail imger'>
            <img src={img} alt="User" />
          </div>
          <div className='user-detail first'>
            <label>Name:</label>
            {isEditable ? (
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.name}</span>
            )}
          </div>
          <div className='user-detail'>
            <label>Email:</label>
            {isEditable ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.email}</span>
            )}
          </div>
          <div className='user-detail'>
            <label>Codeforces Username:</label>
            {isEditable ? (
              <input
                type="text"
                name="codeforcesUsername"
                value={userData.codeforcesUsername}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.codeforcesUsername}</span>
            )}
          </div>
          <div className='user-detail'>
            <label>Codechef Username:</label>
            {isEditable ? (
              <input
                type="text"
                name="codechefUsername"
                value={userData.codechefUsername}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.codechefUsername}</span>
            )}
          </div>
          <div className='user-detail'>
            <label>Leetcode Username:</label>
            {isEditable ? (
              <input
                type="text"
                name="leetcodeUsername"
                value={userData.leetcodeUsername}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userData.leetcodeUsername}</span>
            )}
          </div>
          {isEditable ? (
            <button onClick={handleSaveClick}>Save</button>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
