import React from "react";
import { Link, useLocation } from "react-router-dom";
import CTA from "./CTA";
import Logo from "../assets/logo.svg";
import "./style.scss";

const Header = () => {
  const location = useLocation();
  return (
    <header className="container">
      <div
        className={
          location.pathname === "/" ||
          location.pathname === "/register" ||
          location.pathname === "/sign-in"
            ? "header__container flex ai-c jc-sb container_column"
            : "header__container flex ai-c jc-sb"
        }
      >
        <Link to={"/"} className="header__logotip flex">
          <img src={Logo} alt="Logotip" />
          <small>Real Estate</small>
        </Link>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
