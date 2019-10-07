import React from 'react';
import styles from './style.module.css'
import { Route, Link, BrowserRouter } from "react-router-dom";

function Header(){
    return(
        <React.Fragment>
            <div className={styles.header}>
                <div className={styles.homenavbar}>
                    <Link to="/" className={styles.homelink}>Home</Link>
                    <Link to="/allbikes" className={styles.homelink}>Rent a Bike</Link>
                    <Link to="/allbikes" className={styles.homelink}>How it Works</Link>
                    <Link to="/mybookings" className={styles.homelink}>My Bookings</Link>
                    <Link to="/allbikes" className={styles.homelink}>Contact Us</Link>
                </div>
                <div className={styles.headerIntro}>
                    <div className={styles.headerIntroImage}>
                        <img src="https://www.paybima.com/content/images/two-wheeler/ban1-2.png" />
                    </div>
                    <div className={styles.headerIntroForm}>
                        <div className={styles.searchBox}>
                            <h2>Rent a Bike Now</h2>
                        </div>
                        <div class="container text-center">
                            <form>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="font-weight-bold">Pick-Up Date</label>
                                            <input type="date" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label class="font-weight-bold">Drop Date</label>
                                            <input type="date" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="font-weight-bold">Select Your City</label>
                                            <select class="form-control">
                                                <option>Select City</option>
                                                <option>Bangalore</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                               <Link to="/allbikes"><button type="submit" className={styles.searchButton}>SEARCH FOR BIKES</button></Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Header;