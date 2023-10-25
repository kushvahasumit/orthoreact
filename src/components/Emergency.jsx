import React from 'react'
import phoneLogo from "../logos/phone icon.png";
import Image from "../images/pic3.jpg";

export default function Emergency() {
  return (
    <>
      <div className="flex flex-wrap justify-between py-[30px] px-[20px]  text-slate-600   sm:px-[50px]">
        <div>
          <div className="text-left ">
            <h1 className="text-[30px] sm:text-[60px] font-bold ">24x7</h1>
            <h1 className="text-[40px] w-auto sm:text-[50px] font-bold">Emergency Medical Care</h1>
            <h1 className="text-[25px] sm:text-[40px] font-medium text-slate-400">
              with 24 hour access
            </h1>
            <h3 className="text-[25px] sm:text-[40px] font-medium text-slate-400">
              an emergency assist
            </h3>
          </div>
          <div className="flex py-[30px]">
            <div className="pr-[10px] flex items-center">
              <img src={phoneLogo} alt="" />
            </div>
            <div className="text-center   font-medium">
               <h3 className="text-xl text-[25px] sm:text-[30px] mt-[7px]">+91 8865037172</h3>
              <h3 className="text-xl text-[25px] pt-2 sm:text-[30px]">05964-227933</h3>
            </div>
          </div>
        </div>
        <div className="shadow-neutral-200">
          <img
            src={Image}
            alt=""
            className="rounded-2xl h-50 w-auto sm:w-[600px] sm:h-[400px] "
          />
        </div>
      </div>
    </>
  );
}
