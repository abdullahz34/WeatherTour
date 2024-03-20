import React from 'react';
import './Events.css';

const Events = ({ data }) => {
    return (
        <div className="events">
            <h2 className='title'>
                Events near you
            </h2>
            <div className='placeholder-content'>
                <div className='placeholder-content1'>
                    <div className='placeholder-image'>
                        <img src="/icons/01d.png" alt="" />
                    </div>
                    <div className='placeholder-text'>
                        <h3>The Shard</h3>
                        <p>Outdoor activity that's suited for more sunny weather</p>
                    </div>
                </div>
                <div className='placeholder-content2'>
                    <div className='placeholder-image2'>
                        <img src="/icons/03d.png" alt="" />
                    </div>
                    <div className='placeholder-text2'>
                        <h3>Arcade</h3>
                        <p>Indoor activity that's suited for more cloudy weather</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;