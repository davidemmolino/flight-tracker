import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import flightsReducers from './flightsReducers';
export const rootReducer = combineReducers({
    flights: flightsReducers,
    form: formReducer,
});
//# sourceMappingURL=reducerCombiner.js.map