import React from 'react'
import upi from "../images/upi.jpg"

export default function Scan() {
  return (
    <div>
      <div className="pt-4">
    <div className="flex items-center justify-center py-[20px] font-bold text-[40px]">
      <h1>SCAN AND PAY</h1>
    </div>
    <div className="  grid-cols-1 items-center flex gap-2 rounded-md px-5 pb-4 xs:grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-3 ">
      <div className=" " >
        <img src={upi} alt="upi" width="400px"
          height="400px" className="rounded-md" />
      </div>
      
    </div>
 </div>
    </div>
  )
}
