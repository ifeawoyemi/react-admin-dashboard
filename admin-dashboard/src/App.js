import "./App.css";
import Topbar from "../src/components/topbar/Topbar";
import Sidebar from "../src/components/sidebar/Sidebar"
import Home from "./pages/home/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Topbar/>  
      <div className="container">
        <Sidebar/>
        {/* <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/users">
            <UserList/>
          </Route>
        </Switch> */}
        <Home/>
      </div>
    </div>
    </Router>
  );
}

export default App;
