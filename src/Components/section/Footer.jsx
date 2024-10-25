import React from "react";
import "./footer.css";
import footlogo from "./../Images/footer logo.svg";
import map from "./../Images/map.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import phone from "./../Images/Phone-call.svg";
import email from "./../Images/mail.svg";

export default function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="footer">
          <div>
            <img className="foot-logo" src={footlogo} alt="" />
            <div className="foot-down">
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTiktok} />
            </div>
          </div>
          <div className="foot-text">
            <p>Quick link</p>
            <div className="foot-links">
              <Link to="/">Home</Link>
              <Link to="/About">About us</Link>
              <Link to="/Contact">Contact us</Link>
            </div>
          </div>

          <div className="foot-text">
            <p>our Services</p>
            <div className="foot-links">
              <Link to="/amazon-full-account-management-services">Amazon Full Account Management Services</Link>
              <Link to="/online-arbitrage-and-retail-services">Online Arbitrage & Retail Services</Link>
              <Link to="/amazon-wholesale-fba-services">Amazon Wholesale FBA Services</Link>
              <Link to="/3pl-and-warehousing-services">3PL and Warehousing Services</Link>
            </div>
          </div>
          <div className="foot-text">
            <div className="footer-text-contact">
              <img className="footer-icon" src={phone} alt="" />
              <p>
                <Link>+1 (215) 305-8197</Link>
              </p>
            </div>
            <div className="footer-text-contact">
              <img className="footer-icon" src={email} alt="" />
              <p>
                <Link>info@ecomgleam.com</Link>
                <Link>career@ecomgleam.com</Link>
              </p>
            </div>
            <div className="footer-text-contact">
            <img className="footer-icon" src={map} alt="" />
            <p>
              <span>USA Office</span>
              <span>5900 BALCONES DR STE 14447</span>
              <span>AUSTIN, TX 78731, United States</span>
            </p>
          </div>
          <div className="footer-text-contact">
            <img className="footer-icon" src={map} alt="" />
            <p>
              <span>USA Office</span>
              <span>Business Centre,Sharjah Publishing</span>
              <span>City Free Zone, Sharjah, United Arab Emirates</span>
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
