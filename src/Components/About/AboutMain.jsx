import React, { useEffect } from 'react'
import About from './About1'
import About2 from './About2'
import AOS from "aos";
import About3 from './About3';
import About4 from './About4';
import About5 from './About5';
import About6 from './About6';

export default function AboutMain() {
  useEffect(() => {
    AOS.init({
   
    });
  }, []);
  return (
    <>
        <About/>
        <About2/>
        <About3/>
        <About4/>
        <About5/>
        <About6/>
    </>
  )
}
