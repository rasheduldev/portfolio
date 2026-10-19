import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== ''
  const hasGithubUrl = project.githubUrl && project.githubUrl.trim() !== ''

  return (
    <article className="group flex flex-col rounded-2xl bg-white border border-[#E4E5DC] hover:border-[#244B3B] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md">
      
      {/* Project Image Container with Consistent Aspect Ratio */}
      <Link
        to={`/projects/${project.slug}`}
        className="block relative aspect-[16/10] w-full overflow-hidden bg-[#F0F1E9] border-b border-[#E4E5DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#244B3B]"
        aria-label={`View details for ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt || `${project.title} screenshot`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#252D27]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      </Link>

      {/* Card Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Technology Badges */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#E8F0E9] border border-[#E4E5DC] text-[#244B3B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Project Title */}
          <h3 className="text-xl font-bold text-[#252D27] group-hover:text-[#244B3B] transition-colors mb-2">
            <Link
              to={`/projects/${project.slug}`}
              className="hover:text-[#244B3B] transition-colors focus-visible:outline-none focus-visible:underline"
            >
              {project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-[#657068] leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#E4E5DC] flex items-center justify-between gap-3 flex-wrap">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#252D27] group-hover:text-[#244B3B] transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#244B3B] group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-2">
            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#E8F0E9] text-[#244B3B] hover:bg-[#244B3B] hover:text-white border border-[#E4E5DC] transition-colors"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}

            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#244B3B] text-white text-xs font-bold hover:bg-[#315F4B] transition-colors shadow-xs"
                aria-label={`Live demo for ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}
          </div>
        </div>

      </div>

    </article>
  )
}
