import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projects'
import NotFound from './NotFound'
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ChevronRight,
} from 'lucide-react'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projectsData.find((p) => p.slug === slug)

  // If the project slug does not match any verified project, render NotFound
  if (!project) {
    return <NotFound />
  }

  const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== ''
  const hasGithubUrl = project.githubUrl && project.githubUrl.trim() !== ''

  // Find adjacent projects for next/previous navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null

  return (
    <main id="main-content" className="flex-1 py-10 sm:py-16 lg:py-20 bg-[#F7F5EF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#657068]">
            <Link
              to="/"
              className="hover:text-[#244B3B] transition-colors focus-visible:underline"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#788078]/40" />
            <Link
              to="/#projects"
              className="hover:text-[#244B3B] transition-colors focus-visible:underline"
            >
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#788078]/40" />
            <span className="text-[#252D27] font-semibold truncate">{project.title}</span>
          </div>

          <div className="mt-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#657068] hover:text-[#244B3B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </nav>

        {/* Project Header */}
        <header className="mb-10 sm:mb-12">
          {project.subtitle && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0E9] border border-[#E4E5DC] text-xs font-semibold text-[#244B3B] tracking-wider uppercase mb-4">
              <span>{project.subtitle}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#252D27] mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#657068] leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs uppercase font-mono tracking-wider text-[#788078] mr-2">
                Tech Stack:
              </span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white border border-[#E4E5DC] text-[#252D27] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Action Links (Live Demo / GitHub) */}
          {(hasLiveUrl || hasGithubUrl) && (
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E4E5DC]">
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl bg-[#244B3B] text-white hover:bg-[#315F4B] transition-all shadow-xs active:scale-95"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>
              )}

              {hasGithubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-white text-[#252D27] border border-[#E4E5DC] hover:border-[#244B3B] hover:text-[#244B3B] hover:bg-[#E8F0E9]/50 transition-all shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>View Repository</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Large Project Screenshot */}
        <figure className="mb-14 sm:mb-16">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#E4E5DC] shadow-xs relative aspect-[16/10] sm:aspect-[16/9]">
            <img
              src={project.image}
              alt={project.imageAlt || `${project.title} detailed screenshot`}
              className="w-full h-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="mt-3 text-xs text-center text-[#788078]">
            {project.imageAlt || `Screenshot view of ${project.title}`}
          </figcaption>
        </figure>

        {/* Detailed Sections Grid */}
        <div className="space-y-12">
          
          {/* Overview & Full Description */}
          <section
            aria-labelledby="overview-heading"
            className="rounded-2xl bg-white border border-[#E4E5DC] p-6 sm:p-8 shadow-xs"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC]">
                <Layers className="w-5 h-5" />
              </div>
              <h2 id="overview-heading" className="text-xl sm:text-2xl font-bold text-[#252D27]">
                Project Overview
              </h2>
            </div>
            <p className="text-[#657068] text-base sm:text-lg leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </section>

          {/* Key Features (Verified) */}
          {project.features && project.features.length > 0 && (
            <section
              aria-labelledby="features-heading"
              className="rounded-2xl bg-white border border-[#E4E5DC] p-6 sm:p-8 shadow-xs"
            >
              <h2
                id="features-heading"
                className="text-xl sm:text-2xl font-bold text-[#252D27] mb-6 flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#244B3B]" />
                <span>Verified Features & Capabilities</span>
              </h2>

              <ul className="grid grid-cols-1 gap-3.5">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F0F1E9]/60 border border-[#E4E5DC] text-sm sm:text-base text-[#252D27]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#244B3B] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technical Challenges Encountered */}
          {project.challenges && project.challenges.length > 0 && (
            <section
              aria-labelledby="challenges-heading"
              className="rounded-2xl bg-white border border-[#E4E5DC] p-6 sm:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC]">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h2 id="challenges-heading" className="text-xl sm:text-2xl font-bold text-[#252D27]">
                  Technical Challenges & Solutions
                </h2>
              </div>

              <div className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F0F1E9]/60 border border-[#E4E5DC] text-sm text-[#657068] leading-relaxed"
                  >
                    {challenge}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Future Improvements */}
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <section
              aria-labelledby="future-heading"
              className="rounded-2xl bg-white border border-[#E4E5DC] p-6 sm:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 id="future-heading" className="text-xl sm:text-2xl font-bold text-[#252D27]">
                  Future Improvements & Roadmap
                </h2>
              </div>

              <ul className="space-y-3">
                {project.futureImprovements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F0F1E9]/60 border border-[#E4E5DC] text-sm text-[#657068]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#244B3B] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>

        {/* Adjacent Project Navigation */}
        <footer className="mt-16 pt-8 border-t border-[#E4E5DC] flex items-center justify-between gap-4 flex-wrap">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start gap-1 p-4 rounded-xl bg-white border border-[#E4E5DC] hover:border-[#244B3B] hover:shadow-xs transition-all max-w-[240px]"
            >
              <span className="text-[11px] font-mono text-[#788078] group-hover:text-[#244B3B] transition-colors flex items-center gap-1">
                &larr; Previous Project
              </span>
              <span className="text-sm font-bold text-[#252D27] truncate w-full">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/#projects"
            className="px-4 py-2.5 rounded-xl bg-[#E8F0E9] border border-[#E4E5DC] text-xs font-semibold text-[#244B3B] hover:bg-[#244B3B] hover:text-white transition-colors"
          >
            All Projects
          </Link>

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end gap-1 p-4 rounded-xl bg-white border border-[#E4E5DC] hover:border-[#244B3B] hover:shadow-xs transition-all max-w-[240px] text-right"
            >
              <span className="text-[11px] font-mono text-[#788078] group-hover:text-[#244B3B] transition-colors flex items-center gap-1">
                Next Project &rarr;
              </span>
              <span className="text-sm font-bold text-[#252D27] truncate w-full">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </footer>

      </div>
    </main>
  )
}
