import React, { useState } from "react";
import LineDiv from '../lineDiv'

export default function WhereHose1() {
  const [activeHover, setActiveHover] = useState();
  const deActiveHover=()=>setActiveHover(!activeHover)
  const handleActiveHover = (index) => {
    setActiveHover(index);
  };

  return (
    <>
      <div className="wherehouse">
        <div className="head-card">
          <p className="ourService">What Includes in Our Services</p>
        </div>
        <div className="hover-card" onMouseEnter={() => handleActiveHover(0)} onMouseLeave={deActiveHover}>
          <p>Inventory Management</p>
          <div className={activeHover === 0 ? "hover-main-card active" : "hover-main-card"}>
            <p className="hover-main-card-Title">Inventory Management</p>
            <p className="hover-main-card-para">
              Customized warehousing solutions aimed at improving inventory
              management, streamlining operations, and fostering business
              growth.
            </p>
          </div>
        </div>

        <div className="hover-card" onMouseLeave={deActiveHover} onMouseEnter={() => handleActiveHover(1)}>
          <p>Storage Solutions</p>
          <div className={activeHover === 1 ? "hover-main-card active" : "hover-main-card"}>
            <p className="hover-main-card-Title">Storage Solutions</p>
            <p className="hover-main-card-para">
              Secure and organized storage options tailored to your product
              requirements.
            </p>
          </div>
        </div>

        <div className="hover-card" onMouseLeave={deActiveHover} onMouseEnter={() => handleActiveHover(2)}>
          <p>Order Fulfilment</p>
          <div className={activeHover === 2 ? "hover-main-card active" : "hover-main-card"}>
            <p className="hover-main-card-Title">Order Fulfilment</p>
            <p className="hover-main-card-para">
              Efficient processing of orders, including picking, packing, and
              shipping, to ensure timely delivery to your customers.
            </p>
          </div>
        </div>
      </div>
      <LineDiv/>

      <div className="wherehouse">
      <div className="hover-card" onMouseEnter={() => handleActiveHover(3)} onMouseLeave={deActiveHover}>
          <p>Amazon FBA Prep Services</p>
          <div className={activeHover === 3 ? "hover-main-card active" : "hover-main-card"}>
            <p className="hover-main-card-Title">Amazon FBA Prep Services</p>
            <p className="hover-main-card-para">
            Preparation of products according to Amazon's requirements, including labelling, packaging, and shipment to Amazon fulfilment centres.
            </p>
          </div>
        </div>
        <div className="hover-card" onMouseEnter={() => handleActiveHover(4)} onMouseLeave={deActiveHover}>
          <p>Returns Management</p>
          <div className={activeHover === 4 ? "hover-main-card active" : "hover-main-card"}>
            <p className="hover-main-card-Title">Returns Management</p>
            <p className="hover-main-card-para">
            Preparation of products according to Amazon's requirements, including labelling, packaging, and shipment to Amazon fulfilment centres.
            </p>
          </div>
        </div>

        <div className="hover-card" onMouseLeave={deActiveHover} onMouseEnter={() => handleActiveHover(5)}>
          <p>Shipping Solutions</p>
          <div className={activeHover === 5 ? "hover-main-card active" : "hover-main-card"}>
            <p className="hover-main-card-Title">Shipping Solutions</p>
            <p className="hover-main-card-para">
            Cost-effective and reliable shipping options to meet your delivery needs.
            </p>
          </div>
        </div>

        <div className="hover-card" onMouseLeave={deActiveHover} onMouseEnter={() => handleActiveHover(6)}>
          <p>Custom Reporting</p>
          <div className={activeHover === 6 ? "hover-main-card active" : "hover-main-card"}>
            <p className="hover-main-card-Title">Order Fulfilment</p>
            <p className="hover-main-card-para">
            Detailed insights into inventory levels, order statuses, and logistics performance to help you make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
