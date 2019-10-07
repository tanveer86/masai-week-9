import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Homeintro from './HomeIntro';
import Footer from './Footer';
import Menu from './Menu';
import {connect} from 'react-redux'

function BikeDetail(props){
    // console.log(props)
    let getBike = props.allBikes.find(eachBike => eachBike.bikeName == props.match.params.bikeName);
 
    localStorage.setItem('selectedBike',JSON.stringify(getBike))

    if(getBike){
        return(
            <React.Fragment>
                <Menu />
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="text-center">Details of Your Selected Bike</h1>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 mt-5">
                    <div class="row no-gutters">
                        <div class="col-md-3 mt-5">
                        <img src={getBike.bikeImage} class="card-img" alt={getBike.bikeName} title={getBike.bikeName} />
                        </div>
                        <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Vehicle Name: {getBike.bikeName}</h5>
                            <p class="card-text"><small class="text-muted">{getBike.bikeBrand}</small></p>
                            <p class="card-text">Current Location: {getBike.bikeLocation}</p>
                            <p class="card-text">Vehicle Details: {getBike.bikeDetails}</p>
                            <p class="card-text text-danger font-weight-bold">Per Day: Rs. {getBike.bikePrice}</p>
                            <Link to="/booking"><button class="btn btn-danger font-weight-bolder">Rent Now</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
                <h1>Bike not found, please go bike and select correct bike.</h1>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
        allBikes: state.allBikes
    }
}

export default connect(mapStateToProps)(BikeDetail)