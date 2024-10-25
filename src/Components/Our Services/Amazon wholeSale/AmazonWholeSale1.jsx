import React, { useState } from "react";
import LineDiv from "../lineDiv";

export default function AmazonWholeSale1() {
  const [activeHover, setActiveHover] = useState();
  const deActiveHover = () => setActiveHover(!activeHover);
  const handleActiveHover = (index) => {
    setActiveHover(index);
  };
  return (
    <>
      <div className="wherehouse">
        <div className="head-card">
          <p className="ourService">What Includes in Our Services</p>
        </div>
        <div
          className="hover-card"
          onMouseEnter={() => handleActiveHover(0)}
          onMouseLeave={deActiveHover}
        >
          <p>Product Sourcing & Research</p>
          <div
            className={
              activeHover === 0 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Product Sourcing & Research</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Selecting wholesale products</li>
                <li>Market research</li>
                <li>Supplier negotiations</li>
              </ul>
            </p>
          </div>
        </div>

        <div
          className="hover-card"
          onMouseLeave={deActiveHover}
          onMouseEnter={() => handleActiveHover(1)}
        >
          <p>Brand Outreach</p>
          <div
            className={
              activeHover === 1 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Brand Outreach</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Secure distribution rights</li>
                <li>Negotiate terms</li>
                <li>Build relationships</li>
              </ul>
            </p>
          </div>
        </div>

        <div
          className="hover-card"
          onMouseLeave={deActiveHover}
          onMouseEnter={() => handleActiveHover(2)}
        >
          <p>Inventory Management</p>
          <div
            className={
              activeHover === 2 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Inventory Management</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Prevent stock-outs</li>
                <li>Optimize storage</li>
                <li>Demand forecasting</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <LineDiv />

      <div className="wherehouse">
        <div
          className="hover-card"
          onMouseEnter={() => handleActiveHover(3)}
          onMouseLeave={deActiveHover}
        >
          <p>Customer Service</p>
          <div
            className={
              activeHover === 3 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Customer Service</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Resolve inquiries</li>
                <li>Manage returns</li>
                <li>Monitor feedback</li>
              </ul>
            </p>
          </div>
        </div>
        <div
          className="hover-card"
          onMouseEnter={() => handleActiveHover(4)}
          onMouseLeave={deActiveHover}
        >
          <p>Compliance and Regulations</p>
          <div
            className={
              activeHover === 4 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Compliance and Regulations</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Ensure compliance</li>
                <li>Manage listings</li>
                <li>Stay updated</li>
              </ul>
            </p>
          </div>
        </div>

        <div
          className="hover-card"
          onMouseLeave={deActiveHover}
          onMouseEnter={() => handleActiveHover(5)}
        >
          <p>Analytics and Reporting</p>
          <div
            className={
              activeHover === 5 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Analytics and Reporting</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Sales insights</li>
                <li>Competitive analysis</li>
                <li>Growth recommendations</li>
              </ul>
            </p>
          </div>
        </div>

        <div
          className="hover-card"
          onMouseLeave={deActiveHover}
          onMouseEnter={() => handleActiveHover(6)}
        >
          <p>Premium Branding</p>
          <div
            className={
              activeHover === 6 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Premium Branding</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Selective Distribution Management</li>
                <li>Exclusive Partnership Development</li>
                <li>Brand Protection and Market Segmentation</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
