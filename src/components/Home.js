import React from 'react';
import Header from './Header';
import HomeListing from './HomeListing';
import Homeintro from './HomeIntro';
import Footer from './Footer';
import Offers from './Offers';

function Home (props){
    return(
        <div>
            <Offers />
            <Header />
            <HomeListing />
            <Homeintro />
            <Footer />
        </div>
    )
}

export default Home;