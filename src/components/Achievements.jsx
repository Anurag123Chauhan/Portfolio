import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Trophy, Award, Medal } from "lucide-react"
import RankImg from "../assets/rank.jpeg"
import InfImg from "../assets/infinion.jpeg"

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false)

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

  const achievements = [
    {
      id: 1,
      title: "Rankings in different platforms",
      description: "Ranked amongst to 200 in CodeChef, Ranked amongst to 800 in LeetCode, and specilist in codeforces.",
      image: RankImg,
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      hasMore: false,
    },
    {
      id: 2,
      title: "Final Round of Infinion hackathon",
      description: "Reached the final round of Infinion hackathon with a high-impact project in the innovation category.",
      image: InfImg,
      icon: <Award className="h-6 w-6 text-purple-500" />,
      hasMore: false,
    },
    // {
    //   id: 3,
    //   title: "2nd Prize - Documentary Making Competition",
    //   description: "Secured 2nd place in the documentary-making competition held by the Environmental Department.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   icon: <Medal className="h-6 w-6 text-teal-500" />,
    //   hasMore: true,
    // },
    // {
    //   id: 4,
    //   title: "3rd Prize - Apogee 2025 BITS Pilani",
    //   description:
    //     "Achieved 3rd place in the Moneyball event at Apogee 2025, showcasing analytical and financial skills.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   icon: <Award className="h-6 w-6 text-blue-500" />,
    //   hasMore: true,
    // },
  ]

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden py-20">

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
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
              <motion.div
                key={achievement.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{achievement.description}</p>

                  {achievement.hasMore && (
                    <motion.button className="flex items-center gap-2 text-teal-500 font-medium" whileHover={{ x: 5 }}>
                      View More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Achievements
