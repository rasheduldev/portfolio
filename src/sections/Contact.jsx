import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import { profileData } from '../data/profile'
import { MessageSquare, MapPin, ArrowRight } from 'lucide-react'

export default function Contact() {
  const { contactInfo, socialLinks } = profileData

  const hasConfiguredContact =
    (contactInfo.email &&
      contactInfo.email.trim() !== '' &&
      !contactInfo.email.includes('example.com')) ||
    (contactInfo.phone && contactInfo.phone.trim() !== '') ||
    (contactInfo.whatsapp && contactInfo.whatsapp.trim() !== '') ||
    socialLinks.some(
      (s) => s.url && s.url.trim() !== '' && !s.url.includes('your-username')
    )

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 relative bg-[#F0F1E9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          title="Get In Touch"
          description="Have a question, feedback, or a frontend opportunity? Let's connect."
        />

        <div className="max-w-3xl space-y-8">
          {/* Invitation Card */}
          <div className="rounded-2xl bg-white border border-[#E4E5DC] p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#252D27]">
                Let's Build Something Together
              </h3>
            </div>

            <p className="text-[#657068] text-base leading-relaxed">
              I am actively learning, building, and seeking opportunities to collaborate on frontend web projects. If you would like to discuss my projects, explore potential roles, or share feedback on my work, please reach out through the verified contact channels below.
            </p>

            {contactInfo.location && (
              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#788078]">
                <MapPin className="w-4 h-4 text-[#244B3B]" />
                <span>Location: {contactInfo.location}</span>
              </div>
            )}
          </div>

          {/* Configured Contact Channels or Graceful Visitor Notice */}
          {hasConfiguredContact ? (
            <SocialLinks
              contactInfo={contactInfo}
              socialLinks={socialLinks}
              variant="cards"
            />
          ) : (
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-dashed border-[#E4E5DC] text-center space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#E8F0E9] text-[#244B3B] flex items-center justify-center mx-auto">
                <MessageSquare className="w-5 h-5" />
              </div>
              <p className="text-base font-bold text-[#252D27]">
                Direct Contact Channels Opening Soon
              </p>
              <p className="text-sm text-[#657068] max-w-md mx-auto leading-relaxed">
                Direct messaging channels are currently being prepared. In the meantime, feel free to explore my selected projects.
              </p>
              <div className="pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#244B3B] hover:text-[#315F4B] hover:underline"
                >
                  <span>Explore Selected Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
