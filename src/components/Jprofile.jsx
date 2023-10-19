import React from 'react'
import machin from "../images/machin.jpg"

export default function Jprofile() {
    return (
        <div>
            <section className="max-[320px]:text-center">
                <div className="relative ">
                    <img src={machin} alt="img" />
                    <h1 className="absolute text-[60px] font-2xl top-40 left-10 xs:font-xl xs:text-[40px] xs:top-8  ">
                        Doctors Profile
                    </h1>
                    <h2 className="absolute text-[30px] font-xl top-60 left-10 text-2xl xs:font-xl xs:text-[30px] xs:top-20">
                        Dr J.C. Grahkoti
                    </h2>
                </div>

                <div className="h-auto items center ">
                    <div className="flex items-center justify-center font-semibold text-[50px] xs:justify-center xs:text-[40px]">Dr J.C. Grahkoti </div>
                    <div className="shadow-xl rounded-xl flex flex-row items-center justify-center flex-wrap ">
                        <div className="m-[12px] rounded-xl shadow-gray-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-[20px]">
                            <img
                                src="https://rjat-production.onrender.com/uploads/1688034570016--docter.jpg"
                                alt="jagdish"
                                height="400px"
                                width="600px"
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                        <div className=" mb-[20px] w-[600px]">
                            <p className="pl-[20px] text-xl font-bold">Dr J.C. Grahkoti</p>
                            <p className="pl-[20px] text-[20px] font-thin">
                                <span className="font-bold">M.S Ortho, Ortho Surgeon, Bones and joint Specialist , UMC-Reg. No. 2720
                                </span>
                                <br/>

                                    Welcome to the office of highly regarded bone and joint specialist Dr. J.C. Grahkoti, who is committed to changing lives via all-encompassing musculoskeletal therapy. With years of expertise and a wealth of knowledge, Dr. J.C. Grahkoti is dedicated to giving patients of all ages excellent care and individualised solutions.

                                    Dr.J.C. Grahkoti is a well-known authority in the subject and possesses a long list of accomplishments and credentials. Dr.J.C. Grahkoti followed specialised studies and obtained board certification in bone and joint medicine after completing extensive medical training, including M.S. (ORTHO), Ortho Surgeon, Bones and joint Specialist. <br />
                                    An orthopaedic specialist, usually referred to as a joint and bone expert, specialises in the identification, therapy, and management of diseases and accidents affecting the musculoskeletal system. Their knowledge spans a variety of topics relating to joints and bones, such as:<br />

                                    Joint problems, including osteoarthritis, rheumatoid arthritis, gout, and joint infections, are evaluated and treated by joint specialists. In order to reduce pain, promote joint function, and improve quality of life, they offer medicinal and surgical procedures.<br />

                                    Trauma and fractures: Orthopaedic professionals have the knowledge and training necessary to identify and manage fractures and traumatic injuries to bones and joints. To promote good healing and restore normal function, they use surgical, casting, or splinting methods.

                                    Sports-related injuries, such as ligament rips, are thoroughly understood by joint and bone specialists
                            </p>
                        </div>

                    </div>
                </div>
      </section >
    </div >
  )
}
