import { faBriefcase, faContactBook, faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const SideBar = ({close}) => {
  return (
    <div className="side-bar-ctn">
      <div className="side-bar-links" onClick={close}>
        <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
        <Link to="/About"><FontAwesomeIcon icon={faInfoCircle}/> About</Link>
        <Link to="/Service"><FontAwesomeIcon icon={faBriefcase}/> Service</Link>
        <Link to="/Contact"><FontAwesomeIcon icon={faContactBook}/> Contact</Link>
        <button className="side-bar-btn">Sign up</button>
      </div>
    </div>
  );
};

export default SideBar;
