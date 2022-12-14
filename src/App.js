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
  const [ searchQuery, setSearchQuery ] = useState("") //sets the search query
  const [ restaurants, setRestaurants ] = useState([])
  const [ users, setUsers ] = useState([])
  const history = useHistory();
  const [ topRestaurants, setTopRestaurants ] = useState([])

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

   useEffect(() => {
       fetch("http://localhost:9292/toprestaurants")
        .then(res => res.json())
        .then(restaurants => {
          setTopRestaurants(restaurants)
        })}, [])

  function handleNewUser(user){
    setUsers([...users, user])
  }

  function handleNewRestaurant(restaurant){
    setRestaurants([...restaurants, restaurant])
  }

  function updateSearchQuery(newSearch){
    setSearchQuery(newSearch)
  }

  function handleCardClick(id) {
    history.push(`restaurants/${id}`)
    window.location.reload()
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
        updateSearchQuery={updateSearchQuery}
        restaurants = {restaurants}
        handleCardClick={handleCardClick}

      />
    </ Route>

    <Route exact path = "/search">
      <SearchResults 
        updateSearchQuery={updateSearchQuery}
        restaurants={restaurants}
        handleCardClick={handleCardClick}
        searchQuery={searchQuery}
      />
    </Route>
    
      <Route exact path = "/favorites">
    <Favorites />
    </ Route>

    <Route exact path = "/toprestaurant">
    {topRestaurants.map( rest => <TopRestaurants restaurant= {rest}/>)}
    </Route>

    <Route exact path="/restaurants/:id">
    <RestaurantDetails />
    </Route>

    </Switch>
</div>
  );
}

export default App;
