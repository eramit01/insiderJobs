import React from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useRef } from 'react';
const Hero = () => {
  const {setSearchFilter,setIsSearched}=useContext(AppContext)

  const titleRef=useRef(null) // ye input ke text ko read krne ke liye use karate hai starting me eski value ko maine null rkah hai  jab search button pr vcliack karenge toh uskee current value ko update karunga 
  const locationRef=useRef(null)
  const onSearch=()=>{
setSearchFilter({
  title:titleRef.current.value,
  location:locationRef.current.value
})
setIsSearched(true)


  }
  return (
    <div className="container 2xl:px-20 mx-auto my-8">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center rounded-xl mx-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 20,000+ jobs to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore the Jobs
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
          <img src={assets.search_icon} alt="Search Icon" className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search For Jobs"
            className="max-sm:text-xs p-2 rounded outline-none w-full"
            ref={titleRef}
          />
          <img src={assets.location_icon} alt="Location Icon" className="h-5 w-5" />
          <input
            type="text"
            placeholder="Location Jobs "
            className="max-sm:text-xs p-2 rounded outline-none w-full"
            ref={locationRef}
          />
          <button onClick={onSearch}className="bg-blue-600 text-white px-6  m-1 py-2 rounded hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </div>
      <div className='border border-gray-300 dhadow-mg mx-2 mt-5 p-6 rounded-md flex'>
        <div className='flex justify-between items-center gap-10 lg:gap-16 flex-wrap'>

          <p className='font-medium'> Trusted by </p>
          <img className='h-6' src={assets.microsoft_logo} alt="" />
          <img className='h-6' src={assets.walmart_logo} alt="" />
          <img className='h-6' src={assets.amazon_logo} alt="" />
          <img className='h-6' src={assets.accenture_logo} alt="" />
          <img className='h-6' src={assets.samsung_logo} alt="" />
          <img className='h-6' src={assets.adobe_logo} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Hero;
