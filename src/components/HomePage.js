import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantCards from "./RestaurantCards";
import CardGroup from 'react-bootstrap/CardGroup';

function HomePage ({ updateSearchQuery, restaurants, handleCardClick }) {
    let exampleRestaurants = []
    
    exampleRestaurants = restaurants.slice(0,3)

    return (
            <div>
                <div id="searchHome">
                    <SearchBar
                        updateSearchQuery={updateSearchQuery}
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