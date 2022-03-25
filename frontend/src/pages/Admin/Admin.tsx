import { Sidebar } from "./Sidebar";
import { Table } from "../../components/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from '../../components/Modal';
import { DeleteNotification } from './DeleteNotification';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

const Admin = () => {
  
  //? store all user
  const [allUser, setAllUser] = useState<User[]>();

  //? show more menu
  const [showMore, setShowMore] = useState<string>("");

  //? show Modal
  const [showModal, setShowModal] = useState<boolean>(false);

  //? show delete notification
  const [showNotification, setShowNotification] = useState<boolean>(false);

  //show one detail user to pass into modal
  const [user, setUser] = useState<Object>({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/user/getAllUser");
      setAllUser(response.data.allUser);
    };
    fetchData();
  }, []);

  const showMoreHandler = (id: string, user: object) => {
    setUser(user);
    setShowMore(id);
  };

  const modalHandler = () => {
    setShowModal(!showModal)
  };

  const notificationHandler = () => {
    setShowNotification(!showNotification)
  };

  return (
      <div className="flex flex-no-wrap " >
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="z-50">
        <Sidebar />
      </div>
      {/* Sidebar ends */}
        
      <Modal show={showModal} modalHandler={modalHandler} user={user} allUser={allUser} setAllUser={setAllUser}/>
      <DeleteNotification show={showNotification} notificationHandler={notificationHandler} id={showMore} allUser={allUser} setAllUser={setAllUser}/>

      {/* Remove class [ h-64 ] when adding a card block */}
      <div className="py-5 md:w-4/5 w-11/12 ">
        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
        <Table allUser={allUser} showMore={showMore} showMoreHandler={showMoreHandler} modalHandler={modalHandler} notificationHandler={notificationHandler}/>
      </div>
    </div>
  );
};

export default Admin;
