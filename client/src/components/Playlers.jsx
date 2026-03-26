import React from 'react';
import Card from './Card';

const Playlers = ({ playlers }) => {
    return (
        <div className=' grid grid-cols-3 gap-6'>
            {
                playlers.map((playler, index) => (
                    <Card key={index} playler={playler} />
                ))
            }
        </div>
    );
};

export default Playlers;