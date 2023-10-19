import React from "react";
import hospImg from "../images/building.jpg";
import jagdish from "../images/jc.jpg";

export default function Card() {
  return (
    <div>
      {/* <!-- card section --> */}
      <section>
        <div className="flex flex-col items-center justify-center mb-[10px]">
          <h1 className="text-[70px] font-bold shadow-xl xs:text-[30px] ">
            Orthodeadic Specialist
          </h1>
          <h4 className="text-[30px] font-normal shadow-xl xs:text-[20px] xs:pl-4">
            Welcome to RJ Hospital, The best Ortho hospital in Pithoragarh
          </h4>
        </div>
        <div className="h-auto items-center ">
          <div className=" grid  gap-[75px] items-center justify-center flex-wrap  xs:flex-col max-w-screen-2xl min-h-screen   md:flex">
            <div className=" transform transition-all hover:scale-110 ">
              <div className="shadow-xl rounded-xl h-auto  ">
                <div className="m-[12px] rounded-xl shadow-gray-70 flex items-center justify-center">
                  <img
                    src="https://rjat-production.onrender.com/uploads/1693393943738--imgK.jpg"
                    alt="dr.renu"
                    height="150px"
                    width="150px"
                    className="rounded-[100%] shadow-xl"
                  />
                </div>
                <div className="w-[300px] mb-[5px] ">
                  <p className="py-[30px]">
                    <p className="pl-[20px] font-semibold text-xl text-center">
                      Dr. Renu Garkoti
                    </p>
                    <p className="text-[14px] font-medium pl-[20px] text-center">
                      M.B.B.S (LHMC Delhi), Dip. G.O.(I.C.M.C.H)Sonologist,
                      Gynecologist
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="transform transition-all hover:scale-110">
              <div className="shadow-xl rounded-xl">
                <div className="m-[12px] rounded-xl">
                  <img
                    src={hospImg}
                    alt="hospital "
                    height="300px"
                    width="300px"
                    className="rounded-xl shadow-xl"
                  />
                </div>
                <div className="w-[300px] mb-[5px]">
                  <p className="pl-[20px]">
                    <p className="pl-[20px] font-semibold text-2xl">
                      RJ Hospital
                    </p>
                    <p className="text-\[14px\] font-medium pl-[20px]">
                      RJ Ortho Hospital is an Orthopaedic Super Speciality
                      hospital with Trauma and Joint Replacement Center
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="transform transition-all hover:scale-110">
              <div className="shadow-xl rounded-xl">
                <div className="m-[12px] rounded-xl shadow-xl">
                  <img
                    src={jagdish}
                    alt="dr.jagdish"
                    height="300px"
                    width="300px"
                    className="rounded-xl shadow-xl"
                  />
                </div>
                <div className="w-[300px] mb-[5px]">
                  <p className="pl-[20px]">
                    <p className="pl-[20px] font-semibold text-2xl">
                      Dr. Jagdish Garkoti
                    </p>
                    <p className="text-\[14px\] font-medium pl-[20px]">
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
