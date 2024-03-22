import React from 'react';
import './Alerts.css';

const Alerts = ({ data }) => {
    return (
        <div className="alerts">
            <div className="title-container">
                <h2 className="title">Warnings</h2>
            </div>
            <div className='content'>
            {/* Check if there are any alerts */}
            {data && data.length > 0 ? (
                // If there are alerts, map over them and create a div for each one
                data.map((alert, index) => (
                    <div key={index}>
                        {/* Display the event name and description of the alert */}
                        <h3>{alert.event}</h3>
                        <p>{alert.description}</p>
                        {/* Display a warning icon for each alert */}
                        <img className="alert-icon" src="/icons/Triangle_Warning.png" alt="warning_alert_triangle" />
                    </div>
                ))
            ) : (
                // If there are no alerts, display a message and a check icon
                <>
                    <p>Any extreme weather events expected to happen near you will be reported here.</p>
                    {/* <p>Flood Warning!!</p>  */}
                    <img className="alert-icon" src="/icons/Check.png" alt="no_warning_check" />
                    {/* <img className="alert-icon" src="/icons/Triangle_Warning.png" alt="warning_alert_triangle" /> */}
                    <p>There are no warnings to be reported.</p>
                    {/* <p>Risk of flooding due to heavy rain.</p> */}
                </>
            )}
            </div>
        </div>
    );
};

export default Alerts;