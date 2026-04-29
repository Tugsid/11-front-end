"use client";

import Image from "next/image";
import { useState } from "react";

const heroBg =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2340";

const carouselImage1 =
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800";

const carouselImage2 =
  "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=800";

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">PIXLS</div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="hover:text-green-400 transition-colors">
              Home
            </a>
            <button className="hover:text-green-400 transition-colors">
              Get started ▼
            </button>
            <a href="#" className="hover:text-green-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Forum
            </a>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="search"
              placeholder="Try Lotus GT 430"
              className="w-64 bg-gray-900 border border-gray-700 rounded-full py-2 px-5 text-sm focus:outline-none focus:border-green-500"
            />

            <button
              onClick={() => setShowLogin(true)}
              className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            LARGEST IMAGE SOURCE
          </h1>

          <p className="text-3xl md:text-5xl font-extrabold mb-10">
            POWERED BY{" "}
            <span className="text-green-400">CREATORS AROUND</span>
            <br />
            THE WORLD.
          </p>

          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Over 3 million free high-resolution images brought to you by the
            world&apos;s most generous community of photographers.
          </p>

          <a href="#" className="text-green-400 hover:text-green-300 text-xl">
            Create account →
          </a>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-6 overflow-x-auto pb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0 w-80 md:w-96">
                <Image
                  src={i % 2 === 0 ? carouselImage1 : carouselImage2}
                  alt="Classic car"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-xl shadow-2xl"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="text-3xl text-gray-500 hover:text-white">
              ←
            </button>
            <span className="text-lg text-gray-400">01/05</span>
            <button className="text-3xl text-gray-500 hover:text-white">
              →
            </button>
          </div>
        </div>
      </section>

      {showLogin && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <Image
                src={heroBg}
                alt="Car background"
                fill
                className="object-cover brightness-50"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

              <div className="relative z-10 p-8 text-center">
                <h2 className="text-3xl font-bold">LOTUS GT 430</h2>
                <p className="text-green-400 mt-1">Best cars</p>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Login to your account
              </h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    defaultValue="Tugs-Erdene"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-green-500"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="accent-green-500" />
                    <span>Remember me</span>
                  </label>

                  <a href="#" className="text-green-400 hover:underline">
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white font-medium py-3.5 rounded-lg hover:bg-gray-900 uppercase tracking-wider"
                >
                  Login
                </button>
              </form>

              <p className="text-center text-sm text-gray-400 mt-6">
                Don&apos;t have an account?{" "}
                <a href="#" className="text-green-400 hover:underline">
                  Create account
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}