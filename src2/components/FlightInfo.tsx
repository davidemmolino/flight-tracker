import * as React from 'react';
import { NewFlights } from 'types/types'
export const FlightInfo = ({ details: { }, ...rest }) => {
    // const { details: { }} = props
    return (
        <div className="flight-card">
            {/* <p>Location: {details.location}</p>
            <p>Arrival Time: {details.arrival}</p>
            <p>Departure Time: {details.departure}</p>
            <p>Airline: {details.airline}</p> */}
        </div>
    )
}
