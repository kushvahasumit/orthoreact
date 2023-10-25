import React from 'react'
import phoneLogo from "../logos/phone icon.png";
import Image from "../images/pic3.jpg";

export default function Emergency() {
  return (
    <>
      <div className="flex flex-wrap justify-between py-[30px] px-[50px] text-slate-600 sm:h-[500px]">
        <div>
          <div className="text-left ">
            <h1 className="text-[60px] font-bold sm:text-[20px]">24/7</h1>
            <h1 className="text-[60px] font-bold">Emergency Medical Care</h1>
            <h1 className="text-[30px] font-medium text-slate-400">
              with 24 hour access
            </h1>
            <h3 className="text-[30px] font-medium text-slate-400">
              an emergency assist
            </h3>
          </div>
          <div className="flex py-[30px]">
            <div className="pr-[10px] flex items-center">
              <img src={phoneLogo} alt="" />
            </div>
            <div className="text-center font-medium">
              <h3 className="text-xl ">05964-227933</h3>
              <h3 className="text-xl mt-[7px]">+91 8865037172</h3>
            </div>
          </div>
        </div>
        <div className="shadow-neutral-200">
          <img
            src={Image}
            alt=""
            height="400px"
            width="550px"
            className="rounded-2xl"
          />
        </div>
      </div>
    </>
  );
}
