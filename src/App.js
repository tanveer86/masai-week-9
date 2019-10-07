import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Offers from './components/Offers';
import Header from './components/Header';
import AddBikes from './components/admin/AddBikes';
import Home from './components/Home';
import AllBikes from './components/AllBikes';
import BikeDetail from './components/BikeDetail';
import Booking from './components/Booking';
import Sucess from './components/Success';
import ShowBookings from './components/admin/ShowBookings';
import Dashboard from './components/admin/Dashboard';
import Login from './components/admin/Login';
import MyBookings from './components/MyBookings';

let allStorageBikes = JSON.parse(localStorage.getItem('bikes'));

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectBike: '',
    }
  }

  render(){
    return (
      <BrowserRouter>        
        <Route path="/" exact render={(props) => {return <Home {...props} />;}} />
        <Route path="/allbikes" exact render={props => {return <AllBikes {...props} />; }} />
        <Route path="/allbikes/:bikeName" exact render={props => <BikeDetail {...props} />} />
        <Route path="/booking" exact render={props => <Booking {...props} />} />
        <Route path="/sucess" component={Sucess} />
        <Route path="/addbikes" component={AddBikes} />
        <Route path="/showbookings" component={ShowBookings} />
        <Route path="/dashboard" render={(props) => {return <Dashboard showbikes={allStorageBikes} {...props} />;}} />
        <Route path="/login" component={Login} />
        <Route path="/mybookings" component={MyBookings} />
        </BrowserRouter>
    );
  }
}

export default App;