import React from "react";
import '../Styles/Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcCallback } from 'react-icons/fc';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { AiOutlineLogin } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRouteChange = (path) => {
    navigate(path);
    console.log('LocationData',location);
  }

  const isActive=(path)=>{
     return location.pathname === path;
  }

  return <>

    <nav className="row main-nav">
      <div className="col-sm-1 col-md-3 col-lg-2 logo">
        <h2>
          <span style={{ color: 'red', fontWeight:500 }}>B</span>rand
          <span style={{ color: 'red' }}>F</span>actory
        </h2>
      </div>
      <div className="col-sm-1 col-md-1 col-lg-1 menu-item" style={{backgroundColor:isActive('/totalitycorp-frontend-challenge') ? 'white' : '' }} onClick={() => handleRouteChange('/totalitycorp-frontend-challenge')}> <AiOutlineHome size={30}/>    Home</div>
      <div className="col-sm-1 col-md-1 col-lg-1 menu-item" style={{backgroundColor:isActive('/about') ? 'white' : '' }} onClick={() => handleRouteChange('/about')}>  <FcAbout size={30} />    About</div>
      <div className="col-sm-1 col-md-1 col-lg-1 menu-item" style={{backgroundColor:isActive('/contact') ? 'white' : '' }} onClick={() => handleRouteChange('/contact')}>  <FcCallback size={30} />  Contact</div>
      <div className="col-sm-1 col-md-1 col-lg-1 menu-item" style={{backgroundColor:isActive('/cart') ? 'white' : '' }} onClick={() => handleRouteChange('/cart')}><BsFillCartPlusFill size={30} />  Cart</div>
      <div className="col-sm-1 col-md-2 col-lg-2"></div>
      <div className="col-sm-1 col-md-1 col-lg-2 icon-item login" style={{backgroundColor:isActive('/login') ? 'white' : '' }} onClick={() => handleRouteChange('/login')}><AiOutlineLogin size={30} /></div>
    </nav>
  </>

}
export default Header;