// src/App.js
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary'; // Import ErrorBoundary
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Jobs from './pages/skills';
import ErrorFallback from './pages/NotFound';
import NotFound from './pages/NotFound'; // Assuming NotFound is in the 'pages' directory
import './App.css'; // Assuming you're using a CSS file for styling

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="app-layout">
          {/* Sidebar */}
          <nav className="sidebar">
            <h2>TechForGood</h2>
            <ul>
              <li><Link to="/" className="sidebar-link">Dashboards</Link></li>
              <li><Link to="/about" className="sidebar-link">About</Link></li>
              <li><Link to="/features" className="sidebar-link">Features</Link></li>
              <li><Link to="/projects" className="sidebar-link">Projects</Link></li>
              <li><Link to="/job" className="sidebar-link">Job</Link></li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className="main-content">
            <header>
              <div className="logo">TechForGood</div>
              <nav>
                <ul>
                  <li><Link to="/" className="nav-link">Home</Link></li>
                  <li><Link to="/about" className="nav-link">About</Link></li>
                  <li><Link to="/features" className="nav-link">Features</Link></li>
                  <li><Link to="/skills" className="nav-link">Projects</Link></li>
                  <li><Link to="/contact" className="nav-link">Support</Link></li>
                  <li><Link to="/login" className="login">Login/Sign Up</Link></li>
                </ul>
              </nav>
            </header>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/skills" element={<Jobs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <footer>
              <p>&copy; 2024 SkillMatch. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
