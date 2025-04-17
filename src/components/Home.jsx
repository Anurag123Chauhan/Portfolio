import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import resumePdf from "../assets/resume.pdf"; 
import profileImage from "../assets/my_image.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

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
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

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
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-16"
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

          <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" variants={fadeIn}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">
              Anurag Chauhan
            </span>
          </motion.h1>

          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeIn}>
            Building digital experiences
          </motion.h2>

          <motion.p className="text-gray-700 dark:text-gray-300 text-lg max-w-lg mb-8" variants={fadeIn}>
            A passionate developer specializing in problem solving and creating innovative solutions. I love to explore new technologies and push the boundaries of what's possible in the digital world.
          </motion.p>

          <motion.div className="flex space-x-4 mb-10" variants={staggerChildren}>
            <motion.a
              href={resumePdf}
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full font-medium text-white"
              variants={buttonVariants}
              whileHover="hover"
              target="_blank"
              whileTap="tap"
            >
              View Resume
            </motion.a>

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
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
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
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
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
  )
}

export default Home