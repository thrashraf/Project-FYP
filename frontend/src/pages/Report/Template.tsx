import React from "react";

type Props = {
  title: string;
  content: string;
  name: string,
  organizer: string,
  date: string,
  venue: string
};

export const Template = (props: Props) => {

      return (
        <div className="my-2/5 w-[500px] h-[600px] font-serif m-auto bg-white rounded-sm p-10 flex flex-col text-[10px]">
          <img
            src="/assets/logoPoli.png"
            alt="psmza"
            className="w-[150px] mx-auto"
          />
    
          <div className="mt-5">
            <section className="uppercase font-bold text-center">
              <h1>
                LAPORAN {props.title}
              </h1>
              <h1>
                JABATAN TEKNOLOGI MAKLUMAT DAN KOMUNIKASI
              </h1>
              <h1>
                POLITEKNIK SULTAN MIZAN ZAINAL ABIDIN, DUNGUN TERENGGANU
              </h1>
            </section>
    
            <section className="mt-10">
                <h1 className="font-bold ">BUTIRAN PROGRAM</h1>
                <ol className=" list-[lower-alpha] ml-5 list-outside">
                    <li className="my-2">Nama Program: {props.name}</li>
                    <li className="my-2">Penganjur: {props.organizer}</li>
                    <li className="my-2">Tarikh: {props.date}</li>
                    <li className="my-2">Tempat: {props.venue}</li>
                </ol>
            </section>
    
            <section className="mt-10">
                <h1 className="font-bold">PENGISIAN/PERLAKSANAAN PROGRAM</h1>
                {props.content.slice(0,500).split("\n").map((text, index) => {
                  console.log(text.length)
                  return (
                    <p key={index} className=" indent-8 mt-5 text-justify">{text}</p>
                    )
                  })}
            </section>


            <section className={` ${props.content.length > 450 ? 'hidden' : null} absolute bottom-5`} >
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
        </div>
      )
    
        
};
