import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Template } from "./Template";

type Props = {};

const Report = (props: Props) => {
  
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [content, setContent] = useState<any>([]);
  const [programName, setProgramName] = useState<string>("");
  const [organizer, setOrganizer] = useState<string>("");
  const [venue, setVenue] = useState<string>("");

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
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </section>

          <section className="grid grid-cols-2 gap-5 my-5">
            <div>
              <p className="my-1 text-sm text-gray-400 ml-1">Program Name</p>
              <input
                type="text"
                className="bg-blue-50 px-3 py-3 rounded-lg outline-none w-full"
                value={programName}
                onChange={(e) => setProgramName(e.target.value)}
              />
            </div>
            <div>
              <p className="my-1 text-sm text-gray-400 ml-1">Organizer</p>
              <input
                type="string"
                className="bg-blue-50 px-3 py-3 rounded-lg outline-none w-full"
                value={organizer}
                onChange={(e) => setOrganizer(e.target.value)}
              />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-5 my-5">
            <div>
              <p className="my-1 text-sm text-gray-400 ml-1">Date</p>
              <input
                type="date"
                className="bg-blue-50 px-3 py-3 rounded-lg outline-none w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <p className="my-1 text-sm text-gray-400 ml-1">Venue</p>
              <input
                type="string"
                className="bg-blue-50 px-3 py-3 rounded-lg outline-none w-full"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
          </section>

          <section className="w-full my-5">
            <p className="my-1 text-sm text-gray-400 ml-1">Content</p>
            <textarea
              cols={30}
              rows={13}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-blue-50 px-3 py-3 rounded-lg outline-none w-full resize-none"
            />
          </section>
        </div>
      </section>

      <section className="hidden lg:flex flex-col bg-gray-500 pb-10">
        
        <Template title={title} content={content} name={programName} organizer={organizer} date={date} venue={venue} />

        {content.length > 450 ? (
              <div className="my-2.5 w-[500px] h-[600px] font-serif m-auto bg-white rounded-sm p-10 flex flex-col text-[10px]">
              <p>{content.slice(450, content.length)}</p>

              <section className={`mt-10 ${content.length > 450 ? null : 'hidden'}`} >
                <p>Disediakan oleh: </p>
                <div className=" border-b-2 border-dotted border-black w-[80px] mt-2 h-[30px]">
                    <img src="/assets/signature.png" alt="signature" className="object-cover h-[30px] mx-auto" />
                </div>
                <section className="text-[8px]">
                    <p>(MUHAMMAD ZULASRAF BIN ZULKIFLI)</p>
                    <p>(PENGARAH)</p>
                </section>
            </section>
            </div>
        ) : null}
        
      )
        
        <section className="mt-10 flex justify-end mr-10">
          <button className="mt-10 bg-green-500 text-white px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-400 cursor-pointer w-[100px] mr-5">Submit</button>

          <button className="mt-10 bg-blue-500 text-white px-3 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 cursor-pointer w-[100px] ">Download</button>
        </section>

        

      </section>
    </div>
  );
};

export default Report;
