import { useState, useEffect } from "react";
import Axios from "axios";

import Users from "./components/Users";
import CreateUser from "./components/CreateUser";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/users");

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const createUser = async (user) => {
    try {
      const response = await Axios.post("http://localhost:3001/users/create", {
        name: user.name,
        age: user.age,
        userName: user.userName,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Users users={users} />
      <CreateUser addUser={createUser} />
    </div>
  );
}

export default App;
