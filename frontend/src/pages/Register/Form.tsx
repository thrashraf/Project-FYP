import { useState } from "react";
import { Input } from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  // state
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //create an instance for useNavigate
  const navigate = useNavigate()


  //? to make request for register user
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    //? to prevent refresh after submit
    e.preventDefault();
 
    axios.post(
        "/api/user/register",
        { firstName, lastName, email, password },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  return (
    <form className="flex flex-col justify-center" onSubmit={onSubmitHandler}>
      <section className="grid grid-cols-2 gap-3 ">
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </section>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <section className="flex justify-center items-center text-sm mt-10 text-gray-400">
        <input type="checkbox" name="agree" className="mr-3" />
        <p>
          I accept <a href="http://google.com">Terms & Condition</a>.
        </p>
      </section>

      <input
        type="submit"
        placeholder="Register"
        className="mt-10 bg-blue-500 text-white px-3 py-3 rounded-lg "
        value="Register"
      />
    </form>
  );
};
