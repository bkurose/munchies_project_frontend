import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage";
import SearchResults from "./components/SearchResults";
import Navigation from "./components/Navigation";
import ReviewForm from "./components/ReviewForm";
import RestaurantDetails from "./components/RestaurantDetails";
import Favorites from "./components/Favorites";
import TopRestaurants from "./components/TopRestaurants";
import {Switch, Route, useHistory} from "react-router-dom";

function App() {
  const [ searchFormControl, setSearchFormControl ] = useState("") //controls form onChange
  const [ searchQuery, setSearchQuery ] = useState("") //sets the search query
  const [ restaurants, setRestaurants ] = useState([])
  const [ users, setUsers ] = useState([])
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
    .then(res => res.json())
    .then(restaurants => {
      setRestaurants(restaurants)
    })}, [])

  useEffect(() => {
      fetch("http://localhost:9292/users")
      .then(res => res.json())
      .then(users => {
        setUsers(users)
      })}, [])

  function handleNewUser(user){
    setUsers([...users, user])
  }

  function handleNewRestaurant(restaurant){
    setRestaurants([...restaurants, restaurant])
  }

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

  function handleCardClick(id) {
    history.push(`restaurants/${id}`)
  }

  return (   
 <div className="container">
    <Navigation
    handleNewUser={handleNewUser}
    handleNewRestaurant={handleNewRestaurant}
    />

    <Switch>

    <Route exact path = "/">
      <HomePage
        handleSearchChange={handleSearchChange}
        updateSearchQuery={updateSearchQuery}
        searchFormControl={searchFormControl}
        restaurants = {restaurants}
        handleCardClick={handleCardClick}

      />
    </ Route>

    <Route exact path = "/search">
      <SearchResults 
        handleSearchChange={handleSearchChange}
        updateSearchQuery={updateSearchQuery}
        searchFormControl={searchFormControl}
        restaurants={searchedRestaurants}
        handleCardClick
      />
    </Route>
    
      <Route exact path = "/favorites">
    <Favorites />
    </ Route>

    <Route exact path = "/toprestaurants">
    <TopRestaurants />
    </Route>

    <Route exact path="/restaurants/:id">
    <RestaurantDetails />
    </Route>

    </Switch>
</div>
  );
}

export default App;
