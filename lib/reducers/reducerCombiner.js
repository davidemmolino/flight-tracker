import { combineReducers } from 'redux';
import flightsReducers from './flightsReducers';
import { reducer as formReducer } from 'redux-form';
const reducers = combineReducers({
    flights: flightsReducers,
    form: formReducer,
});
export default reducers;
//# sourceMappingURL=reducerCombiner.js.map