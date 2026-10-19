import { ExternalLink, Mail, Phone, MessageCircle } from 'lucide-react'

export default function SocialLinks({
  socialLinks = [],
  contactInfo = {},
  variant = 'compact', // 'compact' | 'cards' | 'pills'
}) {
  // Filter only configured links with non-empty URLs, excluding placeholder patterns
  const activeSocials = socialLinks.filter(
    (item) => item.url && item.url.trim() !== '' && !item.url.includes('your-username')
  )

  const hasEmail =
    contactInfo.email &&
    contactInfo.email.trim() !== '' &&
    !contactInfo.email.includes('example.com')
  const hasPhone = contactInfo.phone && contactInfo.phone.trim() !== ''
  const hasWhatsapp = contactInfo.whatsapp && contactInfo.whatsapp.trim() !== ''

  // If no links are configured yet, return null cleanly so no empty or broken placeholders appear
  if (activeSocials.length === 0 && !hasEmail && !hasPhone && !hasWhatsapp) {
    return null
  }

  const renderIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return (
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        )
      case 'LinkedIn':
        return (
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63s1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
          </svg>
        )
      case 'Email':
        return <Mail className="w-4 h-4 shrink-0" />
      case 'Phone':
        return <Phone className="w-4 h-4 shrink-0" />
      case 'WhatsApp':
        return <MessageCircle className="w-4 h-4 shrink-0" />
      default:
        return <ExternalLink className="w-4 h-4 shrink-0" />
    }
  }

  // 1. Cards Variant (Used in Contact section)
  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {hasEmail && (
          <a
            href={`mailto:${contactInfo.email}`}
            className="group p-5 rounded-xl bg-white border border-[#E4E5DC] hover:border-[#244B3B] hover:shadow-xs hover:bg-[#F7F5EF]/60 transition-all duration-200 flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
          >
            <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC] group-hover:scale-105 group-hover:bg-[#244B3B] group-hover:text-white transition-all duration-200 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#788078] uppercase tracking-wider mb-1">
                Email
              </p>
              <p className="text-sm font-medium text-[#252D27] group-hover:text-[#244B3B] transition-colors break-all">
                {contactInfo.email}
              </p>
            </div>
          </a>
        )}

        {hasPhone && (
          <a
            href={`tel:${contactInfo.phone}`}
            className="group p-5 rounded-xl bg-white border border-[#E4E5DC] hover:border-[#244B3B] hover:shadow-xs hover:bg-[#F7F5EF]/60 transition-all duration-200 flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
          >
            <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC] group-hover:scale-105 group-hover:bg-[#244B3B] group-hover:text-white transition-all duration-200 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#788078] uppercase tracking-wider mb-1">
                Phone
              </p>
              <p className="text-sm font-medium text-[#252D27] group-hover:text-[#244B3B] transition-colors">
                {contactInfo.phone}
              </p>
            </div>
          </a>
        )}

        {hasWhatsapp && (
          <a
            href={
              contactInfo.whatsapp.startsWith('http')
                ? contactInfo.whatsapp
                : `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl bg-white border border-[#E4E5DC] hover:border-[#244B3B] hover:shadow-xs hover:bg-[#F7F5EF]/60 transition-all duration-200 flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
          >
            <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC] group-hover:scale-105 group-hover:bg-[#244B3B] group-hover:text-white transition-all duration-200 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#788078] uppercase tracking-wider mb-1">
                WhatsApp
              </p>
              <p className="text-sm font-medium text-[#252D27] group-hover:text-[#244B3B] transition-colors">
                Message on WhatsApp
              </p>
            </div>
          </a>
        )}

        {activeSocials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel || `Visit ${social.name}`}
            className="group p-5 rounded-xl bg-white border border-[#E4E5DC] hover:border-[#244B3B] hover:shadow-xs hover:bg-[#F7F5EF]/60 transition-all duration-200 flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
          >
            <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC] group-hover:scale-105 group-hover:bg-[#244B3B] group-hover:text-white transition-all duration-200 shrink-0">
              {renderIcon(social.name)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <p className="text-xs font-semibold text-[#788078] uppercase tracking-wider mb-1">
                  {social.name}
                </p>
                <ExternalLink className="w-3.5 h-3.5 text-[#788078] group-hover:text-[#244B3B] transition-colors" />
              </div>
              <p className="text-sm font-medium text-[#252D27] group-hover:text-[#244B3B] transition-colors truncate">
                View Profile
              </p>
            </div>
          </a>
        ))}
      </div>
    )
  }

  // 2. Pills Variant (Full rounded pills)
  if (variant === 'pills') {
    return (
      <div className="flex flex-wrap items-center gap-2.5">
        {hasEmail && (
          <a
            href={`mailto:${contactInfo.email}`}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E4E5DC] text-xs sm:text-sm font-medium text-[#252D27] hover:text-white hover:bg-[#244B3B] hover:border-[#244B3B] shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
          >
            <Mail className="w-3.5 h-3.5 text-[#244B3B] group-hover:text-white transition-colors" />
            <span>Email</span>
          </a>
        )}

        {hasPhone && (
          <a
            href={`tel:${contactInfo.phone}`}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E4E5DC] text-xs sm:text-sm font-medium text-[#252D27] hover:text-white hover:bg-[#244B3B] hover:border-[#244B3B] shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
          >
            <Phone className="w-3.5 h-3.5 text-[#244B3B] group-hover:text-white transition-colors" />
            <span>Call</span>
          </a>
        )}

        {hasWhatsapp && (
          <a
            href={
              contactInfo.whatsapp.startsWith('http')
                ? contactInfo.whatsapp
                : `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E4E5DC] text-xs sm:text-sm font-medium text-[#252D27] hover:text-white hover:bg-[#244B3B] hover:border-[#244B3B] shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#244B3B] group-hover:text-white transition-colors" />
            <span>WhatsApp</span>
          </a>
        )}

        {activeSocials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel || `Visit ${social.name}`}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E4E5DC] text-xs sm:text-sm font-medium text-[#252D27] hover:text-white hover:bg-[#244B3B] hover:border-[#244B3B] shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
          >
            <span className="text-[#244B3B] group-hover:text-white transition-colors">
              {renderIcon(social.name)}
            </span>
            <span>{social.name}</span>
            <ExternalLink className="w-3 h-3 text-[#788078] group-hover:text-white transition-colors" />
          </a>
        ))}
      </div>
    )
  }

  // 3. Compact Variant (Default rounded-lg badges)
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {hasEmail && (
        <a
          href={`mailto:${contactInfo.email}`}
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E4E5DC] text-xs sm:text-sm font-medium text-[#252D27] hover:text-[#244B3B] hover:border-[#244B3B] hover:bg-[#E8F0E9]/50 shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
        >
          <Mail className="w-3.5 h-3.5 text-[#244B3B]" />
          <span>Email</span>
        </a>
      )}

      {hasPhone && (
        <a
          href={`tel:${contactInfo.phone}`}
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E4E5DC] text-xs sm:text-sm font-medium text-[#252D27] hover:text-[#244B3B] hover:border-[#244B3B] hover:bg-[#E8F0E9]/50 shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
        >
          <Phone className="w-3.5 h-3.5 text-[#244B3B]" />
          <span>Call</span>
        </a>
      )}

      {hasWhatsapp && (
        <a
          href={
            contactInfo.whatsapp.startsWith('http')
              ? contactInfo.whatsapp
              : `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E4E5DC] text-xs sm:text-sm font-medium text-[#252D27] hover:text-[#244B3B] hover:border-[#244B3B] hover:bg-[#E8F0E9]/50 shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#244B3B]" />
          <span>WhatsApp</span>
        </a>
      )}

      {activeSocials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel || `Visit ${social.name}`}
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E4E5DC] text-xs sm:text-sm font-medium text-[#252D27] hover:text-[#244B3B] hover:border-[#244B3B] hover:bg-[#E8F0E9]/50 shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
        >
          <span className="text-[#244B3B] group-hover:scale-105 transition-transform">
            {renderIcon(social.name)}
          </span>
          <span className="font-medium">{social.name}</span>
          <ExternalLink className="w-3 h-3 text-[#788078] group-hover:text-[#244B3B] transition-colors" />
        </a>
      ))}
    </div>
  )
}
