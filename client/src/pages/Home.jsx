import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Allplayers from './Allplayers';
import axios from 'axios'

const Home = () => {
    const [playlers, setPlaylers] = useState([])
    useEffect(() => {
        const getPlaylers = async () => {
            const res = await axios.get('data.json')
            setPlaylers(res.data)
        }
        getPlaylers()
    }, [])
    console.log(playlers)
    return (
        <div >
            <Navbar />
            <Hero />
            <Allplayers playlers={playlers} />
        </div>
    );
};

export default Home;