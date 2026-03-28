import React from 'react';
import { Flag, User } from 'lucide-react'

const Card = ({ playler }) => {
    console.log(playler)
    return (
        <div >
            <div className="card bg-base-100 shadow-sm space-y-2 p-2">
                <figure>
                    <img
                        src={playler.playerImg}
                        alt={playler.playerName} />
                </figure>
                <div className=' flex gap-2'>
                    <User />
                    <h2>{playler.playerName}</h2>
                </div>
                <div >
                    <div className=' flex justify-between items-center'>
                        <div className=' flex gap-3'>
                            <Flag />
                            <p>{playler.playerCountry}</p>
                        </div>
                        <div className=' p-2 bg-gray-200'>{playler.playerType}</div>
                    </div>
                </div>
                <div className=' space-y-2' >
                    <h3>rating {playler.rating}</h3>
                    <div className=' flex items-center justify-between'>
                        <p>{playler.battingStyle}</p>
                        <p>{playler.bowlingStyle}</p>
                    </div>
                    <div className=' flex items-center justify-between'>
                        <p>price:{playler.price}</p>
                        <button className=' btn btn-ghost  p-2 bg-gray-200'>Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;