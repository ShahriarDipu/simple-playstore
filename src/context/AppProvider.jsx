import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [showData, updateData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ALWAYS store installed apps as an array
  const [localItem, setLocalItem] = useState(() => {
    const stored = localStorage.getItem("installApp");
    return stored ? JSON.parse(stored) : [];  // <-- IMPORTANT: always array
  });

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        updateData(data);
        setLoading(false);
        console.log(data)
      })
      .catch(() => {
        console.log("Error fetching appsData.json");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("installApp", JSON.stringify(localItem));
  }, [localItem]);


const installApp = (installAppData) => {

  const existing = Array.isArray(localItem) ? localItem : [];

  const alreadyInstalled = existing.some(
    (a) => a.id === installAppData.id
  );

  if (!alreadyInstalled) {
    const updated = [...existing, installAppData];
    setLocalItem(updated);

  }
};

const uninstallApp = (id) => {
  const existing = Array.isArray(localItem) ? localItem : [];

  const updated = existing.filter(app => app.id !== id);

  setLocalItem(updated);

};

 
  const dataInfo = {
    showData,
    loading,
    installApp,
    localItem,
      uninstallApp,  
  };

  return (
    <AppContext.Provider value={dataInfo}>
      {children}
    </AppContext.Provider>
  );
};
