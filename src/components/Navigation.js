import React from "react";
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <img class="logo" src="https://i.postimg.cc/j5RfVyn7/logo-removebg-preview.png" style={{height: "50px"}}/>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/favorites">Favorites</Nav.Link>
        <Nav.Link href="/toprestaurants">Top Restaurants</Nav.Link>
        <Nav.Link href="/new_review">Write a Review!</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )

  // <div>

  //   <button><Link to = "/">HomePage</Link></button>

  //   <button><Link to = "/favorites">Favorites</Link></button>

  //   <button><Link to = "/toprestaurants">Top Restaurants</Link></button>

  // </div>)
}

export default Navigation;