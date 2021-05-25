import React from 'react';
import { createStore, combineReducers } from 'redux';
import {userReducer} from './userSlice';
import {basketReducer} from './basketSlice';



const rootReducer = combineReducers({
    user: userReducer, 
    basket: basketReducer
});

export default createStore(rootReducer);


//STORE

//ACTIONS





//DISPATCH