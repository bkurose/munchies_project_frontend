import React from "react";
import Container from 'react-bootstrap/Container';
import Register from "./Register";
import Nav from 'react-bootstrap/Nav';
import NewRestaurant from "./NewRestaurant"
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Navigation({handleNewRestaurant, handleNewUser}) {
  return (
    <Navbar id = "navbar" bg="light" variant="light">
    <Container>
      <img  class="logo" src="https://i.postimg.cc/j5RfVyn7/logo-removebg-preview.png" style={{height: "50px"}}/>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/favorites">Favorites</Nav.Link>
        <Nav.Link href="/toprestaurants">Top Restaurants</Nav.Link>
      </Nav>
      <NewRestaurant handleNewRestaurant={handleNewRestaurant}/>
      <Register handleNewUser={handleNewUser}/>
    </Container>
  </Navbar>
  )
}

export default Navigation;