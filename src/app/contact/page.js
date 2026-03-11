import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocation, faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="h-screen w-screen flex bg-gradient-triple">
      <div className="w-[45%] h-full flex flex-col ml-[5%]">
        <div className="text-[50px] font-mono font-bold mt-15">
          We'd Love to Hear From You
        </div>

        <div className="text-[27px] font-mono">
          Whether it's feedback, ideas, or just a hello we're here
        </div>

        <div className="w-full h-60 mt-[5%]">
          <div className="w-full h-20 flex items-center">
            <div className="h-[80%] aspect-square rounded-4xl bg-gradient-to-b from-[#d6b7f4] to-[#5509a3] flex items-center justify-center">
              <div className="w-1/2 h-1/2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-full h-full text-white"
                />
              </div>
            </div>
            <div className="ml-[2%] text-[23px] font-mono ">tugsuu061109@gmail.com</div>
          </div>
          <div className="w-full h-20 flex items-center">
            <div className="h-[80%] aspect-square rounded-4xl bg-gradient-to-b from-[#d6b7f4] to-[#5509a3] flex items-center justify-center">
              <div className="w-1/2 h-1/2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-full h-full text-white"
                />
              </div>
            </div>
            <div className="ml-[2%] text-[23px] font-mono ">(+976) 95010367</div>
          </div>
          <div className="w-full h-20 flex items-center">
            <div className="h-[80%] aspect-square rounded-4xl bg-gradient-to-b from-[#d6b7f4] to-[#5509a3] flex items-center justify-center">
              <div className="w-1/2 h-1/2">
                <FontAwesomeIcon
                  icon={faLocation}
                  className="w-full h-full text-white"
                />
              </div>
            </div>
            <div className="ml-[2%] text-[23px] font-mono ">Nest Education School, Sukhbaatar District</div>
          </div>
        </div>
      </div>
      <div className="h-screen w-[50%] flex justify-center items-center">
        <div className="w-[85%] h-[95%] relative rounded-3xl border-2 border-gray-400 overflow-hidden">
          {/* semi-transparent background only */}
          <div className="absolute inset-0 bg-gray-700 opacity-50"></div>

          {/* content */}
          <div className="relative w-full h-[20%] flex flex-col justify-center items-start p-10 pt-20">
            <div className="font-mono font-bold text-2xl">Name</div>
            <div className="relative w-full h-full flex justify-center items-start">
              <input
                type="text"
                className="w-full p-7 rounded-xl border border-gray-300 bg-black/40 text-white placeholder-white mt-3"
              />
            </div>
          </div>

          <div className="relative w-full h-[20%] flex flex-col justify-center items-start p-10">
            <div className="font-mono font-bold text-2xl">Email</div>
            <div className="relative w-full h-full flex justify-center items-start">
              <input
                type="text"
                className="w-full p-7 rounded-xl border border-gray-300 bg-black/40 text-white placeholder-white mt-3"
              />
            </div>
          </div>

          <div className="relative w-full h-[20%] flex flex-col justify-center items-start p-10">
            <div className="font-mono font-bold text-2xl">Message</div>
            <div className="relative w-full h-full flex justify-center items-start">
              <input
                type="text"
                className="w-full p-30 bg-black/30 text-white placeholder-white mt-3"
              />
            </div>
          </div>

          {/* Send message button */}
          <div className="relative px-10 mt-45">
            <button
              type="submit"
              className="w-full p-7 rounded-xl bg-[#dbff02] text-black font-bold hover:bg-[#bede07] transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}