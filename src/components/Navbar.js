import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (<div>

    <button><Link to = "/homepage">HomePage</Link></button>

    <button><Link to = "/favorites">Favorites</Link></button>

    <button><Link to = "/toprestaurants">Top Restaurants</Link></button>

  </div>)
}

export default Navbar;