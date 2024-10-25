import "./Css/Services.css";
import { Link } from "react-router-dom";
import Service1 from "./../Images/Services1.svg";
import Service2 from "./../Images/Services2.svg";
import Service3 from "./../Images/Services3.svg";
import Service4 from "./../Images/Services4.svg";
import Review from "./../Images/review img.png";
import AOS from "aos";

import ServiceVideo from "./../Images/Services video.mp4";
import { useEffect } from "react";
export default function Services() {
useEffect(() => {
    AOS.init({
   
    });
  }, []);


  return (
    <>
      <div className="server" id="ServicesSection">
      <div className="Services">
        <h1>
          <span>Ecommerce Management</span>
          <span>Services</span>
        </h1>
        <div className="main flex">
          <div className="service">
            <div data-aos='fade-up' className="card aos-init aos-animate">
              <img src={Service1} alt="Service" />
              <div className="card-content">
                <h3>Amazon Full Account Management Services</h3>
                <Link className="btn3">Explore Services</Link>
              </div>
            </div>
            <div data-aos='fade-up' className="card aos-init aos-animate">
              <img src={Service2} alt="Service" />
              <div className="card-content">
                <h3>
                  <span>Online</span>
                  <span>Arbitrage &</span> Retail Services
                </h3>
                <Link className="btn3">Explore Services</Link>
              </div>
            </div>
          </div>
          <div className="service">
            <div data-aos='fade-up' className="card aos-init aos-animate">
              <img src={Service3} alt="Service" />
              <div className="card-content">
                <h3>Amazon Wholesale FBA Services</h3>
                <Link className="btn3">Explore Services</Link>
              </div>
            </div>
            <div data-aos='fade-up' className="card aos-init aos-animate">
              <img src={Service4} alt="Service" />
              <div className="card-content">
                <h3>3PL and Warehousing Services</h3>
                <Link className="btn3">Explore Services</Link>
              </div>
            </div>
          </div>
        </div>
        <video src={ServiceVideo} autoPlay muted loop/>
      </div>
      </div>
      <div className="container">
      <div className="review">
      <div className="review-img">
        <img src={Review} alt="" />
      </div>
      <div className="review-text">
        <p><span>Ready to grow</span><span>your revenue?</span></p>
        <Link className="btn3">Speak to ECom Gleam</Link>
      </div>
      </div>
      </div>
    </>
  );
}
