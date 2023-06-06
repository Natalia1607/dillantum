import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../redux/services/firebase";

export const CTAMain = ({ propertyForSale, propertyForRent }) => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);
  return (
    <div className="main__cta flex jc-fe ai-c gap">
      <div className="flex jc-sb gap">
        <Link to={"/for-rent/property"} className="btn hover-diagonal">
          Rent 
        </Link>
        <Link to={"/for-sale/property"} className="btn hover-diagonal">
          Buy
        </Link>
      </div>
      <Link
        to={authUser ? "/createItem" : "/register"}
        className="btn btn-primary hover-diagonal_light"
      >
        Upload
      </Link>
    </div>
  );
};
