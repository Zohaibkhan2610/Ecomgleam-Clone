import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/Ecomgleam.svg";
import call from "./Images/Phone-call.svg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faContactBook, faEnvelope, faHome, faInfo, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBlogger, faServicestack } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  let [menuIcon, setmenuIcon] = useState(true);
  let closeMenu = () => setmenuIcon(!menuIcon);
  
  const [activeButton, setActiveButton] = useState(0);  
  const handleClick = (index) => {
    setActiveButton(index);
  };


  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" onClick={() => handleClick(0)} to='/'/>
        </div>
        <nav className="navbar">
          <div className="nav">
          <Link className={activeButton === 0 ? "page-links active" : "page-links"} onClick={() => handleClick(0)} to='/'>Home</Link>

          <Link className={activeButton === 1 ? "page-links active" : "page-links"} onClick={() => handleClick(1)} to='/About'>About Us</Link>
          <Link className={activeButton === 2 ? "page-links active" : "page-links"} onClick={() => handleClick(2)} to='/Contact'>Contact Us</Link>
          <Link className={activeButton === 3 ? "page-links active" : "page-links"} onClick={() => handleClick(3)} to='/#ServicesSection'>Services</Link>
          <Link className={activeButton === 4 ? "page-links active" : "page-links"} onClick={() => handleClick(4)} to=''>Blogs</Link>
          <Link className={activeButton === 5 ? "page-links active" : "page-links"} onClick={() => handleClick(5)} to='/'>Case Studies</Link>
          </div>
          <div className="p-btn">
            <img src={call} alt="phone img" />
            <p> +1 (215) 305-8197</p>
          </div>
          <FontAwesomeIcon
            onClick={closeMenu}
            className="icon"
            icon={menuIcon ? faBars : faTimes}
          />
        </nav>


        <div className={menuIcon ? "mini-menu" : 'mini-menu  active'}>
            <div className="mini-nav">
          <div onClick={closeMenu}><Link className={activeButton === 0 ? "page-linker active" : "page-linker"} onClick={() => handleClick(0)} to='/'><FontAwesomeIcon icon={faHome}/>Home</Link></div>

          <div onClick={closeMenu}><Link className={activeButton === 1 ? "page-linker active" : "page-linker"} onClick={() => handleClick(1)} to='/About'><FontAwesomeIcon icon={faInfo}/>About Us</Link></div>


          <div onClick={closeMenu}><Link className={activeButton === 2 ? "page-linker active" : "page-linker"} onClick={() => handleClick(2)} to='/Contact'><FontAwesomeIcon icon={faContactBook}/>Contact Us</Link></div>

 
          <div onClick={closeMenu}>
          <Link 
          className={activeButton === 3 ? "page-linker active" : "page-linker"} onClick={() => handleClick(3)} 
          to='/'>
          <FontAwesomeIcon icon={faServicestack}/>
          Services
          </Link>
          </div>


          <div onClick={closeMenu}><Link className={activeButton === 4 ? "page-linker active" : "page-linker"} onClick={() => handleClick(4)} to='/Blogs'><FontAwesomeIcon icon={faBlogger}/>Blogs</Link></div>


          <div onClick={closeMenu}><Link className={activeButton === 5 ? "page-linker active" : "page-linker"} onClick={() => handleClick(5)} to='/Case-Studies'><FontAwesomeIcon icon={faSearch}/>Case Studies</Link></div>
          </div>
          <div className="mini-btn">
            <img src={call} alt="phone img" />
            <p> +1 (215) 305-8197</p>
          </div>
          <div className="mini-btn">
            <FontAwesomeIcon className="f-icons" icon={faEnvelope}/>
            <p><span>info@ecomgleam.com</span>
            <span>career@ecomgleam.com</span></p>
          </div>

            <FontAwesomeIcon
            onClick={closeMenu}
            className="icon mini-icon"
            icon={menuIcon ? faBars : faTimes}
          />
          </div>
      </header>
    </>
  );
}
