import { createStore } from 'redux';
import rootReducer from './redures/';

const STORE = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default STORE;