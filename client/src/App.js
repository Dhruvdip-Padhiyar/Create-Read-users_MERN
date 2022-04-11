import { useState , useEffect} from "react";
import Axios from "axios";



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
},[]);

  return (
    <div className="App">
     <div className="displayUsers">
     {users.map((user) => {
       return(
         <div>
        <h1>Name:{user.name}</h1>
        <h1>Age:{user.age}</h1>
        <h1>UserName:{user.userName}</h1>
     </div>
     );
     })}
      </div>  
        </div>
  );
}

export default App;
