import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resumePdf from "../assets/resume.pdf";
import profileImage from "../assets/my_image.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Building digital experiences",
    "Solving complex problems",
    "Creating innovative solutions",
    "Turning ideas into reality",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Add this effect for text rotation
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  const scrollIndicatorVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white  -mt-8" // Changed pt-16 to pt-8
    >
      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {/* <motion.div
            className="inline-block bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            variants={fadeIn}
          >
            <span className="text-sm font-medium">Developer & Tech Enthusiast</span>
          </motion.div> */}

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            variants={fadeIn}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">
              Anurag Chauhan
            </span>
          </motion.h1>

          <motion.div className="h-[44px] md:h-[52px]">
            {" "}
            {/* Fixed height container to prevent layout shifts */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTextIndex}
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {texts[currentTextIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg max-w-lg mb-8"
            variants={fadeIn}
          >
            A passionate developer specializing in problem solving and creating
            innovative solutions. I love to explore new technologies and push
            the boundaries of what's possible in the digital world.
          </motion.p>

          <motion.div
            className="flex space-x-4 mb-10"
            variants={staggerChildren}
          >
            <div className="flex space-x-2">
              <motion.a
                href={resumePdf}
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-l-full font-medium text-white flex items-center"
                variants={buttonVariants}
                whileHover="hover"
                target="_blank"
                rel="noopener noreferrer"
                whileTap="tap"
              >
                View Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </motion.a>

              <motion.a
                href={resumePdf}
                className="px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-r-full font-medium text-white flex items-center justify-center"
                variants={buttonVariants}
                whileHover="hover"
                download="Anurag_Chauhan_Resume.pdf"
                whileTap="tap"
                aria-label="Download Resume"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </motion.a>
            </div>

            <motion.a
              href="#Contact"
              className="px-6 py-3 border border-teal-500 rounded-full font-medium text-gray-800 dark:text-white"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div className="flex space-x-4" variants={staggerChildren}>
            {/* GitHub */}
            <motion.a
              href="https://github.com/Anurag123Chauhan"
              className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400"
              variants={iconVariants}
              whileHover="hover"
            >
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/anurag--chauhan"
              className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400"
              variants={iconVariants}
              whileHover="hover"
            >
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>

            {/* Twitter/X
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400"
              variants={iconVariants}
              whileHover="hover"
            >
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </motion.a> */}
            {/* LeetCode */}
            <motion.a
              href="https://leetcode.com/u/Anurag___Chauhan/" // Change to your LeetCode profile
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.102 17.93L14.205 16.65C13.6797 16.2964 13.5365 15.5972 13.89 15.072C14.2434 14.5468 14.9426 14.4036 15.4677 14.757L17.3648 16.037C17.6316 16.217 17.9948 16.217 18.2616 16.037L22.2845 13.338C22.4085 13.2558 22.5 13.1311 22.5 12.995V7.6058C22.5 7.4697 22.4085 7.345 22.2845 7.2628L18.2616 4.5645C17.9948 4.3846 17.6316 4.3846 17.3648 4.5645L13.342 7.2628C13.218 7.345 13.1264 7.4697 13.1264 7.6058V17.3942C13.1264 17.5303 13.218 17.655 13.342 17.7372L17.3648 20.4355C17.6316 20.6154 17.9948 20.6154 18.2616 20.4355L22.2845 17.7372C22.4085 17.655 22.5 17.5303 22.5 17.3942V15.6058C22.5 15.1164 22.103 14.7194 21.6136 14.7194C21.1242 14.7194 20.7272 15.1164 20.7272 15.6058V16.7782L18.25 18.468V12.995C18.25 12.8589 18.1584 12.7342 18.0344 12.652L16.102 11.3979C15.5881 11.0502 14.9031 11.1776 14.5555 11.6915C14.2078 12.2054 14.3352 12.8904 14.8491 13.238L16.7817 14.4921C16.9057 14.5743 16.9972 14.699 16.9972 14.8351V17.5923C16.9972 17.7283 16.9057 17.853 16.7817 17.9352L16.102 17.93Z"
                  fill="currentColor"
                />
                <path
                  d="M7.65109 17.9352L3.62827 15.2369C3.50425 15.1547 3.4127 15.03 3.4127 14.8939V9.5047C3.4127 9.36863 3.50425 9.24392 3.62827 9.16172L7.65109 6.46336C7.91791 6.28352 8.28112 6.28352 8.54794 6.46336L12.5708 9.16172C12.6948 9.24392 12.7863 9.36863 12.7863 9.5047V14.8939C12.7863 15.03 12.6948 15.1547 12.5708 15.2369L8.54794 17.9352C8.28112 18.115 7.91791 18.115 7.65109 17.9352ZM9.02369 8.25106L6.7901 9.67773C6.75008 9.70386 6.7266 9.74594 6.7266 9.79158V12.6533C6.7266 12.699 6.75008 12.7411 6.7901 12.7672L9.02369 14.1939C9.06372 14.22 9.11531 14.22 9.15534 14.1939L11.389 12.7672C11.429 12.7411 11.4524 12.699 11.4524 12.6533V9.79158C11.4524 9.74594 11.429 9.70386 11.389 9.67773L9.15534 8.25106C9.11531 8.22493 9.06372 8.22493 9.02369 8.25106Z"
                  fill="currentColor"
                />
                <path
                  d="M1.88499 7.2628C1.70515 7.16969 1.5 7.30531 1.5 7.5046V17.3942C1.5 17.5303 1.59155 17.655 1.71557 17.7372L5.73839 20.4355C6.00521 20.6154 6.36842 20.6154 6.63524 20.4355L10.658 17.7372C10.7821 17.655 10.8736 17.5303 10.8736 17.3942V7.6058C10.8736 7.4697 10.7821 7.345 10.658 7.2628L6.63524 4.5645C6.36842 4.3846 6.00521 4.3846 5.73839 4.5645L1.88499 7.2628Z"
                  fill="currentColor"
                />
              </svg>
            </motion.a>

            {/* Codeforces */}
            <motion.a
              href="https://codeforces.com/profile/compiall101" // Change to your Codeforces profile
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400"
              variants={iconVariants}
              whileHover="hover"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 7.5C5.88071 7.5 7 6.38071 7 5C7 3.61929 5.88071 2.5 4.5 2.5C3.11929 2.5 2 3.61929 2 5C2 6.38071 3.11929 7.5 4.5 7.5Z"
                  fill="currentColor"
                />
                <path
                  d="M4.5 15.5C5.88071 15.5 7 14.3807 7 13C7 11.6193 5.88071 10.5 4.5 10.5C3.11929 10.5 2 11.6193 2 13C2 14.3807 3.11929 15.5 4.5 15.5Z"
                  fill="currentColor"
                />
                <path
                  d="M12.5 21.5C13.8807 21.5 15 20.3807 15 19C15 17.6193 13.8807 16.5 12.5 16.5C11.1193 16.5 10 17.6193 10 19C10 20.3807 11.1193 21.5 12.5 21.5Z"
                  fill="currentColor"
                />
                <path
                  d="M20.5 7.5C21.8807 7.5 23 6.38071 23 5C23 3.61929 21.8807 2.5 20.5 2.5C19.1193 2.5 18 3.61929 18 5C18 6.38071 19.1193 7.5 20.5 7.5Z"
                  fill="currentColor"
                />
              </svg>
            </motion.a>
            {/* Code */}
            <motion.a
              href="https://codolio.com/profile/5idR56CN"
              className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400"
              variants={iconVariants}
              whileHover="hover"
            >
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
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, delay: 0.3 },
          }}
        >
          <div className="relative">
            {/* Available for hire badge */}
            <motion.div
              className="absolute top-4 left-0 z-10 bg-white/20 dark:bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 flex items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Available for hire</span>
            </motion.div>

            {/* Profile Image */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-teal-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-teal-600 to-teal-700">
                {/* Replace with your image */}
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.5 },
        }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Scroll Down
        </span>
        <motion.div
          className="w-8 h-12 border-2 border-teal-400 dark:border-teal-600 rounded-full flex justify-center pt-2"
          variants={scrollIndicatorVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="w-1.5 h-3 bg-teal-400 dark:bg-teal-600 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
