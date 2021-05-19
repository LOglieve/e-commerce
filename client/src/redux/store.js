import React from 'react';
import { createStore, combineReducers } from 'redux';
import {userReducer, basketReducer} from './reducers';


const reducers = combineReducers({userReducer, basketReducer});

export default createStore(reducers);


//STORE

//ACTIONS





//DISPATCH