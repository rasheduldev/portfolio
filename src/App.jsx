import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import NotFound from './pages/NotFound'

// Scroll restoration component for page navigation
function ScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If navigating to a new path without a hash anchor, scroll to top
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#252D27] selection:bg-[#E8F0E9] selection:text-[#244B3B] relative">
        {/* Accessible skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-[#244B3B] text-white font-bold px-4 py-2.5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#244B3B]"
        >
          Skip to main content
        </a>

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Routed Content Area */}
        <div className="flex-1 flex flex-col">
          <Routes>
            {/* 1. Complete Home Page */}
            <Route path="/" element={<Home />} />

            {/* 2. Reusable Project Details Route */}
            <Route path="/projects/:slug" element={<ProjectDetails />} />

            {/* 3. Catch-all Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  )
}
