import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';
import Menu from './Menu';

let storageBookings = JSON.parse(localStorage.getItem('bookings'));
let selectedBike = JSON.parse(localStorage.getItem('selectedBike'));
let todayDate = new Date().toDateString();

// console.log(selectedBike.bikeName)

let allBookings = [];

if(storageBookings){
    allBookings = [...storageBookings];
}

class Booking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customerName: '',
            customerPhone: '',
            customerEmail: '',
            customerDL: '',
            customerDrop: '',
            customerPay: '',
            customerMessage: '',
            customerBikeName: selectedBike.bikeName,
            customerBikeImage: selectedBike.bikeImage,
            customerBikePrice: selectedBike.bikePrice,
            customerBikePickup: selectedBike.bikeLocation,
            customerBookDate: todayDate,
        }
    }
    
    inputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    bookingSubmit = (event) => {
        event.preventDefault();
        allBookings.push(this.state)
        localStorage.setItem('bookings',JSON.stringify(allBookings));
        this.props.history.push('/sucess')
    }

    render(){
        return(
            <React.Fragment>
                <Menu />
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-9 p-5">
                            <form onSubmit={this.bookingSubmit}>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="text-danger font-weight-bold">Your Full Name *</label>
                                            <input name="customerName" type="text" class="form-control" placeholder="Enter Your Name" required onChange={this.inputChange} value={this.state.bikeName} />
                                        </div>
                                        <div class="form-group">
                                            <label class="text-danger font-weight-bold">Your Email ID *</label>
                                            <input name="customerEmail" type="email" class="form-control" placeholder="Enter Your Email Id" required onChange={this.inputChange} value={this.state.customerEmail} />
                                        </div>
                                        <div class="form-group">
                                            <label class="text-danger font-weight-bold">Drop Location *</label>
                                            <input name="customerDrop" type="text" class="form-control" placeholder="Enter Location Where You'll Drop" required onChange={this.inputChange} value={this.state.customerDrop} />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="text-danger font-weight-bold">Phone Number *</label>
                                            <input name="customerPhone" type="number" class="form-control" placeholder="Enter Your Phone Number"required onChange={this.inputChange} value={this.state.customerPhone} />
                                        </div>
                                        <div class="form-group">
                                            <label class="text-danger font-weight-bold">Your Driving Licence Number</label>
                                            <input name="customerDL" type="text" class="form-control" placeholder="Enter Your DL Number" onChange={this.inputChange} value={this.state.customerDL} />
                                        </div>
                                        <div class="form-group">
                                            <label class="text-danger font-weight-bold">Payment Mode</label>
                                            <select name="customerPay" class="form-control" onChange={this.inputChange} value={this.state.customerPay} >
                                                <option>Select Payment</option>
                                                <option>Pay at Pick-up Point</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="text-danger font-weight-bold">Custom Message</label>
                                            <input name="customerMessage" type="text" class="form-control" placeholder="Enter Custom Message eg: Fill 1Litter Petrol" onChange={this.inputChange} value={this.state.customerMessage} />
                                            <small id="emailHelp" class="form-text text-muted">*Note: Extra Charges May Apply!</small>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-danger btn-lg btn-block font-weight-bolder">Book Now</button>
                            </form>
                        </div>
                        <div class="col-md-3 pt-5">
                        <div class="card-body text-center">
                            <img src={selectedBike.bikeImage} class="card-img mb-3" alt={selectedBike.bikeName} title={selectedBike.bikeName} />
                            <h5 class="card-title mt-3">You Selected: {selectedBike.bikeName}</h5>
                            <p class="card-text text-danger font-weight-bolder">Per Day: Rs. {selectedBike.bikePrice}</p>
                            <p class="card-text">Your Pick-Up Point is:<br/><b>{selectedBike.bikeLocation}</b></p>
                            <p class="card-text"><small class="text-muted">Do Not Drink & Drive. Our Bike is Costlier Than Your Life.</small></p>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }

}

export default Booking;