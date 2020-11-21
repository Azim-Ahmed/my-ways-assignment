import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRouter/PrivateRouter'

import Login from './Components/auth/Login';
import Success from './Components/Success/Success';
import InternShip from './Components/InternShip/InternShip';

export const UserContext = createContext()
 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    name: "",
    photo: "",
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path ="/home">
        <Home></Home>
        </Route>
        {/* <Route path ="/login">
        <Login/>
        </Route> */}
        <PrivateRoute path ="/success">
       <Success></Success>
        </PrivateRoute>
        <PrivateRoute path ="/internship">
       <InternShip/>
        </PrivateRoute>
        <Route path ="/">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
