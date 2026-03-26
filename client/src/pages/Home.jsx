import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Allplayers from './Allplayers';


const Home = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            <Allplayers />
        </div>
    );
};

export default Home;