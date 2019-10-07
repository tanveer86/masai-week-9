import {combineReducers} from 'redux';
import {bikesData, bookingsData} from './LocalStorage';

const allReducers = combineReducers({
    allBikes: bikesData,
    allBookings: bookingsData
})

export default allReducers;