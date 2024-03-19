import React from 'react';
import './Events.css';

const Events = ({ data }) => {
    return (
        <div className="events">
            <h2 className='title'>
                Events near you
            </h2>
            <div className='placeholder-content'>
                <div className='placeholder-image'>
                <img src="public/icons/01d.png" alt="" />
                </div>
                <div className='placeholder-text'>
                    <h3>The Shard</h3>
                    <p>Outdoor activity that's suited for more sunny weather</p>
                </div>
            </div>
        </div>
    );
};

export default Events;