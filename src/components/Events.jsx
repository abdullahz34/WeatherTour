import React from 'react';
import './Events.css';

// The pois test environment only offers the areas: Banglore, Barcelona, Berlin, Dallas, London, New York, Paris, San Francisco as per "https://github.com/amadeus4dev/data-collection/blob/master/data/pois.md"

const Events = ({ poiData1, poiData2, poiData }) => {
    return (
        <div className="events">
            <h2 className='title'>
                Points of interest
            </h2>
            <div className='placeholder-content'>
                <div className='placeholder-content1'>
                    <div className='placeholder-image'>
                    <img src={poiData1 && poiData1.weather && poiData1.weather[0] ? `icons/${poiData1.weather[0].icon}.png` : 'default_icon.png'} alt="weather" />
                    </div>
                    <div className='placeholder-text'>
                        <h3>{poiData.data[0].name}</h3>
                        <p>Outdoor activity that's suited for more sunny weather</p>
                    </div>
                </div>
                <div className='placeholder-content2'>
                    <div className='placeholder-image2'>
                    <img src={poiData2 && poiData2.weather && poiData2.weather[0] ? `icons/${poiData2.weather[0].icon}.png` : 'default_icon.png'} alt="weather" />
                    </div>
                    <div className='placeholder-text2'>
                        <h3>{poiData.data[1].name}</h3>
                        <p>Indoor activity that's suited for more cloudy weather</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;