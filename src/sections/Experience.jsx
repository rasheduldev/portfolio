import SectionHeading from '../components/SectionHeading'
import { experienceList } from '../data/experience'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export default function Experience() {
  // If no verified professional experience entries exist, completely hide the section from the DOM
  if (!experienceList || experienceList.length === 0) {
    return null
  }

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 relative bg-[#F7F5EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="experience-heading"
          title="Professional Experience"
          description="Career journey, software development roles, and professional contributions."
        />

        <div className="max-w-3xl space-y-6">
          {experienceList.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E5DC] shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E4E5DC]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#252D27]">{item.role}</h3>
                    <p className="text-sm font-medium text-[#244B3B]">{item.company}</p>
                  </div>
                </div>

                {item.period && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#788078]">
                    <Calendar className="w-3.5 h-3.5 text-[#244B3B]" />
                    <span>{item.period}</span>
                  </div>
                )}
              </div>

              {item.description && (
                <p className="text-sm sm:text-base text-[#657068] pt-4 leading-relaxed">
                  {item.description}
                </p>
              )}

              {item.location && (
                <div className="flex items-center gap-1.5 pt-3 text-xs text-[#788078]">
                  <MapPin className="w-3.5 h-3.5 text-[#244B3B]" />
                  <span>{item.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
