import React from 'react'
import gall from "../images/galllllary.jpg"

export default function Gallery() {
  return (
    <div>
      {/* <!-- gallery section --> */}
  <section>
    <div class="relative ">
      <img src={gall} alt="img" />
      <h1 class="absolute text-[60px] font-2xl top-48 left-10 xs:font-xl xs:text-[40px] xs:top-8  ">
        Photo Gallery
      </h1>

    </div>
    <div>
      <div class="flex items-center justify-center py-[30px] font-bold text-[40px]">
        <h1>Gallery</h1>
      </div>
      <div class="grid grid-cols-1 gap-2 rounded-md px-5 xs:grid-cols-1 justify-center  md:grid-cols-2 lg:grid-cols-3 ">
        <div className='h-[90px] w-[400px]'>
          <img src="https://rjat-production.onrender.com/uploads/1693393943738--imgK.jpg" alt="img" width="400px"
            height="200px" class="rounded-md" />
        </div>
             
        <div>
          <img src="https://rjat-production.onrender.com/uploads/1688034570016--docter.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>
  
        <div>
          <img src="https://rjat-production.onrender.com/uploads/1688034626083--Renu.png" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687885529421--imgB.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687885538685--imgC.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687885550207--imgD.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687896388353--imgF.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687896398554--imgG.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687896408440--imgH.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687896428526--imgJ.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687980884392--imgA.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
         <img src="https://rjat-production.onrender.com/uploads/1687885460056--building.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1687885596521--imgE.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1693393960401--imgL.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1693393970068--imgM.jpg" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1688034587177--docter3.png" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1688034594414--equip.png" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1688034559035--bed.png" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

        <div>
          <img src="https://rjat-production.onrender.com/uploads/1688034580029--docter2.png" alt="img" width="400px"
            height="400px" class="rounded-md" />
        </div>

      </div>
    </div>

          
  </section>
    </div>
  )
}
