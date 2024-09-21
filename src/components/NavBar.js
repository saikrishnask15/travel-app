import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import SideBar from "./SideBar";
import { Link, useLocation } from "react-router-dom";
import { context } from "./ContextProvider";
const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { user, logOut } = useContext(context);
  const closeSideBar = () => {
    setShowSideBar(false);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    window.location.href = "/SignUp";
  };
  const location = useLocation();
  return (
    <div className="nav-bar">
      <a href="/" className="nav-logo">
        Trips
      </a>
      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" && "active"}
          onClick={window.scrollTo(0, 0)}
        >
          Home
        </Link>
        <Link
          to="/About"
          className={location.pathname === "/About" && "active"}
          onClick={window.scrollTo(0, 0)}
        >
          About
        </Link>
        <Link
          to="/Service"
          className={location.pathname === "/Service" && "active"}
          onClick={window.scrollTo(0, 0)}
        >
          Service
        </Link>
        <Link
          to="/Contact"
          className={location.pathname === "/Contact" && "active"}
          onClick={window.scrollTo(0, 0)}
        >
          Contact
        </Link>
        {!user ? (
          <button className="signup-btn" onClick={handleSignUp}>
            Sign up
          </button>
        ) : (
          <button className="signup-btn" onClick={logOut}>
            Log out
          </button>
        )}
      </div>

      <div
        className="sidebar-icon"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        {!showSideBar ? (
          <FontAwesomeIcon icon={faBarsStaggered} />
        ) : (
          <FontAwesomeIcon icon={faX} />
        )}
      </div>
      {showSideBar && <SideBar close={closeSideBar} />}
    </div>
  );
};

export default NavBar;
