import "../styles/Footer.css";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__leftSide">
        <h3>Home</h3>
        <h3>Trending</h3>
        <h3>Contact Us</h3>
        <h3>Contact Us</h3>
      </div>
      <h3 className="footer__copyright">
        <CopyrightIcon />
        Copyright. All rights reserved.
      </h3>
    </div>
  );
}

export default Footer;
