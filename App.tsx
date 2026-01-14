import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/pages/HomePage';
import { MissionPage } from './components/pages/MissionPage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { EventsPage } from './components/pages/EventsPage';
import { StoryPage } from './components/pages/StoryPage';
import { DonatePage } from './components/pages/DonatePage';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Only scroll to top if not a hash link
    if (!window.location.hash.includes('#/')) {
       // logic specifically for HashRouter handling
    } else {
       window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();
  // Hide default footer on Events page as it has its own custom footer in the design
  const showDefaultFooter = location.pathname !== '/events';

  return (
    <main className="w-full bg-ngo-sand text-ngo-text selection:bg-ngo-green selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      {showDefaultFooter && <Footer />}
    </main>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}