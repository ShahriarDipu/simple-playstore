import React, { use, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const Installation = () => {
  const { localItem, uninstallApp } = use(AppContext);

  const [sortBy, setSortBy] = useState(""); 

  if (!localItem || localItem.length === 0) {
    return (
      <div className="w-10/12 mx-auto mt-10 text-center text-gray-500">
        No apps installed yet.
      </div>
    );
  }


  const sortedApps = [...localItem].sort((a, b) => {
    if (sortBy === "high-low") return b.downloads - a.downloads; 
    if (sortBy === "low-high") return a.downloads - b.downloads; 
    return 0;
  });

  return (
    <div className="w-10/12 mx-auto my-10">
      <h1 className="text-3xl font-semibold mb-6">Installed Apps</h1>


      <div className="mb-6 flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded-lg shadow bg-white"
        >
          <option value="">Sort by Downloads</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedApps.map((app) => (
          <div key={app.id} className="p-5 border rounded-lg shadow bg-white">
            <div className="flex gap-4 items-center">
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 rounded-xl"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold">{app.title}</h2>
                <p className="text-gray-500 text-sm">
                  Downloads: {app.downloads}
                </p>
              </div>

              <button
                onClick={() => uninstallApp(app.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
