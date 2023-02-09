import React from 'react';
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io';
import './footerStyles.css';

const Footer = () => {
  return (
    <footer className='footer__container'>
      <div className="footer__icons">
        <a href='https://wa.me/79519067454'><IoLogoWhatsapp className='icon' size={24} /></a>
        <a href="mailto:dillantum@gmail.com"><IoIosMail className='icon' size={24} /></a>
      </div>
      <div className="footer__docs">
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div className="copyright">
        Copyright © 2023 Dillantum. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer