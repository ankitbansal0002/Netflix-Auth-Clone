import React from 'react'
import './SiginPage.css'

function SiginPage() {

  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className='SiginUpPage'>
      <form>
        <h1>Sign In</h1>
        <input type= "email" placeholder='Email Address'/>
        <input type= "password" placeholder='Password'/>
        <button 
        onClick={signIn}
        className='Register'
        >Sigin In</button>
        <h2>
          <span className='signUpPage_text'>
          New to Netflix? </span> 
          <span 
          onClick={register}
          className='signUpPage_link'>
              SignUp Now.
          </span>
        </h2>
      </form>
    </div>
  )
}

export default SiginPage
