import * as React from 'react';
export const FlightInfo = (props) => {
    // const { details: { }} = props
    return (React.createElement("div", { className: "flight-card" },
        React.createElement("p", null,
            "Location: ",
            props.details.location),
        React.createElement("p", null,
            "Arrival Time: ",
            props.details.arrival),
        React.createElement("p", null,
            "Departure Time: ",
            props.details.departure),
        React.createElement("p", null,
            "Airline: ",
            props.details.airline)));
};
//# sourceMappingURL=FlightInfo.js.map