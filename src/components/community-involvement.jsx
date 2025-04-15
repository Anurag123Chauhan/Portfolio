import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Calendar } from "lucide-react"

const CommunityInvolvement = () => {
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

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden py-20">

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="max-w-4xl mx-auto"
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
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
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
    </div>
  )
}

export default CommunityInvolvement
