import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import vd from "../assets/video.mp4";

export default function Video() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Simplified background without lighting effects
  const renderSimpleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Minimal subtle pattern */}
      <div
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0V0zm2 2v16h16V2H2z" fill="%23000" fill-opacity=".05"/%3E%3C/svg%3E\')',
          backgroundPosition: "0 0",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </div>
  );

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Simple Background */}
      {renderSimpleBackground()}

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">
            Video CV
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
        </div>

        <div className="video-container relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="video-background w-full h-full object-cover"
          >
            <source src={vd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Audio Controls */}
          <motion.button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-3 rounded-full text-white transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </motion.button>

          {/* Subtle overlay at bottom */}
          <div className="overlay absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
        </div>

        {/* Video Caption */}
        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Click the sound button to toggle audio
          </p>
        </div>
      </div>
    </div>
  );
}