import React, { use, useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { AppsCard } from '../AppsCard/AppsCard';


export const Apps = () => {
  const { showData } = use(AppContext);
  const [searchText, setSearchText] = useState("");

  // Filter apps based on search text
  const filteredApps = showData.filter(app =>
    app.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='w-15/17 mx-auto my-10'>

      {/* Search Input */}
      <div className='mb-6 flex justify-center'>
        <input
          type="text"
          placeholder="Search apps..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      {/* Apps Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-x-6 gap-y-10 place-items-center">

        {filteredApps.map((app) => (
          <AppsCard key={app.id} appsCard={app} />
        ))}
      </div>

      {/* No Results Found */}
      {filteredApps.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No apps found.
        </p>
      )}

    </div>
  );
};
