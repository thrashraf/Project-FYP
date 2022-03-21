import { Sidebar } from "./Sidebar";

const Admin = () => {

    return (
        <div className="flex flex-no-wrap ">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <Sidebar />
            {/* Sidebar ends */}
            
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
               
            </div>
        </div>
    );
}

export default Admin;
