import {
  Code2,
  Palette,
  FileCode2,
  Layers,
  Globe,
  Sparkles,
  Terminal,
  GitBranch,
  FolderGit2,
  Cpu,
} from 'lucide-react'

const iconMap = {
  Code2,
  Palette,
  FileCode2,
  Layers,
  Globe,
  Sparkles,
  Terminal,
  GitBranch,
  FolderGit2,
}

export default function SkillCard({ skill }) {
  const IconComponent = iconMap[skill.icon] || Cpu

  return (
    <div className="group relative p-4 sm:p-5 rounded-xl bg-[#F7F5EF] border border-[#E4E5DC] hover:border-[#244B3B] hover:bg-white hover:shadow-xs transition-all duration-200 flex items-center gap-3.5">
      <div className="p-2.5 rounded-lg bg-[#E8F0E9] group-hover:bg-[#244B3B] group-hover:text-white text-[#244B3B] border border-[#E4E5DC] transition-all duration-200 shrink-0">
        <IconComponent className="w-5 h-5" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-sm sm:text-base font-semibold text-[#252D27] group-hover:text-[#244B3B] transition-colors truncate">
            {skill.name}
          </h4>
          {skill.tag && (
            <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white border border-[#E4E5DC] text-[#788078] group-hover:text-[#244B3B] group-hover:border-[#244B3B]/30 transition-colors shrink-0">
              {skill.tag}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
