import React from 'react';
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className="shadow py-4">
    <div className='flex justify-between items-center container mx-auto container 2xl:px-20 px-4'>
        <img src={assets.logo} alt="" />
        <div className='flex gap-4 max-sm:text-xs'>
            <button className='text-gray-600'>
                Recruiter LogIn</button>
                <button className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>LogIn</button>
        </div>
    </div>
   
       
    </div>
  );
};

export default Navbar;