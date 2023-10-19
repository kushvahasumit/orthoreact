import React from "react";
import img1 from "../images/img2.jpg";
import img2 from "../images/img3.jpg";
import img3 from "../images/img5.jpg";

export default function Screening() {
  return (
    <div>
      {/* <!-- screening section --> */}
      <section>
        <div className="flex justify-center mb-[50px]  ">
          <h1 className="text-[50px] font-bold">We Care</h1>
        </div>

        <div className="flex justify-center ">
          <div className="grid grid-cols-1 mx-[50px] gap-0 gap-y-0 max-w-screen-2xl pt-0 md:grid-cols-3 min-h-screen ">
            <div className="w-[300px] bg-slate-200 flex flex-col items-center justify-center">
              <h1 className="text-[25px] font-bold">24/7 Trauma care</h1>
              <p className="px-[10px]">
                Works around the clock with a team of experts to treat
                individuals with numerous injuries.
              </p>
            </div>
            <div>
              <img src={img1} alt="stheso" height="400px" width="400px" />
            </div>
            <div className="w-[300px] bg-slate-200 flex flex-col items-center justify-center">
              <h1 className="text-[25px] font-bold">Intensive care</h1>
              <p className="px-[10px] ">
                The intensive care unit is outfitted with specifically built
                beds, a central oxygen supply, and contemporary ventilators, all
                of which are handled by skilled intensivists.
              </p>
            </div>
            <div>
              <img src={img2} alt="hosp" height="400px" width="400px" />
            </div>
            <div className="w-[300px] bg-slate-200 flex flex-col items-center justify-center">
              <h1 className="text-[25px] font-bold">Patient care</h1>
              <p className="px-[10px]">
                Our group of skilled medical professionals and qualified nurses
                ensured that the patients would receive a wide range of medical
                services.
              </p>
            </div>
            <div>
              <img src={img3} alt="laptop" height="400px" width="400px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
