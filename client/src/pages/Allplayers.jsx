import React from 'react';
import Playlers from '../components/Playlers';

const Allplayers = ({ playlers }) => {
    return (
        <div>
            Allplayers
            <Playlers playlers={playlers} />
        </div>
    );
};

export default Allplayers;