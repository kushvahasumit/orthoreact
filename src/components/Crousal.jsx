import React from "react";
import img1 from "../logos/img1.png"
import img2 from "../logos/img2.png"
import img3 from "../logos/img3.png"
import img4 from "../logos/img4.png"
import img5 from "../logos/img5.png"
import img6 from "../logos/img6.png"
import img7 from "../logos/img7.png"
import img8 from "../logos/img8.png"
import img9 from "../logos/img9.png"
import img10 from "../logos/img10.png"
 


export default function Crousal() {
  return (
    <div>
        <h1 className='font-bold text-6xl text-center pb-5 pt-5 text-slate-600'>Our Facilities</h1>
        <marquee behavior="scroll" direction="left">
           <div className='float'>
            <div className="marquee-container">
                <div className="marquee">
                    <i className=" fa-heart"><img src={img1} alt="l1" /></i>
                    <i className=" fa-star"><img src={img2} alt="l2" /></i>
                    <i className=" fa-rocket"><img src={img3} alt="l3" /></i>
                    <i className=" fa-heart"><img src={img4}alt="l4" /></i>
                    <i className=" fa-star"><img src={img5} alt="l5" /></i>
                    <i className=" fa-rocket"><img src={img6} alt="l6" /></i>
                    <i className=" fa-heart"><img src={img7}alt="l7" /></i>
                    <i className=" fa-star"><img src={img8} alt="l8" /></i>
                    <i className=" fa-rocket"><img src={img9} alt="l9" /></i>
                    <i className=" fa-heart"><img src={img10} alt="l10" /></i>
                </div>
            </div>
        </div> 
        </marquee>
        
    </div>
  );
}
