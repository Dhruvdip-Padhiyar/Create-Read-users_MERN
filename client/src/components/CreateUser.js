import React from "react";
import { useRef } from "react";

const CreateUser = ({ addUser }) => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const userNameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const userName = userNameRef.current.value;

    addUser({ name, age, userName });
    nameRef.current.value = null;
    ageRef.current.value = null;
    userNameRef.current.value = null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>NAME : </label>
        <input type="text" placeholder="Name" ref={nameRef} />
      </div>
      <div>
        <label>AGE : </label>
        <input type="number" placeholder="Age" ref={ageRef} />
      </div>
      <div>
        <label>USERNAME : </label>
        <input type="text" placeholder="Username" ref={userNameRef} />
      </div>
      <input type="submit" value="Create User" />
    </form>
  );
};

export default CreateUser;
