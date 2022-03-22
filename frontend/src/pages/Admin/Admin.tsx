import { Sidebar } from "./Sidebar";
import { Table } from "../../components/Table";

const Admin = () => {

    return (
        <div className="flex flex-no-wrap ">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="z-50">
                <Sidebar />
            </div>
            {/* Sidebar ends */}
            
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="py-5 h-64 md:w-4/5 w-11/12">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
               <Table />
            </div>
        </div>
    );
}

export default Admin;
