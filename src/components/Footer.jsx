import React from 'react'
import hospLogo from "../logos/WhatsApp Image 2023-06-26 at 17.55.53.jpg";
import phoneLogo from "../logos/phone icon.png";
import emailLogo from "../logos/e-mail icon.png";
import instaLogo from "../logos/insta logo.png";
import facebookLogo from "../logos/facebook logo.png";
import xLogo from "../logos/twitter logo.png";
import location from "../logos/location logo.png"
import copyRight from "../logos/copyright icon.png"

export default function Footer() {
    return (
      <div>
        <section className="pt-0 sm:pt-5  ">
          <footer className=" ">
            <div className="flex pl-0 p-2 sm:pl-3 ">
              <h1 className=" m-4  rounded-xl text-6xl w-48 h-10 xs:hidden">
                
                <img src={hospLogo} alt="Hospital logo" />
              </h1>

              <div className="flex-col p-0 m-0 xs:hidden">
                <div className="pt-5 pl-3  text-3xl">
                  
                  Renu Jagdish Diagnostic
                </div>
                <div className=" pl-3 text-3xl"> And Trauma Centre </div>

                <div className="pt-3 pl-3 w-72">
                  RJ Ortho Hospital is an Orthopaedic Super Speciality hospital
                  with Trauma and Joint Replacement Center. We are experts in
                  complicated trauma, infected fracture non-union, bone and
                  joint specialization.
                </div>
              </div>
              <div className="pl-8 xs:hidden">
                <h5 className="text-2xl pt-4">Useful links</h5>
                <ul className="grid">
                  <li className="pt-2 hover:underline-offset-4 hover:text-xl">
                    Home
                  </li>
                  <div className="hover:underline-offset-4 hover:text-xl">
                    <li className="pt-2 ">Orthopaedic</li>
                    <li className="pt-0">Specialties</li>
                  </div>

                  <li className="pt-2 hover:underline-offset-4 hover:text-xl">
                    Dr Profile
                  </li>
                  <li className="pt-2 hover:underline-offset-4 hover:text-xl">
                    Gallery
                  </li>
                  <li className="pt-2  hover:underline-offset-4 hover:text-xl">
                    Contact Us
                  </li>
                </ul>
              </div>
              <div className="pl-10 xs:pl-10">
                <h5 className="text-2xl pt-4">Reach us</h5>

                <div>
                  <div className="flex pt-4">
                    <div className="pl-1 cursor-pointer">
                      <img src={instaLogo} alt="Instagram logo" width="35px" />
                    </div>
                    <div className="pl-3 cursor-pointer">
                      <img
                        src={facebookLogo}
                        alt="facebook logo"
                        width="35px"
                      />
                    </div>
                    <div className="pl-3 cursor-pointer">
                      <img src={xLogo} alt="twitter logo" width="35px" />
                    </div>
                  </div>
                  <div>
                    <div className="pl-1 pt-4 flex">
                      <img src={location} alt="Instagram logo" width="35px" />
                      <p className="pl-4 ">
                        G.I.C. Road Pithoragarh , Near APTech Pithoragarh
                      </p>
                    </div>
                    <div className="pl-2 pt-4 flex">
                      <img src={emailLogo} alt="Instagram logo" width="35px" />
                      <p className="pl-4 ">rjhospital01@gmail.com</p>
                    </div>

                    <div className="flex ">
                      <div className="pl-1 pt-4">
                        <img src={phoneLogo} alt="e-mail logo" width="40px" />
                      </div>
                      <div className="span pt-3 pl-4 ">
                        <div> 05964-227933 </div>
                        <div>+91 8865037172</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="pt-3 pl-6 xs:hidden sm:hidden md:flex">
                  <div className="flex-col pl-1">
                    <p>Developed by :</p>

                    <div className="pl-1 pt-1 flex">
                      <img src={emailLogo} alt="e-mail logo" width="35px" />
                      <div className="pl-3 pt-2 font-semibold hover:scale-110">
                        <a href="mailto:techjunkies@gmail.com">
                          <p>Ksemya</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <footer className="bg-slate-200 flex place-content-center">
            <div className="flex place-content-center ">
              <img src={copyRight} alt="copyright" width="25px" />
              <p className="pl-2"> All Right Reserved . Ortho Hospital </p>
            </div>
          </footer>
        </section>
      </div>
    );
}
