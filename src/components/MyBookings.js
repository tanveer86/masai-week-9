import React from 'react';
import Footer from './Footer';
import Menu from './Menu';
import {connect} from 'react-redux';

function MyBookings(props){
    return(
        <React.Fragment>
            <Menu />
            <div class="container mb-5">
                <div class="row">
                    <div class="col-12 mt-5 text-center">
                        <h2>Welcome Back, Enter Your Mobile Number Below</h2>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-3">

                    </div>
                    <div class="col-6 text-center">
                    <form>
                        <div class="form-group">
                            <label class="font-weight-bolder">Enter Your Mobile Phone Number</label>
                            <input type="number" class="form-control btn-lg" placeholder="Enter Your Mobile Number" required />
                            <small id="emailHelp" class="form-text text-muted">Please enter your mobile number which you used while booking!</small>
                        </div>
                        <button type="submit" class="btn btn-danger font-weight-bold btn-lg">Get Booking Details</button>
                    </form>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default MyBookings;