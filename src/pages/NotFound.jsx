import React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        {/* Floating animated circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 rounded-full bg-white/10 backdrop-blur-md"
              initial={{ y: -100, x: Math.random() * window.innerWidth }}
              animate={{ y: "110vh" }}
              transition={{ duration: 10 + i, repeat: Infinity }}
            />
          ))}
        </div>

        <div className="text-center z-10 px-6">
          {/* 404 Text Animation */}
          <motion.h1
            className="text-8xl md:text-9xl font-extrabold tracking-widest"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            404
          </motion.h1>

          {/* Glitch Effect */}
          <motion.p
            className="text-xl md:text-2xl mt-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Oops! Page not found 👀
          </motion.p>

          {/* Subtext */}
          <motion.p
            className="mt-2 text-sm md:text-base text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The page you are looking for might have been removed or never
            existed.
          </motion.p>

          {/* Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button className="flex items-center gap-2 px-6 py-3 text-lg rounded-2xl shadow-lg hover:scale-105 transition">
              <Home size={20} />
              Go Home
            </Button>
          </motion.div>
        </div>

        {/* Bottom wave animation */}
        <motion.div
          className="absolute bottom-0 w-full h-32 bg-white/10 backdrop-blur-lg"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
    </>
  );
};

export default NotFound;
