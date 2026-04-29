import Link from "next/link"
import Image from "next/image";

export default function HomePage() {

  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div className="aspect-1/1 h-[67%] flex justify-evenly items-center flex-col">
        <Image src="/favicon.ico" alt="logo" className="aspect-1/1 h-96"/>
        <div className="h-24 w-full flex itmes-center justify-evenly p-5">
          <Link href="/Aimag">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]" >Aimag</button>
          </Link>
          <Link href="/contact">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Contact</button>
          </Link>
          <Link href="/content">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Content</button>
          </Link>
          <Link href="/json">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Suragch</button>
          </Link>
          <Link href="/test">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Test</button>
          </Link>
          <Link href="weather">
            <button className="border-2 border-solid p-4 font-bold rounded-2xl font-pacific text-[#775fa0]">Weather</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
