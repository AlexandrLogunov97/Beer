import { combineReducers } from 'redux';
import pivasik from './pivasik';
import modal from './modal';
import filter from './filter';

export default combineReducers({
    pivasik, modal, filter
})