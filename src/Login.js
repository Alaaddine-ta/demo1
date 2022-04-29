import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import React from 'react'

function Login() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 login">
      <div
        style={{"position": "relative", "right":"65px"}}
      >
        <img
          src="./img/login_img.png"
          className="w-full"
          alt="login_image"
        />
      </div>
        <div className="p-6 rounded-xl  bg-white login_card" >
          <div>
            <h2 className="text-center text-3xl font-bold" style={{"color": "#2F5496"}}>Login </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Login to your system
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="relative mb-3.5">

                <FaUserAlt className="w-5 h-5 absolute  bg-transparent top-1/2 -translate-y-1/2 left-3 icon" />
                <input
                  id="username"
                  name="username"
                  type="username"
                  className="h-12 bg-gray-50  w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="relative mb-3.5">
                <FaLock className="w-6 h-6 absolute  bg-transparent top-1/2  -translate-y-1/2 left-3 icon" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="h-12 bg-gray-50 w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  required
                />
                
              </div>

            <button
              type="submit"
              className="relative py-2 px-4 rounded-full  font-medium  text-white bg-sky-500 hover:bg-sky-600  focus:outline-none submit-login"
            > 
              Sign in
            </button>

            <div class="flex justify-between items-center" style={{"height": "90px"}}>
              <a href="#" class="font-medium text-gray-800 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
                Forgot password?
              </a>      
              <a href="#" class="font-medium text-gray-800 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">
                Register
              </a>  
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login
