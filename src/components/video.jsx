import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import vd from "../assets/video.mp4";

export default function Video() {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Format time in MM:SS format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Handle seeking when progress bar is clicked
  const handleSeek = (e) => {
    if (!videoRef.current || !progressRef.current) return;

    const progressRect = progressRef.current.getBoundingClientRect();
    const seekPosition = (e.clientX - progressRect.left) / progressRect.width;

    // Clamp the value between 0 and 1
    const clampedPosition = Math.max(0, Math.min(seekPosition, 1));

    // Set the current time of the video
    videoRef.current.currentTime = clampedPosition * videoRef.current.duration;
    setProgress(clampedPosition * 100);
  };

  // Update progress bar as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set duration once metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    // Update progress as video plays
    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(video.currentTime);
    };

    // Add event listeners
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup event listeners
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

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

        <div
          className="video-container relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="video-background w-full h-full object-cover"
            onClick={togglePlayPause}
          >
            <source src={vd} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Progress Bar */}
          <div
            className={`absolute bottom-0 left-0 right-0 px-4 pb-2 pt-8 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
              isHovering || !isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Current time / Duration */}
              <span className="text-white text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              {/* Seek bar */}
              <div
                className="relative flex-grow h-2 bg-white/30 rounded-full cursor-pointer group"
                ref={progressRef}
                onClick={handleSeek}
              >
                <motion.div
                  className="absolute top-0 left-0 h-full bg-teal-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
                <motion.div
                  className="absolute top-1/2 h-4 w-4 -mt-2 -ml-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `${progress}%` }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>
            </div>
          </div>

          {/* Video Controls Group */}
          <div
            className={`absolute bottom-10 right-4 flex space-x-3 transition-opacity duration-300 ${
              isHovering || !isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlayPause}
              className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-3 rounded-full text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
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
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
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
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </motion.button>

            {/* Mute/Unmute Button */}
            <motion.button
              onClick={toggleMute}
              className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-3 rounded-full text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
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
          </div>

          {/* Center play button that appears when paused */}
          {!isPlaying && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-teal-500/80 rounded-full p-6 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlayPause}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Video Caption */}
        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Click anywhere on the video to play/pause, or use the progress bar
            to seek
          </p>
        </div>
      </div>
    </div>
  );
}