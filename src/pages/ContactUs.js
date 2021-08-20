import "../styles/ContactUs.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import ClipBoard from "../components/ClipBoard";

function ContactUs() {
  return (
    <>
      <div className="contactUs__header">
        <h1>Contact Us</h1>
      </div>
      <div className="contactUs">
        <a href="https://www.w3schools.com" className="contactUs__contentDiv">
          <div className="contactUs__content">
            <FacebookIcon className="contactUs__icon" />
            <h2 className="contactUs__header">Facebook Page</h2>
          </div>
        </a>
        <a href="https://www.w3schools.com" className="contactUs__contentDiv">
          <div className="contactUs__content">
            <InstagramIcon className="contactUs__icon" />
            <h2 className="contactUs__header">Instagram Page</h2>
          </div>
        </a>
        <ClipBoard
          header="Email Address"
          Icon={EmailIcon}
          copyLetter="buddhachannelmyanmar@gmail.com"
        />
        <ClipBoard
          header="Phone Number 1"
          Icon={PhoneIcon}
          copyLetter="+959970378394"
        />
        <ClipBoard
          header="Phone Number 2"
          Icon={PhoneIcon}
          copyLetter="+959970378394"
        />
        <ClipBoard
          header="Phone Number 3"
          Icon={PhoneIcon}
          copyLetter="+959970378394"
        />
      </div>
    </>
  );
}

export default ContactUs;
