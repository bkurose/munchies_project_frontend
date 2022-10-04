import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage";
import SearchResults from "./components/SearchResults";
import Navigation from "./components/Navigation";
import ReviewForm from "./components/ReviewForm";
import Favorites from "./components/Favorites";
import TopRestaurants from "./components/TopRestaurants";
import {Switch, Route, useHistory} from "react-router-dom";

function App() {
  const [ searchFormControl, setSearchFormControl ] = useState("") //controls form onChange
  const [ searchQuery, setSearchQuery ] = useState("") //sets the search query
  const [ restaurants, setRestaurants ] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
    .then(res => res.json())
    .then(restaurants => {
      setRestaurants(restaurants)
    })})

  function handleSearchChange(event) {
    setSearchFormControl(event.target.value)
  }

  function updateSearchQuery(newSearch){
    setSearchQuery(newSearch)
  }

  const searchedRestaurants = restaurants.filter((restaurant) => {
    if(searchQuery.length > 0){
      return restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) || restaurant.location.toLowerCase().includes(searchQuery.toLowerCase())
    }
  })


  return (   
 <div className="container">
    <Navigation />

    <Switch>

    <Route exact path = "/">
      <HomePage
        handleSearchChange={handleSearchChange}
        updateSearchQuery={updateSearchQuery}
        searchFormControl={searchFormControl}
        restaurants = {restaurants}

      />
    </ Route>

    <Route exact path = "/search">
      <SearchResults 
        handleSearchChange={handleSearchChange}
        updateSearchQuery={updateSearchQuery}
        searchFormControl={searchFormControl}
        restaurants={searchedRestaurants}
      />
    </Route>
    
      <Route exact path = "/favorites">
    <Favorites />
    </ Route>

    <Route exact path = "/toprestaurants">
    <TopRestaurants />
    </Route>

    <Route exact path = "/new_review">
    <ReviewForm />
    </Route>

    </Switch>
</div>
  );
}

export default App;
