import React, {useState, useEffect} from 'react'
// import { auth } from './src/firebase';
import './LoginPage.css';
import SignInPage from './SiginPage';
import SignUpPage from './signUpPage';


function LoginPage() {
    
    const [signIn, setSignIn] = useState(false);


    return (
            <div className="loginScreen">
                <div className="loginScreen_upper">
                    {/* <a href="#"> */}
                        <img className="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"/>
                    {/* </a> */}
                        <button
                        onClick={() => setSignIn(true)} 
                        className='SignUp-button'>
                            Sign In
                        </button>
                        <div className='loginScreen_gradient'/>
                </div>
                <div className='loginScreen_body'>
                    {signIn ?
                        (<SignInPage/>)
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
