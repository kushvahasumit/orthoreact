import React from 'react'
import {Link} from "react-router-dom";

export default function Owner() {
  return (
    <div>
      {/* <!-- owner section  --> */}
  <section>
    <div>
      <div className="font-semibold text-[50px] pl-40 xs:text-[30px]  xs:pl-20">Our Specialist</div>
      <div className="shadow-xl rounded-xl h-auto pl-36 flex items-center xs:grid xs:pl-4 sm:grid md:flex">
        <div className="m-[12px] rounded-xl shadow-gray-700 ">
          <img src="https://rjat-production.onrender.com/uploads/1693393943738--imgK.jpg" alt="Dr.Renu" height="300px"
            width="300px" className="rounded-xl shadow-xl" />
        </div>
        <div className="w-[300px] mb-[20px]">
          <p className="pl-[20px] font-semibold text-2xl">
            Dr. Renu Garkoti
          </p>
          <p className="text-\[14px\] font-semibold pl-[20px]">M.B.B.S (LHMC Delhi), Dip. G.O.(I.C.M.C.H)Sonologist,
            Gynecologist</p>
          <p className="pl-[20px]">
            I am a compassionate and accomplished medical professional committed to giving women of all ages complete
            healthcare services. I play a crucial part in the diagnosis, administration, and treatment of many
            reproductive health concerns.I'm dedicated to giving expectant women thorough prenatal care and supporting
            them through every stage of pregnancy.
          </p>
        </div>
        <div className="pl-16   text-black   font-bold  transform transition-all hover:scale-125 xs:pl-5 ">
          <div className="bg-blue-300 py-[10px]  rounded-xl xs:w-40 ">
            <h2 className="text-center text-2xl p-2 "><Link to="/Rprofile" > Visit Profile </Link></h2>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
