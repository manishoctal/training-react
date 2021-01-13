import react, {useState} from "react";

import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {

  const [name, setName] = useState("");

  const setMyName = () => {
    const username = document.getElementById("username").value;
    setName(username);
  }

  return (
    <div> 
       <Content title={name}/>
        <input 
          name="username" 
          id="username" 
        />
      <button onClick={setMyName}>Change My name</button>
    </div>
  );
}

export default App;
