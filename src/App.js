import react, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./navbar";
import Posts from "./components/Posts";
import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/posts";
const App = () => {

  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);

  const setMyName = () => {
    const username = document.getElementById("username").value;
    setName(username);
  }

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setPosts(response.data)
    } catch ( err ) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      await getData(); 
    })(); 
  }, []);

  return (
    <div> 
        <BrowserRouter>
          {/* <NavBar /> */}
          <Switch> 
            <Route exact path="/">
              <Posts posts={posts}/>
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
