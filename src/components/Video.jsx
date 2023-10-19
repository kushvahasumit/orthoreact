import React from 'react'

export default function Video() {
  return (
    <div>
       {/* <!-- vedio section  --> */}

<div class="h-auto items center pt-10 ">
  <div class="flex items-center justify-center font-semibold text-[50px] xs:justify-center xs:text-[40px]">Hospital
    facilities</div>

  <video width="w-auto" height="h-auto" controls class="pt-6">

    <source src="https://rjat-production.onrender.com/public/1687887483307--Hospital%20Ad.mp4" type="video/mp4" />

    Your browser does not support the video tag.
  </video>
</div>
    </div>
  )
}
