"use client"

import { motion } from "framer-motion"
import ImprovedSkillsSlider from "./improved-skills-slider"

const Skills = () => {
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

  // Define the skills in two separate arrays for two rows of sliding content
  const skillsRow1 = ["JavaScript", "React", "Node.js", "TypeScript", "HTML/CSS", "Next.js", "Tailwind CSS", "Redux"]
  const skillsRow2 = ["Java", "Python", "MongoDB", "SQL", "Git", "AWS", "Docker", "GraphQL"]

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerChildren}
        >
          {/* Skills Section - Improved Seamless Infinite Slider */}
          <motion.div className="mb-24" variants={staggerChildren}>
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent"
              variants={fadeIn}
            >
              Skills & Technologies
            </motion.h2>

            {/* Skills slider container with improved component */}
            <div className="relative overflow-hidden py-4 mx-auto">
              {/* First row - slide from right to left */}
              <ImprovedSkillsSlider skills={skillsRow1} direction="left" speed={30} className="mb-8" />

              {/* Second row - slide from left to right */}
              <ImprovedSkillsSlider skills={skillsRow2} direction="right" speed={25} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills