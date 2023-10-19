import React from 'react'

export default function Appointment() {
    return (
        <div>
            {/* <!-- form section --> */}
            <div className="flex xs:grid  bg-slate-200">
                {/* <!-- for details --> */}
                <section>
                    <div className="flex text-center items-center justify-center py-[20px] font-bold text-[40px]">
                        <h1>Book Appointment</h1>
                    </div>
                    <div className="flex items-baseline justify-center   bg-slate-200">
                        <form onsubmit="event.preventDefault();onFormSubmit()" autocomplete="off" className="bg-gray-100 mx-3  py-5 rounded-md w-[400px]">
                            <div className="box">
                                <label for="name" className=" text-lg md:text-2xl ">Name: </label>
                                <input type="text" name="fullName" id="fullName" />
                            </div>
                            <div className="box">
                                <label for="age" className=" text-lg md:text-2xl ">Age: </label>
                                <input type="number" name="age" id="age" />
                            </div>
                            <div className="box">
                                <label for="gender" className=" text-lg md:text-2xl ">Gender:</label>
                                <input type="radio" name="gender" value="male" id="gender" /> Male
                                <input type="radio" name="gender" value="female" id="gender" /> Female
                                <input type="radio" name="gender" value="other" id="gender" /> Other

                                <div className="box">
                                    <label for="phone" className=" text-lg md:text-2xl ">Phone: </label>
                                    <input type="tel" name="phone" id="phone" />
                                </div>
                                <div className="box">
                                    <label for="address" className=" text-lg md:text-2xl ">Address: </label>
                                    <input type="text" name="address" id="address" />
                                </div>

                                <div className="box grid">
                                    <label for="appointment" className=" text-lg md:text-2xl ">Appointment: </label>
                                    <select id="department" name="department" className="p-2 text-lg font-semibold pl-4 ml-2 px-7 md:w-auto rounded-lg border-2" required>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="orthopedics">Orthopedics</option>

                                    </select>
                                </div>
                                <button type="submit" value="submit" className=" text-lg md:text-2xl p-2 bg-green-600 rounded-lg border-2">Add entry</button>
                              

                            <div/>

                                {/* <!-- <form className="bg-gray-100 mx-3  py-5 rounded-md w-[400px]">
          <div className="my-4 mx-3 ">
            <label for="name" className=" text-lg md:text-2xl ">Name:</label>
            <input type="text" id="name" name="name" className="p-2 ml-3 px-7 md:w-[600px] rounded-lg border-2">
          </div>

          <div className="my-4 mx-3">
            <label for="email" className="text-lg md:text-2xl">Email:</label>
            <input type="email" id="email" name="email" className="p-2 ml-3 px-7 md:w-[600px] rounded-lg border-2" required>
          </div>

          <div className="my-4 mx-3">
            <label for="phone" className="text-lg md:text-2xl">Phone:</label>
            <input type="tel" id="phone" name="phone" className="p-2 ml-3 px-7 md:w-[590px] rounded-lg border-2" required>
          </div>

          <div className="my-4 mx-3">
            <label for="department" className="text-lg md:text-2xl">Department:</label>
            <select id="department" name="department" className="p-2 ml-3 px-7 md:w-[550px rounded-lg border-2" required>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>

            </select>
          </div>

          <div className="my-4 mx-3">
            <label for="date" className="text-lg md:text-2xl">Preferred Date:</label>
            <input type="date" id="date" name="date" className="p-2 ml-3 px-7 md:w-[550px] rounded-lg border-2" required>
          </div>
          <div className="my-4 mx-3">
            <label for="message" className="text-lg md:text-2xl">Message:</label>
            <textarea id="message" name="message" className="p-2 ml-3  w-[200px] md:w-[600px] rounded-lg border-2 " rows="4"
              cols="50"></textarea>
          </div>

          <div
            className="flex items-center justify-center bg-red-600 mx-3 py-2 my-4 rounded-lg border-2 md: hover:bg-red-700">
            <button id="appointment" type="submit" formaction="scan.html"
              className="text-white font-extrabold text-lg rounded-lg ">Request Appointment</button>
          </div>

        </form> --> */}
                            </div>
                        </form>
                    </div>
                </section>
            </div>
                    </div>
                    )
}
