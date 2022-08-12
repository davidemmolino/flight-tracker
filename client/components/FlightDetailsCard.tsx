import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

const FlightDetailPropType = {
    details: {
        location: PropTypes.string.isRequired,
        arrival: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired,
        airline: PropTypes.string.isRequired
    }
};

type FlightDetails = InferProps<typeof FlightDetailPropType>;

export const FlightDetailsCard = (props: FlightDetails) => {
    return (
        <div className="flight-card">
            <p>Location: {props.details.location}</p>
            <p>Arrival Time: {props.details.arrival}</p>
            <p>Departure Time: {props.details.departure}</p>
            <p>Airline: {props.details.airline}</p>
        </div>
    )
}
