// App.jsx

import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";

function App() {
  const [updateInfo, setUpdateInfo] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  const baseUrl = "https://users-crud.academlo.tech";
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl);

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setUpdateInfo({});
  };

  return (
    <div>
      <button onClick={handleOpenForm} className="formUser_btn">
        Open Form
      </button>
      {isFormOpen && (
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          handleCloseForm={handleCloseForm}
        />
      )}
      <div className="userCardContainer"> {/* Agrega el contenedor */}
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setIsFormOpen={setIsFormOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
