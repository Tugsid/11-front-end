import Link from "next/link"
import Image from "next/image";

export default function HomePage() {

  return (
  <div className="min-h-screen bg-white flex justify-center items-center px-4 py-8">
    <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl p-4 font-bold font-pacific text-[#775fa0] text-center">
        Front End
      </h1>

      <Image
        src="/favicon.ico"
        alt="logo"
        width={200}
        height={200}
        className="w-40 sm:w-56 md:w-72 lg:w-96 h-auto"
      />

      <div className="w-full flex flex-wrap items-center justify-center gap-4 p-4">
        {[
          ["Aimag", "/Aimag"],
          ["Contact", "/contact"],
          ["Content", "/content"],
          ["Suragch", "/json"],
          ["Test", "/test"],
          ["Weather", "/weather"],
        ].map(([name, href]) => (
          <Link key={name} href={href}>
            <button className="border-2 border-solid px-5 py-3 font-bold rounded-2xl font-pacific text-[#775fa0] hover:bg-[#775fa0] hover:text-white transition">
              {name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
}
