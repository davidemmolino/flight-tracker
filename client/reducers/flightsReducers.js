import * as types from '../actions/actions';

const initialState = {
    flights: [],
    location: '',
    arrival: '',
    departure: '',
    modal: false,
};

const flightsReducer = (state = initialState, action) => {
    let flights;
    let location;
    let arrival; 
    let departure;
    let modal = state.modal;

    switch(action.type) {
        //change modal boolean
        case types.changeModal: 
            console.log(`clicked and opened a modal`)
            if (modal === false) {
               modal = true 
            } else {
                modal = false
            }

            return {
                ...state,
                modal
            };

        //adding a trip
        case types.addTrip:
            let newFlights = {
                arrival : arrival,
                departure : departure,
                location : location,
                flights : flights,
            }
            flights = state.location.slice();
            flights.push(newFlights)

            return {
                ...state,
                arrival,
                departure,
                location,
                flights,
            };
        
            default: 
                return state;
    };
}

export default flightsReducer;