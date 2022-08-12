import * as types from '../constants/flightDetailTypes';
import { FlightInfo } from '../types/types';
// import { formValueSelector } from 'redux-form';

//TODO: Move all the reusable types to the types file
type Action = {
    type: string
    payload: any
};

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

const flightsReducer = (state = initialState, action: Action) => {
    let airline;
    let location;
    let arrival; 
    let departure;
    let modal = state.modal;

    switch(action.type) {
        //adding a trip
        case types.ADD_TRIP:
            let newFlights : FlightInfo = {
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