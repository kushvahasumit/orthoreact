import React from "react";
import Jagdish from "../images/jagdish.jpg";
import Renu from "../images/Renu.jpg";
import Hosp from "../images/hosp.jpg"

export default function Card() {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center mb-[5px]">
          <h1 className="text-[70px] font-bold xs:text-[30px] text-slate-600 py-[10px]">
            Orthodeadic Specialist
          </h1>
          <h4 className="text-[30px] font-normal xs:text-[20px] xs:pl-4 text-slate-600">
            The best Ortho hospital in Pithoragarh
          </h4>
        </div>
        <div className=" items-center py-[60px]">
          <div className=" grid   justify-center  xs:flex-col md:flex sm:gap-[30px] lg:items-center xl:items-center gap-[75px] 2xl:items-center w-full space-x-6 ">
            <div className="  shadow-md hover:scale-105 transition-transform duration-700 ease-in-out transform sm:w-[350px] justify-center">
              <div className="shadow-xl rounded-xl h-[400px] flex flex-col items-center justify-center">
                <div className=" rounded-xl shadow-gray-70 flex justify-center">
                  <img
                    src={Renu}
                    alt="dr.renu"
                    height="160px"
                    width="300px"
                    className="rounded-xl shadow-xl h-[287px]"
                  />
                </div>
                <div className="w-[300px] mb-[5px] text-center ">
                  <p className="py-[40px]">
                    <p className="font-semibold text-xl text-slate-600">
                      Dr. Renu Garkoti
                    </p>
                    <p className="text-[16px] font-medium text-slate-600">
                      M.B.B.S (LHMC Delhi), Dip. G.O.(I.C.M.C.H)Sonologist,
                      Gynecologist
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="shadow-md hover:scale-105 transition-transform duration-700 ease-in-out transform sm:w-[350px] ">
              <div className="shadow-xl rounded-xl h-[400px] flex flex-col items-center justify-center">
                <div className="rounded-xl flex justify-center">
                  <img
                    src={Hosp}
                    alt="hospital "
                    height="300px"
                    width="300px"
                    className="rounded-xl shadow-xl h-[287px]"
                  />
                </div>
                <div className="w-[300px]  text-center px-[10px]">
                  <p className="py-[40px]">
                    <p className=" font-semibold text-2xl text-slate-600">
                      RJ Hospital
                    </p>
                    <p className="text-[16px] font-medium text-slate-600">
                      RJ Ortho Hospital is an Orthopaedic Super Speciality
                      hospital
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="shadow-md hover:scale-105 transition-transform duration-700 ease-in-out transform  w-[400px]">
              <div className="shadow-xl rounded-xl h-[400px] w-auto flex flex-col items-center justify-center">
                <div className=" rounded-xl flex items-center justify-center">
                  <img
                    src={Jagdish}
                    alt="dr.jagdish"
                    height="150px"
                    width="auto"
                    className="rounded-xl h-[287px]"
                  />
                </div>
                <div className="w-[300px] mb-[5px] text-center">
                  <p className="py-[35px]">
                    <p className="font-semibold text-2xl text-slate-600">
                      Dr. Jagdish Garkoti
                    </p>
                    <p className="text-[16px] font-medium pl-[20px] text-slate-600">
                      Ortho Surgeon, M.S (Ortho) Bones and Joint Specialist
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
