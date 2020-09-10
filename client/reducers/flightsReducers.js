import * as types from '../constants/actionTypes';
import { formValueSelector } from 'redux-form';

const initialState = {
    flights: [{
        location: '',
        arrival: '',
        departure: '',
        airline: ''
    }],
    modal: false,

};

const flightsReducer = (state = initialState, action) => {
    let airline;
    let location;
    let arrival; 
    let departure;
    let modal = state.modal;

    switch(action.type) {
        //change modal boolean
        case types.CHANGE_MODAL:
            console.log(`clicked and opened a modal`)
            if (state.modal === false) {
               modal = true 
            } else {
                modal = false
            }

            return {
                ...state,
                modal
            };

        //adding a trip
        case types.ADD_TRIP:
            console.log('whe are we not goign in here', action.payload.values)
            let newFlights = {
                location : action.payload.values.location,
                arrival : action.payload.values.arrival,
                departure : action.payload.values.departure,
                airline : action.payload.values.airline,
            }
            console.log('these are the new flights', newFlights)

            airline = state.flights.slice();
            airline.flights.push(newFlights);

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