import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { AppsCard } from "../AppsCard/AppsCard";

export const Apps = () => {
  const { showData } = useContext(AppContext);

  const [searchText, setSearchText] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!showData) return;

    const timer = setTimeout(() => {
      setFilteredApps(showData);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
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

  return (
    <div className="w-15/17 mx-auto my-10">
 
      <div className="text-center max-w-3xl mx-auto mt-12 mb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Our All Applications
        </h1>
        <p className="mt-3 text-slate-500 text-sm md:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

   
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 px-2">
        <h3 className="text-slate-700 font-semibold">
          ({filteredApps.length}) Apps Found
        </h3>

        <input
          type="text"
          placeholder="Search Apps"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>


      <div className="min-h-[300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 place-items-center">
        {loading ? (
          <div className="col-span-full flex justify-center items-center min-h-[200px]"> <span className="loading loading-spinner loading-lg "></span></div>
        ) : filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <AppsCard key={app.id} appsCard={app} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No apps found.
          </p>
        )}
      </div>
    </div>
  );
};
