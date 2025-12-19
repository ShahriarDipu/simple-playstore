import React, { use } from 'react'
import { AppContext } from '../../context/AppContext'
import { AppCard } from '../../component/TrendingAppCard/TredingAppCard'
import { Link } from 'react-router'
import { FaArrowTrendUp } from "react-icons/fa6";

export const TrendingData = () => {
   const {showData}=use(AppContext)
 const topData = showData.slice(0,8)
 console.log(topData)
  return (
    <>
    <div className='mt-10'>
      <div className='flex text-2xl md:text-5xl font-bold justify-center'>
            <p >
              Trending Apps  

            </p>
              <FaArrowTrendUp />
          </div>
          <div className='text-center pt-4'>
            <p>Explore All Trending Apps on the Market developed by us</p>
          </div>
    </div>
<div className=' w-15/17 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 my-15 '>
{
    topData.map(topData=>(<AppCard topData={topData}></AppCard>))
}
 
 
 
</div>
<div className="w-11/12 mx-auto flex justify-center mb-10 ">
  <Link to="Apps" className="btn">Show All</Link>
</div>

 </>
  )
}
