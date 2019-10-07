import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AdminMenu from './AdminMenu';

function Dashboard(props){

    let storageBookings = JSON.parse(localStorage.getItem('bookings'));

    return(
        <React.Fragment>
            <AdminMenu />
            <div class="container mt-5">
                <div class="row text-center">
                    <div class="col-6">
                        <div class="card">
                            <img src="https://spiderimg.amarujala.com/assets/images/2019/04/29/750x506/bikes-and-scooters_1556521286.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Number of Bikes Available</h5>
                                <p class="card-text font-weight-bolder">Total Bikes: {props.showbikes.length}</p>
                                <Link to="/addbikes" class="btn btn-primary">View all Bikes</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                            <img src="https://www.athmin.com/img/domains/Reservations%201.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Number of Bookings</h5>
                                <p class="card-text font-weight-bolder">Total Bookings: {storageBookings.length}</p>
                                <Link to="/showbookings" class="btn btn-primary">View all Bookings</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;