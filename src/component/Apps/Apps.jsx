import React, { use, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { AppsCard } from '../AppsCard/AppsCard';


export const Apps = () => {
   const { showData } = useContext(AppContext);

  const [searchText, setSearchText] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (showData) {
      const timer = setTimeout(() => {
        setFilteredApps(showData);
        setLoading(false);
      }, 1500); 

      return () => clearTimeout(timer);
    }
  }, [showData]);


  useEffect(() => {
    if (!showData) return;

    setLoading(true);

    const timer = setTimeout(() => {
      const result = showData.filter((app) =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredApps(result);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText, showData]);


  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className='w-15/17 mx-auto my-10'>

      <div className='mb-10 flex justify-center'>
        <input
          type="text"
          placeholder="Search apps..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>


   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-x-6 gap-y-10 place-items-center">

        {filteredApps.map((app) => (
          <AppsCard key={app.id} appsCard={app} />
        ))}
      </div>

   
      {filteredApps.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No apps found.
        </p>
      )}

    </div>
  );
};
