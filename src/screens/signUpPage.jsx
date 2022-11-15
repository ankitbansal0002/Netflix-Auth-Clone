import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import SiginPage from './SiginPage';
import './signUpPage.css';

function SignUpPage() {

  const [signIn, setSignIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await createUser(email, password);
        navigate('/homePage')
    } catch (e) {
        setError(e.message);
        console.log(e.message);
    }
  };


  return (
    <>
    {signIn ?
      (<SiginPage/>)
     :
        (<div className='SiginUpPage'>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input onChange={(e) => setEmail(e.target.value)} type= "email" placeholder='Email Address'/>
            <input onChange={(e) => setPassword(e.target.value)} type= "password" placeholder='Password'/>
            <button 
            className='Register'
            >Sigin Up</button>
            <h2>
            <span className='signUpPage_text'>
            Already have an account ! </span> 
            <span 
            onClick={() => setSignIn(true)}
            className='signUpPage_link'>
                SignIn Now.
            </span>
            </h2>
         </form>
        </div>)}
    </>
  )
}

export default SignUpPage
