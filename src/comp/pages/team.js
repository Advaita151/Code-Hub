import "../style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import UserInitials from "../othercomponents/userInitials.js";
import axios from "axios";
import img1 from "../../resources/adi.jpeg";
import img2 from "../../resources/adv.jpeg";
import "../team.css";

function Team() {
  const [userName, setUserName] = useState("P");

  const [menuOpen, setMenuOpen] = useState(false);

 

  const navStyles = {
    backgroundColor: "rgba(0, 0, 0, 1)",
    padding: "10px",
    position: "sticky",
    top: 0,

    width: "100%",
    zIndex: 1000,
    transition: "color 0.3s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const mainStyles = {
    overflowX: "hidden",
    width: "100vw",
  };
  const navTitleStyles = {
    margin: 0,
    fontSize: "1.5rem",
    transition: "font-size 0.3s ease",
  };

  const navItemStyles = {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const profileCircleStyles = {
    width: "30px",
    height: "30px",
    marginLeft: "2em",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: "2em",
  };

  const scrollToSection = () => {
    const section = document.getElementById("leaderboards-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/user/details`, {
          withCredentials: true,
        });
        setUserName(response.data.name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  let message = `CodeHub, envisioned and developed by two BTech  students, is a dynamic platform designed for college students. It offers a live leaderboard showcasing rankings across various coding platforms, fostering healthy competition and inspiring students to excel. Additionally, it features competition reminders and an  practice arena (currently under dev) , enhancing coding skills and promoting a vibrant learning community.`;
  return (
    <div style={mainStyles}>
      {/* Navbar */}
      <div style={navStyles}>
        <div>
          <h2 style={navTitleStyles} className="text-white">
            Code Hub
          </h2>
        </div>

        <div className="hamburger-menu" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navbar links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" style={navItemStyles}>
            Home
          </Link>
          <Link to="/" style={navItemStyles}>
            Leaderboards
          </Link>
          <Link to="/team" style={navItemStyles}>
            About Us
          </Link>
          <a style={navItemStyles} href="#question-bank">
            Practice
          </a>
        </div>
        <div style={profileCircleStyles}>
          <Link to="/profile">
            <UserInitials name={userName} />
          </Link>
        </div>
      </div>

      <div className="container-team">
        <div className="col-md-12 text-center container-header">
          <h2 className="section-title">The Team Behind CodeHub</h2>
          <p className="section-subtitle">{message}</p>
        </div>
        <div className="container-new">
          <div className="col-sm-6 col-md-4 container-header2">
            <div className="team-item">
              <img src={img2} className="team-img" alt="advaita" />
              <h3> Advaita Vedanta</h3>
              <div className="team-info">
                <p>MERN Stack Developer</p>
                <p>
                  {" "}
                  Full Stack Developer with a passion for creating efficient and
                  user-friendly web applications and implementing cutting edge
                  AI/ML solutions. Proficient in both front-end and back-end
                  technologies. With a solid understanding of MERN stack and
                  database like firebase.
                </p>
                <ul className="team-icon">
                  <li>
                    <a
                      href="https://twitter.com/AdvaitaVedant12?t=r2BTYqrWMjy90uHPky8q4A&s=09"
                      className="twitter"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/atpack_151/"
                      className="instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Advaita151" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/advaita-vedanta-1b9340202/"
                      className="linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 container-header2">
            <div className="team-item">
              <img src={img1} className="team-img" alt="aditya" />
              <h3> Aditya Shukla</h3>
              <div className="team-info">
                <p>MERN Stack Developer</p>
                <p>
                  {" "}
                  Enthusiastic emerging Full Stack Developer with a strong
                  foundation in C++ and MERN Stack . Eager to tackle complex web
                  development projects and create seamless, user-friendly
                  experiences. Passionate about honing coding skills through
                  competitive programming challenges
                </p>
                <ul className="team-icon">
                  <li>
                    <a href="" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/who.is.adi"
                      className="instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/adityasays" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/adityashukla190503/"
                      className="linkedin"
                    >
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
  );
}
export default Team;
