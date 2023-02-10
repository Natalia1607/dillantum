import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

import { RiMenu3Fill, RiCloseFill, RiUser3Fill } from 'react-icons/ri';

import { useStateValue } from '../../context/StateProvider';

const CTA = () => {
  const [ nav, setNav ] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
        }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log('sign out successful');
    }).catch(error => console.log(error));
  };

  const handleNav = () => setNav(!nav);
  const location = useLocation(); 

  if(location.pathname === '/' || location.pathname === '/register' || location.pathname === '/sign-in') {
    return (  
      <>
      {
        authUser 
        ? <Link to={'!#'} className='btn' onClick={userSignOut}>Sign out</Link>
        : 
        <div className='cta flex jc-sb gap'>
          <Link to={'/sign-in'} className='btn'>Sign in</Link>
          <Link to={'/register'} className='btn'>Register</Link>
        </div>
      }
      </>
    )
  };
  return ( 
    <>
      <div className='header__icons flex ai-c'>
        {
          authUser 
          ? <Link to={'/personal_account'}><RiUser3Fill className='icon' size={20}/></Link> 
          : <p className='none'></p>
        }
        <div className='hamburger' onClick={handleNav}>
            {
              !nav 
              ? (<RiMenu3Fill className='icon' size={26} />) 
              : (<RiCloseFill className='icon' size={26}/>)
            }
        </div>
      </div>
      <div className={nav ? 'header__menu container active' : 'header__menu container'}>
        <ul className="header__nav">
          <li><Link to={'/'}>Home</Link></li>
          {
            location.pathname !== '/rent' 
            ? <li><Link to={'/rent'}>Property for Rent</Link></li>     
            : <Link to={'#'} className='none'><li></li></Link>   
          }     
          {
            location.pathname !== '/buy' 
            ? <li><Link to={'/buy'}>Property for Buy</Link></li>     
            : <Link to={'#'} className='none'><li></li></Link>   
          }     
          <li><Link to={'#'}>Agent Portal</Link></li>    
          <li><Link to={'#'}>Blog</Link></li>     
        </ul>
        <div className='header__menu-bottom'>
          {
            authUser 
            ? <Link to={'!#'} className='btn m-auto' onClick={userSignOut}>Sign out</Link>
            : 
            <div className='cta flex gap jc-c'>
              <Link to={'/sign-in'} className='btn'>Sign in</Link>
              <Link to={'/register'} className='btn'>Register</Link>
            </div>
          }  
        </div>
      </div>
    </> 
  )
}

export default CTA
