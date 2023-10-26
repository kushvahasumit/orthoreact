import React from 'react'

export default function Appointment() {
    return (
      <>
        {/* <div className=" w-full h-[700px]">
          <div className="text-[40px] text-center py-[20px]">
            <h1 className="text-slate-600">Appointment Form</h1>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-slate-300 w-[700px] px-[30px] py-[40px] rounded-xl h-[500px] opacity-75 shadow-xl">
              <form>
                <div className="flex flex-col text-[20px]">
                  <label htmlFor="Firstname" className="text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-slate-300"
                  />
                  <div className="border-[1.5px] border-black"></div>
                </div>

                <div className="flex flex-col text-[20px] pt-[30px]">
                  <label htmlFor="Age" className="text-left">
                    Age:
                  </label>
                  <input
                    type="text"
                    placeholder="Age*"
                    className="bg-slate-300"
                  />
                  <div className="border-[1.5px] border-black"></div>
                </div>

                <div className="flex flex-col text-[20px] pt-[30px]">
                  <label htmlFor="Phone" className="text-left">
                    Phone:
                  </label>
                  <input
                    type="number"
                    placeholder="Phone*"
                    className="bg-slate-300"
                  />
                  <div className="border-[1.5px] border-black"></div>
                </div>

                <div className="flex flex-col text-[20px] pt-[30px]">
                  <label htmlFor="Address" className="text-left">
                    Address:
                  </label>
                  <input
                    type="text"
                    placeholder="Adress*"
                    className="bg-slate-300"
                  />
                  <div className="border-[1.5px] border-black"></div>
                </div>
                <div className="text-[20px] py-[10px]">
                  <label for="gender" className=" text-[20px] text-left">
                    Gender:
                  </label>
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

                <div className="pt-[10px] flex justify-start sm:pl-[130px]">
                  <button className="bg-indigo-500 text-[20px] px-[100px] py-[10px] rounded-xl hover:bg-slate-200 ">
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        <div className="text-center py-[25px]">
          <h1 className="text-[30px] sm:text-[45px] text-slate-500 font-bold">
            Appointment Form
          </h1>
        </div>
        <div className="flex items-center justify-center sm:w-full lg:w-full ">
          <div class="px-[10px] w-[600px] shadow-xl py-[30px] rounded-lg">
            <div className="px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Full Name
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div class="mt-8 px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div class="mt-8 px-[10px]">
              <span class="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8 ml-[-50px] px-[10px]">
              <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-[200px] focus:outline-none focus:shadow-outline hover:bg-indigo-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
