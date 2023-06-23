import React, { useState } from "react";
import { CTAMain } from "../MainPage/CTAMain";
import { Link, useLocation } from "react-router-dom";
import { RiUser3Fill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { IoIosListBox } from "react-icons/io";
import {
  MdFavorite,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight, 
} from "react-icons/md";
import "./userPageStyles.scss";

const MainContainer = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="user container flex">
      <div
        className={
          nav
            ? "flex jc-fs ai-c user__container pt48 active"
            : "flex jc-fs ai-c user__container pt48"
        }
      >
        <div>
          <Link to={"/personal_account"}>
            <RiUser3Fill className="icon user__avatar mb24" />
          </Link>
          <p className="mb12">Your name</p>
          <p>ID #1234567890</p>
        </div>
        <ul className="user__nav">
          <li>
            <Link to={"/personal_account/searches"}>My searches</Link>
          </li>
          <li>
            <Link to={"/personal_account/ads"}>My ads</Link>
          </li>
          <li>
            <Link to={"/personal_account/favorites"}>Favourites</Link>
          </li>
          <li>
            <Link to={"/createItem"}>Create an ad</Link>
          </li>
          <li>
            <Link to={"#"}>Personal data</Link>
          </li>
        </ul>
        <div className="user__panel-close" onClick={handleNav}>
          {!nav ? (
            <MdKeyboardArrowLeft className="icon" size={30} />
          ) : (
            <MdKeyboardArrowRight className="icon" size={30} />
          )}
        </div>
      </div>
      <div className="user__content">
        {location.pathname === "/personal_account" ? <CTAMain /> : <></>}
        {location.pathname === "/personal_account/searches" ? (
          <div className="mt48 mb48">
            <h1 className="mb24 flex ai-c gap_6">
              <GiArchiveResearch className="icon" size={26} />
              <span>My Searches</span>
            </h1>
            <div className="flex f-wrap jc-sb">
              
            </div>
          </div>
        ) : (
          <></>
        )}
        {location.pathname === "/personal_account/favorites" ? (
          <div className="mt48 mb48">
            <h1 className="mb24 flex ai-c gap_6">
              <MdFavorite className="icon" size={26} />
              <span>Favorites</span>
            </h1>
            <div className="flex f-wrap jc-sb">
              
            </div>
          </div>
        ) : (
          <></>
        )}
        {location.pathname === "/personal_account/ads" ? (
          <div className="mt48 mb48">
            <h1 className="mb24 flex ai-c gap_6">
              <IoIosListBox className="icon" size={26} />
              <span>My Ads</span>
            </h1>
            <div className="flex f-wrap jc-sb">
              
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
