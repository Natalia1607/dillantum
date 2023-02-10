import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './formContainerStyles.css';
import './mask.js';

import Table from '../../assets/reg.jpg';

import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((useCredential) => { 
      console.log(useCredential);
      
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <div className='container form__container grid'>
      <div className='form__bg md-flex'><img src={Table} alt="" /></div>
      <div className="form__right register__right">
        <p>Already a member? <Link to={'/sign-in'} className='register__link'>Sign In</Link></p>
        <h2 className='mb36'>Create an account</h2> {/* Register */}
        <form action="#" className='form' onSubmit={signUp}>
            <div className="form__data register__data flex jc-sb gap">
              <div className="input-wrap">
                <label>Name*</label><br />
                <input 
                  type="text"
                  autoFocus={true}
                  required />
              </div>
              <div className="input-wrap">
                <label>Username</label><br />
                <input type="text" />
              </div>
              <div className="input-wrap">
                <label>Email*</label><br />
                <input 
                  type="email" 
                  className='email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required/>
              </div>
              <div className="input-wrap">
                <label>Password*</label><br />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required />
              </div>
            </div>
            <label className = "checkbox flex pt12 pb24">
              <input type="checkbox" className="checkbox__input" />
              <p className ='checkbox__text'>Creating an account means you agree to our <a href="#" className='register__link'> Terms of Service</a>, <a href="#" className='register__link'> Privacy Policy</a>, and our default <a href="#" className='register__link'> Notification Settings</a>.</p>
            </label>
            <button className='btn btn-primary hover-diagonal_light' type='submit'>Create Account</button>
        </form>
        </div>
    </div>
  )
}

export default RegisterContainer
