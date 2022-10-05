import React from "react";
import SearchBar from "./SearchBar";
import CardGroup from 'react-bootstrap/Card';
import RestaurantCards from "./RestaurantCards";

function SearchResults ({ restaurants, updateSearchQuery, handleCardClick, searchQuery }) {
    const filteredRestaurants = restaurants.filter((resto) => {
        return resto.name.toLowerCase().includes(searchQuery.toLowerCase())
      })

    return (
        <div>
            <div id="searchResultsPage">
                <SearchBar updateSearchQuery={updateSearchQuery}/>
            </div>
            <div>
            <CardGroup>
                {filteredRestaurants.map(restaurant => <RestaurantCards key={restaurant.id} restaurant={restaurant} handleCardClick={handleCardClick}/>)}
            </CardGroup>
            </div>
        </div>
    )
}

export default SearchResults;