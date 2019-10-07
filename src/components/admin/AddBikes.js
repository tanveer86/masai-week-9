import React from 'react';
import AdminMenu from './AdminMenu';

let storageBikes = JSON.parse(localStorage.getItem('bikes'));
let AllBikes = [...storageBikes]

class AddBikes extends React.Component{
    constructor(){
        super();
        this.state = {
            bikeName: '',
            bikeImage: '',
            bikeBrand: '',
            bikePrice: 0,
            bikeLocation: '',
            bikeDetails: '',
        }
    }

    inputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    inputSubmit = (event) => {
        event.preventDefault();
        AllBikes.push(this.state)
        localStorage.setItem('bikes',JSON.stringify(AllBikes))
    }

    render(){
        
        let bikesData = JSON.parse(localStorage.getItem('bikes'));

        let singleBike = bikesData.map(eachBike => 
            <div class="col-3 mt-5 text-center">
                <div class="card">
                    <img src={eachBike.bikeImage} class="card-img-top" alt={eachBike.bikeName} />
                    <div class="card-body">
                        <h5 class="card-title">{eachBike.bikeName}</h5>
                        <p class="card-text">Now in: {eachBike.bikeLocation}</p>
                        <p class="card-text">Price: Rs. {eachBike.bikePrice}</p>
                    </div>
                </div>
            </div>);

        return(
            <React.Fragment>
            <AdminMenu />
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center">Enter Below Details to Add a New Bike</h1>
                        <form onSubmit={this.inputSubmit}>
                            <div class="row mt-5">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Bike Name</label>
                                        <input name="bikeName" type="text" class="form-control"  placeholder="Enter Bike Name" value={this.state.bikeName} onChange={this.inputChange} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Bike Image</label>
                                        <input name="bikeImage" type="text" class="form-control"  placeholder="Enter Bike Image URL" value={this.state.bikeImage} onChange={this.inputChange} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Brand Name</label>
                                        <input name="bikeBrand" type="text" class="form-control" placeholder="Enter Brand Name" value={this.state.bikeBrand} onChange={this.inputChange}/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Price</label>
                                        <input name="bikePrice" type="number" class="form-control" placeholder="Enter Price" value={this.state.bikePrice} onChange={this.inputChange}/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Location</label>
                                        <input name="bikeLocation" type="text" class="form-control" placeholder="Enter Location" value={this.state.bikeLocation} onChange={this.inputChange}/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Bike Details</label>
                                        <input name="bikeDetails" type="text" class="form-control" placeholder="Enter Bike Details" value={this.state.bikeDetails} onChange={this.inputChange}/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Add New Bike</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    {singleBike}
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default AddBikes;