import React from 'react'
import { Link } from 'react-router'
const images = import.meta.glob('../../assets/app-logo/*', { eager: true });

export const AppCard = ({topData}) => {
    const {title,image,description,ratingAvg,size,id}=topData

     const fileNumber = String(id + 4).padStart(3, "0");

  const match = Object.entries(images).find(([path]) =>
    path.includes(`icon-${fileNumber}`)
  );

  const imageSrc = match?.[1]?.default || null;


  return (
   <Link to="Apps">
       <div className="card w-72 bg-white shadow-md rounded-xl overflow-hidden cursor-pointer transition hover:shadow-lg">
  <figure className="h-52 w-full bg-gray-50 flex items-center justify-center">
    {imageSrc ? (
      <img
        src={imageSrc}
        alt={title}
        className="h-full w-full object-cover"
      />
    ) : (
      <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl"></div>
    )}
  </figure>

  <div className="p-4">
    <h2 className="text-md font-semibold leading-tight">{title}</h2>

    <div className="flex justify-between items-center mt-3 text-sm">
      <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7l4 4L20 3"
          />
        </svg>
        {size}
      </span>

      <span className="flex items-center gap-1 text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
        ⭐ {ratingAvg}
      </span>
    </div>
  </div>
</div>
   </Link>
  )
}
