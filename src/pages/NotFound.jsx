import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden relative">
      {/* Floating animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 rounded-full bg-white/10 backdrop-blur-md"
            style={{
              left: `${(i * 137) % 100}%`,
              top: `-10%`,
              animation: `floatUp ${10 + i * 1.5}s linear ${i * 1.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-6">
        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold tracking-widest animate-bounce">
          404
        </h1>

        <p className="text-xl md:text-2xl mt-4 font-semibold">
          Oops! Page not found 👀
        </p>

        <p className="mt-2 text-sm md:text-base text-white/80">
          The page you are looking for might have been removed or never existed.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link
            to="/tasks"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg rounded-2xl shadow-lg bg-white text-indigo-600 font-bold hover:scale-105 transition-transform duration-300"
          >
            <Home size={20} />
            Go Home
          </Link>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 w-full h-32 bg-white/10 backdrop-blur-lg" />

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.7; }
          100% { transform: translateY(110vh); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
