
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Detail from './Component/Detail/Detail'


function App() {
  return (
    <div>
  
    
      <Router>
        <Switch>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path ="/detail/:id">
              <Detail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
