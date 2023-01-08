import React, { useEffect, useState } from "react";
import axios from "axios";
import userImg from "./Icons/userImg.png";
import timetable from "./Icons/timetable.png";
import emailImg from "./Icons/emailImg.png";
import keyImg from "./Icons/keyImg.png";

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setFirstName(userSelected.first_name),
        setLastName(userSelected.last_name),
        setPassword(userSelected.password),
        setEmail(userSelected.email),
        setBirthday(userSelected.birthday);
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();
    //alert para saber si estoy haciendo submit
    alert("Submit");

    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      birthday,
    };

    if (userSelected !== null) {
      axios
        .put(
          ` https://users-crud.academlo.tech/users/${userSelected.id}/`,
          user
        )
        .then(() => getUsers(), reset(), deselectUser());
    } else {
      axios
        .post("https://users-crud.academlo.tech/users/", user)
        .then(() => getUsers(), reset())
        .catch((error) => console.log(error));
    }
  };

  // hacemos reset
  const reset = () => {
    setFirstName(""),
      setLastName(""),
      setPassword(""),
      setEmail(""),
      setBirthday("");
  };

  const clear = () => {
    reset(), deselectUser();
  };

  return (
    <div>
      <form className="container__form" action="" onSubmit={submit}>
        <h2 style={{ margin: "1rem" }}>New user</h2>
        <div className="input__container">
          <label htmlFor="firstName">
            <img className="btn__size" src={userImg} alt="" />
          </label>
          <input
            className="input__text-name"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="first name"
            required
          />
          <input
            className="input__text-last"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            placeholder="last name"
            value={lastName}
            required
          />
        </div>
        <div className="input__container">
          <label htmlFor="email">
            <img className="btn__size" src={emailImg} alt="" />
          </label>
          <input
            className="input__text"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </div>
        <div className="input__container">
          <label htmlFor="password">
            <img className="btn__size" src={keyImg} alt="" />
          </label>
          <input
            className="input__text"
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
        </div>
        <div className="input__container">
          <label htmlFor="birthday">
            <img className="btn__size" src={timetable} alt="" />
          </label>
          <input
            className="input__text"
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>
        <div className="container__btn-form">
          <button className="btn__form">Upload</button>
          <button className="btn__form" type="button" onClick={clear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsersForm;
