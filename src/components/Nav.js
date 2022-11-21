import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import "./style/Nav.css";

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
      navigate('/home');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='nav'>
    <Link to='/'>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
    </Link>
    {user?.email ? (
      <div className='nav nav_avatar'>
        <div className='nav_user'>
          <Link to='/account'>
            <button className='nav_user_avatar'>Account</button>
          </Link>
          <button
          className='nav_user_logout'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    ) : (
      <div className='nav nav_avatar'> 
        <div className='nav_user'>
          <Link to='/login'>
            <button className='nav_user_avatar fix'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button
            className='nav_user_logout fix'>
              Sign Up
            </button>
          </Link>
        </div>

      </div>  
    )}
    </div>
  )
}

export default Nav
