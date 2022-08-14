import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import flightsReducers from './flightDetailsReducer';
import modalReducer from './modalReducer';

export const rootReducer = combineReducers({
    flights: flightsReducers,
    modal: modalReducer,
    form: formReducer, //*do I even need this?
})

export type RootReducer = ReturnType<typeof rootReducer>;