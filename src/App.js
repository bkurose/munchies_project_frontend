import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import TopRestaraunts from "./components/TopRestaraunts";
import {Switch, Route, useHistory} from "react-router-dom";

function App() {
  return (   
 <div className="container">
    <Navbar />
    
    <Route exact path = "/homepage">
    <HomePage  />
    </ Route>
    <Switch>

      <Route exact path = "/favorites">
    <Favorites />
    </ Route>

    <Route exact path = "/toprestaurants">
    <TopRestaraunts />
    </Route>


    </Switch>
</div>
  );
}

export default App;
