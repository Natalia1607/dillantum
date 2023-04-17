import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';

const Favorites = () => {
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
  
  return (
    <div>Favorites</div>
  )
}

export default Favorites