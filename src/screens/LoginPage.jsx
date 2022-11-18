import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
// import { auth } from './src/firebase';
import './LoginPage.css';
import SignInPage from './SiginPage';
import SignUpPage from './signUpPage';


function LoginPage({fix, check}) {
    
    const [signIn, setSignIn] = useState(false);

    return (
            <div className="loginScreen">
                <div className="loginScreen_upper">
                    <Link to="/">
                        <img 
                        className="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"/>
                    </Link>    
                        <button
                        onClick={() => setSignIn(true)} 
                        className='SignUp-button'>
                            {signIn ? 
                                (<Link to='/signup' className='fix'>Sign Up</Link>) : 
                                (<Link to='/login' className='fix'>Sign In</Link>)}
                        </button>
                        <div className='loginScreen_gradient'/>
                </div>
                <div className='loginScreen_body'>
                    {signIn || fix == 'true' ?
                        ((check == 'x' ? (<SignUpPage/>) :(<SignInPage/>)))
                            :
                        (
                        <>
                            <h1>Unlimited films, TV programmes and more</h1>
                            <h2>Watch anywhere. Cancel at any time</h2>
                            <h3>Ready to watch? Enter you email to create or restart your membership.</h3>
                            <div className="loginScreen_User">
                                <form>
                                    <input className='loginScreen_input' type="email" placeholder="Enter Email / Phone Address" autoComplete= "off" />
                                    <button
                                    onClick={() => setSignIn(true)}
                                     className='loginScreen_SignUp'>
                                        Get Started
                                    </button>
                                </form>
                            </div>
                        </>    
                        )}
                </div>
            </div>
	);
}

export default LoginPage
