import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row gap-6 lg:gap-0 bg-gradient-triple overflow-x-hidden">
      <Link href="/">
        <button className="font-bold fixed top-5 left-5 w-14 h-14 rounded-full bg-[#775fa0] hover:bg-[#8c70b5] transition-all duration-300 shadow-xl flex justify-center items-center text-2xl">
          ←
        </button>
      </Link>
      <div className="w-full lg:w-[45%] flex flex-col px-6 sm:px-10 lg:ml-[5%] lg:px-0 pt-20 pb-4 lg:py-0 lg:justify-center">
        <div className="text-4xl sm:text-5xl lg:text-[50px] font-mono font-bold">
          Wed Love to Hear From You
        </div>

        <div className="text-lg sm:text-2xl lg:text-[27px] font-mono mt-4">
          Whether its feedback, ideas, or just a hello were here
        </div>

        <div className="w-full mt-10 space-y-6">
          <div className="w-full flex items-center">
            <div className="h-14 sm:h-16 lg:h-[64px] aspect-square rounded-4xl bg-gradient-to-b from-[#d6b7f4] to-[#5509a3] flex items-center justify-center shrink-0">
              <div className="w-1/2 h-1/2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-full h-full text-white"
                />
              </div>
            </div>
            <div className="ml-4 text-sm sm:text-xl lg:text-[23px] font-mono break-all">
              tugsuu061109@gmail.com
            </div>
          </div>

          <div className="w-full flex items-center">
            <div className="h-14 sm:h-16 lg:h-[64px] aspect-square rounded-4xl bg-gradient-to-b from-[#d6b7f4] to-[#5509a3] flex items-center justify-center shrink-0">
              <div className="w-1/2 h-1/2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-full h-full text-white"
                />
              </div>
            </div>
            <div className="ml-4 text-sm sm:text-xl lg:text-[23px] font-mono">
              (+976) 95010367
            </div>
          </div>

          <div className="w-full flex items-center">
            <div className="h-14 sm:h-16 lg:h-[64px] aspect-square rounded-4xl bg-gradient-to-b from-[#d6b7f4] to-[#5509a3] flex items-center justify-center shrink-0">
              <div className="w-1/2 h-1/2">
                <FontAwesomeIcon
                  icon={faLocation}
                  className="w-full h-full text-white"
                />
              </div>
            </div>
            <div className="ml-4 text-sm sm:text-xl lg:text-[23px] font-mono">
              Nest Education School, Sukhbaatar District
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] flex justify-center items-center px-6 sm:px-10 lg:px-0 pb-10 lg:pb-0 lg:h-screen">
        <div className="w-full max-w-xl lg:max-w-none lg:w-[85%] min-h-[650px] lg:h-[95%] relative rounded-3xl border-2 border-gray-400 overflow-hidden">
          <div className="absolute inset-0 bg-gray-700 opacity-50"></div>

          <div className="relative w-full flex flex-col justify-center items-start p-6 sm:p-10 pt-10 lg:pt-20">
            <div className="font-mono font-bold text-xl sm:text-2xl">Name</div>
            <input
              type="text"
              className="w-full p-4 sm:p-7 rounded-xl border border-gray-300 bg-black/40 text-white placeholder-white mt-3"
            />
          </div>

          <div className="relative w-full flex flex-col justify-center items-start p-6 sm:p-10">
            <div className="font-mono font-bold text-xl sm:text-2xl">
              Email
            </div>
            <input
              type="text"
              className="w-full p-4 sm:p-7 rounded-xl border border-gray-300 bg-black/40 text-white placeholder-white mt-3"
            />
          </div>

          <div className="relative w-full flex flex-col justify-center items-start p-6 sm:p-10">
            <div className="font-mono font-bold text-xl sm:text-2xl">
              Message
            </div>
            <textarea
              className="w-full h-36 sm:h-44 rounded-xl border border-gray-300 bg-black/30 text-white placeholder-white mt-3 p-4 resize-none"
            />
          </div>

          <div className="relative px-6 sm:px-10 mt-6 lg:mt-10 pb-8">
            <button
              type="submit"
              className="w-full p-4 sm:p-7 rounded-xl bg-[#dbff02] text-black font-bold hover:bg-[#bede07] transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}