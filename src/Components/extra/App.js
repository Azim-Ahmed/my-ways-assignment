import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HouseDetail from "./Components/HouseDetails/HouseDetail";

import Contact from "./Components/ContactPage/Contact";
import Event from "./Components/EventPage/Event";
import Concerns from "./Components/ConcernsPage/Concerns";
import Service from "./Components/ServicePage/Service";
import About from "./Components/AboutPage/About";
import AddService from "./Components/Admin/AddService/AddService";
import Admin from "./Components/Admin/Admin";

import MyRent from "./Components/Admin/MyRent/MyRent";
import Login from "./Components/auth/Login";
import NavSection from "./Components/Home/Header/Navbar/NavSection";
import PrivateRoute from "./Components/PrivateRouter/PrivateRouter";

export const UserContext = createContext();

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
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/housedetails/:id">
            <HouseDetail />
          </Route>
          <Route exact path="/about">
            <NavSection></NavSection>
            <About></About>
          </Route>

          <Route exact path="/service">
            <NavSection></NavSection>
            <Service></Service>
          </Route>

          <Route exact path="/concerns">
            <NavSection></NavSection>
            <Concerns></Concerns>
          </Route>

          <Route exact path="/event">
            <NavSection></NavSection>
            <Event></Event>
          </Route>

          <Route exact path="/contact">
            <NavSection></NavSection>
            <Contact></Contact>
          </Route>

          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addService">
            <AddService />
          </Route>

          <Route path="/myRent">
            <MyRent />
          </Route>
          <Route path="/login">
            <NavSection></NavSection>
            <Login></Login>
          </Route>

          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
