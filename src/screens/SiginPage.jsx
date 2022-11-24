import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './style/SiginPage.css'
import SignUpPage from './signUpPage';



function SiginPage() {

  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await signIn(email, password);
        navigate('/homePage')
    } catch (e) {

        let qessage = (e.message);
        qessage = (qessage).substr(10, 27);
        setError(qessage);
        console.log(e.message);
    }
  };


  return (
  
    <div className='SignUpPage_body'>
      {signUp ? 
        (<SignUpPage />)  
        :    
          (<div className='SiginUpPage'>
            <form onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              {error ? 
                <h2 className='error_message'>{error}</h2> :
                <></>
              }
              <input onChange={(e) => {setEmail(e.target.value); setError('')}} type= "email" placeholder='Email Address'/>
              <input onChange={(e) => {setPassword(e.target.value)}} type= "password" placeholder='Password'/>
              <button 
              className='register'
              >Sigin In</button>
              <h2>
                <span className='signUpPage_text'>
                New to Netflix? </span> 
                <span
                onClick={() => setSignUp(true)} 
                className='signUpPage_link'>
                    SignUp Now.
                </span>
              </h2>
            </form>
          </div>)
      }
    </div>  
  )
}

export default SiginPage
