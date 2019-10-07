import React from 'react';
import styles from './style.module.css'
import { Route, Link, BrowserRouter } from "react-router-dom";

function Footer(){
    return(
        <div className={styles.footerMain}>
            <div className={styles.footerText}>
                <h3>Bike Rentals in Bangalore</h3>
                <p>GadionRent.com in bangalore is to get the best out of the city’s bustling streets. Need a hassle-free commute? Then rent a scooter with us to cruise through the traffic and reach your destination easily.</p>
            </div>
            <div className={styles.footerDiv}>
                <div className={styles.eachFooter}>
                    <h2>Quick Links</h2>
                    <Link to="/allbikes">Rent a Bike</Link><br/>
                    <Link to="/mybookings">My Bookings</Link><br/>
                    <Link to="/about">About Us</Link><br/>
                    <Link to="/cancel">Cancellation Policy</Link><br/>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className={styles.eachFooter}>
                    <h2>Contact Us Now</h2>
                    <h4>Gadionrent.com</h4>
                    <p>Registered: Bhive, Kormangala, Bangalore - 560027</p>
                </div>
                <div className={styles.eachFooter}>
                    <h2>Subscribe Us Now</h2>
                    <input className={styles.footerInput} type="text" placeholder="Enter Your Email Id"/>
                    <button className={styles.footerButton}>Subscribe</button>
                    <h4>Follow Us On</h4>
                    <div className={styles.socialLinks}>
                        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=256&h=256" width="40"/>
                        <img src="https://cdn3.iconfinder.com/data/icons/social-media-circle/512/circle-twitter-512.png" width="40"/>
                        <img src="https://rugbyamericasnorth.com/wp-content/uploads/2017/07/youtube-icon-64px.png" width="40"/>
                        <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG36.png" width="40"/>
                    </div>
                </div>
            </div>
            <div className={styles.copright}>
                <p>Copyright @ GadiOnRent.com 2019</p>
            </div>
        </div>
    )
}

export default Footer;