import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/flightsReducers';
import store from './store';

// import { styles } from '../public/styles.scss';
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);
