import React from "react";

function Users({ users }) {
  //   const singleUser = users.map((user) => user);
  //   console.log(singleUser[0]._id);
  return (
    <div className="users">
      {users.map((user) => {
        return (
          <div className="user" key={user._id}>
            <h2>{user.name}</h2>
            <h3>{user.age}</h3>
            <h3>{user.userName}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
