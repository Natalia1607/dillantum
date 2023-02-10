import React, { useState } from 'react';

import Key from '../../assets/key.jpg';

import { auth, app } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';

import './formContainerStyles.css';
const button = {
  width: 265,
};

const SignInContainer = () => {
  const appearance = () => {
    const el = document.querySelector('#form__opacity');
    el.style.opacity = 1;
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((useCredential) => { 
      console.log(useCredential);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{user}, dispatch] = useStateValue();
  const signInGoogle = async () => {
    const {user : {refreshToken, providerData, }} = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type : actionType.SET_USER,
      user : providerData[0],
    });
  };

  return (
    <div className='container form__container grid'>
    <div className='form__bg md-flex'><img src={Key} alt="key" /></div>
      <div className="form__right sign__right">
        <h2 className='mb36'>Sign in</h2> {/* Login In to your Account */}
        <button 
          className='btn flex ai-c gap_6 mb24' 
          style={button} 
          onClick={signInGoogle}><FcGoogle size={22}/>Continue with Google</button>
        <button 
          className='btn flex ai-c gap_6 mb24' 
          style={button} onClick={appearance}><MdEmail color='#1976d2' size={22}/>Continue with Email</button>
        <form action="#" className='form' id='form__opacity' onSubmit={signIn}>
            <div className="form__data sign__data flex jc-sb gap mb36">
                <div className="input-wrap">
                  <label>Email</label><br />
                  <input 
                    type="email" 
                    autoFocus={true}
                    className='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-wrap">
                  <label>Password</label><br />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
            </div>
            <button className='btn btn-primary hover-diagonal_light' type='submit'>Sign in</button>
        </form>
        </div>
    </div>
  )
}

export default SignInContainer