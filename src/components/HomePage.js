import React from "react";
import SearchBar from "./SearchBar";
import RestaurantCards from "./RestaurantCards"

function HomePage ({ handleSearchChange, updateSearchQuery, searchFormControl, restaurants }) {
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
                {restaurants.map(restaurant => <RestaurantCards key= {restaurant.id} restaurant = {restaurant}/>)}
                </div>
            </div>

    )
}

export default HomePage;