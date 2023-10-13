import React from "react";
import '../Styles/Home.css';
import logo from '../Images/logo.png'
import { useNavigate } from 'react-router-dom';
import { FcCallback } from 'react-icons/fc';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { AiOutlineLogin } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';

const Header = () => {
    const navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `../contact`; 
        navigate(path);
      }
      const routeChange1 = () =>{ 
          let path = `../cart`; 
          navigate(path);
        }
        const routeChange2 = () =>{ 
          let path = `../login`; 
          navigate(path);
        }
        const routeChange3 = () =>{ 
          let path = `../`; 
          navigate(path);
        }
        const routeChange4 = () =>{ 
          let path = `../about`; 
          navigate(path);
        }
    return <>

      <nav className="main-nav">
                <div className="logo">
                    <h2>
                    {/* <img src={logo} alt={"logo"}/>  */}
                    <span style={{color:'red'}}>B</span>rand
                    <span style={{color:'red'}}>F</span>actory
                    </h2>
                </div>
                <div className="menu-item" onClick={routeChange3}><AiOutlineHome/>Home</div>
                <div className="menu-item" onClick={routeChange4}><FcAbout/>About</div>
                {/* <div className="menu-item" onClick={routeChange3}>Products<FcAbout/></div> */}
                <div className="icon-item" onClick={routeChange}><FcCallback size={30} /></div>
                <div className="icon-item" onClick={routeChange1}><BsFillCartPlusFill size={30} /></div>
                <div className="icon-item" onClick={routeChange2}><AiOutlineLogin size={30} /></div>
            </nav>
    </>
    
}
export default Header;