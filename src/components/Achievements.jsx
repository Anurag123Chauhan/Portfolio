import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import RankImg from "../assets/rank.jpeg";
import InfImg from "../assets/infinion.jpeg";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

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
  };

  const achievements = [
    {
      id: 1,
      title: "Rankings in different platforms",
      description:
        "Ranked amongst top 200 in CodeChef, Ranked amongst top 800 in LeetCode, and specialist in CodeForces.",
      image: RankImg,
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      hasMore: false,
      links: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/u/Anurag___Chauhan/",
          color: "text-orange-500",
        },
        {
          name: "CodeForces Profile",
          url: "https://codeforces.com/profile/compiall101",
          color: "text-blue-500",
        },
      ],
    },
    {
      id: 2,
      title: "Final Round of Infinion hackathon",
      description:
        "Reached the final round of Infinion hackathon with a high-impact project in the innovation category.",
      image: InfImg,
      icon: <Award className="h-6 w-6 text-purple-500" />,
      hasMore: false,
      links: [],
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
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden py-20">
      {/* Background effects */}
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
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
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
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Achievements and participations
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-8"
              initial={{ width: 0 }}
              animate={{
                width: "6rem",
                transition: { delay: 0.6, duration: 0.8 },
              }}
            />
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerChildren}
          >
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
                    <h3 className="text-xl font-bold text-white">
                      {achievement.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {achievement.description}
                  </p>

                  {achievement.links && achievement.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {achievement.links.map((link, i) => (
                        <motion.a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gray-200 dark:bg-gray-700 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ${link.color}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {link.name === "LeetCode Profile" ? (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                            </svg>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M4.5 7.5C5.88071 7.5 7 6.38071 7 5C7 3.61929 5.88071 2.5 4.5 2.5C3.11929 2.5 2 3.61929 2 5C2 6.38071 3.11929 7.5 4.5 7.5Z" />
                              <path d="M4.5 15.5C5.88071 15.5 7 14.3807 7 13C7 11.6193 5.88071 10.5 4.5 10.5C3.11929 10.5 2 11.6193 2 13C2 14.3807 3.11929 15.5 4.5 15.5Z" />
                              <path d="M12.5 21.5C13.8807 21.5 15 20.3807 15 19C15 17.6193 13.8807 16.5 12.5 16.5C11.1193 16.5 10 17.6193 10 19C10 20.3807 11.1193 21.5 12.5 21.5Z" />
                              <path d="M20.5 7.5C21.8807 7.5 23 6.38071 23 5C23 3.61929 21.8807 2.5 20.5 2.5C19.1193 2.5 18 3.61929 18 5C18 6.38071 19.1193 7.5 20.5 7.5Z" />
                            </svg>
                          )}
                          {link.name}
                        </motion.a>
                      ))}
                    </div>
                  )}

                  {achievement.hasMore && (
                    <motion.button
                      className="flex items-center gap-2 text-teal-500 font-medium mt-3"
                      whileHover={{ x: 5 }}
                    >
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
  );
};

export default Achievements;
