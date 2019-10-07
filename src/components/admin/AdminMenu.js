import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../style.module.css'

function AdminMenu(){
    return(
        <React.Fragment>
            <div className={styles.adminMenuDiv}>
                <Link className={styles.adminLink} to="/dashboard">Dashboard</Link>
                <Link className={styles.adminLink} to="/addbikes">Add New Bikes</Link>
                <Link className={styles.adminLink} to="/showbookings">See All Bookings</Link>
                <Link className={styles.adminLink} to="/">Log Out</Link>
            </div>
        </React.Fragment>
    )
}

export default AdminMenu