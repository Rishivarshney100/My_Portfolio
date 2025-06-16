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

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <ThemeProvider>
      <Router>
        {showWelcome ? (
          <WelcomeOverlay onComplete={handleWelcomeComplete} />
        ) : (
          <AppContent />
        )}
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
