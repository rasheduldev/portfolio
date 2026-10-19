import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

export default function Home() {
  const location = useLocation()

  // Handle smooth scroll when navigating to hash anchors from another route
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        const timeout = setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }, 80)
        return () => clearTimeout(timeout)
      }
    } else {
      // If no hash, ensure scroll position starts at top of page
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location])

  return (
    <main id="main-content" className="flex-1">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Technical Skills Section */}
      <Skills />

      {/* 4. Education Section */}
      <Education />

      {/* 5. Experience Section (renders only when real entries exist) */}
      <Experience />

      {/* 6. Featured Projects Section */}
      <Projects />

      {/* 7. Contact Section */}
      <Contact />
    </main>
  )
}
