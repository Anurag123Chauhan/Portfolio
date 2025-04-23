import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./certifications.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiCoursera } from "react-icons/si";

const certificationsData = [
  {
    title: "MongoDB for Students",
    description:
      "Mastery of database design, CRUD operations, and MongoDB Atlas cloud deployment.",
    icon: <SiMongodb className="text-white text-xl" />,
    color: "from-green-500 to-green-700",
    link: "https://drive.google.com/file/d/1XwZkbn6yAj8xe63OexwCCXzQxb41sC8_/view?usp=drive_link",
    linkText: "Verify Certification",
  },
  {
    title: "Responsible AI Systems",
    description:
      "Expertise in ethical AI implementation, bias mitigation, and responsible deployment strategies.",
    // icon: <SiMicrosoft className="text-white text-xl" />,
    color: "from-blue-500 to-blue-700",
    link: "https://drive.google.com/file/d/1i_rDAXuAJIlUvpY9p0i9OWfRS5by28PQ/view?usp=drive_link",
    linkText: "View Credential",
  },
  {
    title: "Approximation Algorithms",
    description:
      "Advanced knowledge of optimization strategies and computational complexity theory.",
    icon: <SiCoursera className="text-white text-xl" />,
    color: "from-blue-400 to-blue-600",
    link: "https://coursera.org/share/8a148190ab49f5c342e62e6fdfee5070",
    linkText: "Check Certificate",
  },
  {
    title: "Node.js Development",
    description:
      "Proficiency in server-side JavaScript, RESTful APIs, and asynchronous programming patterns.",
    icon: <SiCoursera className="text-white text-xl" />,
    color: "from-blue-400 to-blue-600",
    link: "https://coursera.org/share/42d6c5f6275aa8a886ef06314caf0e3d",
    linkText: "Check Certificate",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certifications = () => {
  return (
    <section
      id="certification"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my technical skills and
            knowledge.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificationsData.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationCard = ({ certification }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 cert-card-float cert-shine h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5 flex flex-col flex-grow">
        <motion.div
          className={`w-12 h-12 bg-gradient-to-r ${certification.color} rounded-full flex items-center justify-center cert-badge-pulse`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {certification.icon}
        </motion.div>
        <h3 className="mt-3 text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
          {certification.title}
        </h3>
        <div className="mt-2 flex-grow relative description-container">
          <motion.p
            className={`text-sm text-gray-600 dark:text-gray-400 ${
              isHovered ? "description-expanded" : "description-truncated"
            }`}
            initial={false}
            animate={isHovered ? "expanded" : "truncated"}
            variants={{
              truncated: { height: "2.5rem", overflow: "hidden" },
              expanded: { height: "auto", overflow: "visible" },
            }}
          >
            {certification.description}
          </motion.p>
          {!isHovered && (
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
          )}
        </div>

        {/* Link section */}
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300 font-medium transition-colors text-sm"
          >
            {certification.linkText}
            <FaExternalLinkAlt className="ml-2 h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;