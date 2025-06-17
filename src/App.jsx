import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WelcomeOverlay from "./components/WelcomeOverlay";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHomeReady, setIsHomeReady] = useState(false);

  const handleWelcomeComplete = () => {
    setIsTransitioning(true);
    // Start loading the home page
    setIsHomeReady(true);
    // Add a longer delay for smoother transition
    setTimeout(() => {
      setShowWelcome(false);
      // Keep the transition state for a bit longer
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 1500); // 1.5 second transition
  };

  return (
    <ThemeProvider>
      <Router>
        <div className={`transition-all duration-1000 ease-in-out transform ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          {showWelcome ? (
            <WelcomeOverlay onComplete={handleWelcomeComplete} />
          ) : (
            <div className={`transition-all duration-1000 ease-in-out transform ${
              isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}>
              <AppContent />
            </div>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideFooterRoutes = ['/', '/contact'];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default App;
