import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets, JobCategories, JobLocations } from '../assets/assets';

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const clearTitleFilter = () => {
    setSearchFilter((prev) => ({ ...prev, title: '' }));
  };

  const clearLocationFilter = () => {
    setSearchFilter((prev) => ({ ...prev, location: '' }));
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const toggleLocation = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  };

  return (
    <div>
      {/* Sidebar */}
      <div>
        {/* Search Filter from Hero Component */}
        {isSearched && (searchFilter.title !== '' || searchFilter.location !== '') && (
          <>
            <h3 className="font-medium text-lg mb-2">Current Search</h3>
            <div className="flex gap-4">
              {searchFilter.title && (
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md flex items-center gap-2">
                  {searchFilter.title}
                  <img
                    onClick={clearTitleFilter}
                    className="cursor-pointer h-4 w-4"
                    src={assets.cross_icon}
                    alt="Clear title filter"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md flex items-center gap-2">
                  {searchFilter.location}
                  <img
                    onClick={clearLocationFilter}
                    className="cursor-pointer h-4 w-4"
                    src={assets.cross_icon}
                    alt="Clear location filter"
                  />
                </span>
              )}
            </div>
          </>
        )}
        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4">Search By Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  aria-label={`Filter by ${category}`}
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4">Search By Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  aria-label={`Filter by ${location}`}
                  checked={selectedLocations.includes(location)}
                  onChange={() => toggleLocation(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get Your desired job From Top Companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Placeholder for job listings */}
          <p className="text-gray-500">No jobs available at the moment.</p>
        </div>
      </section>
    </div>
  );
};

export default JobListing;
