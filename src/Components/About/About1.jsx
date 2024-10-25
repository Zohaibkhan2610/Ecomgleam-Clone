import React from 'react'
import About1 from './../Images/About1.png'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
    <div className="main-area">
    <div className="container flex">
      <div className="area-text">
        <h1 className='area-text-head'>WE ARE <span>Ecom Gleam</span></h1>
        <p>We are Ecom Gleam. Here, we will illuminate the path for your e-commerce successes on Amazon. We are committed to empowering Amazon sellers by providing them with customized solutions and unwavering assistance.</p>
        <div className="btn-area">
          <Link className='btn-area-1'>Let's Chat</Link>
          <Link className='btn-area-2'>Our Story</Link>
        </div>
      </div>
      <div className="area-img">
        <img src={About1} alt="" />
      </div>
    </div>
    </div>
    </>
  )
}