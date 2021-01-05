import * as React from 'react';

export const FlightInfo = (props) => {
    // const { details: { }} = props
    return (
        <div className="flight-card">
            <p>Location: {props.details.location}</p>
            <p>Arrival Time: {props.details.arrival}</p>
            <p>Departure Time: {props.details.departure}</p>
            <p>Airline: {props.details.airline}</p>
        </div>
    )
}
