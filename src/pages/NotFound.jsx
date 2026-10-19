import { Link } from 'react-router-dom'
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5EF]">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-white border border-[#E4E5DC] shadow-xs">
        
        <div className="w-16 h-16 rounded-2xl bg-[#E8F0E9] text-[#244B3B] border border-[#E4E5DC] mx-auto flex items-center justify-center">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#244B3B] bg-[#E8F0E9] px-3 py-1 rounded-full border border-[#E4E5DC]">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252D27] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#657068] leading-relaxed">
            The page or project you requested does not exist or may have been moved.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#244B3B] text-white text-sm font-bold hover:bg-[#315F4B] transition-all shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <Link
            to="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#252D27] border border-[#E4E5DC] hover:border-[#244B3B] hover:text-[#244B3B] text-sm font-medium transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>

      </div>
    </main>
  )
}
