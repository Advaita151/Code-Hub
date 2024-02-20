import "../style.css";
import img1 from "../../resources/adi.jpeg";
import img2 from "../../resources/adv.jpeg";
import "../team.css"

function Team() {
    const navStyles = {
        backgroundColor: 'rgba(0, 0, 0, 1)', 
        padding: '10px',
        
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
    
    
    
      
    
     
    
      const scrollToSection = () => {
        const section = document.getElementById('leaderboards-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
  let message = `Codehub was made by these two indivisuals in hope to get some pussy \n i am randomly typing anything i like cause tmkc`;
  return (
    <section className="white-section">
      <div className="container-team">
        <div className="row">
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
          <div className="col-md-12 text-center container-header">
            <h2 className="section-title">The Team Behind CodeHub</h2>
            <p className="section-subtitle">{message}</p>
          </div>
          <div className="container-new">
          <div className="col-sm-6 col-md-4 container-header2">
            <div className="team-item">
              <img src={img2} className="team-img" alt="advaita"></img>
              <h3> Advait Vedanta</h3>
              <div className="team-info">
                <p>MERN Stack Developer</p>
                <p>  Full Stack Developer with a passion for creating efficient and user-friendly web applications and
implementing cutting edge AI/ML solutions. Proficient in both front-end and back-end technologies. With a solid
understanding of MERN stack and database like firebase.</p>
                <ul className="team-icon">
                  <li>
                    <a href="https://twitter.com/Aditya__says/" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/who.is.adi/" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/adityasays" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/adityashukla190503/" className="linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 container-header2">
            <div className="team-item">
              <img src={img1} className="team-img" alt="aditya"></img>
              <h3> Aditya Shukla</h3>
              <div className="team-info">
                <p>MERN Stack Developer</p>
                <p> Enthusiastic emerging Full Stack Developer with a strong foundation in C++ and MERN Stack .
Eager to tackle complex web development projects and create seamless, user-friendly experiences. Passionate about honing
coding skills through competitive programming challenges</p>
                <ul className="team-icon">
                  <li>
                    <a href="https://twitter.com/AdvaitaVedant12?t=r2BTYqrWMjy90uHPky8q4A&s=09" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/atpack_151/" className="instagram">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Advaita151" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/advaita-vedanta-1b9340202/" className="linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Team;
