import React from "react";
import loginPic from "../assets/undraw_completed_m9ci 1.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" relative flex items-center justify-center">
      <div className="relative overflow-hidden  w-full h-screen p-6 sm:p-8 bg-[#ffffff] rounded-lg  ">
        {/* <circles /> */}
        <div className="sm:hidden absolute top-[-20px] left-[-90px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[-80px] left-[-10px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[240px] left-[-80px] w-80 h-80 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute top-[100px] right-[-90px] w-80 h-80 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute bottom-[-20px] right-[-90px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>
        <div className="sm:hidden absolute bottom-[-80px] right-[-10px] w-40 h-40 bg-[#52D8F942] rounded-full opacity-90"></div>

        <div class="relative mt-10">
          {/* Search Box*/}
          <input
            type="text"
            placeholder="Search Books"
            class="w-full shadow-lg placeholder:font-semibold px-4 py-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M16.24 16.24a7 7 0 10-9.9-9.9 7 7 0 009.9 9.9z"
              />
            </svg>
          </button>
        </div>

        {/* Welcome Back */}
        <h2 className="text-center mt-9 text-xl font- font-bold sm:text-xl mb-4">
          Welcome Back
        </h2>
        <div className=" relative flex justify-center mb-6">
          <img
            className="max-w-48 max-h-52"
            src={loginPic}
            alt="login picture"
          />
        </div>

        {/* Form */}
        <form className="relative">
          <div className="mb-4 ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full shadow-md px-4  py-3 border rounded-3xl placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />
          </div>
          <div className="mb-1">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full shadow-md px-4 py-3 border rounded-3xl placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />
          </div>
          <div className=" relative text-center mb-3">
            <a
              href="/signup"
              className="text-xs font-semibold sm:text-sm text-[#2BB9D2] hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold bg-[#2BB9D2] text-white rounded-3xl shadow-xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
          >
            <Link to={"/book-List"}>Login</Link>
          </button>
        </form>

        {/* Sign Up */}
        <div className=" flex justify-center items-center text-center my-2">
          <form className="relative">
            <p className="text-xs font-medium sm:text-xs">
            No account yet?{" "}
              <a
                href="/signup"
                className="text-xs font-semibold  sm:text-sm text-[#2BB9D2] hover:underline"
              >
                SignUp
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
