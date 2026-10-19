import SectionHeading from '../components/SectionHeading'
import { educationList } from '../data/education'
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 relative bg-[#F0F1E9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="education-heading"
          title="Education"
          description="Academic background and higher education journey."
        />

        <div className="max-w-3xl space-y-6">
          {educationList.map((item) => (
            <div
              key={item.id}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E5DC] hover:border-[#244B3B]/40 transition-all shadow-xs relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E5DC]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#252D27] group-hover:text-[#244B3B] transition-colors">
                      {item.institution}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-medium text-[#244B3B]">
                      <BookOpen className="w-4 h-4" />
                      <span>{item.studyArea}</span>
                    </div>
                  </div>
                </div>

                {item.session && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0E9] border border-[#E4E5DC] text-xs font-mono text-[#244B3B] self-start sm:self-auto font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#244B3B]" />
                    <span>Session: {item.session}</span>
                  </div>
                )}
              </div>

              <div className="pt-6 space-y-4">
                {item.description && (
                  <p className="text-sm sm:text-base text-[#657068] leading-relaxed">
                    {item.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#788078]">
                  {item.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#244B3B]" />
                      <span>{item.location}</span>
                    </div>
                  )}

                  {item.status && (
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#244B3B]" />
                      <span>{item.status}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
