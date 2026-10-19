import SectionHeading from '../components/SectionHeading'
import { profileData } from '../data/profile'
import { Code2, Target, MapPin, Compass } from 'lucide-react'

export default function About() {
  const { about } = profileData

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 relative bg-[#F0F1E9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-heading"
          title={about.title || 'About Me'}
          description="A quick overview of my background, current learning focus, and goals in web development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-[#657068] text-base sm:text-lg leading-relaxed">
            <p className="text-[#252D27] font-medium text-lg sm:text-xl leading-relaxed">
              {about.introduction}
            </p>
            <p>
              {about.focus}
            </p>
            <p>
              {about.longTermGoal}
            </p>

            {/* Core Values / Approach */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#E4E5DC] shadow-xs">
                <div className="flex items-center gap-2.5 text-[#244B3B] mb-2 font-semibold text-sm">
                  <div className="p-1.5 rounded-md bg-[#E8F0E9]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span>Practical Learning</span>
                </div>
                <p className="text-xs sm:text-sm text-[#657068] leading-relaxed">
                  Deepening frontend skills by constructing functional, real-world web applications.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E4E5DC] shadow-xs">
                <div className="flex items-center gap-2.5 text-[#244B3B] mb-2 font-semibold text-sm">
                  <div className="p-1.5 rounded-md bg-[#E8F0E9]">
                    <Target className="w-4 h-4" />
                  </div>
                  <span>Continuous Growth</span>
                </div>
                <p className="text-xs sm:text-sm text-[#657068] leading-relaxed">
                  Iterating on clean code, responsive design principles, and modern frontend tools.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Context / Facts Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-[#E4E5DC] p-6 sm:p-8 space-y-6 shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#E4E5DC]">
                <div className="p-2 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#252D27]">Profile Details</h3>
              </div>

              <dl className="space-y-4">
                {about.details.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#E4E5DC]/70 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-xs uppercase font-mono tracking-wider text-[#788078]">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-semibold text-[#252D27] sm:text-right">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="pt-2">
                <div className="p-3.5 rounded-xl bg-[#E8F0E9] border border-[#E4E5DC] flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#244B3B] shrink-0" />
                  <span className="text-xs text-[#252D27]">
                    Based in Bangladesh &bull; Available for remote frontend roles & learning opportunities
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
