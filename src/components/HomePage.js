import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantCards from "./RestaurantCards";
import CardGroup from 'react-bootstrap/CardGroup';

function HomePage ({ handleSearchChange, updateSearchQuery, searchFormControl, restaurants, handleCardClick }) {
    let exampleRestaurants = []
    
    exampleRestaurants = restaurants.slice(0,3)

    return (
            <div>
                <div id="searchContainer">
                    <SearchBar
                        handleSearchChange={handleSearchChange}
                        updateSearchQuery={updateSearchQuery}
                        searchFormControl={searchFormControl}
                    />
                </div>
                <div>
                <CardGroup>
                {exampleRestaurants.map(restaurant => <RestaurantCards key={restaurant.id} restaurant={restaurant} handleCardClick={handleCardClick}/>)}
                </CardGroup>
                </div>
            </div>

    )
}

export default HomePage;