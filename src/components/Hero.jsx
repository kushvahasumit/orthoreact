import React from 'react'
import heroImg from '../images/nurse-1.jpg'
import arrow from '../logos/arrow.png'
import {Link} from "react-router-dom"; 
 
import Card from "./Card";
import Screening from "./Screening";
import Emergency from "./Emergency";
import Video from "./Video";
import Owner from "./Owner";
import NavMarQ from './NavMarQ';
 

export default function Hero() {
  return (
    <div>
      {/* <!-- hero section --> */}
      <NavMarQ/>
  <section>
    <div className="relative flex-wrap">

      <h1 className="absolute  pl-12 text-white top-16 font-semibold p-6 xs:text-[20px] xs:top-2 xs:pl-3 md:text-4xl ">
        Welcome To

      </h1>
      <h1
        className="absolute  pl-12 text-white md:text-6xl top-24 font-semibold p-6 xs:text-[26px] xs:top-7 xs:pl-3 sm:text-[40px]">
        Renu Jagdish Diagnostic

      </h1>
      <h1
        className="absolute sm:text-[40px] pl-12 text-white md:text-6xl top-40 font-semibold p-6 xs:text-[26px] xs:top-14 xs:pl-3">
        And Trauma Centre
      </h1>
      <h4
        className="absolute  sm:text-[20px] pl-12 text-white md:text-4xl top-60 font-bold p-6 xs:text-[18px] xs:top-24 xs:pl-3">
        Dr Renu Garkoti
      </h4>
      <h4
        className="absolute sm:text-[20px] pl-12 text-white md:text-4xl top-72 font-bold p-6 xs:text-[18px] xs:top-28 xs:pl-3">
        Dr J. C. Garkoti
      </h4>
      <div
        className="absolute animate-bounce inset-x-96 text-black text-2xl bottom-4 font-bold flex place-content-center xs:bottom-0 xs:inset-x-20 xs:w-32">
        <div className="bg-slate-400 opacity-70 rounded-xl  text-black transform transition-all hover:scale-125">
          <h2 className="pl-3  hover:bg-white text-black rounded-xl xs:w-36 flex bg-blue-100 "><Link to="/contact" > Visit Us</Link><img src={arrow} alt="arrow" height="40px" width="40px" />
          </h2>
        </div>
      </div>
      <img  src={heroImg} alt="Nurse" className="md:w-auto bg "/>
    </div>
  </section>
    
      <Card/>
   
      <Screening/>
      <Video/>
      <Emergency/>
      <Owner/>
      
    </div>
  )
}
