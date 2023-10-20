import React from 'react'
import phoneLogo from "../logos/phone icon.png";
import Image from "../images/pic3.jpg";

export default function Emergency() {
  return (
    <>
      {/* <section>
    <div className="relative mt-6">
      <h1 className="absolute pl-12 text-red-600 text-8xl top-40 font-bold p-6 xs:text-[35px] xs:pl-4 xs:top-12">
        24/7
      </h1>
      <h1 className="absolute pl-12 text-red-600 text-8xl top-0 font-medium p-6 xs:text-[30px] xs:pl-4 ">
        Emergency
      </h1>
      <h4 className="absolute pl-12 text-red-600 text-6xl top-28 font-medium p-4 xs:text-[30px] xs:pl-4 xs:top-8 ">
        Medical Care
      </h4>
      <h1 className="absolute pl-12 text-black text-2xl top-64 font-medium p-6 xs:hidden sm:text-lg md:text-2xl">
        With 24 hour access to
      </h1>
      <h4 className="absolute pl-12 text-black text-2xl top-72 font-medium p-4 xs:hidden">
        an emergency assistant
      </h4>
      <div className="bottom-16 absolute flex text-4xl font-semibold xs:bottom-0 sm:hidden md:flex ">
        <div className="pl-8 pt-3 xs:w-10 xs:pl-1 xs:bottom-0 ">
          <img src={phoneLogo} alt="phone logo" width="80px" />
        </div>
        <div className="col-span-1 p-2 xs:text-[18px] xs:pl-1 xs:p-2 ">
          <div> 05964-227933 </div>

          <div className="xs:hidden"> +91 8865037172</div>
        </div>
      </div>

      <img src={emergency} alt="Emergency care " />
    </div>
  </section> */}
      <div className="flex flex-wrap justify-between py-[30px] h-[500px] px-[50px] text-slate-600">
        <div>
          <div className="text-left">
            <h1 className="text-[60px] font-bold">24/7</h1>
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
