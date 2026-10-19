import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 relative bg-[#F7F5EF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects-heading"
          title="Selected Projects"
          description="Real-world web applications built with modern frontend tools, responsive design systems, and thoughtful UI/UX."
        />

        {/* Responsive Grid: 3 columns on wide screens, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
