import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import { Home, About, Projects, Contact } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
