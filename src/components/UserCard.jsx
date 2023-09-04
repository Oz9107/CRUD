import "./styles/UserCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUserById("/users", user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpenForm();
  };

  return (
    <article className="userCard">
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <hr />
      <ul>
        <li>
          <span>Email:</span>
          <span>{user.email}</span>
        </li>
        <li>
          <span>Birthday:</span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <footer>
        <button onClick={handleDelete}>
          <i className="bx bx-trash" id="formUser_btn_delete"></i>
        </button>
        <button onClick={handleUpdate}>
          <i className="bx bx-edit" id="formUser_btn_update"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
