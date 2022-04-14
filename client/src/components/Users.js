import React from "react";

function Users({ users }) {
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
