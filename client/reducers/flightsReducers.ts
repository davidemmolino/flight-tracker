import * as types from '../constants/actionTypes';
// import { formValueSelector } from 'redux-form';

type FlightInfo = {
    location: string
    arrival: string
    departure: string
    airline: string
}

type InitialState = {
    modal: boolean,
    flights: FlightInfo[],
    flightInfo: {
        location: '',
        arrival: '',
        departure: '',
        airline: ''
    }
};

const initialState: InitialState = {
    flights: [],
    flightInfo: {
        location: '',
        arrival: '',
        departure: '',
        airline: ''
    },
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
            let newFlights : newFlights = {
                airline : action.payload.airline,
                location : action.payload.city,
                arrival : action.payload.arrival,
                departure : action.payload.departure,
            }
            console.log('AFTER NEW FLIGHTS', newFlights)

            //make a copy of the flight info and save it as airline
            //push airline 
            airline = state.flights.slice();
            airline.push(newFlights);

            return {
                ...state,
                flights : airline,
            };
        
            default: 
                return state;
    };
}

export default flightsReducer;