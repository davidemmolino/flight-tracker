import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/reducerCombiner';
const store = createStore(rootReducer, composeWithDevTools());
export default store;
//# sourceMappingURL=store.js.map