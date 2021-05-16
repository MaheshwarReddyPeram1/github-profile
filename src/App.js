import './App.css';
import Header from "../src/components/header";
import Home from "../src/components/home";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className = "App">
      <Switch>
        <Route exact path = "/user/:userName">
          <Header />
         <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
