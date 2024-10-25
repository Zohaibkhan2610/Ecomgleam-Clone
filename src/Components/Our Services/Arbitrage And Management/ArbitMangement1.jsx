import React, { useState } from "react";
import LineDiv from "../lineDiv";

export default function ArbitMangement1() {
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
          <p>Product Sourcing</p>
          <div
            className={
              activeHover === 0 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Product Sourcing</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Expert Research</li>
                <li>Profitable Deals</li>
              </ul>
            </p>
          </div>
        </div>

        <div
          className="hover-card"
          onMouseLeave={deActiveHover}
          onMouseEnter={() => handleActiveHover(1)}
        >
          <p>Market Analysis</p>
          <div
            className={
              activeHover === 1 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Market Analysis</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Analyzing market trends</li>
                <li>Developing pricing strategies</li>
                <li>Monitoring competitor activities</li>
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
                <li>PSeamless Integration</li>
                <li>Optimized Stock Levels</li>
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
          <p>Pricing Strategies</p>
          <div
            className={
              activeHover === 3 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Pricing Strategies</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Competitive Analysis</li>
                <li>Dynamic Pricing</li>
              </ul>
            </p>
          </div>
        </div>
        <div
          className="hover-card"
          onMouseEnter={() => handleActiveHover(4)}
          onMouseLeave={deActiveHover}
        >
          <p>Listing Optimization</p>
          <div
            className={
              activeHover === 4 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Listing Optimization</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Compelling listings</li>
                <li>Keyword optimization for visibility and conversions</li>
                <li>High-Quality Images</li>
              </ul>
            </p>
          </div>
        </div>

        <div
          className="hover-card"
          onMouseLeave={deActiveHover}
          onMouseEnter={() => handleActiveHover(5)}
        >
          <p>Order Fulfilment</p>
          <div
            className={
              activeHover === 5 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Order Fulfilment</p>
            <p className="hover-main-card-para">
              <ul>
                <li>Efficient Logistics</li>
                <li>Returns Management</li>
              </ul>
            </p>
          </div>
        </div>

        <div
          className="hover-card"
          onMouseLeave={deActiveHover}
          onMouseEnter={() => handleActiveHover(6)}
        >
          <p>Customer Support</p>
          <div
            className={
              activeHover === 6 ? "hover-main-card active" : "hover-main-card"
            }
          >
            <p className="hover-main-card-Title">Customer Support</p>
            <p className="hover-main-card-para">
              <ul>
                <li>24/7 Assistance</li>
                <li>Proactive Communication</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
