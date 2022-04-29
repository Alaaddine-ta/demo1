import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import React from 'react'

function Login() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 login">
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="./img/login_img.png"
          className="w-full"
          alt="Sample image"
        />
      </div>
        <div className="block p-6 rounded-lg  bg-white login_card" >
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Login to your system
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative mb-2">
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <FaUserAlt className="pointer-events-none w-5 h-5 absolute  bg-transparent top-1/2 transform -translate-y-1/2 left-3 icon" />
                <input
                  id="username"
                  name="username"
                  type="username"
                  className="bg-gray-50 appearance-none  block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="username"
                  required
                />
              </div>
              <div className="relative mb-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <FaLock className="pointer-events-none w-6 h-6 absolute  bg-transparent top-1/2 transform -translate-y-1/2 left-3 icon" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="bg-gray-50 appearance-none  block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  required
                />
                
              </div>
            </div>

            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 rounded-full text-sm font-medium  text-white bg-sky-500 hover:bg-sky-600  focus:outline-none"
            > 
              Sign in
            </button>
          </form>
        </div>
      </div>
  )
}

export default Login
