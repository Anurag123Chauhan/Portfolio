import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./certifications.css";
import {
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certificationsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Demonstrates foundational cloud knowledge.",
    icon: <FaAws className="text-white text-xl" />,
    color: "from-blue-400 to-blue-600",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    linkText: "Verify Certification",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    description:
      "Demonstrates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
    icon: <FaMicrosoft className="text-white text-xl" />,
    color: "from-green-400 to-green-600",
    link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    linkText: "View Credential",
  },
  {
    title: "Google Cloud Certified - Associate Cloud Engineer",
    description: "Deploys and manages applications on Google Cloud.",
    icon: <FaGoogle className="text-white text-xl" />,
    color: "from-red-400 to-red-600",
    link: "https://cloud.google.com/certification/cloud-engineer",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <div className="p-6 flex flex-col flex-grow">
        <motion.div
          className={`w-12 h-12 bg-gradient-to-r ${certification.color} rounded-full flex items-center justify-center cert-badge-pulse`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {certification.icon}
        </motion.div>
        <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
          {certification.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">
          {certification.description}
        </p>

        {/* Link section */}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300 font-medium transition-colors"
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