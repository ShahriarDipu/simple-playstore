import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Download, Star } from "lucide-react";
import { FcRating } from "react-icons/fc";








const images = import.meta.glob(
  "../../assets/app-logo/*",
  { eager: true }
);

const getImageSrc = (id) => {
  const fileNumber = String(id + 4).padStart(3, "0");
  const match = Object.entries(images).find(([path]) =>
    path.includes(`icon-${fileNumber}`)
  );
  return match?.[1]?.default || null;
};


const parseSize = (value) => {
  if (!value) return 0;
  return Number(value); 
};







export const Installation = () => {
  const { installedApps, uninstallApp } = useContext(AppContext);
  const [sortBy, setSortBy] = useState("");
 const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f1f1f1]">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  if (!installedApps || installedApps.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500">
        No apps installed yet.
      </div>
    );
  }

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === "size-high-low")
      return parseSize(b.size) - parseSize(a.size);
    if (sortBy === "size-low-high")
      return parseSize(a.size) - parseSize(b.size);
    return 0;
  });

  return (
    <div className="bg-[#f1f1f1] min-h-screen py-12">
      <div className="w-10/12 mx-auto">

       
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
            Your Installed Apps
  
          </h1>
          <p className="text-gray-500 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

   
        <div className="flex justify-between items-center mb-6">
          <p className="text-purple-600 font-semibold underline">
            {installedApps.length} Apps Found
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-4 py-2 rounded-md bg-white shadow"
          >
            <option value="">Sort By Size</option>
            <option value="size-high-low">Size: High → Low</option>
            <option value="size-low-high">Size: Low → High</option>
          </select>
        </div>

       
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-sm px-6 py-4 flex items-center justify-between"
            >
      
              <div className="flex items-center gap-5">
                <img
                  src={getImageSrc(app.id)}
                  alt={app.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div>
                  <h2 className="font-semibold text-lg text-gray-800">
                    {app.title}
                  </h2>

                  <div className="flex items-center gap-4 mt-1 text-sm">
                    <span className="text-green-600 flex items-center gap-1">
                      <Download className="w-4"></Download> {app.downloads}
                    </span>

                    <span className="text-purple-600 flex items-center gap-1">
                      <Star className="w-4"></Star> {app.ratingAvg}
                    </span>

                    <span className="text-gray-500">
                      {app.size} MB
                    </span>
                  </div>
                </div>
              </div>

          
              <button
                onClick={() => uninstallApp(app.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
