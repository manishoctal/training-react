import react, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./navbar";

const App = () => {

  const [name, setName] = useState("");

  const setMyName = () => {
    const username = document.getElementById("username").value;
    setName(username);
  }

  return (
    <div> 
        <BrowserRouter>
          <NavBar />
          <Switch> 
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/header">
              <Header />
            </Route>
            <Route path="/footer">
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
