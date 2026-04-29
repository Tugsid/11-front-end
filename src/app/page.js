import Link from "next/link"

export default function HomePage() {

  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div className="aspect-1/1 h-[67%] flex justify-evenly items-center flex-col">
        <img src="/favicon.ico" alt="logo" className="aspect-1/1 h-96"/>
        <div className="h-24 w-full flex itmes-center justify-evenly p-5">
          <a href="/Aimag">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]" >Aimag</button>
          </a>
          <a href="/contact">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Contact</button>
          </a>
          <a href="/content">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Content</button>
          </a>
          <a href="/json">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Suragch</button>
          </a>
          <a href="/test">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Test</button>
          </a>
          <a href="weather">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Weather</button>
          </a>
        </div>
      </div>
    </div>
  );
}
