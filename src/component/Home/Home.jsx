import React, { useEffect, useState } from "react";
import { Hero } from "../../pages/Hero/Hero";
import StatsSection from "../../pages/StatsSection/StatsSection";
import { TrendingData } from "../../pages/TrendingData/TrendingData";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // ⏱ 1 second delay

    return () => clearTimeout(timer);
  }, []);

  /* ---------- LOADING UI ---------- */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  
  return (
    <div>
      <Hero />
      <StatsSection />
      <TrendingData />
    </div>
  );
};
