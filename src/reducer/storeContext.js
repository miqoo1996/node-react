import { createContext } from 'react';
import { createStore } from 'redux';
import { reducer } from './GLReducer';

export const storeContext = createContext();

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);