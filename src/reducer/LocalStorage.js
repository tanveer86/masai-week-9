let storageBikes = JSON.parse(localStorage.getItem('bikes'));
let storageBookings = JSON.parse(localStorage.getItem('bookings'));

const bikesData = function(){
    return(storageBikes)
}

const bookingsData = function(){
    return(storageBookings)
}

export {bikesData, bookingsData};