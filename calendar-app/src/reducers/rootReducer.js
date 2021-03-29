import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { calendarReducer } from './calendarReducer';

export const rootReducer = combineReducers({
    //Mis reducers
    ui: uiReducer,
    calendar: calendarReducer,

})