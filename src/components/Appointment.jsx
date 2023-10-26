import React from 'react'

export default function Appointment() {
    return (
      <>
        <div className="text-center py-[25px]">
          <h1 className="text-[30px] sm:text-[45px] text-slate-500 font-bold">
            Appointment Form
          </h1>
        </div>
        <div className="flex items-center justify-center sm:w-full lg:w-full ">
          <div class="px-[10px] w-[600px] shadow-xl py-[30px] rounded-lg">
            <div className="px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Full Name:
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div class="mt-8 px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">Age</span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
              />
            </div>
            {/* <div class="mt-8 px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div> */}
            <div class="mt-8 px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Phone:
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="Number"
              />
            </div>

            <div class="mt-8 px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Address:
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>

            <div class="mt-8 px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Gender:
              </span>
              <input
                type="radio"
                name="male"
                value="male"
                id="gender"
                className="mx-2"
              />
              Male
              <input
                type="radio"
                name="female"
                value="female"
                id="gender"
                className="mx-2"
              />
              Female
              <input
                type="radio"
                name="other"
                value="other"
                id="gender"
                className="mx-2"
              />
              Other
            </div>

            <div className="mt-8 ml-[-50px] px-[10px]">
              <button type='submit' className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-[200px] focus:outline-none focus:shadow-outline hover:bg-indigo-300"   >
                <a href="https://rzp.io/l/CoPe916M1"> Submit</a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
