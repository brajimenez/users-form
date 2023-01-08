import React from "react";
import editar from "./Icons/editar.png";

const UsersList = ({ users, selectUser, removeUser }) => {
  return (
    <div className="container__users-list">
      <ul>
        {users.map((user) => (
          <li className="container__list-users" key={user.id}>
            <div className="name-users">
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <hr />
            </div>
            <article className="list__users-data">
              <div>
                <p>{user.email}</p>
                <p>{user.birthday}</p>
              </div>
              <div className="btns__users">
                <button onClick={() => removeUser(user.id)}>
                  <i className="fa-regular fa-trash-can btn__remove"></i>
                </button>
                <button onClick={() => selectUser(user)}>
                  <img className="btn__size" src={editar} alt="" />
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
