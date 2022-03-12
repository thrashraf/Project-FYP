const Register = () => {
  return (
    <div className="h-screen px-10 flex flex-col justify-center max-w-md m-auto lg:grid grid-cols-2  lg:px-0 lg:w-full lg:max-w-full lg:overflow-hidden">

        {/* images */}
        <div className="hidden lg:flex">
            <img src="/assets/register.jpg" alt="" className="object-cover " />
        </div>

        {/* form */}
      <section className="lg:p-[20%]">
        <h1 className="text-3xl font-semibold">Welcome Back.</h1>
        <p className="text-gray-400">let's continue with us</p>

        <form action="" className="flex flex-col mt-10 ">
          <input type="text" className="bg-blue-50 px-3 py-3 rounded-lg outline-none" placeholder="email"/>
          <input
            type="password"
            className="bg-blue-50 px-3 py-3 rounded-lg mt-5 outline-none"
            placeholder="password"
          />

          <section className="flex justify-center items-center text-sm mt-10 text-gray-400">
            <input type="checkbox" name="agree" className="mr-3"/>
            <p>
              I accept <a href="http://google.com">Terms & Condition</a>.
            </p>
          </section>

          <button className="mt-10 bg-blue-500 text-white px-3 py-3 rounded-lg ">
            Register
          </button>
        </form>
      </section>
    </div>
  );
};

export default Register;
