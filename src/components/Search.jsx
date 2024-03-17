import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";


const geoApiOptions = {
    method: 'GET',
    url: process.env.REACT_APP_GEO_API_BASE,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_GEO_API_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

const Search = ({ onSearchChange }) => {

    // Define the state for the search
    const [search, setSearch] = useState(null);

    // Handle the change event for the search
    const handleOnChange = (searchData) => {
        setSearch(searchData); // Update the search state
        onSearchChange(searchData);
    }

    // Load the options for the search
    const loadOptions = (inputValue) => {
        // Send a GET request to the Geo API to get the cities
        return fetch(
          `${geoApiOptions.url}cities?minPopulation=1000000&namePrefix=${inputValue}`,
          geoApiOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
      };

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600} // only update the options after 600ms
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;

