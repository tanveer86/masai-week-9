import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import {connect} from 'react-redux';

function HomeListing(props){

    let bestBikes = props.allBikes.map((eachBest, index) => {
        if(index<8)
        return(
        <div class="col-3 mt-3 text-center">
            <div class="card p-2" >
                <img src={eachBest.bikeImage} class="card-img-top" alt={eachBest.bikeName} title={eachBest.bikeName} />
                <div class="card-body">
                    <h5 class="card-title">{eachBest.bikeName}</h5>
                    <p class="card-text font-weight-bold">Per Day: Rs. {eachBest.bikePrice}</p>
                    <p class="card-text">Location: {eachBest.bikeLocation}</p>
                    <Link to={`/allbikes/${eachBest.bikeName}`}><button class="btn btn-danger font-weight-bolder">Rent This Bike</button></Link>
                </div>
            </div>
        </div>)});

    return(
        <React.Fragment>
            <div class="container p-3">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">GadiOnRent.com in Bangalore Now</h1>
                    </div>
                </div>
                <div class="row">
                    {bestBikes}
                </div>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return{
        allBikes: state.allBikes
    }
}

export default connect(mapStateToProps)(HomeListing)