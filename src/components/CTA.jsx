import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../redux/services/firebase";

import { RiMenu3Fill, RiCloseFill, RiUser3Fill } from "react-icons/ri";
import { MdAdd, MdLogout } from "react-icons/md";
import { RiUserSharedLine } from "react-icons/ri";


const CTA = () => {
  const navigate = useNavigate();
  const handleNav = () => setNav(!nav);
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  const appearance = () => {
    const elements = document.querySelectorAll(".account__panel_opacity");
    elements.forEach((el) => el.classList.toggle("opacity"));
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".account__panel_opacity");
    elements.forEach((el) => el.classList.remove("opacity"));
    if (nav) {
      setNav(!nav);
    }
  }, [location]);

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
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("uid");
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  if (
    location.pathname === "/" ||
    location.pathname === "/register" ||
    location.pathname === "/sign-in"
  ) {
    return (
      <>
        {authUser ? (
          <div className="header__account">
            <RiUser3Fill className="icon" size={20} onClick={appearance} />
            <div className="account__panel account__panel_opacity">
              <Link to={"/personal_account"}>
                <p>
                  Personal Account <RiUserSharedLine className="icon" />
                </p>
              </Link>
              <Link to={"/createItem"}>
                <p>
                  New Item <MdAdd className="icon" />
                </p>
              </Link>
              <p onClick={userSignOut}>
                Logout <MdLogout className="icon" />
              </p>
            </div>
          </div>
        ) : (
          <div className="cta flex jc-sb">
            <Link to={"/sign-in"} className="btn">
              Sign in
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <div className="header__icons flex ai-c">
        {authUser ? (
          <div>
            <RiUser3Fill className="icon" size={20} onClick={appearance} />
            <div className="account__panel account__panel_opacity">
              <Link to={"/personal_account"}>
                <p>
                  Personal Account <RiUserSharedLine className="icon" />
                </p>
              </Link>
              <Link to={"/createItem"}>
                <p>
                  New Item <MdAdd className="icon" />
                </p>
              </Link>
              <p onClick={userSignOut}>
                Logout <MdLogout className="icon" />
              </p>
            </div>
          </div>
        ) : (
          <p className="none"></p>
        )}
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <RiMenu3Fill className="icon" size={26} />
          ) : (
            <RiCloseFill className="icon" size={26} />
          )}
        </div>
      </div>
      <div
        className={
          nav ? "header__menu container active" : "header__menu container"
        }
      >
        <ul className="header__nav">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {location.pathname !== "/for-rent/property" ? (
            <li>
              <Link to={"/for-rent/property"}>Property for Rent</Link>
            </li>
          ) : (
            <Link to={"#"} className="none">
              <li></li>
            </Link>
          )}
          {location.pathname !== "/for-sale/property" ? (
            <li>
              <Link to={"/for-sale/property"}>Property for Buy</Link>
            </li>
          ) : (
            <Link to={"#"} className="none">
              <li></li>
            </Link>
          )}
          <li>
            <Link to={"/agencies"}>Agencies</Link>
          </li>
          <li>
            <Link to={"#"}>Blog</Link>
          </li>
        </ul>
        <div className="header__menu-bottom">
          {authUser ? (
            <></>
          ) : (
            <div className="cta flex gap jc-c">
              <Link to={"/sign-in"} className="btn">
                Sign in
              </Link>
              <Link to={"/register"} className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CTA;
