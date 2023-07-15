// FormUser.jsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUser = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  handleCloseForm,
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo.id) {
      // update
      updateUserById("/users", updateInfo.id, data)
        .then(() => {
          setUpdateInfo({});
          handleCloseForm();
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      // create
      createNewUser("/users", data)
        .then(() => {
          handleCloseForm();
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
    }
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleCloseForm} className="formUser_container">
      <form
        onClick={handleFormClick}
        className="formUser"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="formUser_title">
          {updateInfo.id ? "Update" : "New User"}
        </h2>
        <div className="formUser_close" onClick={handleCloseForm}>
          ❌
        </div>
        <div className="formUser_group">
          <label htmlFor="first_name">First Name</label>
          <input
            className="formUser_input"
            {...register("first_name")}
            type="text"
            id="first_name"
          />
        </div>
        <div className="formUser_group">
          <label htmlFor="last_name">Last Name</label>
          <input
            className="formUser_input"
            {...register("last_name")}
            type="text"
            id="last_name"
          />
        </div>
        <div className="formUser_group">
          <label htmlFor="email">Email</label>
          <input
            className="formUser_input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="formUser_group">
          <label htmlFor="password">Password</label>
          <input
            className="formUser_input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="formUser_group">
          <label htmlFor="birthday">Birthday</label>
          <input
            className="formUser_input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>
        <button className="formUser_btn_form " type="submit">
          {updateInfo.id ? "Update this user" : "Add a new user"}
        </button>
      </form>
    </div>
  );
};

export default FormUser;
