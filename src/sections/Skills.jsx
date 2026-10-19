import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 relative bg-[#F7F5EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="skills-heading"
          title="My Skills"
          description="Technologies and workflow tools I actively use and study to build web interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-white border border-[#E4E5DC] p-6 sm:p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#252D27]">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono font-medium text-[#244B3B] bg-[#E8F0E9] px-2.5 py-0.5 rounded-full border border-[#E4E5DC]">
                    {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#657068] mb-6">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
