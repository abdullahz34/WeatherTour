import React, { useState } from 'react';
import './Events.css';

// The pois test environment only offers the areas: Banglore, Barcelona, Berlin, Dallas, London, New York, Paris, San Francisco as per "https://github.com/amadeus4dev/data-collection/blob/master/data/pois.md"

const Events = ({ poiData1, poiData2, poiData }) => {
    const [index, setIndex] = useState(0); // Initialize index state variable to 0
    const [index2, setIndex2] = useState(1);

    // Function to handle click on the "More" button
    const handleMoreClick = () => {
        setIndex((prevIndex) => (prevIndex < 9 ? prevIndex + 1 : 0)); // Increment index up to 9 and then reset to 0
        setIndex2((prevIndex2) => (prevIndex2 < 9 ? prevIndex2 + 1 : 0));
    };

    return (
        <div className="events">
            <div className="title-container">
            <h2 className='title'>
                Points of interest
            </h2>
            <button onClick={handleMoreClick}>More</button>
            </div>
            <div className='placeholder-content'>
                <div className='placeholder-content1'>
                    <div className='placeholder-image'>
                        <img src={poiData1 && poiData1.weather && poiData1.weather[0] ? `icons/${poiData1.weather[0].icon}.png` : 'default_icon.png'} alt="weather" />
                    </div>
                    <div className='placeholder-text'>
                        <h3>
                            {/* Add a link to the point of interest name, uses index state to show corresponding link */}
                            <a href={`https://www.google.com/search?q=${encodeURIComponent(poiData.data[index].name)}`} target="_blank" rel="noopener noreferrer">
                                {poiData.data[index].name}
                            </a>
                        </h3>
                        <p>Tags: {poiData && poiData.data && poiData.data[index] && poiData.data[index].tags ? poiData.data[index].tags.slice(0, 5).map((tag, index) => <span key={index}>{tag}{index < 4 ? ', ' : ''}</span>) : 'Loading...'}</p>
                    </div>
                </div>
                <div className='placeholder-content2'>
                    <div className='placeholder-image2'>
                        <img src={poiData2 && poiData2.weather && poiData2.weather[0] ? `icons/${poiData2.weather[0].icon}.png` : 'default_icon.png'} alt="weather" />
                    </div>
                    <div className='placeholder-text2'>
                        <h3>
                            <a href={`https://www.google.com/search?q=${encodeURIComponent(poiData.data[index2].name)}`} target="_blank" rel="noopener noreferrer">
                                {poiData.data[index2].name} 
                            </a>
                        </h3>
                        <p>Tags: {poiData && poiData.data && poiData.data[index2] && poiData.data[index2].tags ? poiData.data[index2].tags.slice(0, 5).map((tag, index) => <span key={index}>{tag}{index < 4 ? ', ' : ''}</span>) : 'Loading...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;