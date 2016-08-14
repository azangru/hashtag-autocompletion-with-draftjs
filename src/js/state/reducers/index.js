import { combineReducers } from 'redux';
import greetingReducer from './greeting-reducer';

const rootReducer = combineReducers({
    greetingReducer
});

export default rootReducer;
