import { useState, useRef } from 'react';
import { motion } from "framer-motion";

const WelcomeOverlay = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const audioRef = useRef(null);

  const handleComplete = () => {
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

    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 z-50 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center space-y-8 px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white mb-12 drop-shadow-md"
        >
          Explore my journey, projects, and skills
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleComplete}
          className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
        >
          Let's Go
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-0 w-full py-6 text-center text-white bg-white/5 backdrop-blur-sm"
      >
        <p className="text-sm md:text-base">© 2024 Rishi Varshney. All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default WelcomeOverlay; 