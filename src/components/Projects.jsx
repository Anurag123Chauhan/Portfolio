import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import SurakshaImg from "../assets/Suraksha.jpeg"
import WeatherImg from "../assets/Weather_app.jpeg"
import N_queenImg from "../assets/N_queen.jpeg"
import RayTracingImg from "../assets/RayTracing.jpeg"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { once: false, amount: 0.1 })

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
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  const projects = [
    {
      id: 1,
      title: "Suraksha",
      description:
        "A Disaster Management System that uses AI and maps API and chat section to provide real-time updates and resources during emergencies.",
      image: SurakshaImg,
      tags: ["Sockets","MongoDB", "Machine Learning", "Node.js", "Tailwind CSS"],
      links: {
        source: "https://github.com/Anurag123Chauhan/Suraksha",
        demo: null,
      },
      category: "AI",
    },
    {
      id: 2,
      title: "Weather_App",
      description:
        "A weather application that provides real-time weather updates and forecasts using a third-party API.",
      image: WeatherImg,
      tags: ["Angular", "Node.js", "MongoDB", "Tailwind CSS", "Bootstrap"],
      links: {
        source: "https://github.com/Anurag123Chauhan/PersonalPortfolio",
        demo: "#",
      },
      category: "Web",
    },
    {
      id: 3,
      title: "N_Queen Visualizer",
      description:
        "A visualizer for the N-Queens problem, showcasing various algorithms and their performance in solving the problem.",
      image: N_queenImg,
      tags: ["C++"],
      links: {
        source: "https://github.com/Anurag123Chauhan/N-Queen-Visualisation",
        demo: "#",
      },
      category: "C++",
    },
    {
      id: 4,
      title: "Raytracing Visualizer",
      description:
        "A visualizer for raytracing algorithms, demonstrating the rendering of 2D scenes and objects using raytracing techniques.",
      image: RayTracingImg,
      tags: ["C++", "SDL2"],
      links: {
        source: "https://github.com/Anurag123Chauhan/Raytracing",
        demo: "#",
      },
      category: "C++",
    },
    // {
    //   id: 5,
    //   title: "Coding Shop - Devlang",
    //   description:
    //     "SRM Builds 4 project where users can create and manage communities, and host online workshops in coding and development fields.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tags: ["Next.js", "Firebase", "Tailwind CSS", "ShadCN"],
    //   links: {
    //     source: "#",
    //     demo: null,
    //   },
    //   category: "Web",
    // },
  ]

  const filters = ["All", "Web", "AI", "C++"]

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      
      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
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
              Projects
            </motion.h1>
            <motion.p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto" variants={fadeIn}>
              A showcase of my best work, personal projects, and contributions
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-8"
              initial={{ width: 0 }}
              animate={{ width: "6rem", transition: { delay: 0.6, duration: 0.8 } }}
            />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={staggerChildren}>
            {filters.map((filter) => (
              <motion.button
                key={filter}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-teal-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveFilter(filter)}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid with 3D Tilt Effect */}
          <motion.div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8 } }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Interested in seeing more of my work? Check out my GitHub repositories.
            </p>
            <motion.a
              href="https://github.com/Anurag123Chauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full font-medium text-white"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Separate component for the project card with 3D tilt effect
const ProjectCard = ({ project }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovered) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

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
      className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      variants={cardVariants}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${
          isHovered ? 1.02 : 1
        })`,
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          style={{ transform: `translateZ(20px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white" style={{ transform: `translateZ(30px)` }}>
          {project.title}
        </h3>
      </div>

      {/* Project Content */}
      <div className="p-6" style={{ transform: `translateZ(10px)` }}>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 h-24 overflow-hidden">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.links.source && (
            <a
              href={project.links.source}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              style={{ transform: `translateZ(20px)` }}
            >
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Source Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors"
              style={{ transform: `translateZ(20px)` }}
            >
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Shine effect on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.03) 60%, rgba(255,255,255,0) 100%)",
          }}
        ></div>
      )}
    </motion.div>
  )
}

export default Projects
