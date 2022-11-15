import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../src/context/AuthContext';
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false)
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

 
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleshow(true)
  //     } else handleshow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll")
  //   }
  // }, []);


  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        onClick={handleLogout}
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
  )
}

export default Nav
