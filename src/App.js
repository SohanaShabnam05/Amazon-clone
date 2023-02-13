import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./Product";
import Checkout from "./Checkout";



function App() {
  return (
    <Router>
   <div className="app">
   <Header />



   <Switch>
    <Route path="/checkout">
    <h1>Login Page</h1>
     <Checkout />
    </Route>
    <Route path="/">
    <Header />
     <Home />
    </Route>
   </Switch>
    
     </div>  

    </Router>
   
   
  );
}

export default App;
