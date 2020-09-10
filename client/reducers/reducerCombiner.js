import { combineReducers } from 'redux';
import flightsReducers from './flightsReducers';

const reducers = combineReducers({
    flights: flightsReducers,
})

export default reducers;