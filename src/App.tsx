import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Card from "./components/Card";
interface User {
  name: string;
  age: string;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");

  const handleNewUser = ({ name, age, hobby }: User) => {
    const newUser = {
      name,
      age,
      hobby,
    };

    setUsers([...users, newUser]);
  };

  return (
    <div>
      <Input
        placeholder="Name"
        type="text"
        onChange={(evt) => setName(evt.target.value)}
      />
      <Input
        placeholder="Age"
        type="number"
        onChange={(evt) => setAge(evt.target.value)}
      />
      <Input
        placeholder="Hobby"
        type="text"
        onChange={(evt) => setHobby(evt.target.value)}
      />
      <button
        onClick={() => handleNewUser({ name, age, hobby })}
        style={{
          marginTop: "10px",
          width: "200px",
          height: "40px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#023047",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Enviar
      </button>
      <div className="divCard">
        {users &&
          users.map((value, index) => {
            return <Card key={index} name={name} age={age} hobby={hobby} />;
          })}
      </div>
    </div>
  );
}

export default App;
