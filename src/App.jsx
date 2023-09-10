import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";

function App() {
  const [updateInfo, setUpdateInfo] = useState();
  const [closeForm, setCloseForm] = useState(true);

  const baseUrl = "https://users-crud.academlo.tech";
  //const baseUrl = "https://users-crud-p7h5.onrender.com";

  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUrl, setCloseForm);

  useEffect(() => {
    getAllUsers("/users");
  }, [getAllUsers]);

  const handleOpenForm = () => {
    setCloseForm(false);
  };

  return (
    <div>
      <h2 className="Title">Users</h2>
      <button onClick={handleOpenForm} className="formUser_btn">
        Open Form
      </button>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
        key={updateInfo?.id}
      />

      <div className="userCardContainer">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
