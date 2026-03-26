import React from 'react';
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div >
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <img src={logo} alt="logo" />
                </div>
                <div className="flex gap-4">
                    <ul className='flex justify-center items-center gap-6'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className="btn btn-square btn-ghost">
                        0 coin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;