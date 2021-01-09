import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/flightsReducers';
import '../public/styles.scss';
// import { styles } from '../public/styles.scss';
const store = createStore(rootReducer);
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById('app'));
//# sourceMappingURL=index.js.map