const Register = () => {
  return (
    <div className="h-screen px-10 flex flex-col pt-[30%]">

        {/* images */}

        {/* form */}
      <section className="">
        <h1 className="text-3xl ">Welcome Back.</h1>
        <p className="text-gray-400">let's continue with us</p>

        <form action="" className="flex flex-col mt-10 ">
          <input type="text" className="bg-blue-50 px-3 py-3 rounded-lg outline-none" />
          <input
            type="password"
            className="bg-blue-50 px-3 py-3 rounded-lg mt-5 outline-none"
          />

          <section className="flex justify-center items-center text-sm mt-10 text-gray-400">
            <input type="checkbox" name="agree" className="mr-3 "/>
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
