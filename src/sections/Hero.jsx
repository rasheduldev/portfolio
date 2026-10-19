import { useState } from 'react'
import {
  Download,
  ArrowRight,
  Info,
  X,
  CheckCircle2,
} from 'lucide-react'
import { profileData } from '../data/profile'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  const { hero, cta, socialLinks, contactInfo } = profileData
  const [showResumeNotice, setShowResumeNotice] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const activeSocials = socialLinks.filter(
    (s) => s.url && s.url.trim() !== '' && !s.url.includes('your-username')
  )

  const handleExploreClick = (e) => {
    e.preventDefault()
    const projectsEl = document.getElementById('projects')
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', '#projects')
    }
  }

  const handleResumeClick = (e) => {
    if (!cta.resume.isAvailable || !cta.resume.url) {
      e.preventDefault()
      setShowResumeNotice(true)
    }
  }

  const handleCopyEmail = () => {
    if (contactInfo?.email) {
      navigator.clipboard.writeText(contactInfo.email)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2500)
    }
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36 overflow-hidden bg-[#F7F5EF]"
    >
      {/* Subtle warm wash */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(36,75,59,0.05),transparent)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle grid background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(37, 45, 39, 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Intro, Typography, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0E9] border border-[#E4E5DC] text-xs font-semibold tracking-wider text-[#244B3B] uppercase mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#244B3B]" aria-hidden="true" />
              <span>{hero.introLabel}</span>
            </div>

            {/* Main Heading & Name */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#252D27] leading-[1.1] mb-4"
            >
              {hero.fullName}
            </h1>

            {/* Professional Designation */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#244B3B] tracking-tight mb-6 flex items-center gap-2">
              <span>{hero.role}</span>
              <span className="text-[#657068] font-normal text-base sm:text-lg">
                | Crafting Web Interfaces
              </span>
            </h2>

            {/* Bio / Summary */}
            <p className="text-base sm:text-lg text-[#657068] leading-relaxed max-w-2xl mb-8">
              {hero.shortBio}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              {/* Primary: Explore My Work */}
              <a
                href={cta.primaryHref}
                onClick={handleExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold rounded-xl bg-[#244B3B] text-white hover:bg-[#315F4B] hover:shadow-xs transition-all duration-200 active:scale-95 shadow-xs"
              >
                <span>{cta.primaryText}</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
              </a>

              {/* Secondary: Download Resume */}
              {cta.resume.isAvailable && cta.resume.url ? (
                <a
                  href={cta.resume.url}
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl bg-white text-[#252D27] border border-[#E4E5DC] hover:border-[#244B3B] hover:bg-[#E8F0E9]/50 transition-all duration-200 active:scale-95 shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#244B3B]" aria-hidden="true" />
                  <span>{cta.secondaryText}</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleResumeClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl bg-white text-[#252D27] border border-[#E4E5DC] hover:border-[#244B3B] hover:bg-[#E8F0E9]/50 transition-all duration-200 active:scale-95 cursor-pointer group shadow-xs"
                  aria-haspopup="dialog"
                  aria-expanded={showResumeNotice}
                >
                  <Download className="w-4 h-4 text-[#244B3B] group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
                  <span>{cta.secondaryText}</span>
                  <span className="text-[10px] font-mono uppercase bg-[#E8F0E9] text-[#244B3B] px-2 py-0.5 rounded border border-[#E4E5DC] ml-1">
                    Soon
                  </span>
                </button>
              )}
            </div>

            {/* Resume Notice Card (Graceful Fallback) */}
            {showResumeNotice && (
              <div
                role="region"
                aria-live="polite"
                className="w-full max-w-xl p-4 mb-8 rounded-xl bg-white border border-[#244B3B]/30 text-sm text-[#252D27] relative shadow-xs animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#244B3B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1 pr-6">
                    <p className="font-semibold text-[#252D27] mb-1">Resume Status</p>
                    <p className="text-[#657068] text-xs sm:text-sm leading-relaxed mb-3">
                      {cta.resume.placeholderMessage}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {contactInfo?.email && contactInfo.email.trim() !== '' && !contactInfo.email.includes('example.com') && (
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#E8F0E9] text-[#244B3B] hover:bg-[#244B3B] hover:text-white transition-colors border border-[#E4E5DC]"
                        >
                          {copiedEmail ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Copied to Clipboard!</span>
                            </>
                          ) : (
                            <>
                              <span>Copy Email ({contactInfo.email})</span>
                            </>
                          )}
                        </button>
                      )}
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault()
                          setShowResumeNotice(false)
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="text-xs text-[#244B3B] hover:text-[#315F4B] font-medium underline underline-offset-2"
                      >
                        Go to Contact &rarr;
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowResumeNotice(false)}
                    className="p-1 rounded-md text-[#657068] hover:text-[#252D27] hover:bg-[#E8F0E9] transition-colors absolute top-3 right-3"
                    aria-label="Dismiss resume notice"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Social Links Bar - Visible whenever real links are configured */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-4 pt-4 border-t border-[#E4E5DC] w-full sm:w-auto">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#657068]">
                  Find Me On:
                </span>
                <SocialLinks socialLinks={socialLinks} variant="compact" />
              </div>
            )}

          </div>

          {/* Right Column: Clean, Unadorned Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[400px]">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-auto aspect-square object-cover rounded-2xl block select-none"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
