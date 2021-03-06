import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Deals from "./Components/Deals/Deals";
import Admin from "./Components/Admin/Admin";

import Login from "./Components/Login/Login";

import CheakOut from "./Components/CheakOut/CheakOut";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import OrdersItem from "./Components/OrdersItem/OrdersItem";

export const UserContext = createContext();


function App() {
const [loggedIn, setLoggedIn] = useState({});


  return (
    <UserContext.Provider value ={[loggedIn, setLoggedIn]}>
    <Router>
    <div>
      
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/deals">
          <Deals />
        </Route>
        <PrivateRoute path="/cheakout/:name">
          <CheakOut />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <OrdersItem />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cheakOut">
          <CheakOut />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
