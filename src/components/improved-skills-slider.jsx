import { useState, useRef, useEffect } from "react"
import { motion, useAnimationControls, useInView } from "framer-motion"

const ImprovedSkillsSlider = ({ skills = [], direction = "left", speed = 20, className = "" }) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })
  const controls = useAnimationControls()
  const [isPaused, setIsPaused] = useState(false)
  
  // Store animation state
  const animationRef = useRef({
    startTime: -1,
    pausedAt: 0,
    pauseOffset: 0,
    isPaused: false
  })

  // Duplicate skills to ensure we have enough items for a smooth loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills]
  
  useEffect(() => {
    if (!isInView) return;
    
    // Set initial start time when component first becomes visible
    if (animationRef.current.startTime === 0) {
      animationRef.current.startTime = performance.now() - animationRef.current.pauseOffset;
    }
    
    let animationId;
    
    const animate = (time) => {
      if (isPaused) {
        // If just paused, store the pause time
        if (!animationRef.current.isPaused) {
          animationRef.current.isPaused = true;
          animationRef.current.pausedAt = time;
        }
      } else {
        // If just unpaused, update the offset and reset pausedAt
        if (animationRef.current.isPaused) {
          animationRef.current.isPaused = false;
          animationRef.current.pauseOffset += (time - animationRef.current.pausedAt);
          animationRef.current.startTime = performance.now() - animationRef.current.pauseOffset;
        }
        
        // Calculate elapsed time accounting for pauses
        const elapsed = time - animationRef.current.startTime;
        
        // Calculate position (0 to 1, then loops)
        const duration = speed * 1000; // convert to ms
        const position = (elapsed % duration) / duration;
        
        // Set x position based on direction and progress
        const xPos = direction === "left" 
          ? `${-100 * position}%` 
          : `${-100 + (100 * position)}%`;
          
        controls.set({ x: xPos });
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isInView, isPaused, direction, speed, controls]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden h-14 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 flex items-center">
        <motion.div className="flex space-x-6 whitespace-nowrap" animate={controls}>
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="flex-shrink-0 bg-gradient-to-r from-teal-600/10 to-teal-500/10 dark:from-teal-600/20 dark:to-teal-500/20 border border-teal-400/20 dark:border-teal-400/30 rounded-full px-6 py-3 flex items-center space-x-2"
            >
              <span className="text-teal-600 dark:text-teal-400">•</span>
              <span className="whitespace-nowrap font-medium text-gray-800 dark:text-gray-200">{skill}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for smooth fade effect - reduced width */}
      <div className="absolute inset-y-0 left-0 w-[50px] bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-[50px] bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10 pointer-events-none"></div>
    </div>
  )
}

export default ImprovedSkillsSlider