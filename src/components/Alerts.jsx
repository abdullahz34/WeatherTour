import React from 'react';
import './Alerts.css';

const Alerts = ({ data }) => {
    return (
        <div className="alerts">
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
                    <p>No extreme weather events at the moment.</p>
                    <img className="alert-icon" src="/icons/Check.png" alt="no_warning_check" />
                </>
            )}
        </div>
    );
};

export default Alerts;