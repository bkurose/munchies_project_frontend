import React from "react";
import SearchBar from "./SearchBar";

function SearchResults ({ handleSearchChange, updateSearchQuery, searchFormControl }) {
    return (
    <div>
        <SearchBar
            handleSearchChange={handleSearchChange}
            updateSearchQuery={updateSearchQuery}
            searchFormControl={searchFormControl}
        />
    </div>
    )
}

export default SearchResults;