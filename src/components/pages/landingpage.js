import React from 'react';
import '../style.css';
import bg from '../../resources/backvideo(low).mp4';
import Board from '../othercomponents/board';
import Upcoming from '../othercomponents/upcoming';

function Landingpage() {
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
  const getStartedButtonStyles = 'rounded-full bg-white py-2 px-4 text-black hover:bg-gray-200 focus:bg-gray-200'; 


  const mainStyles = {
    overflowX: 'hidden', 
  };

  const sectionStyles = {
    background: 'white',
    padding: '40px',
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
          <a style={navItemStyles}  href="#home">Home</a>
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

  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white flex items-center">
         
          <div className="mr-8">
            <h1 className="text-9xl font-bold mb-2 custom-font">Code Hub</h1>
            <p className="text-lg mb-4">Let us compete here in the arena</p>
            <button className={getStartedButtonStyles}>Get Started</button>
          </div>

          
          
        </div>
        
        <div className='pos-cards stylediv'><h2 className="text-4xl font-bold mb-4 text-white custom-font">Upcoming Contests</h2>
        <div className="cards">

            <Upcoming
              imageUrl="data:image/png;base64,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"
              title="CodeChef"
              description="Next is on : "
            />
            <Upcoming
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--mzwvoucO--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cer3l19eex0wy900b101.jpg"
              title="CodeForces"
              description="Next is on : "
            />
            <Upcoming
              imageUrl="https://leetcode.com/static/images/LeetCode_Sharing.png"
              title="LeetCode"
              description="Next is on : "
            />
          </div> </div>
</main>


      <section id="leaderboards-section" style={sectionStyles}>
        <h2>Leaderboards Section</h2>
        <Board> </Board>
        
      </section>
    </div>
  );
}

export default Landingpage;
