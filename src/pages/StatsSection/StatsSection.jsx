import { HiDownload } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";


export default function StatsSection() {
  return (
    <div
      className="w-full py-20 text-white -mt-28"
      style={{
        background: "linear-gradient(90deg, #5A2FF5, #8A4CF7, #B06AF8)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Trusted by Millions, Built for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 text-center">

         
          <div className="flex items-center gap-5 justify-center  ">
           <div>
             <p className="text-lg opacity-90">Total Downloads</p>
            <h3 className="text-2xl md:text-5xl font-extrabold mt-2">29.6M</h3>
            <p className="mt-2 text-sm opacity-80">
              21% more than last month
            </p>

           </div>
           <div>   <HiDownload size={35} className="mx-auto mt-3" /></div>

          </div>

          <div className="border-l border-r border-white/30 px-4 flex items-center gap-5 justify-center">
          <div >
              <p className="text-lg opacity-90">Total Reviews</p>
            <h3 className="text-2xl md:text-5xl font-extrabold mt-2">906K</h3>
            <p className="mt-2 text-sm opacity-80">
              46% more than last month
            </p>
          </div>
                  <div>
                     <AiFillStar size={35} className="mx-auto mt-3" />
                  </div>
          </div>

          {/* ACTIVE APPS */}
          <div className="flex items-center gap-5 justify-center   ">
            <div>
                <p className="text-lg opacity-90">Active Apps</p>
            <h3 className="text-2xl md:text-5xl font-extrabold mt-2">132+</h3>
            <p className="mt-2 text-sm opacity-80">
              31 more will launch
            </p>
            </div>
              <div>
                 < FaGooglePlay size={35} className="mx-auto mt-3" />
              </div>
          </div>

        </div>

      </div>
    </div>
  );
}
