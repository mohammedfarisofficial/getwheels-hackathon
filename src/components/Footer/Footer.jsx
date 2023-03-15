import "./style.scss";
//social icons
import mailIcon from "../../assets/icons/social/mail.svg";
import instaIcon from "../../assets/icons/social/instagram.svg";
import facebookIcon from "../../assets/icons/social/facebook.svg";
import twitterIcon from "../../assets/icons/social/twitter.svg";
import youtubeIcon from "../../assets/icons/social/youtube.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <h3>KEEP IN TOUCH</h3>
      <div className="socials">
        <img src={mailIcon} alt="" />
        <img src={instaIcon} alt="" />
        <img src={facebookIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <p>Privacy policy | Terms & Condition</p>
    </div>
  );
};

export default Footer;
