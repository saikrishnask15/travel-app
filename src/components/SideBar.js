import {
  faBriefcase,
  faContactBook,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./ContextProvider";
const SideBar = ({ close }) => {
  const { user, logOut } = useContext(context);
  const handleSignUp = (e) => {
    e.preventDefault();
    window.location.href = "/SignUp";
  };
  return (
    <div className="side-bar-ctn">
      <div className="side-bar-links" onClick={close}>
        <Link to="/" onClick={window.scrollTo(0, 0)}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/About" onClick={window.scrollTo(0, 0)}>
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </Link>
        <Link to="/Service" onClick={window.scrollTo(0, 0)}>
          <FontAwesomeIcon icon={faBriefcase} /> Service
        </Link>
        <Link to="/Contact" onClick={window.scrollTo(0, 0)}>
          <FontAwesomeIcon icon={faContactBook} /> Contact
        </Link>
        {!user ? (
          <button className="side-bar-btn" onClick={handleSignUp}>
            Sign up
          </button>
        ) : (
          <button className="side-bar-btn" onClick={logOut}>
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
