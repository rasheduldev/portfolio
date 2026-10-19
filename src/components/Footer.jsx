import { ArrowUp } from 'lucide-react'
import { profileData } from '../data/profile'
import SocialLinks from './SocialLinks'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const { brand, socialLinks } = profileData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const hasSocials = socialLinks.some(
    (s) => s.url && s.url.trim() !== '' && !s.url.includes('your-username')
  )

  return (
    <footer className="w-full border-t border-[#E4E5DC] bg-[#F7F5EF] py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-mono text-sm font-bold text-[#252D27]">
              &lt;<span className="text-[#244B3B]">{brand.name}</span>/&gt;
            </span>
            <span className="hidden sm:inline text-[#E4E5DC]">|</span>
            <p className="text-xs text-[#788078]">
              &copy; {CURRENT_YEAR} {brand.fullName}. All rights reserved.
            </p>
          </div>

          {/* Social Links if configured */}
          {hasSocials && (
            <div className="flex items-center">
              <SocialLinks socialLinks={socialLinks} variant="compact" />
            </div>
          )}

          {/* Quick back to top action */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#657068] hover:text-[#244B3B] bg-white border border-[#E4E5DC] hover:border-[#244B3B]/40 hover:bg-[#E8F0E9] transition-all duration-150 cursor-pointer shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#244B3B]" />
          </button>

        </div>
      </div>
    </footer>
  )
}
