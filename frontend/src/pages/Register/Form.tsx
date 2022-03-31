import { useEffect, useRef, useState } from "react";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { userSelector, signupUser, clearState } from "../../features/user/User";

export const Form = () => {
  // create an instance for useNavigate
  const navigate = useNavigate();

  //to create references for Html Input Element
  const toastRef = useRef<any>(null);

  const dispatch = useAppDispatch();

  const { isFetching, isSuccess, isError, errorMessage } = useAppSelector(userSelector)

  // state
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  // toast state
  const [status, setStatus] = useState<string>("success");
  const [message, setMessage] = useState<string>("successful !");

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState())
      createUserHandler("success", 'successful register! please login');
    }
    if (isError) {
      dispatch(clearState())
      createUserHandler("error", errorMessage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <form className="flex flex-col justify-center my-5" onSubmit={onSubmitHandler}>
      <Toast status={status} message={message} ref={toastRef} />

      <section className="my-2.5">
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

      <button
        type="submit"
        className="mt-10 bg-blue-500 text-white px-3 py-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 cursor-pointer flex justify-center items-center"
      >
        <img src="/assets/loading.svg" alt="loading" className={`w-[10px] h-[10px] animate-spin mr-2 ${isFetching ? null : 'hidden'}`}/>
        Register
        
      </button>

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
