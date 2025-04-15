"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Users, Calendar, Trophy, Award, Medal } from "lucide-react"

const ExperienceAndAchievements = () => {
  const [isVisible, setIsVisible] = useState(false)
  const developmentRef = useRef(null)
  const communityRef = useRef(null)
  const achievementsRef = useRef(null)

  const isDevelopmentInView = useInView(developmentRef, { once: false, amount: 0.2 })
  const isCommunityInView = useInView(communityRef, { once: false, amount: 0.2 })
  const isAchievementsInView = useInView(achievementsRef, { once: false, amount: 0.2 })

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  }

  const experiences = [
    {
      id: 1,
      title: "Hacktoberfest 2024 Contributor",
      description:
        "Contributed to open-source projects during Hacktoberfest 2024, collaborating with developers worldwide.",
      icon: <Code className="h-6 w-6 text-teal-400" />,
    },
    {
      id: 2,
      title: "GSSOC 2024 Contributor",
      description: "Participated in GirlScript Summer of Code 2024, working on real-world open-source projects.",
      icon: <Users className="h-6 w-6 text-teal-400" />,
    },
  ]

  const involvements = [
    {
      id: 1,
      title: "Webytes Development Club Lead",
      description: "Led Webytes Club, conducting 2 workshops, 2 contests, and fostering developer growth.",
      icon: <Users className="h-6 w-6 text-teal-400" />,
    },
    {
      id: 2,
      title: "Verge 2025 Event Head",
      description: "Coordinated over 200 student volunteers and managed 800+ participants for Verge 2025.",
      icon: <Calendar className="h-6 w-6 text-teal-400" />,
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon 2024 Winner",
      description: "Won the prestigious Smart India Hackathon 2024 with an innovative solution for PSID - SIH1618.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      hasMore: true,
      color: "from-yellow-500 to-amber-400",
    },
    {
      id: 2,
      title: "Final Round of SRM Builds 4.0",
      description: "Reached the final round of SRM Builds 4.0 with a high-impact project in the innovation category.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Award className="h-6 w-6 text-purple-500" />,
      hasMore: false,
      color: "from-purple-500 to-violet-400",
    },
    {
      id: 3,
      title: "2nd Prize - Documentary Making Competition",
      description: "Secured 2nd place in the documentary-making competition held by the Environmental Department.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Medal className="h-6 w-6 text-teal-500" />,
      hasMore: true,
      color: "from-teal-500 to-emerald-400",
    },
    {
      id: 4,
      title: "3rd Prize - Apogee 2025 BITS Pilani",
      description:
        "Achieved 3rd place in the Moneyball event at Apogee 2025, showcasing analytical and financial skills.",
      image: "/placeholder.svg?height=400&width=600",
      icon: <Award className="h-6 w-6 text-blue-500" />,
      hasMore: true,
      color: "from-blue-500 to-sky-400",
    },
  ]

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">

      {/* Development Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            ref={developmentRef}
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={isDevelopmentInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {/* Header */}
            <motion.div className="text-center mb-16" variants={fadeIn}>
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
                variants={fadeIn}
              >
                Development Experience
              </motion.h1>
              <motion.p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto" variants={fadeIn}>
                Open-source contributions and coding challenges
              </motion.p>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-8"
                initial={{ width: 0 }}
                animate={{ width: "6rem", transition: { delay: 0.6, duration: 0.8 } }}
              />
            </motion.div>

            {/* Experience Cards */}
            <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerChildren}>
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            ref={communityRef}
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={isCommunityInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {/* Header */}
            <motion.div className="text-center mb-16" variants={fadeIn}>
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
                variants={fadeIn}
              >
                Community Involvement
              </motion.h1>
              <motion.p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto" variants={fadeIn}>
                Leadership and event coordination
              </motion.p>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-8"
                initial={{ width: 0 }}
                animate={{ width: "6rem", transition: { delay: 0.6, duration: 0.8 } }}
              />
            </motion.div>

            {/* Involvement Cards */}
            <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerChildren}>
              {involvements.map((inv) => (
                <motion.div
                  key={inv.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      {inv.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{inv.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{inv.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            ref={achievementsRef}
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate={isAchievementsInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            {/* Header */}
            <motion.div className="text-center mb-16" variants={fadeIn}>
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
                variants={fadeIn}
              >
                Achievements
              </motion.h1>
              <motion.p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto" variants={fadeIn}>
                Achievements and participations
              </motion.p>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-8"
                initial={{ width: 0 }}
                animate={{ width: "6rem", transition: { delay: 0.6, duration: 0.8 } }}
              />
            </motion.div>

            {/* Achievement Cards */}
            <motion.div className="grid md:grid-cols-2 gap-8" variants={staggerChildren}>
              {achievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Separate component for the achievement card
const AchievementCard = ({ achievement }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.5 })

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={achievement.image || "/placeholder.svg"}
          alt={achievement.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Animated gradient border on hover */}
        {isHovered && (
          <motion.div
            className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${achievement.color} opacity-50`}
            style={{ backgroundClip: "border-box", backgroundOrigin: "border-box" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
          />
        )}

        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <motion.div
            className={`w-10 h-10 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {achievement.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{achievement.description}</p>

        {achievement.hasMore && (
          <motion.button
            className={`flex items-center gap-2 font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
            whileHover={{ x: 5 }}
          >
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: isHovered ? "currentColor" : "" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

export default ExperienceAndAchievements
