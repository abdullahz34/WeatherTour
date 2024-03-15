import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CurrentLocation = () => {
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        const fetchCurrentLocation = async () => {
            try {
                const position = await getCurrentPosition();
                const { latitude, longitude } = position.coords;
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=YOUR_API_KEY`);
                setCurrentLocation(response.data);
            } catch (error) {
                console.error("Error fetching current location:", error);
            }
        };

        fetchCurrentLocation();

    }, []);

    const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    return (
        <div>
            <h2>Current Location Weather:</h2>
            {currentLocation ? (
                <div>
                    <p>City: {currentLocation.name}</p>
                    <p>Temperature: {currentLocation.main.temp}°C</p>
                    <p>Description: {currentLocation.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading current location weather...</p>
            )}
        </div>
    );
};

export default CurrentLocation;
