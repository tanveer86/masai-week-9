import React from 'react';
import Footer from './Footer';
import Menu from './Menu';
import {connect} from 'react-redux';

function Sucess(props){

    let todayDate = new Date().toDateString();
    let lastBooking = props.allBookings.length-1
    
    let customerDetails = props.allBookings.map((eachCustomer, index) => {
        if(index == lastBooking)
        return(
            <div class="card mb-3 mt-5">
                <div class="row no-gutters">
                    <div class="col-md-2 mt-4">
                        <img src={eachCustomer.customerBikeImage} class="card-img" alt={eachCustomer.customerBikeName} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-center">Your Booking ID is: {eachCustomer.customerBikePrice}</h5>
                            <div class="row">
                                <div class="col-6">
                                    <h5>Your Bike Details</h5>
                                    <p class="card-text">Bike Name: {eachCustomer.customerBikeName}</p>
                                    <p class="card-text">Pick-Up Location: {eachCustomer.customerBikePickup}</p>
                                    <p class="card-text">Booking Date: {todayDate}</p>
                                </div>
                                <div class="col-6 text-right">
                                    <h5>Your Details</h5>
                                    <p class="card-text">Your Full Name: {eachCustomer.customerName}</p>
                                    <p class="card-text">Registered Number: {eachCustomer.customerPhone}</p>
                                    <p class="card-text">Your Email ID: {eachCustomer.customerEmail}</p>
                                </div>
                                </div>
                                <div class="mt-5 text-center">
                                    <h5 class="card-title">Thank You</h5>
                                    <p class="font-weight-bolder text-danger">Please Pay Rs. {eachCustomer.customerBikePickup} at Pick-up Location</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <img src="https://in.bookmyshow.com/secure/barcode/?IsImage=Y&strBarcodeType=qrcode&strBarcodeTxt=WF3K9DM&intHeight=100&intWidth=100" class="card-img" />
                        </div>
                </div>
            </div>
        )
    })

    return(
        <React.Fragment>
            <Menu />
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center mt-5">
                        <h1>BOOKING SUCCESSFUL</h1>
                        <p class="font-weight-bold">We have sent booking conformation to your email id. Please pay at pick-up point and college your bike key.</p>
                        <p class="font-weight-bolder text-danger">Kindly Carry Your Original Driving Licience To Verify</p>

                    </div>
                </div>
            </div>
            {customerDetails}
            <Footer />
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return{
        allBookings: state.allBookings
    }
}

export default connect(mapStateToProps)(Sucess)