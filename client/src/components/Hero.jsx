import React from 'react';
import bg_main from '../assets/banner-main.png'
import bg_imge from '../assets/bg-shadow.png'
const Hero = () => {
    return (
        <div className=' ' >
            <div className=' bg-[#131313] flex justify-center flex-col items-center h-[575px]'>
                <img src={bg_imge} alt="" className='w-full h-full' />
                <div className=' absolute  '>
                    <div className=' flex flex-col justify-center items-center space-y-8'>
                        <img src={bg_main} alt="" />
                        <h1 className=' font-bold text-white text-[40px]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className=' font-medium text-white text-[24px]'>Beyond Boundaries Beyond Limits</p>
                        <div className='border-yellow-300 rounded-md p-2 border'>
                            <button className=' btn bg-amber-300 border-yellow-300 rounded-md'>Claim Free Credit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;