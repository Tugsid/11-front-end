"use client";


import Link from "next/link"
import { useState } from "react";

import DataJson from "../../utils/aimag.json"

export default function HomePage() {
  console.log(DataJson);
    const [click, setClick] = useState();
  return (
    <div className=" grid grid-cols-10 gap-4 p-8 bg-white flex justify-center items-center h-screen">
      {DataJson.map((item) =>
        <button onClick={() => setClick(!click)} className={`bg-blue-900 
        w-full aspect-1/1 rounded-xl flex justify-center itmes-center flex-col p-4 py-6 shadow-md 
        hover:bg-blue-600 
        focus:outline-2 focus:outline-offset-1 focus:outline-blue-500 focus:bg-green-900 ${click == true ? "bg-red-700": "bg-blue-500"}`}>
          <p className={`text-black font-bold font-pacific text-sm flex flex-wrap ${click == true ? "text-green-400" : "text-white"}`}>Аймаг: <p className={`ml-3 text-black font-normal font-pacific text-sm ${click == true ? "text-blue-400": "text-white"}`}>{item.Aimag}</p></p>
        </button>      )}
    </div>
  );
}
