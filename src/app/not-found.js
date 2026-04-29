export default function NotFound() {
    return (
      <div className="h-screen flex justify-start items-center flex-col bg-gradient-to-b from-[#413d8a] to-black p-36 font-mono">
        <h1
          className="text-[250px] font-bold relative bg-clip-text text-transparent"
          style={{
            WebkitTextStroke: "2px transparent",
            backgroundImage:
              "linear-gradient(to bottom, #9f7aea, rgba(159, 122, 234, 0))",
            WebkitBackgroundClip: "text",
          }}
        >
          404
        </h1>

        <div className="w-210 flex flex-col justify-center items-center font-mono">
            <h1 className="text-8xl bg-gradient-to-b from-[#e7eaf0] to-[#b0b3bb] bg-clip-text text-transparent mb-12 w-">
                Page not found
            </h1>
            <h1 className="text-2xl bg-gradient-to-b from-[#e7eaf0] to-[#b0b3bb] bg-clip-text text-transparent text-center">
                It seems the text youre looking for doesnt exist. Lets get you back on track.
            </h1>
        </div>
      </div>
    );
  }
  