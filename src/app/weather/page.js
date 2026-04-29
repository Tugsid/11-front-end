"use client";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faCloudSunRain,
  faBarChart,
  faMap,
  faBarsStaggered,
  faTemperature2,
  faDroplet,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex items-center m-4 gap-4 w-full h-screen bg-[#151f34]">
      
      {/* Sidebar */}
      <div className="w-[7%] h-[96%] bg-[#1b2d58] rounded-3xl m-4 flex flex-col items-center">
        
        <div className="w-[55%] aspect-square bg-[#173f7f] rounded-2xl m-8 flex justify-center items-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5024/5024369.png"
            alt="logo"
            className="w-[50px]"
          />
        </div>

        <div className="mt-10 flex flex-col items-center text-[#a1cbfa]">
          <FontAwesomeIcon icon={faCloudSunRain} className="text-2xl" />
          <p className="font-bold">Weather</p>
        </div>

        <div className="mt-6 flex flex-col items-center text-[#6386c8]">
          <FontAwesomeIcon icon={faBarChart} />
          <p>Cities</p>
        </div>

        <div className="mt-6 flex flex-col items-center text-[#6386c8]">
          <FontAwesomeIcon icon={faMap} />
          <p>Map</p>
        </div>

        <div className="mt-6 flex flex-col items-center text-[#6386c8]">
          <FontAwesomeIcon icon={faBarsStaggered} />
          <p>Settings</p>
        </div>
      </div>

      {/* Main */}
      <div className="w-[93%] h-full flex gap-4">

        {/* Left */}
        <div className="w-[60%] flex flex-col gap-4">

          <input
            placeholder="Search for cities"
            className="w-full p-3 rounded-xl bg-[#1b2d58] text-white"
          />

          {/* Current */}
          <div className="flex bg-[#1b2d58] rounded-2xl p-6">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-white">Madrid</h1>
              <p className="text-[#a1cbfa]">Chance of rain: 0%</p>
              <h1 className="text-6xl font-bold text-white mt-4">31°</h1>
            </div>

            <div className="w-1/2 flex justify-center items-center">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/831/831682.png"
                alt="sunny"
                className="w-[200px]"
              />
            </div>
          </div>

          {/* Forecast */}
          <div className="bg-[#1b2d58] rounded-2xl p-6">
            <h2 className="text-[#a1cbfa] font-bold mb-4">
              TODAY&apos;S FORECAST
            </h2>

            <div className="flex justify-between">
              {[
                ["6 AM", "25°"],
                ["9 AM", "28°"],
                ["12 PM", "33°"],
                ["3 PM", "34°"],
                ["6 PM", "32°"],
                ["9 PM", "30°"],
              ].map((item, i) => (
                <div key={i} className="text-center text-white">
                  <p>{item[0]}</p>
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/831/831682.png"
                    alt="weather"
                    className="w-[50px] mx-auto"
                  />
                  <p className="font-bold">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Air */}
          <div className="bg-[#1b2d58] rounded-2xl p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-[#a1cbfa] font-bold">AIR CONDITIONS</h2>
              <Link href="/content">
                <button className="bg-blue-500 px-3 py-1 rounded-lg">
                  More
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 text-white">
              <div>
                <FontAwesomeIcon icon={faTemperature2} />
                <p>Real feel: 30°</p>
              </div>

              <div>
                <FontAwesomeIcon icon={faDroplet} />
                <p>Rain: 0%</p>
              </div>

              <div>
                <FontAwesomeIcon icon={faWind} />
                <p>Wind: 0.2 km/h</p>
              </div>

              <div>
                <FontAwesomeIcon icon={faSun} />
                <p>UV: 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-[40%] bg-[#1b2d58] rounded-3xl p-6 text-white">
          <h2 className="text-[#a1cbfa] font-bold">7-DAY FORECAST</h2>
        </div>
      </div>
    </div>
  );
}