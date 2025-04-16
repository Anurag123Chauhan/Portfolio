import { motion } from "framer-motion"

const About = () => {
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

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  }

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={fadeIn}>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
              variants={fadeIn}
            >
              About Me
            </motion.h1>
            <motion.p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto" variants={fadeIn}>
                My journey from C++ programming to web development, hackathons, competitive programming, and building impactful digital solutions that solve real-world problems.
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>

          {/* My Story Section */}
          <motion.div 
            className="mb-20" 
            variants={staggerChildren}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
              variants={fadeIn}
            >
              My Story
            </motion.h2>
            <motion.div className="space-y-6 text-gray-700 dark:text-gray-300" variants={staggerChildren}>
              <motion.p className="text-lg" variants={fadeIn}>
                I'm a passionate developer and problem-solver with expertise across the full stack. My journey 
                began with C++ in high school, where I quickly discovered my fascination with turning logic into 
                functional applications that could solve real-world challenges.
              </motion.p>
              <motion.p className="text-lg" variants={fadeIn}>
                My passion for programming evolved when I discovered web development. I immersed myself in React, Next.js,
                and Node.js ecosystems, while sharpening my skills through competitive programming challenges. This 
                combination of frontend creativity and algorithmic thinking has been my strength in hackathons, where 
                I've built solutions for healthcare, education, and accessibility needs.
              </motion.p>
              <motion.p className="text-lg" variants={fadeIn}>
                Today, I focus on creating intuitive, performant web applications while contributing to open-source
                projects and mentoring aspiring developers in my community.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div 
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
              variants={fadeIn}
            >
              My Journey
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-teal-400"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.5 }}
              />

              {/* Timeline items */}
              <div className="space-y-12">
                {/* 2018 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">Started Learning Python</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Began my programming journey with Python in high school
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">2018</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0 md:text-left" />
                </motion.div>

                {/* Timeline items continued... */}
                {/* 2021 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                >
                  <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-6 md:mt-0 md:text-right" />
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">2022</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">Web Development</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Expanded skills to include HTML, CSS, JavaScript, DSA, Compititive Programing and modern frameworks
                    </p>
                  </div>
                </motion.div>

                {/* 2023 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">Successes</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Participated in and won multiple hackathons, secured 3 digit rank in Codeforces and LeetCode.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">2023</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0" />
                </motion.div>

                {/* 2024 */}
                <motion.div
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                  variants={timelineItemVariants}
                >
                  <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-6 md:mt-0" />
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">2024</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 mt-6 md:mt-0">
                    <h3 className="text-xl font-bold mb-2">Improvements</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      learning advance DSA, technologies, and frameworks, contributing to open-source projects, and mentoring others.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
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
            >
              What I Value
            </motion.h2>

            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerChildren}>
              <motion.div
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white">
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
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I believe in pushing boundaries and finding creative solutions to complex problems.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white">
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
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm passionate about knowledge sharing and building supportive tech communities.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white">
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
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I strive for excellence in every line of code, focusing on performance and user experience.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Interested in working together?</h2>
            <motion.a
              href="#Contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full font-medium text-lg text-white"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About