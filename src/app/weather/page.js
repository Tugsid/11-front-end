'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faBook, faUser, faWind, faCloudSunRain, faBarChart, faMap, faBarsStaggered, faTemperature2, faDroplet, faSun} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function LandingPage() {

  return (
   <div className='flex items-center m-4 gap-4 w-full h-screen bg-[#151f34]'>
    <div className='w-[7%] h-[96%] bg-[#1b2d58] rounded-3xl m-4 flex flex-col justify-start items-center'>
        <div className='w-[55%] aspect-1/1 bg-[#173f7f] rounded-2xl m-8 flex justify-center items-center'>
            <img src='https://cdn-icons-png.flaticon.com/512/5024/5024369.png' className='w-[50px] '/>
        </div>
        <div className='w-[60%] aspect-1/1 rounded-3xl mt-12 mb-6 flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faCloudSunRain} className="text-2xl text-[#a1cbfa]" />
            <div className='m-2 font-bold text-xl text-[#a1cbfa]'>Weather</div>
        </div>
        <div className='w-[50%] aspect-1/1 rounded-3xl flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faBarChart} className="text-2xl text-[#6386c8]" />
            <div className='m-2 text-xl text-[#6386c8]'>Cities</div>
        </div>
        <div className='w-[50%] aspect-1/1 rounded-3xl m-6 flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faMap} className="text-2xl text-[#6386c8]" />
            <div className='m-2 text-xl text-[#6386c8]'>Map</div>
        </div>
        <div className='w-[50%] aspect-1/1 rounded-3xl flex flex-col justify-center items-center'>
            <FontAwesomeIcon icon={faBarsStaggered} className="text-2xl text-[#6386c8]" />
            <div className='m-2 text-xl text-[#6386c8]'>Settings</div>
        </div>
        
        
    </div>
    <div className='w-[93%] h-dvh flex items-end gap-4'>
        <div className='w-[60%] h-[98%] rounded-3xl gap-4'>
            <input 
                placeholder='Search for cities'
                type="text" 
                className='w-full h-[5%] rounded-xl bg-[#1b2d58] placeholder-[#a1cbfa] p-3'
            />

            <div className='w-full h-[35%] flex'>
                <div className='w-1/2 h-full p-10 flex flex-col'>
                    <h1 className='text-[40px] font-bold'>Madrid</h1>
                    <h1>Chance of rain: 0%</h1>
                    <h1 className='text-[70px] font-bold mt-15'>31°</h1>
                </div>
                <div className='w-1/2 h-full flex justify-center items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/831/831682.png' className='aspect-1/1 w-[250px]'/>
                </div>
            </div>

            <div className='w-full h-[29.5%] bg-[#1b2d58] rounded-2xl px-8 py-6'>
                <h1 className='font-bold font-inter text-[#a1cbfa]'>TODAY'S FORECAST</h1>
                <div className='h-[90%] mx-4 py-6 px-6 flex gap-2 mt-2'>
                    <div className='w-[17%] h-full flex flex-col gap-4 items-center justify-center'>
                        <h1 className='font-bold'>6:00 AM</h1>
                        <img src='https://cdn-icons-png.flaticon.com/512/252/252035.png' className='aspect-1/1 w-[70px]'/>
                        <h1 className='text-[30px] font-bold'>25°</h1>
                    </div>
                    <div className="w-px bg-gray-300 mx-2"></div>
                    <div className='w-[17%] h-full flex flex-col gap-4 items-center justify-center'>
                        <h1 className='font-bold'>9:00 AM</h1>
                        <img src='https://clipart-library.com/2024/weather-symbols-sun-with-clouds/weather-symbols-sun-with-clouds-0.png' className='aspect-1/1 w-[70px]'/>
                        <h1 className='text-[30px] font-bold'>28°</h1>
                    </div>
                    <div className="w-px bg-gray-300 mx-2"></div>
                    <div className='w-[17%] h-full flex flex-col gap-4 items-center justify-center'>
                        <h1 className='font-bold'>12:00 PM</h1>
                        <img src='https://cdn-icons-png.flaticon.com/512/831/831682.png' className='aspect-1/1 w-[70px]'/>
                        <h1 className='text-[30px] font-bold'>33°</h1>
                    </div>
                    <div className="w-px bg-gray-300 mx-2"></div>
                    <div className='w-[17%] h-full flex flex-col gap-4 items-center justify-center'>
                        <h1 className='font-bold'>3:00 PM</h1>
                        <img src='https://cdn-icons-png.flaticon.com/512/831/831682.png' className='aspect-1/1 w-[70px]'/>
                        <h1 className='text-[30px] font-bold'>34°</h1>
                    </div>
                    <div className="w-px bg-gray-300 mx-2"></div>
                    <div className='w-[17%] h-full flex flex-col gap-4 items-center justify-center'>
                        <h1 className='font-bold'>6:00 PM</h1>
                        <img src='https://cdn-icons-png.flaticon.com/512/831/831682.png' className='aspect-1/1 w-[70px]'/>
                        <h1 className='text-[30px] font-bold'>32°</h1>
                    </div>
                    <div className="w-px bg-gray-300 mx-2"></div>
                    <div className='w-[17%] h-full flex flex-col gap-4 items-center justify-center'>
                        <h1 className='font-bold'>9:00 PM</h1>
                        <img src='https://clipart-library.com/2024/weather-symbols-sun-with-clouds/weather-symbols-sun-with-clouds-0.png' className='aspect-1/1 w-[70px]'/>
                        <h1 className='text-[30px] font-bold'>30°</h1>
                    </div>
                </div>
            </div>

            <div className='w-full h-[25%] my-9 bg-[#1b2d58] rounded-3xl'>
                <div className='w-full h-[20%] p-10 flex items-center gap-150'>
                    <h1 className='font-bold font-inter text-[#a1cbfa]'>AIR CONDITIONS</h1>
                    <Link href="./content" ><button className='h-8 w-24 bg-blue-500 rounded-2xl hover:bg-blue-900 cursor-pointer'>See more</button></Link>
                </div>
                <div className='w-full h-[80%] flex p-4 mt-[-30px]'>
                    <div className='w-1/2 h-[80%]'>
                        <div className='w-full h-1/2 p-4 flex mb-5'>
                            <FontAwesomeIcon icon={faTemperature2} className="text-xl text-[#a1cbfa]" />
                            <div className='h-16 aspect-1/1'>
                                <h1 className='font-inter text-[#a1cbfa]'>Real feel</h1>
                                <h1 className='text-[35px] font-bold'>30°</h1>
                            </div>
                        </div>
                        <div className='w-full h-1/2 p-4 flex'>
                            <FontAwesomeIcon icon={faDroplet} className="text-xl text-[#a1cbfa]" />
                            <div className='h-16 w-50'>
                                <h1 className='font-inter text-[#a1cbfa]'>Chance of rain</h1>
                                <h1 className='text-[35px] font-bold'>0%</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-[80%]'>
                        <div className='w-full h-1/2 p-4 flex mb-5'>
                            <FontAwesomeIcon icon={faWind} className="text-xl text-[#a1cbfa]" />
                            <div className='h-16 w-50'>
                                <h1 className='font-inter text-[#a1cbfa]'>Wind</h1>
                                <h1 className='text-[35px] font-bold'>0.2 km/h</h1>
                            </div>
                        </div>
                        <div className='w-full h-1/2 p-4 flex'>
                            <FontAwesomeIcon icon={faSun} className="text-xl text-[#a1cbfa]" />
                            <div className='h-16 w-50'>
                                <h1 className='font-inter text-[#a1cbfa]'>UV Index</h1>
                                <h1 className='text-[35px] font-bold'>3</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#1b2d58] w-[40%] h-[90%] m-4 rounded-3xl p-10'>
            <h1 className='font-bold font-inter text-[#a1cbfa]'>7-DAY FORECAST</h1>
        </div>
    </div>
   </div>
  );
}