import React from 'react'
import machin from "../images/machine.jpg"

export default function Rprofile() {
  return (
    <div>
       <section className="max-[320px]:text-center">
        <div className="relative ">
          <img src={machin} alt="machin" />
          <h1 className="absolute text-[60px] font-2xl top-40 left-10 xs:font-xl xs:text-[40px] xs:top-8  ">
            Doctors Profile
          </h1>
          <h2 className="absolute text-[30px] font-xl top-60 left-10 text-2xl xs:font-xl xs:text-[30px] xs:top-20">
            Dr.Renu Garkoti
          </h2>
        </div>
  
        <div className="h-auto items center ">
          <div className="flex items-center justify-center font-semibold text-[50px] xs:justify-center xs:text-[40px]">Dr. Renu.Garhkoti</div>
          <div className="shadow-xl rounded-xl flex flex-row items-center justify-center flex-wrap ">
            <div className="m-[12px] rounded-xl shadow-gray-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-[20px]">
              <img
                src="https://rjat-production.onrender.com/uploads/1693393943738--imgK.jpg"
                alt="DR.Renu"
                height="400px"
                width="600px"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className=" mb-[20px] w-[600px]">
              <p className="pl-[20px] text-xl font-bold">Dr.Renu Garkoti</p>
              <p className="pl-[20px] text-[20px] font-thin"/>
                <span className="font-bold">M.B.B.S (LHMC Delhi), Dip. G.O.(I.C.M.C.H)Sonologist, Gynecologist ,UMC-Reg. No. 2794
                </span> 
                <br/>
                
                    I am a compassionate and accomplished medical professional committed to giving women of all ages complete healthcare services. I play a crucial part in the diagnosis, administration, and treatment of many reproductive health concerns because to my training in sonography and gynaecology.<br/>

                    My main area of interest is the female reproductive system, which includes the vagina, cervix, ovaries, and fallopian tubes. I have a thorough awareness of how this system functions and the particular healthcare requirements that women have at various phases of their life.
                    I am a kind and very knowledgeable female sonologist with a background in ultrasound imaging. My main area of interest is applying cutting-edge technology to conduct and analyse ultrasound tests for a variety of medical needs.
<br/>
                     I can see and assess different bodily parts and systems thanks to ultrasound imaging. I have considerable knowledge and experience using ultrasound to evaluate the thyroid, breast, belly, pelvic, and other interesting areas. I'm skilled at spotting and identifying anomalies, tumours, cysts, and other diseases that may need additional testing or treatment.
                    
  
                
              
            </div>
            </div>
          </div>
      </section>
    </div>
  )
}
