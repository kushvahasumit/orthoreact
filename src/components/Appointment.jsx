import React from 'react'

export default function Appointment() {
    return (
      <>
        {/* <div className="flex justify-center ">
          <div className="flex xs:grid">
            <section className=' w-screen'>
              <div className="flex text-center items-center justify-center py-[20px] font-bold text-[40px]">
                <h1>Book Appointment</h1>
              </div>
              <div className="flex justify-center">
                <form
                  onsubmit=""
                  autocomplete="off"
                  className="bg-slate-300 mx-3  py-5 rounded-md w-[700px] shadow-2xl"
                >
                  <div className="">
                    <label for="name" className=" text-lg md:text-2xl ">
                      Name:
                    </label>
                    <input type="text" name="fullName" id="fullName" />
                  </div>
                  <div className="">
                    <label for="age" className=" text-lg md:text-2xl ">
                      Age:
                    </label>
                    <input type="number" name="age" id="age" />
                  </div>
                  <div className="">
                    <label for="gender" className=" text-lg md:text-2xl ">
                      Gender:
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      id="gender"
                    />
                    Male
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      id="gender"
                    />
                    Female
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      id="gender"
                    />
                    Other
                    <div className="">
                      <label for="phone" className=" text-lg md:text-2xl ">
                        Phone:
                      </label>
                      <input type="tel" name="phone" id="phone" />
                    </div>
                    <div className="">
                      <label for="address" className=" text-lg md:text-2xl ">
                        Address:{" "}
                      </label>
                      <input type="text" name="address" id="address" />
                    </div>
                    <div className="">
                      <label
                        for="appointment"
                        className=" text-lg md:text-2xl "
                      >
                        Appointment:
                      </label>
                      <select
                        id="department"
                        name="department"
                        className="p-2 text-lg font-semibold pl-4 ml-2 px-7 md:w-auto rounded-lg border-2"
                        required
                      >
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      value="submit"
                      className=" text-lg md:text-2xl p-2 bg-green-600 rounded-lg border-2"
                    >
                      Add entry
                    </button>
                    <div />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div> */}
        <div className=" w-full h-[650px] ">
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

                <div className="pt-[10px] flex justify-start pl-[130px]">
                  <button className="bg-indigo-500 text-[20px] px-[100px] py-[10px] rounded-xl hover:bg-slate-200 ">
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}
