"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DataJson from "../../utils/data.json";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredData = DataJson.filter((item) => {
    const fullName = `${item.first_name || ""} ${
      item.last_name || ""
    }`.toLowerCase();
    const email = `${item.email || ""}`.toLowerCase();
    const query = search.toLowerCase();

    return fullName.includes(query) || email.includes(query);
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white min-h-screen overflow-x-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <button
          aria-label="Go back"
          onClick={() => router.back()}
          className="h-10 w-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L4.414 9H18a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md px-4 py-2 border-2 border-black rounded-xl text-black font-mono outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {filteredData.length === 0 ? (
          <div className="col-span-full flex items-center justify-center min-h-[50vh] w-full">
            <p className="text-black font-bold font-mono text-2xl sm:text-4xl text-center">
              Person not found
            </p>
          </div>
        ) : (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full rounded-xl border-2 border-black flex flex-col p-4 sm:p-5 py-6 shadow-md font-mono overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <p className="text-black font-bold text-base sm:text-lg break-words">
                  {item.first_name} {item.last_name}
                </p>

                <div
                  className={`text-xs sm:text-sm font-semibold px-2 py-1 rounded-full w-fit ${
                    item.type === "teacher"
                      ? "bg-green-300 text-gray-700"
                      : "bg-blue-300 text-gray-700"
                  }`}
                >
                  {item.type}
                </div>
              </div>

              <div className="mt-2 space-y-2">
                {item.img && (
                  <Image
                    src={item.img}
                    alt={`${item.first_name} ${item.last_name}`}
                    width={300}
                    height={128}
                    className="w-full h-40 sm:h-32 object-cover rounded-lg mt-2"
                  />
                )}

                <p className="text-black font-bold text-sm break-words">
                  Email: <span className="font-normal">{item.email}</span>
                </p>

                <p className="text-black font-bold text-sm">
                  Age: <span className="font-normal">{item.age}</span>
                </p>

                <p className="text-black font-bold text-sm">
                  Country: <span className="font-normal">{item.country}</span>
                </p>

                <p className="text-black font-bold text-sm">
                  Points: <span className="font-normal">{item.point}</span>
                </p>

                <p className="text-black font-bold text-sm break-words">
                  Created:{" "}
                  <span className="font-normal">{item.created_at}</span>
                </p>

                <div className="flex flex-col sm:flex-row w-full p-0 sm:p-5 gap-3 sm:gap-4">
                  {item.item1 && (
                    <Image
                      src={item.item1}
                      alt="item 1"
                      width={144}
                      height={80}
                      className="w-full sm:w-36 h-24 sm:h-20 object-cover rounded-xl mt-2"
                    />
                  )}

                  {item.item2 && (
                    <Image
                      src={item.item2}
                      alt="item 2"
                      width={144}
                      height={80}
                      className="w-full sm:w-20 h-24 sm:h-20 object-cover rounded-lg mt-2"
                    />
                  )}
                </div>
              </div>

              <button className="text-white font-mono h-10 w-full sm:w-25 bg-red-600 border rounded-xl mt-5 hover:bg-red-700">
                Check
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}