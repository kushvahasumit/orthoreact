import React from 'react'
import glucose from "../logos/glucose.jpg"
import phoneLogo from "../logos/phone icon.png";
import emailLogo from "../logos/e-mail icon.png";
import location from "../logos/location logo.png"

export default function Contact() {
  return (
    <div>
       <div className="text-[40px] font-bold  text-center">
    <div className="relative ">
      <img src={glucose} alt="img" />
      <h1 className="absolute text-[60px] font-2xl top-40 left-10 xs:font-xl xs:text-[40px] xs:top-8  ">
        Contact Us
      </h1>

    </div>
    <h1>Get in Touch</h1>
  </div>


  <div className="text-2xl font-xs flex justify-center py-[20px] px-[20px] ">
    <h2>Renu Jagdish diagnostic and Trauma Centre</h2>
  </div>
  <div className="grid grid-cols-1 xs:grid-cols-1 px-[40px] text-center md:grid-cols-2 lg:flex justify-center  ">
    <div className="lg:p-[60px]">
      <div className="m-[30px]">
        <img src={location} alt="location" width="100px" height="100px"
          className="xs:justify-center px-6 md:py-[20px]" />
      </div>
      <div className="m-[20px] font-medium">
        <h3>Near Chaudhary BaraatGhar (Aptech)</h3>
        <h3>Pithoragarh 262501</h3>
        <h3>G.I.C Road Pithoragarh (Uttarakhand)</h3>
      </div>
    </div>
    <div className="">
      <div className="m-[30px]">
        <img src={phoneLogo} alt="img" width="100px" height="100px"
          className="xs:justify-center px-6 md:py-[20px]" />
      </div>
      <div className="font-medium text-center">
        <h3>+05964-227963</h3>
        <h3>+918865037172</h3>
      </div>

      <div className=" mx-[12px] xs:m-[40px]  text-center">
        <img src={emailLogo} alt="img" width="100px" height="100px" className="xs: px-[12px] md:py-[20px]" />
        <div className="font-medium p-[5px]">
          <h3>rjhospital01@gmail.com</h3>
        </div>


      </div>


    </div>
  </div>
    </div>
  )
}
