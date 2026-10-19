import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profileData } from '../data/profile'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const { brand, navLinks, cta } = profileData

  const isProjectPage = location.pathname.startsWith('/projects')
  const currentActiveSection = isProjectPage ? 'projects' : activeSection

  // Monitor scroll position to update navbar elevation and active section when on homepage
  useEffect(() => {
    if (isProjectPage) return

    const handleScroll = () => {
      // Navbar elevation
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Detect active section on homepage
      const sections = navLinks.map((item) => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks, location.pathname, isProjectPage])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Handle navigation smoothly across both homepage sections and project subpages
  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.replace('#', '')

    if (location.pathname !== '/') {
      // If currently on /projects/:slug or /404, navigate to homepage with hash anchor
      navigate(`/${href}`)
    } else {
      // On homepage, smoothly scroll to section element
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(targetId)
        window.history.pushState(null, '', href)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F7F5EF]/95 backdrop-blur-md border-b border-[#E4E5DC] shadow-xs'
          : 'bg-[#F7F5EF]/85 backdrop-blur-sm border-b border-[#E4E5DC]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo / Wordmark */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#252D27] transition-colors focus-visible:ring-2 focus-visible:ring-[#244B3B] rounded-md px-1 py-0.5"
            aria-label={`${brand.fullName} Home`}
          >
            <span className="font-mono text-[#244B3B] group-hover:translate-x-[-2px] transition-transform">
              &lt;
            </span>
            <span className="tracking-wide text-[#252D27]">{brand.name}</span>
            <span className="font-mono text-[#244B3B] group-hover:translate-x-[2px] transition-transform">
              /&gt;
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#244B3B] ml-0.5" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white px-3 py-1.5 rounded-full border border-[#E4E5DC] shadow-xs"
          >
            {navLinks.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = currentActiveSection === sectionId

              return (
                <a
                  key={item.label}
                  href={`/${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-150 relative ${
                    isActive
                      ? 'text-[#244B3B] bg-[#E8F0E9] font-semibold shadow-xs'
                      : 'text-[#657068] hover:text-[#252D27] hover:bg-[#F0F1E9]'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Desktop Action Button: Let's Talk */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`/${cta.contactHref}`}
              onClick={(e) => handleNavClick(e, cta.contactHref)}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#244B3B] text-white hover:bg-[#315F4B] hover:shadow-xs transition-all duration-200 active:scale-95 shadow-xs"
            >
              <span>{cta.contactText}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-[#657068] hover:text-[#252D27] hover:bg-white border border-[#E4E5DC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-[#244B3B]" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-[#E4E5DC] bg-[#F7F5EF] ${
          isOpen ? 'max-h-[460px] opacity-100 py-4 shadow-md' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-1">
          {navLinks.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = currentActiveSection === sectionId

            return (
              <a
                key={item.label}
                href={`/${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                tabIndex={isOpen ? 0 : -1}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#244B3B] bg-[#E8F0E9] border border-[#244B3B]/20 font-semibold'
                    : 'text-[#657068] hover:text-[#252D27] hover:bg-[#F0F1E9]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#244B3B]" aria-hidden="true" />
                )}
              </a>
            )
          })}

          <div className="pt-3 pb-1 border-t border-[#E4E5DC]">
            <a
              href={`/${cta.contactHref}`}
              onClick={(e) => handleNavClick(e, cta.contactHref)}
              tabIndex={isOpen ? 0 : -1}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg bg-[#244B3B] text-white hover:bg-[#315F4B] transition-colors shadow-xs"
            >
              <span>{cta.contactText}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
