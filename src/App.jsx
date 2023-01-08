import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSeleted] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUsers(res.data));
  }, []);

  // funcion para actualizar a los usuarios que enviaremos a UsersForm
  const getUsers = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUsers(res.data));
  };

  // User seleccionado para ir actualizando, se envia a UsersList
  const selectUser = (user) => {
    setUserSeleted(user);
  };

  // reset completamente
  const deselectUser = () => setUserSeleted(null);

  // eliminar usuario
  const removeUser = (id) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(() => getUsers());
    // console.log(id)
  };

  

  return (
    <div className="Container">
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
      <UsersList
        users={users}
        selectUser={selectUser}
        removeUser={removeUser}
      />
    </div>
  );
}

export default App;
