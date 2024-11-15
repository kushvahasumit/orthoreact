import React from "react";
import hospLogo from "../logos/WhatsApp Image 2023-06-26 at 17.55.53.jpg";
import phoneLogo from "../logos/phone icon.png";
import emailLogo from "../logos/e-mail icon.png";
import instaLogo from "../logos/insta logo.png";
import facebookLogo from "../logos/facebook logo.png";
import xLogo from "../logos/twitter logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  window.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector("#menu-btn");
    const dropdown = document.querySelector("#dropdown");

    menuBtn.addEventListener("click", () => {
      // if(dropdown.classList.contains('hidden')){
      //     dropdown.classList.remove('hidden');
      //     dropdown.classList.add('flex');
      // }else{
      //     dropdown.classList.remove('flex')
      //     dropdown.classList.add('hidden')
      // }
      dropdown.classList.toggle("hidden");
      console.log("Clik");

      dropdown.classList.toggle("flex");
    });
  });
  return (
    <div>
      <section>
        <header className=" h-20 flex sm:h-14:max-w-screen-2xl sm:flex-wrap ">
          <h1 className=" pl-5 xs:w-36 sm:w-36 md:w-60">
            <img
              src={hospLogo}
              alt="Hospital Logo"
              height="40px"
              width="129px"
            />
          </h1>
          <div className="grid font-semibold xs:flex sm:flex lg:grid">
            <div className="pt-3  font-semibold  xs:hidden xs:font-bold xs: sm:text-lg">
              RENU JAGDISH DIAGNOSTIC AND
            </div>
            <div className="font-semibold sm:text-lg:pl-0 xs:hidden xs:font-bold xs: sm:text-lg">
              TRAUMA CENTRE
            </div>
          </div>
          <div className="pl-14 pt-4 sm:text-xs:pl-0 xs:pl-8">
            <img src={phoneLogo} alt="phone logo" width="40px" />
          </div>
          <div className="col-span-1 p-3 font-semibold xs:pt-3 xs:pl-2 xs:font-bold xs: sm:text-lg  ">
            <div className=" text-[15px]  xs:font-semibold xs: sm:text-lg ">
              +91-991-721-6307
            </div>
            <div className=" xs:text-red-600 xs:font-bold xs: sm:text-lg">
              Emergency Care
            </div>
          </div>
          <div className=" pl-14 pt-4 sm:text-xs:pl-0 xs:pl-8 xs:hidden">
            <img src={emailLogo} alt="e-mail logo" width="35px" />
          </div>
          <div className=" p-3 pl-3 font-semibold xs:pt-3 xs:pl-2 xs:font-bold xs: sm:text-lg  xs:hidden ">
            <div>rjhospital01@gmail.com</div>
            <div className=" ">Drop us</div>
          </div>
          <div className="flex pl-10 p-3 xs:hidden sm:hidden md:flex">
            <div className="pl-1 cursor-pointer">
              <img src={instaLogo} alt="Instagram logo" width="35px" />
            </div>
            <div className="pl-3 cursor-pointer">
              <img src={facebookLogo} alt="facebook logo" width="35px" />
            </div>
            <div className="pl-3 cursor-pointer">
              <img src={xLogo} alt="twitter logo" width="35px" />
            </div>
          </div>
        </header>
      </section>
      {/* new nav */}
      <div class="nav">
        <input type="checkbox" id="nav-check" />

        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a
            className="    text-2xl rounded-lg  p-1 text-slate-600 xs:bg-slate-200 xs:rounded-lg sm:mx-0 "
            href=" "
          >
            <Link
              to="/"
              className="roundedhover:bg-blue-100 rounded-md duration-500 p-1 hover:bg-indigo-300 "
            >
              Home
            </Link>
          </a>
          <a
            className="   marker: text-2xl relative  text-slate-600 xs:bg-slate-200 xs:rounded-lg sm:mx-0 group"
            href=" "
          >
            <p className=" rounded-lg hover:bg-indigo-300 duration-500 p-1 cursor-pointer">
              Orthopaedic Specialties
            </p>

            <ul className="absolute  z-[1] rounded-lg p-2 w-60 bg-slate-200 opacity-80 left-0 hidden group-hover:block">
              <li className="mx-10 pl-10 text-xl py-3 xs:bg-slate-200 xs:rounded-lg sm:mx-0">
                <Link
                  to="/trauma"
                  className="rounded-lg hover:bg-indigo-300 duration-500 p-2"
                >
                  Trauma
                </Link>
              </li>
              <li className="mx-10 pl-10 text-xl py-3  xs:bg-slate-200 xs:rounded-lg sm:mx-0">
                <Link
                  to="/physiotherapy"
                  className="rounded-lg hover:bg-indigo-300  duration-500  p-1"
                >
                  Physiotherapy
                </Link>
              </li>
              <li className="mx-10 pl-10 text-xl py-3  xs:bg-slate-200 xs:rounded-lg sm:mx-0">
                <Link
                  to="/sonography"
                  className="rounded-lg hover:bg-indigo-300  duration-500 p-1"
                >
                  {" "}
                  Sonography
                </Link>
              </li>
              <li className="mx-10 pl-10 text-xl py-3  xs:bg-slate-200 xs:rounded-lg sm:mx-0">
                <Link
                  to="/gynocology"
                  className="rounded-lg hover:bg-indigo-300  duration-500 p-1"
                >
                  Gynecology
                </Link>
              </li>
            </ul>
          </a>
          <a
            className="    text-2xl    xs:bg-slate-200 relative xs:rounded-lg sm:mx-0 group"
            href=" "
          >
            <p className="rounded-lg over:bg-blue-100 hover:bg-indigo-300 p-1  duration-500 cursor-pointer">
              Dr Profile
            </p>
            <ul className="absolute z-[1] rounded-lg p-2 w-60 bg-slate-200 opacity-80 left-0 hidden group-hover:block">
              <li className="mx-10 pl-10 text-xl  p-1 xs:bg-slate-200 xs:rounded-lg sm:mx-0">
                <Link
                  to="/Rprofile"
                  className="rounded-lg hover:bg-indigo-300 duration-500 "
                >
                  Dr. Renu Garkoti
                </Link>
              </li>
              <li className="mx-10 pl-10 text-xl py-[10px] xs:bg-slate-200 xs:rounded-lg sm:mx-0">
                <Link
                  to="/Jprofile"
                  className="rounded-lg hover:bg-indigo-300 duration-500  p-1"
                >
                  Dr. J.C Garkoti
                </Link>
              </li>
            </ul>
          </a>
          <a
            className="    text-2xl  p-1 xs:bg-slate-200 xs:rounded-lg sm:mx-0 "
            href=" "
          >
            <Link
              to="/gallery"
              className="rounded-lg hover:bg-indigo-300 p-1 duration-500"
            >
              Gallery
            </Link>
          </a>
          <a
            className="  text-2xl  p-1 xs:bg-slate-200 xs:rounded-lg sm:mx-0"
            href=" "
          >
            <Link
              to="/contact"
              className="rounded-lg hover:bg-indigo-300  p-1 duration-500"
            >
              Contact Us
            </Link>
          </a>
          <a
            className="  text-2xl   p-1  xs:rounded-lg sm:mx-0 animate-pulse"
            href=" "
          >
            <Link
              to="/appointment"
              className="rounded-lg  p-1 bg-indigo-300 px-3   duration-500"
            >
              Book Appointment
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}
