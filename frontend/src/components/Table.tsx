import { useEffect, useState } from "react";
import { More } from "../icons/More";

// type Props = {
//   allUser: any;
//   showMore: string;
//   showMoreHandler: (id: string, user: object) => void;
//   modalHandler: () => void;
//   notificationHandler: () => void;
// };

export const Table = () => {
    const [allInno, setAllInno] = useState<any>()
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("/api/inno/getAllInno", {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                
              });
              let data = await response.json();
              console.log(data)
              setAllInno(data.allInno)

        } 
        fetchData()
    },[])





  return (
    <div className="h-full mb-20">
      <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
        {/* <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
          
        </div> */}
      </div>
      <div className="w-full lg:overflow-x-hidden h-full">
        <table className="w-full bg-white ">
          <thead>
            <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
              

              <th className="text-gray-600 dark:text-gray-400 font-normal  text-center text-sm tracking-normal ">
                No.
              </th>

              <th className="text-gray-600 dark:text-gray-400 font-normal  text-left text-sm tracking-normal ">
                Innovasion Title
              </th>
              <th className="text-gray-600 dark:text-gray-400 font-normal  text-left text-sm tracking-normal leading-4">
                Name
              </th>
             

            </tr>
          </thead>

          <tbody className="">
            {allInno?.map((inno: any) => {

              return (
                <tr
                  className="h-24 border-gray-300 dark:border-gray-200 border-b"
                  key={inno.id}
                >
                  <td className="pr-6 whitespace-no-wrap">
                    <div className="flex items-center">

                      <p className="ml-2 text-gray-800  tracking-normal leading-4 text-sm">
                        {inno.Title}
                      </p>
                    </div>
                  </td>
                  <td className="text-sm whitespace-no-wrap text-gray-800  tracking-normal leading-4">
                    {inno.Name}
                  </td>

                
                
                  <div
                    className={`z-[10px] inset-0 `}
                    
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
