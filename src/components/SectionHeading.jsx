export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'left',
  id,
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-3xl'
      }`}
    >
      {subtitle && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0E9] border border-[#E4E5DC] text-xs font-semibold tracking-wider text-[#244B3B] uppercase mb-4 ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#244B3B]" aria-hidden="true" />
          <span>{subtitle}</span>
        </div>
      )}

      <h2
        id={id}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#252D27] leading-[1.15] mb-4"
      >
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-[#657068] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
