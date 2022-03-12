import React from "react";

type Props = {};

export const Login = (props: Props) => {
  return (
    <div className=" h-screen px-10 flex flex-col pt-[30%]">
      <div className="">
        <h1 className="text-3xl">Welcome</h1>
        <p className=" text-gray-400">Let's Login With Us</p>

        <form action="" className=" flex flex-col mt-10">
          <input
            type="text"
            className=" bg-blue-50 px-3 py-3 rounded-lg outline-none"
          />
          <input
            type="password"
            className=" bg-blue-50 px-3 py-3 rounded-lg mt-5 outline-none"
          />
          <a href="google.com" className=" text-center mt-5 text-blue-500">
            Forgot Password?
          </a>

          <button className="mt-10 bg-blue-500 text-white px-3 py-3 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
