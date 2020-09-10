import * as types from '../actions/actions';

const initialState = {
    flights: [],
    location: '',
    arrival: '',
    departure: '',
};

const flightsReducer = (state = initialState, action) => {
    let flights;
    let location;
    let arrival; 
    let departure;

    // switch(action.types) {
    //     case types.ADD_TRIP:
    //         const newFlights = {
    //             arrival = arrival,
    //             departure = departure,
    //             location = location,
    //             flights = flights,
    //         }
    //         flights = state.location.slice();
    //         flights.push(newFlights)

            return state
            // {
            //     ...state,
            //     arrival,
            //     departure,
            //     location,
            //     flights,
            // }
    // };
}

export default flightsReducer;