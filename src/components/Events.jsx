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
                        <h3>
                            <a href={`https://www.google.com/search?q=${encodeURIComponent(poiData.data[0].name)}`} target="_blank" rel="noopener noreferrer">
                                {poiData.data[0].name}
                            </a>
                        </h3>
                        <p>Tags: {poiData && poiData.data && poiData.data[0] && poiData.data[0].tags ? poiData.data[0].tags.slice(0, 5).map((tag, index) => <span key={index}>{tag}{index < 4 ? ', ' : ''}</span>) : 'Loading...'}</p>
                    </div>
                </div>
                <div className='placeholder-content2'>
                    <div className='placeholder-image2'>
                        <img src={poiData2 && poiData2.weather && poiData2.weather[0] ? `icons/${poiData2.weather[0].icon}.png` : 'default_icon.png'} alt="weather" />
                    </div>
                    <div className='placeholder-text2'>
                        <h3>
                            <a href={`https://www.google.com/search?q=${encodeURIComponent(poiData.data[1].name)}`} target="_blank" rel="noopener noreferrer">
                                {poiData.data[1].name}
                            </a>
                        </h3>
                        <p>Tags: {poiData && poiData.data && poiData.data[1] && poiData.data[1].tags ? poiData.data[1].tags.slice(0, 5).map((tag, index) => <span key={index}>{tag}{index < 4 ? ', ' : ''}</span>) : 'Loading...'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;