import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import './notFoundPageStyles.scss'

const NotFoundPage = () => {
  return (
    <div className='container not-found__container'>
      <h1 className='mb12 pt48'>Sorry, that page could not be found.</h1>
      <p className="mb48">Error 404: The page you requested does not exist, or is currently unavailable.</p>

      <Link to={"/"} className="link flex ai-c gap_6 jc-c">Take me back to the homepage <BiHomeAlt className="icon" /></Link>
    </div>
  )
}

export default NotFoundPage