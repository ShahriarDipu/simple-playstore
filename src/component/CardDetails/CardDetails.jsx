import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";
import RatingsChart from "../RatingsChart/RatingsChart";
const images = import.meta.glob('../../assets/app-logo/*', { eager: true });


export const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [showCard, setCard] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);


  const { installApp, localItem } = useContext(AppContext);

const numericId = Number(id);  
const fileNumber = String(numericId + 4).padStart(3, "0");


  const match = Object.entries(images).find(([path]) =>
    path.includes(`icon-${fileNumber}`)
  );

  const imageSrc = match?.[1]?.default || null;

useEffect(() => {
  setLoading(true);

  fetch("/appsData.json")
    .then((res) => res.json())
    .then((data) => {
      const item = data.find((each) => each.id == id);

      if (!item) {
        setTimeout(() => navigate("/notfound"), 1000);
        return;
      }

      setCard(item);
      setLoading(false);

const alreadyInstalled = localItem.some(a => a.id === item.id);
  setIsInstalled(alreadyInstalled);

    })
    .catch(() => {
      setTimeout(() => navigate("/notfound"), 1000);
    });
}, [id, navigate]); 



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
    installApp(showCard);
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
            <img src={imageSrc}  />
          ) : (
            <div className="w-full h-40 bg-gray-200 animate-pulse rounded-xl"></div>
          )}

    
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{showCard.title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-blue-600">{showCard.developer}</span>
          </p>

   
          <div className="flex gap-10 mt-5 text-lg">
            <div>
              <p className="font-bold">{showCard.downloads}</p>
              <p className="text-gray-500 text-sm">Downloads</p>
            </div>

            <div>
              <p className="font-bold">{showCard.ratingAvg}</p>
              <p className="text-gray-500 text-sm">Average Rating</p>
            </div>

            <div>
              <p className="font-bold">{showCard.reviews}</p>
              <p className="text-gray-500 text-sm">Total Reviews</p>
            </div>
          </div>


          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-6 px-6 py-2 rounded-lg text-white 
              ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
          >
            {isInstalled ? "Installed" : `Install Now (${showCard.size})`}
          </button>
        </div>
      </div>






<RatingsChart ratings={showCard.ratings} />



      {/* ----- DESCRIPTION ----- */}
     <div className="my-15">
       <h2 className="text-2xl font-medium mb-3">Description</h2>
      <p className="text-gray-700 leading-7">{showCard.description}</p>
     </div>
    </div>
  );
};
