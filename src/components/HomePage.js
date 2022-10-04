import React from "react";
import SearchBar from "./SearchBar";

function HomePage ({ handleSearchChange, updateSearchQuery, searchFormControl }) {
    return (
        <div id="searchContainer">
            <SearchBar
                handleSearchChange={handleSearchChange}
                updateSearchQuery={updateSearchQuery}
                searchFormControl={searchFormControl}
            />
        </div>
    )
}

export default HomePage;