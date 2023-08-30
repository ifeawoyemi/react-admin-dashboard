import "./App.css";
import Topbar from "../src/components/topbar/Topbar";
import Sidebar from "../src/components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "../src/pages/userList/UserList"
import User from "../src/pages/userpage/User"
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router> 
      <Topbar/>  
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/users">
            <UserList/>
          </Route>

          <Route path="/user/:userId">
            <User/>
          </Route>

          <Route path="newUser">
            <NewUser/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
