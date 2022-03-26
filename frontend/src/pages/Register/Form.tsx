import { useEffect, useRef, useState } from "react";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { userSelector, signupUser } from "../../features/user/User";

export const Form = () => {
  // create an instance for useNavigate
  const navigate = useNavigate();

  //to create references for Html Input Element
  const toastRef = useRef<any>(null);

  const dispatch = useAppDispatch();

  const { isFetching, isSuccess, isError, errorMessage } = useAppSelector(userSelector)

  // state
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
 
  useEffect(() => {
    if (isSuccess) {
      createUserHandler("success", 'successful register! please login');
    }
    if (isError) {
      createUserHandler("error", errorMessage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  // toast state
  const [status, setStatus] = useState<string>("success");
  const [message, setMessage] = useState<string>("successful !");

  //? to make request for register user
  const onSubmitHandler = (e: React.SyntheticEvent) => {
    //? to prevent refresh after submit
    e.preventDefault();

    const data = {
      name,
      email,
      password
    }

    dispatch(signupUser(data))
  };

  const createUserHandler = (status: string, message: string) => {
    if (toastRef.current !== null) {
      setStatus(status);
      setMessage(message);
      toastRef.current.showToast();
    }
  };

  return (
    <form className="flex flex-col justify-center" onSubmit={onSubmitHandler}>
      <Toast status={status} message={message} ref={toastRef} />

      <section className="grid grid-cols-2 gap-4 my-5">
        <Input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </section>

      <section className="my-2.5">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </section>

      <section className="my-2.5">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>

      <section className="flex justify-center items-center text-sm mt-10 text-gray-400">
        <input type="checkbox" name="agree" className="mr-3" />
        <p>
          I accept <a href="http://google.com">Terms & Condition</a>.
        </p>
      </section>

      <input
        type="submit"
        placeholder="Register"
        className="mt-10 bg-blue-500 text-white px-3 py-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 cursor-pointer  "
      />

      <p className="mt-10 text-center">
        already have an account?
        <span
          className=" underline text-blue-500 ml-2 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </form>
  );
};
