import { Image } from "./Image"
export const Login = () => {
  return (
    <div className=" h-screen px-10 flex flex-col justify-center max-w-md m-auto lg:grid grid-cols-2  lg:px-0 lg:w-full lg:max-w-[1600px] lg:overflow-hidden ">
      <div className=" lg:p-[20%]">
        <h1 className=" text-3xl">Welcome</h1>
        <p className=" text-gray-400">Let's Login With Us</p>

        <form action="" className=" flex flex-col mt-10">
          <input
            type="text"
            placeholder="Email"
            className=" bg-blue-100 px-3 py-3 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className=" bg-blue-100 px-3 py-3 rounded-lg mt-5 outline-none"
          />
          <a
            href=""
            className=" text-center mt-5 text-blue-500"
          >
            Forgot Password?
          </a>

          <button className="mt-10 bg-blue-500 text-white px-3 py-3 rounded-lg">
            Login
          </button>
        </form>
      </div>
      <Image/>
    </div>
  );
};
