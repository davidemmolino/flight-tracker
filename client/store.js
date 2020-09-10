import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducerCombiner';

const store = createStore(
    reducers,
    composeWithDevTools()
); 

export default store;