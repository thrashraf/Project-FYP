import axios from "axios";
import React, { useState } from "react";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmithandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("/api/user/login", { email, password }, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={onSubmithandler} action="" className=" flex flex-col mt-10">
      <input
        type="text"
        placeholder="Email"
        value={email}
        className=" bg-blue-100 px-3 py-3 rounded-lg outline-none"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className=" bg-blue-100 px-3 py-3 rounded-lg mt-5 outline-none"
        onChange={(e) => setPassword(e.target.value)}
      />
      <a href="" className=" text-center mt-5 text-blue-500">
        Forgot Password?
      </a>

      <button className="mt-10 bg-blue-500 text-white px-3 py-3 rounded-lg">
        Login
      </button>
    </form>
  );
};
