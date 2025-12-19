import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";
import RatingsChart from "../RatingsChart/RatingsChart";
import { Download, Star, UserPenIcon } from "lucide-react";
import { RiCodeView } from "react-icons/ri";
import { FcRating } from "react-icons/fc";

const images = import.meta.glob("../../assets/app-logo/*", { eager: true });

export const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const numericId = Number(id);

  const { showData, installApp, installedIds } = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [showCard, setShowCard] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  const fileNumber = String(numericId + 4).padStart(3, "0");
  const match = Object.entries(images).find(([path]) =>
    path.includes(`icon-${fileNumber}`)
  );
  const imageSrc = match?.[1]?.default || null;

  /* -------- Load card data -------- */
  useEffect(() => {
    if (!showData.length) return;

    const item = showData.find((app) => app.id === numericId);

    if (!item) {
      setTimeout(() => navigate("/notfound"), 1000);
      return;
    }

    setShowCard(item);
    setIsInstalled(installedIds.includes(item.id));
    setLoading(false);
  }, [numericId, showData, installedIds, navigate]);


  if (loading || !showCard) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="loading-logo"
            className="w-12 h-12 animate-spin-slow"
          />
          <p className="text-4xl tracking-[0.6em] text-gray-600 font-semibold">
            LOADING
          </p>
        </div>
      </div>
    );
  }


  const handleInstall = () => {
    installApp(showCard.id);
    setIsInstalled(true);

    toast.success("App Installed Successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className="flex gap-8 flex-col md:flex-row items-start">
        {/* App Image */}
        {imageSrc ? (
          <img src={imageSrc} alt={showCard.title} className="w-40 rounded-xl" />
        ) : (
          <div className="w-40 h-40 bg-gray-200 animate-pulse rounded-xl" />
        )}

        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{showCard.title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-blue-600">
              {showCard.companyName}
            </span>
          </p>

          <div className="flex gap-10 mt-5 text-lg">
            <div>
              <Download></Download>
              <p className="font-bold">{showCard.downloads}</p>
              <p className="text-gray-500 text-sm">Downloads</p>
            </div>

            <div>
              <Star></Star>
              <p className="font-bold">{showCard.ratingAvg}</p>
              <p className="text-gray-500 text-sm">Average Rating</p>
            </div>

            <div>
              <UserPenIcon></UserPenIcon>
              <p className="font-bold">{showCard.reviews}</p>
              <p className="text-gray-500 text-sm">Total Reviews</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-6 px-6 py-2 rounded-lg text-white ${
              isInstalled
                ? 
     "px-10 py-3  rounded-lg font-semibold text-white  bg-gradient-to-r from-green-600 to-green-700"
    
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${showCard.size})`}
          </button>
        </div>
      </div>

      <RatingsChart ratings={showCard.ratings} />

      <div className="my-15">
        <h2 className="text-2xl font-medium mb-3">Description</h2>
        <p className="text-gray-700 leading-7">{showCard.description}</p>
      </div>
    </div>
  );
};
