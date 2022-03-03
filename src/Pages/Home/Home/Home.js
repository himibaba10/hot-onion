import React from 'react';
import "../../Shared/SharedStyle/SharedStyle.css";
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Services from '../Services/Services';

const Home = () => {
    return (
        <main>
            <Banner/>
            <Foods/>
            <Services/>
        </main>
    );
};

export default Home;