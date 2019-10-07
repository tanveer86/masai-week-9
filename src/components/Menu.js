import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Menu(){
    return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
                <a class="navbar-brand font-weight-bolder" href="/">GadiOnRent.com</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item active">
                            <Link class="nav-link font-weight-bolder" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link font-weight-bolder" to="/allbikes">Rent a Bike</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link font-weight-bolder" to="/allbikes">How it Works</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link font-weight-bolder" to="/mybookings">My Bookings</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link font-weight-bolder" href="/allbikes">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Menu;