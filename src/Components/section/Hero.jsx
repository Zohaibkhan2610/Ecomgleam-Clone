import React from 'react'
// import './../../App.css'
import Home from './../Images/HomeCover.gif'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
    <div className="main-area">
    <div className="container flex">
      <div className="area-text">
      <h1>All-in-one Team For Seamless ECommerce Management</h1>
      <p>
        EcomGleam offers efficient ecommerce solutions to optimize performance
        and drive growth. Collaborate with us to leverage expert strategies and
        cutting-edge technology tailored for your online success.
      </p>
        <div className="btn-area">
          <Link className='btn-area-1'>Let's Chat</Link>
          <Link className='btn-area-2'>Our Story</Link>
        </div>
      </div>
      <div className="area-img">
        <img src={Home} alt="" />
      </div>
    </div>
    </div>

    </>
  )
}
