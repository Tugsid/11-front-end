"use client";

import { useState } from "react";
import DataJson from "../../utils/data.json";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter((item) => {
    const fullName = `${item.first_name || ""} ${item.last_name || ""}`.toLowerCase();
    const email = `${item.email || ""}`.toLowerCase();
    const query = search.toLowerCase();

    return fullName.includes(query) || email.includes(query);
  });

  return (
    <div className="p-8 bg-white min-h-screen">
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-6 px-4 py-2 border-2 border-black rounded-xl text-black font-mono outline-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {filteredData.map((item, index) => (
          <div
          key={index}
            className="bg-white w-full rounded-xl border-2 border-black flex flex-col p-4 py-6 shadow-md font-mono"
          >
            <div className="flex justify-between items-center">
              <p className="text-black font-bold text-lg">
                {item.first_name} {item.last_name}
              </p>

              <div
                className={`text-sm font-semibold px-2 rounded-full ${
                  item.type === "teacher"
                    ? "bg-green-300 text-gray-700"
                    : "bg-blue-300 text-gray-700"
                }`}
              >
                {item.type}
              </div>
            </div>

            <div className="mt-2 space-y-1">
              <p className="text-black font-bold text-sm">
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
              <p className="text-black font-bold text-sm">
                Created: <span className="font-normal">{item.created_at}</span>
              </p>
            </div>

            <button className="text-white h-10 w-25 bg-red-600 border rounded-xl mt-5 hover:bg-red-700">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}