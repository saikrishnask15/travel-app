import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SideBar from "./SideBar";
import { Link, useLocation } from "react-router-dom";
const NavBar = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const closeSideBar=()=>{
      setShowSideBar(false);
    }
    const location = useLocation();
  return (
    <div className="nav-bar">
      <a href="/" className="nav-logo">Trips</a>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' && 'active'}>Home</Link>
        <Link to="/About" className={location.pathname === '/About' && 'active'}>About</Link>
        <Link to="/Service" className={location.pathname === '/Service' && 'active'}>Service</Link>
        <Link to="/Contact" className={location.pathname === '/Contact' && 'active'}>Contact</Link>
        <button className="signup-btn">Sign up</button>
      </div>

        <div className="sidebar-icon" onClick={()=>setShowSideBar(!showSideBar)}>
            {!showSideBar ? <FontAwesomeIcon icon={faBarsStaggered}/> : <FontAwesomeIcon icon={faX}/> }
        </div>
        {showSideBar && <SideBar close={closeSideBar}/> }
       
    </div>
  );
};

export default NavBar;
