import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterestSquare,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer container main">
      <div className="footer-top ">
        <div className="footer-top-title">
          <h1>Trips</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div className="footer-media">
          <FontAwesomeIcon icon={faInstagramSquare} />
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faSquareXTwitter} />
          <FontAwesomeIcon icon={faPinterestSquare} />
        </div>
      </div>
      <div className="footer-bottom ">
        <div className="f-b-content">
          <h4>Links</h4>
          <a href="/">Home</a>
          <br />
          <a href="/About">About</a>
          <br />
          <a href="/Service">Service</a>
        </div>

        <div className="f-b-content">
          <h4>Contact Us</h4>
          <a href="/">
            <FontAwesomeIcon icon={faLocationArrow} /> 123 Street, New Delhi,
            India
          </a>
          <br />
          <a href="/">
            <FontAwesomeIcon icon={faAt} /> trips@gmail.com
          </a>
          <br />
          <a href="/">
            <FontAwesomeIcon icon={faPhone} /> +91 06758 89657
          </a>
        </div>
        {/* <div className="f-b-content">
          <h4>Community</h4>
          <a href="/">Facebook</a>
          <br />
          <a href="/">MeetUp</a>
          <br />
          <a href="/">Instagram</a>
          <br />
          <a href="/">Twitter</a>
        </div> */}

        <div className="f-b-content">
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <br />
          <a href="/">Privacy policy</a>
          <br />
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
