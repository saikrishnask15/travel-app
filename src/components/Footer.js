import {
  faFacebookSquare,
  faInstagramSquare,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
        </div>
      </div>
      <div className="footer-bottom ">
        <FooterBottom
          heading="Project"
          item1="Changelog"
          item2="Status"
          item3="License"
          item4="Versions"
        />
        <FooterBottom
          heading="Community"
          item1="GitHub"
          item2="Issues"
          item3="Project"
          item4="Twitter"
        />
        <FooterBottom
          heading="Help"
          item1="Support"
          item2="Troubleshooting"
          item3="Contact Us"
        />
        <FooterBottom
          heading="Others"
          item1="Terms of Service"
          item2="Privacy policy"
          item3="License"
        />
        
      </div>
    </div>
  );
};
const FooterBottom = (props) => {
  return (
    <div className="f-b-content">
      <h4>{props.heading}</h4>
      <p>{props.item1}</p>
      <p>{props.item2}</p>
      <p>{props.item3}</p>
      <p>{props.item4}</p>
    </div>
  );
};

export default Footer;
