"use client";

import Link from "next/link";
import { useState } from "react";
import DataJson from "../../utils/aimag.json";

export default function HomePage() {
  const [click, setClick] = useState(null);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {DataJson.map((item) => (
          <button
            onClick={() => setClick(click === item.id ? null : item.id)}
            key={item.id}
            className={`
              w-full aspect-square rounded-xl flex justify-center items-center flex-col
              p-3 sm:p-4 shadow-md transition-all duration-300
              hover:bg-blue-600
              ${
                click === item.id
                  ? "bg-red-700"
                  : "bg-blue-500"
              }
            `}
          >
            <p
              className={`
                font-bold font-pacific text-xs sm:text-sm md:text-base text-center
                ${
                  click === item.id
                    ? "text-green-400"
                    : "text-white"
                }
              `}
            >
              Аймаг:
            </p>

            <p
              className={`
                mt-2 font-normal font-pacific text-xs sm:text-sm md:text-base text-center
                ${
                  click === item.id
                    ? "text-blue-300"
                    : "text-white"
                }
              `}
            >
              {item.Aimag}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}