import { motion } from "framer-motion";
import { useRef } from "react";

const WelcomeOverlay = ({ onComplete }) => {
  const audioRef = useRef(null);

  const handleClick = () => {
    // Create and play audio
    const audio = new Audio('/sakura.mp3');
    audio.loop = true;
    audio.volume = 1.0;
    
    // Play audio and handle any errors
    audio.play()
      .then(() => {
        console.log('Audio started playing');
        // Store the audio instance in ref for cleanup
        audioRef.current = audio;
      })
      .catch(error => {
        console.error('Error playing audio:', error);
      });

    onComplete();
  };

  // Generate random bubbles
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20, // Random size between 20 and 80
    x: Math.random() * 100, // Random x position (percentage)
    delay: Math.random() * 3, // Reduced delay range
    duration: Math.random() * 5 + 5, // Faster duration between 5 and 10 seconds
  }));

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Bubble animations */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            bottom: -bubble.size,
          }}
          animate={{
            y: [0, -window.innerHeight - bubble.size],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="text-center space-y-8 px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-12"
        >
          Explore my journey, projects, and skills
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
        >
          Let's Go
        </motion.button>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-0 w-full py-6 text-center text-white bg-white/5 z-10"
      >
        <p className="text-sm md:text-base">© 2024 Rishi Varshney. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default WelcomeOverlay; 