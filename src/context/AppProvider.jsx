import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);
  const [loading, setLoading] = useState(true);


  const [installedIds, setInstalledIds] = useState(() => {
    const stored = localStorage.getItem("apps");
    return stored ? JSON.parse(stored).map(Number) : [];
  });

  
  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setShowData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem("apps", JSON.stringify(installedIds));
  }, [installedIds]);

  const installApp = (id) => {
    const numericId = Number(id);
    setInstalledIds((prev) =>
      prev.includes(numericId) ? prev : [...prev, numericId]
    );
  };

  
  const uninstallApp = (id) => {
    const numericId = Number(id);
    setInstalledIds((prev) =>
      prev.filter((appId) => appId !== numericId)
    );
  };


  const installedApps = showData.filter((app) =>
    installedIds.includes(app.id)
  );

  return (
    <AppContext.Provider
      value={{
        showData,
        loading,
        installApp,
        uninstallApp,
        installedIds,
        installedApps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
