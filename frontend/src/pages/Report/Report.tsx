import React, { useState } from "react";
import { Input } from "../../components/Input";

type Props = {};

const Report = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <div className="lg:grid grid-cols-2  ">
      <section className="my-10 mx-5  lg:mx-10">
        {/* heading */}
        <h1 className="text-center font-medium">Report Maker</h1>

        <div className="mt-10">
          <section className="w-full my-5">
            <p className="my-1 text-sm text-gray-400 ml-1">Title</p>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </section>

          <section className="w-full my-5">
            <p className="my-1 text-sm text-gray-400 ml-1">Date</p>
            <input
              type="date"
              className="bg-blue-50 px-3 py-3 rounded-lg outline-none w-full"
            />
          </section>

          <section className="w-full my-5">
            <p className="my-1 text-sm text-gray-400 ml-1">Content</p>
            <textarea
              cols={30}
              rows={13}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-blue-50 px-3 py-3 rounded-lg outline-none w-full"
            />
          </section>
        </div>
      </section>

      <section className="hidden lg:flex flex-col bg-gray-500 relative">
        <div className=" w-[500px] h-[600px] bg-white absolute inset-x-10 inset-y-[5%] rounded-sm py-5 px-10 flex flex-col">
          
          <img src="/assets/logoPoli.png" alt="psmza" className="w-[150px] mx-auto" />
          
          <div className="mt-5">
            <h1 className=" uppercase font-medium underline text-[12px]">{title}</h1>

            <section className="mt-10">
                <p className=" indent-8 ">{content}</p>
            </section>
          </div>

        </div>
        
        <button className="mt-10 bg-green-500 text-white px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-400 cursor-pointer w-[100px] absolute bottom-5 right-8">Submit</button>

        <button className="mt-10 bg-blue-500 text-white px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 cursor-pointer w-[100px] absolute bottom-5 right-[150px]">Download</button>

      </section>
    </div>
  );
};

export default Report;
