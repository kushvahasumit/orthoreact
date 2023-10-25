import React from "react";

import Card from "./Card";
import Screening from "./Screening";
import Emergency from "./Emergency";
import Video from "./Video";
import NavMarQ from "./NavMarQ";
import vid from "../vid/vid2.mp4";
import Crousal from "./Crousal";

export default function Hero() {
  return (
    <div>
      {/* <!-- hero section --> */}
      <NavMarQ />
      <section>
        <div className="relative flex-wrap">
          <div className="max-w-[100%]">
            <h1 className=" absolute  pl-12 text-light-green md:text-6xl top-8 font-bold p-6 xs:text-[26px] xs:top-2 xs:pl-3 sm:text-[40px] animation1 animation2 ">
              Welcome To
            </h1>
            <h1 className=" absolute pt-10 pl-12 text-light-green md:text-6xl top-20 font-bold p-8 xs:text-[26px] xs:top-7 xs:pl-3 sm:text-[40px] animation1 animation2">
              Renu Jagdish Diagnostic
            </h1>
            <h1 className="absolute pt-10 sm:text-[40px] pl-12 text-light-green md:text-6xl top-36 font-bold p-6 xs:text-[26px] xs:top-14 xs:pl-3 animation1 animation2">
              And Trauma Centre
            </h1>
          </div>

          

         

          <video autoPlay muted loop id="myVideo">
            <source src={vid} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </section>

      <Card />
      <Crousal/>
      <Screening />
      <Video />
      <Emergency />
    </div>
  );
}
