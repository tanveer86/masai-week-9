import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Footer from './Footer';
import Menu from './Menu';
import {connect} from 'react-redux';

function AllBikes(props){

    let showAllBikes = props.allBikes.map(eachBest => 
        
        <div class="col-3 mt-4 text-center">
            <div class="card p-2" >
                <img src={eachBest.bikeImage} class="card-img-top" alt={eachBest.bikeName} title={eachBest.bikeName} />
                <div class="card-body">
                    <h5 class="card-title">{eachBest.bikeName}</h5>
                    <p class="card-text font-weight-bold">Per Day: Rs. {eachBest.bikePrice}</p>
                    <p class="card-text">Location: {eachBest.bikeLocation}</p>
                    <Link to={`${props.match.url}/${eachBest.bikeName}`}><button class="btn btn-danger font-weight-bolder">Rent This Bike</button></Link>
                </div>
            </div>
        </div>);

    return(
        <React.Fragment>
            <Menu />
            <div class="container p-3 mt-5">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">Select the Bike You Want to Rent</h1>
                    </div>
                </div>
                <div class="row mt-3">
                    {showAllBikes}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return{
        allBikes: state.allBikes
    }
}

export default connect(mapStateToProps)(AllBikes);