// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'; // Import ErrorBoundary
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import ErrorFallback from './pages/NotFound';

function App() {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <header>
          <div className="logo">SkillMatch</div>
          <nav>
            <ul>
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/features" className="nav-link">Features</Link></li>
              <li><Link to="/contact" className="nav-link">Support</Link></li>
              <li><Link to="/login" className="login">Login/Sign Up</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer>
          <p>&copy; 2024 SkillMatch. All rights reserved.</p>
        </footer>
      </ErrorBoundary>
    </Router>
  );
}

export default App;