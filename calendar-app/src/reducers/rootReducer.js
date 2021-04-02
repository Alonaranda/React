import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { calendarReducer } from './calendarReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    //Mis reducers
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer,

})