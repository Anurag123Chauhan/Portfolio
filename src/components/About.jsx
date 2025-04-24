import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaLaptopCode, FaTools, FaRocket, FaAward } from "react-icons/fa";
import img from "../assets/image2.jpg";
import compi from "../assets/compi.png";
import openSource from "../assets/code gears.jpg";
import nag from "../assets/python.png";
import rect from "../assets/rect.png";
import cp from "../assets/cp.png";
import hack from "../assets/hack.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const timelineRef = useRef(null);
  const throttleTimeout = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Throttled parallax effect for background gradients
    const handleMouseMove = (e) => {
      if (throttleTimeout.current) return;

      throttleTimeout.current = setTimeout(() => {
        const moveX = e.clientX * 0.005;
        const moveY = e.clientY * 0.005;
        document.documentElement.style.setProperty("--mouse-x", `${moveX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${moveY}px`);
        throttleTimeout.current = null;
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (throttleTimeout.current) clearTimeout(throttleTimeout.current);
    };
  }, []);

  // Enhanced animation variants
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

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  // New floating animation
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      y: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  // New pulse animation
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 3,
      ease: "easeInOut",
    },
  };

  // New rotate animation
  const rotateAnimation = {
    rotate: [0, 5, 0, -5, 0],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 6,
      ease: "easeInOut",
    },
  };

  // New wave animation for the timeline
  const waveAnimation = {
    pathLength: [0, 1],
    pathOffset: [0, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
    },
  };

  // New bounce animation
  const bounceAnimation = {
    y: [0, -15, 0],
    transition: {
      y: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  // New shimmer effect for skill tags
  const shimmerAnimation = {
    background: [
      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.3) 50%, rgba(0,0,0,0) 100%)",
      "linear-gradient(90deg, rgba(0,0,0,0) 100%, rgba(255,255,255,0.3) 50%, rgba(0,0,0,0) 0%)",
    ],
    backgroundSize: ["200% 100%", "200% 100%"],
    backgroundPosition: ["100% 0%", "-100% 0%"],
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      duration: 2,
      ease: "linear",
    },
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Enhanced Background effects - optimized to match other sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient blobs */}
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-teal-500/10 to-transparent rounded-bl-full blur-3xl"
          style={{ willChange: "transform" }}
          animate={{
            x: ["var(--mouse-x, 0px)", "calc(var(--mouse-x, 0px) * -1)"],
            y: ["var(--mouse-y, 0px)", "calc(var(--mouse-y, 0px) * -1)"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-teal-500/10 to-transparent rounded-tr-full blur-3xl"
          style={{ willChange: "transform" }}
          animate={{
            x: ["calc(var(--mouse-x, 0px) * -1)", "var(--mouse-x, 0px)"],
            y: ["calc(var(--mouse-y, 0px) * -1)", "var(--mouse-y, 0px)"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-teal-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: "transform, opacity",
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {/* Enhanced Header with animated underline */}
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
              variants={fadeIn}
              animate={{
                textShadow: [
                  "0 0 5px rgba(20, 184, 166, 0)",
                  "0 0 15px rgba(20, 184, 166, 0.3)",
                  "0 0 5px rgba(20, 184, 166, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              About Me
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>
          {/* Enhanced Combined About Me & My Story Section with Profile Image */}
          <motion.div
            className="mb-20 grid md:grid-cols-5 gap-8 items-center"
            variants={containerVariants}
          >
            {/* Image container - adjusted for more left positioning */}
            <motion.div
              className="md:col-span-2 flex justify-start md:justify-start pl-0" // Changed justify-center to justify-start
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative ml-0">
                {" "}
                {/* Added ml-0 to ensure left alignment */}
                <motion.div
                  className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal-500"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(20, 184, 166, 0.3)",
                      "0 0 20px rgba(20, 184, 166, 0.6)",
                      "0 0 10px rgba(20, 184, 166, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    src={img}
                    alt="Anurag Chauhan"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    initial={{ filter: "grayscale(100%)" }}
                    animate={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 1.5 }}
                  />
                </motion.div>
                {/* Enhanced decorative elements */}
                <motion.div
                  className="absolute -z-10 w-64 h-64 rounded-full bg-teal-500/20 -bottom-3 -right-3"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-300 rounded-full -top-4 -left-4 flex items-center justify-center text-white"
                  animate={bounceAnimation}
                >
                  <motion.div animate={rotateAnimation}>
                    <FaLaptopCode size={24} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text content - no changes needed */}
            <motion.div
              className="md:col-span-3 space-y-6 text-gray-700 dark:text-gray-300"
              variants={staggerChildren}
            >
              <motion.p
                className="text-lg leading-relaxed"
                variants={fadeIn}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                I'm a{" "}
                <span className="font-bold text-teal-600 dark:text-teal-400">
                  passionate developer
                </span>{" "}
                and problem-solver with expertise across the full stack. My
                journey began with Python in high school, where I quickly
                discovered my fascination with turning logic into{" "}
                <span className="italic bg-teal-50 dark:bg-teal-900/20 px-1 rounded">
                  functional applications that solve real-world challenges
                </span>
                .
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed"
                variants={fadeIn}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                My passion for programming evolved when I discovered{" "}
                <span className="font-bold text-teal-600 dark:text-teal-400">
                  web development
                </span>
                . I immersed myself in React, Next.js, and Node.js ecosystems,
                while{" "}
                <span className="underline decoration-teal-400 decoration-2 underline-offset-2">
                  sharpening my skills through competitive programming
                </span>
                . This combination of{" "}
                <span className="font-bold">
                  frontend creativity and algorithmic thinking
                </span>{" "}
                has been my strength in hackathons, where I've built solutions
                for healthcare, education, and accessibility needs.
              </motion.p>
              <motion.p
                className="text-lg leading-relaxed"
                variants={fadeIn}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                Today, I focus on creating{" "}
                <span className="font-bold text-teal-600 dark:text-teal-400">
                  intuitive, performant web applications
                </span>{" "}
                while
                <span className="bg-teal-50 dark:bg-teal-900/20 px-1 rounded">
                  {" "}
                  contributing to open-source projects and mentoring aspiring
                  developers
                </span>{" "}
                in my community. With a strong foundation in algorithms and data
                structures, I enjoy
                <span className="italic font-semibold">
                  {" "}
                  tackling complex challenges and finding elegant solutions
                </span>
                .
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Enhanced Skills Showcase with hover effects - minimized animations */}
          <motion.div
            className="mb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
              variants={fadeIn}
            >
              My Expertise
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Front-end Development",
                  description:
                    "Creating responsive, modern UIs with React, Next.js, and other frontend technologies.",
                  icon: <FaLaptopCode size={24} />,
                  skills: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "CSS/SCSS",
                    "Tailwind CSS",
                  ],
                },
                {
                  title: "Back-end Development",
                  description:
                    "Building robust server-side applications and APIs with Node.js and related frameworks.",
                  icon: <FaTools size={24} />,
                  skills: [
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Firebase",
                    "REST API",
                    "Golang",
                  ],
                },
                {
                  title: "Problem Solving",
                  description:
                    "Applying algorithmic thinking and data structures to solve complex technical challenges.",
                  icon: <FaRocket size={24} />,
                  skills: [
                    "DSA",
                    "Competitive Programming",
                    "LeetCode",
                    "Algorithms",
                    "C++",
                  ],
                },
                {
                  title: "Hackathons & Projects",
                  description:
                    "Building innovative solutions under tight deadlines and participating in tech competitions.",
                  icon: <FaAward size={24} />,
                  skills: [
                    "Project Management",
                    "Teamwork",
                    "Innovation",
                    "Fast Prototyping",
                    "Pitching",
                  ],
                },
              ].map((expertise, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300"
                  variants={fadeIn}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-300 rounded-xl flex items-center justify-center mr-4 text-white">
                      {expertise.icon}
                    </div>
                    <h3 className="text-xl font-bold">{expertise.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {expertise.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-full transition-transform duration-300 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Timeline Section with interactive elements */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            ref={timelineRef}
          >
            <motion.h2
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
              variants={fadeIn}
              animate={{
                textShadow: [
                  "0 0 5px rgba(20, 184, 166, 0)",
                  "0 0 15px rgba(20, 184, 166, 0.3)",
                  "0 0 5px rgba(20, 184, 166, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              My Journey
            </motion.h2>

            <div className="relative">
              {/* Enhanced Timeline line with animated gradient */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-teal-400"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-teal-400/0 via-white to-teal-400/0 h-[50%]"
                  animate={{
                    y: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              {/* Timeline items with enhanced animations */}
              <div className="space-y-12">
                {/* 2018 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setActiveSection("2018")}
                  onHoverEnd={() => setActiveSection(null)}
                >
                  <motion.div
                    className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0"
                    animate={activeSection === "2018" ? { x: -5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      Discovered Programming
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Began my programming journey with Python in high school,
                      creating simple programs and games
                    </p>
                    <div className="flex md:justify-end">
                      <a
                        href="https://www.python.org/about/gettingstarted/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-teal-500"
                      >
                        <motion.img
                          src={nag}
                          alt="First steps in programming"
                          className="w-20 h-20 rounded-lg object-cover mt-2"
                          whileHover={{ scale: 1.5, zIndex: 20 }}
                        />
                      </a>
                    </div>
                  </motion.div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      animate={activeSection === "2018" ? pulseAnimation : {}}
                    >
                      <span className="text-xs font-bold text-white">2018</span>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0 md:text-left" />
                </motion.div>

                {/* 2020 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setActiveSection("2020")}
                  onHoverEnd={() => setActiveSection(null)}
                >
                  <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-6 md:mt-0" />
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      animate={activeSection === "2020" ? pulseAnimation : {}}
                    >
                      <span className="text-xs font-bold text-white">2020</span>
                    </motion.div>
                  </div>
                  <motion.div
                    className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0"
                    animate={activeSection === "2020" ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      Competitive Programming
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Started learning data structures and algorithms,
                      participated in my first coding competitions
                    </p>
                    <div className="inline-flex gap-2">
                      <a
                        href="https://codeforces.com/profile/compiall101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-teal-500"
                      >
                        <motion.img
                          src={cp}
                          alt="Competitive Programming"
                          className="w-20 h-20 rounded-lg object-cover mt-2"
                          whileHover={{ scale: 1.5, zIndex: 20 }}
                        />
                      </a>
                      <a
                        href="https://leetcode.com/u/Anurag___Chauhan/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.span
                          className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-full mt-2"
                          whileHover={{ scale: 1.1 }}
                          animate={floatingAnimation}
                        >
                          Solved 200+ problems
                        </motion.span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* 2022 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setActiveSection("2022")}
                  onHoverEnd={() => setActiveSection(null)}
                >
                  <motion.div
                    className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0"
                    animate={activeSection === "2022" ? { x: -5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      Web Development Journey
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Expanded skills to include HTML, CSS, JavaScript and
                      modern frameworks. Built my first portfolio and web
                      applications.
                    </p>
                    <div className="flex md:justify-end gap-2">
                      <a
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.span
                          className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-full mt-2"
                          whileHover={{ scale: 1.1 }}
                          animate={floatingAnimation}
                        >
                          React
                        </motion.span>
                      </a>
                      <a
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.span
                          className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-full mt-2"
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            ...floatingAnimation,
                            transition: {
                              ...floatingAnimation.transition,
                              delay: 0.3,
                            },
                          }}
                        >
                          Next.js
                        </motion.span>
                      </a>
                      <a
                        href="https://github.com/Anurag123Chauhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-teal-500"
                      >
                        <motion.img
                          src={rect}
                          alt="WVrecteb development"
                          className="w-20 h-20 rounded-lg object-cover mt-2"
                          whileHover={{ scale: 1.5, zIndex: 20 }}
                        />
                      </a>
                    </div>
                  </motion.div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      animate={activeSection === "2022" ? pulseAnimation : {}}
                    >
                      <span className="text-xs font-bold text-white">2022</span>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0" />
                </motion.div>

                {/* 2023 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setActiveSection("2023")}
                  onHoverEnd={() => setActiveSection(null)}
                >
                  <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-6 md:mt-0" />
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      animate={activeSection === "2023" ? pulseAnimation : {}}
                    >
                      <span className="text-xs font-bold text-white">2023</span>
                    </motion.div>
                  </div>
                  <motion.div
                    className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0"
                    animate={activeSection === "2023" ? { x: 5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      Competition Successes
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Participated in and won multiple hackathons, secured
                      3-digit rank in Codeforces and LeetCode. Developed
                      solutions for real-world problems.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href="https://devpost.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-teal-500"
                      >
                        <motion.div
                          className="bg-white dark:bg-gray-700 p-1 rounded-lg shadow-sm"
                          whileHover={{ scale: 1.5, zIndex: 20 }}
                          animate={rotateAnimation}
                        >
                          <img
                            src={hack}
                            alt="Hackathon win"
                            className="w-24 h-16 rounded object-cover"
                          />
                          <p className="text-xs text-center mt-1 font-medium">
                            1st Place
                          </p>
                        </motion.div>
                      </a>
                      <a
                        href="https://codeforces.com/profile/compiall101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-teal-500"
                      >
                        <motion.div
                          className="bg-white dark:bg-gray-700 p-1 rounded-lg shadow-sm"
                          whileHover={{ scale: 1.5, zIndex: 20 }}
                          animate={{
                            ...rotateAnimation,
                            transition: {
                              ...rotateAnimation.transition,
                              delay: 0.3,
                            },
                          }}
                        >
                          <img
                            src={compi}
                            alt="Codeforces"
                            className="w-24 h-16 rounded object-cover"
                          />
                          <p className="text-xs text-center mt-1 font-medium">
                            Rank 205
                          </p>
                        </motion.div>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>

                {/* 2024 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setActiveSection("2024")}
                  onHoverEnd={() => setActiveSection(null)}
                >
                  <motion.div
                    className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0"
                    animate={activeSection === "2024" ? { x: -5 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      Professional Growth
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Learning advanced DSA, technologies, and frameworks,
                      contributing to open-source projects, and mentoring
                      others. Pursuing opportunities in tech industry.
                    </p>
                    <div className="flex md:justify-end gap-2">
                      <a
                        href="https://github.com/Anurag123Chauhan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-teal-500"
                      >
                        <motion.img
                          src={openSource}
                          alt="Open source contributions"
                          className="w-20 h-20 rounded-lg object-cover mt-2"
                          whileHover={{ scale: 1.5, zIndex: 20 }}
                        />
                      </a>
                      <a
                        href="https://codolio.com/profile/5idR56CN"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.span
                          className="inline-block px-3 py-1 bg-gradient-to-r from-teal-500 to-teal-400 text-white text-sm rounded-full mt-2"
                          whileHover={{ scale: 1.1 }}
                          animate={pulseAnimation}
                        >
                          Present
                        </motion.span>
                      </a>
                    </div>
                  </motion.div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      animate={activeSection === "2024" ? pulseAnimation : {}}
                    >
                      <span className="text-xs font-bold text-white">2024</span>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Values Section with hover effects */}
          <motion.div
            className="mt-24"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
              variants={fadeIn}
              animate={{
                textShadow: [
                  "0 0 5px rgba(20, 184, 166, 0)",
                  "0 0 15px rgba(20, 184, 166, 0.3)",
                  "0 0 5px rgba(20, 184, 166, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              What I Value
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerChildren}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative overflow-hidden"
                variants={fadeIn}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent -translate-x-full"
                  animate={{
                    translateX: ["100%", "-100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  animate={floatingAnimation}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I believe in pushing boundaries and finding creative solutions
                  to complex problems.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative overflow-hidden"
                variants={fadeIn}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent -translate-x-full"
                  animate={{
                    translateX: ["100%", "-100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />
                <motion.div
                  className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  animate={{
                    ...floatingAnimation,
                    transition: {
                      ...floatingAnimation.transition,
                      delay: 0.3,
                    },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm passionate about knowledge sharing and building supportive
                  tech communities.
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md relative overflow-hidden"
                variants={fadeIn}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent -translate-x-full"
                  animate={{
                    translateX: ["100%", "-100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                />
                <motion.div
                  className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  animate={{
                    ...floatingAnimation,
                    transition: {
                      ...floatingAnimation.transition,
                      delay: 0.6,
                    },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I strive for excellence in every line of code, focusing on
                  performance and user experience.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Call to Action with animated button */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl font-bold mb-6"
              animate={{
                y: [0, -5, 0],
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
            >
              Interested in working together?
            </motion.h2>
            <motion.a
              href="#Contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full font-medium text-lg text-white relative overflow-hidden"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                  translateX: ["100%", "-100%"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
              Get In Touch
              <motion.span
                className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                animate={{
                  x: [0, 5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;