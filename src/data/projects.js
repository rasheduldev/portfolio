/**
 * Projects Data Configuration
 * Centralized showcase for verified projects.
 * Live demo and GitHub URLs are left as empty strings until real links are supplied.
 */

export const projectsData = [
  {
    id: "bazar-dor",
    slug: "bazar-dor",
    title: "Bazar-dor",
    subtitle: "Daily Commodity & Market Price Tracker",
    description:
      "A project for displaying daily prices of everyday products and comparing prices across markets.",
    fullDescription:
      "Bazar-dor is a web application built to bring transparency to essential daily commodity rates in Bangladesh. The application organizes market essentials such as rice, lentils, edible oil, vegetables, fish, meat, dairy, and spices into a clean dashboard, highlighting daily price fluctuations and percentage changes so users can stay informed before shopping.",
    image: "/images/bazar-dor.png",
    imageAlt: "Bazar-dor daily commodity market price tracking dashboard",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    features: [
      "Categorized commodity navigation covering food staples (চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, মসলা)",
      "Daily price ticker highlighting real-time price updates and percentage changes",
      "Featured price movement section tracking items with notable daily price increases or decreases",
      "Clean, modern responsive UI tailored for both desktop displays and mobile smartphones",
      "Bengali localization with native numeral and currency formatting (টাকা/কেজি, টাকা/লিটার)",
    ],
    challenges: [
      "Structuring multi-category commodity listings to ensure smooth, responsive navigation on small screens.",
      "Designing an intuitive visual indicator system for price increases and decreases without overwhelming the user.",
    ],
    futureImprovements: [
      "Interactive market comparison allowing users to compare prices between different regional wholesale and retail bazaars.",
      "Historical price trend graphs displaying weekly and monthly price fluctuations.",
      "Community price reporting and crowd-sourced verification mechanisms.",
    ],

    liveUrl: "https://bazar-dor-hazel-two.vercel.app/",
    githubUrl: "https://github.com/rasheduldev/bazar-dor.git",
  },
  {
    id: "fitlog",
    slug: "fitlog",
    title: "FitLog",
    subtitle: "Minimalist Workout & Fitness Logging Application",
    description:
      "A fitness and workout tracking project designed to help gym enthusiasts train with intent and log every set.",
    fullDescription:
      "FitLog is a dark-mode gym companion web application created for focused workout tracking. Built with a distraction-free aesthetic, it provides users with an organized workout library covering major muscle groups, enabling users to plan daily training sessions and monitor their physical progress effectively.",
    image: "/images/fitlog.png",
    imageAlt: "FitLog dark-themed gym companion and workout library dashboard",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Curated workout library covering 12 major lifts across all essential muscle groups",
      "Workout planning module with integrated 'My Plan' and 'Saved' routines",
      "High-contrast dark-mode interface designed for easy readability in gym environments",
      "Clear call-to-actions for browsing exercises and building targeted workout plans",
      "Responsive layout optimized for handheld mobile use during workout sessions",
    ],
    challenges: [
      "Creating an ergonomic mobile-friendly layout that allows fast interaction between workout sets.",
      "Maintaining a clear visual hierarchy with high contrast while avoiding visual fatigue in dark mode.",
    ],
    futureImprovements: [
      "Set, repetition, and weight tracking with persistent local or cloud storage.",
      "Rest timer with audio and vibration alerts between exercise sets.",
      "Progressive overload analytics and volume calculation charts over time.",
    ],
    liveUrl: "https://fitlog-assignment-6-tau.vercel.app/",
    githubUrl: "https://github.com/rasheduldev/fitlog.git",
  },
  {
    id: "bangla-news-24",
    slug: "bangla-news-24",
    title: "Bangla News 24",
    subtitle: "Online News Portal & Editorial Dashboard",
    description:
      "A Bangla news application featuring categorized news feeds, breaking updates, and top stories.",
    fullDescription:
      "Bangla News 24 is a comprehensive Bengali news portal web application. Designed to mimic the rich information architecture of leading online news dailies, it delivers breaking news tickers, top headlines, categorized editorial sections, and a ranked list of most-read stories in a fast, clean interface.",
    image: "/images/bangla-news-24.png",
    imageAlt: "Bangla News 24 portal showing breaking headlines and categorized articles",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Extensive topic navigation spanning Politics, World, Economy, Health, Sports, and Technology",
      "Live breaking news banner ('সর্বশেষ') for time-sensitive news alerts",
      "Lead editorial showcase highlighting primary stories with high-resolution imagery and excerpts",
      "Ranked 'সর্বাধিক পঠিত' (Most Read) sidebar listing top trending articles",
      "Responsive newspaper-style grid layout designed for high legibility across devices",
    ],
    challenges: [
      "Managing complex editorial layouts with multiple content tiers while preserving clean whitespace.",
      "Ensuring optimal typography rendering for Bengali script across different operating systems.",
    ],
    futureImprovements: [
      "Full article reading view with social sharing and bookmarking capabilities.",
      "Search functionality with keyword and date range filters.",
      "Integration with a headless CMS or real-time news API for dynamic content publishing.",
    ],
    liveUrl: "https://bangla-news-24-pi-taupe.vercel.app/",
    githubUrl: "https://github.com/rasheduldev/bangla-news-24.git",
  },
];
