import React, { forwardRef, useImperativeHandle, useState } from "react";

type Props = {
  status: string;
  message: string;
};

const Toast = forwardRef((props: Props, ref) => {

  const [isVisible, setVisible] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({

    showToast() {
        setVisible(true);
        //this to make toast hidden after 3second
        setTimeout(() => {
            setVisible(false)
        }, 3000)
    }
  }))

  return (
    <div
      className={`w-[300px] p-3 rounded-lg text-white fixed top-7 inset-x-0  mx-auto items-center justify-center animate-fade-in-down ease-in-out ${
        props.status === "success" ? "bg-green-400" : "bg-red-400"
      } ${isVisible ? "flex" : "hidden"} `}
    >
      <p className="mr-5">{props.message}</p>
      <span>{props.status === "success" ? "✔️" : "❌"}</span>
    </div>
  );
});

export default Toast;
