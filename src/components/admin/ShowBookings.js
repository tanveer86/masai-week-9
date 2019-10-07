import React from 'react';
import AdminMenu from './AdminMenu';

function ShowBookings(){

    let storageBookings = JSON.parse(localStorage.getItem('bookings'));

    let allBookings = storageBookings.map((eachBooking, index) => {
        return(
            <tr>
                <th scope="row">{index}</th>
                <td>{eachBooking.customerName}</td>
                <td>{eachBooking.customerPhone}</td>
                <td>{eachBooking.customerBikeName}</td>
                <td>{eachBooking.customerBikePickup}</td>
                <td>{eachBooking.customerDrop}</td>
                <td>Rs. {eachBooking.customerBikePrice}</td>
                <td>{eachBooking.customerPay}</td>
                <td><button class="btn btn-danger font-weight-bold">View Booking</button></td>
            </tr>
        )

    })
    return(
        <React.Fragment>
            <AdminMenu />
            <div class="text-center mt-5">
                <h1>See All the Bookings</h1>
            </div>
            <div>
                <div>
                    <div>
                        <div class="card-body">
                            <h5 class="card-title" id="bookingTitle"></h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Bike</th>
                                        <th scope="col">Pick-up</th>
                                        <th scope="col">Drop</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Payment Mode</th>
                                        <th scope="col">View Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {allBookings}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShowBookings;