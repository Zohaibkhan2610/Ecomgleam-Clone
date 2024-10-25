import React from 'react'
import AboutS1 from './Images/3About1.png'
import AboutS2 from './Images/3About2.png'
import AboutS3 from './Images/3About3.png'
export default function About3() {
  return (
    <>
        <div className="About">
            <h1 className='text-section-head1'>The Gleam Values</h1>
            <div className="Card-Area">
            <div data-aos='fade-up' className="card-3 aos-init aos-animate">
                <img src={AboutS1} alt="" />
                <p className='Card3-headding'>Innovate</p>
                <p className='Card3-para'>At Ecom Gleam, we thrive on innovation, crafting pioneering strategies that lead the way in e-commerce excellence. Discover new horizons with us and redefine your online success</p>
            </div>
            <div data-aos='fade-up' className="card-3 aos-init aos-animate">
                <img src={AboutS2} alt="" />
                <p className='Card3-headding'>Illuminate</p>
                <p className='Card3-para'>We illuminate your path to prosperity, uncovering hidden opportunities that spark growth and elevate your business above the rest. Let us brighten your journey to success.</p>
            </div>
            <div data-aos='fade-up' className="card-3 aos-init aos-animate">
                <img src={AboutS3} alt="" />
                <p className='Card3-headding'>Integrate</p>
                <p className='Card3-para'>Seamlessly integrating solutions tailored to your needs, we unify every element of your e-commerce strategy with precision, ensuring a cohesive and impactful presence in the digital marketplace.</p>
            </div>
            </div>
        </div>
    </>
  )
}
