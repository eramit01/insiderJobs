import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="shadow-lg py-3 bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center container mx-auto 2xl:px-20 px-4">
        <div className="flex items-center">
          <img src={assets.logo} alt="Logo" className="h-10 w-auto" />
        </div>
        
        {user ? (
          <div className="relative">
            <div 
              className="cursor-pointer flex items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <UserButton />
            </div>
            
            {showDropdown && (
              <div className="absolute right-0 mt-3 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-20">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-gray-800 font-medium">
                    Hi, {user.firstName + ' ' + user.lastName}
                  </p>
                  <p className="text-gray-500 text-sm truncate">
                    {user.emailAddresses[0]?.emailAddress}
                  </p>
                </div>
                
                <div className="px-2 py-2">
                  <Link 
                    to="/applications" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors font-medium text-sm"
                  >
                    Applied Jobs
                  </Link>
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors font-medium text-sm"
                  >
                    Profile Settings
                  </Link>
                  <Link 
                    to="/saved-jobs" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors font-medium text-sm"
                  >
                    Saved Jobs
                  </Link>
                  <button 
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium text-sm mt-1"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-800 transition-colors font-medium px-3 py-1 rounded-md hover:bg-gray-50">
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors font-medium shadow-sm"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;