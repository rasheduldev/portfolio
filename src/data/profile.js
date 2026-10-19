/**
 * Profile and Portfolio Data Configuration
 * Centralized personal information, navigation, and contact links.
 * All unknown or placeholder URLs are set to empty strings so no fake details appear publicly.
 */

export const profileData = {
  // Brand & Identity
  brand: {
    name: "Rashed",
    fullName: "Rashedul Alam Rashed",
    title: "Aspiring Frontend Developer",
    statusText: "Open to learning & opportunities",
    location: "Bangladesh",
  },

  // Hero Section Copy
  hero: {
    introLabel: "HELLO, I'M",
    fullName: "Rashedul Alam Rashed",
    role: "Aspiring Frontend Developer",
    shortBio:
      "Passionate about building responsive, modern, and accessible web experiences. Currently deepening my frontend foundations and building real-world applications with React and Next.js.",
    image: {
      src: "/images/profile.png",
      alt: "Portrait of Rashedul Alam Rashed",
    },
  },

  // About Section Data
  about: {
    title: "About Me",
    introduction:
      "My name is Rashedul Alam Rashed. I am an aspiring frontend developer from Bangladesh. I am learning web development and building real projects to improve my skills and deepen my practical understanding.",
    focus:
      "My current focus includes JavaScript, React, Next.js, responsive UI development, and modern web technologies. I enjoy translating ideas into clean, usable interfaces that work smoothly across all screen sizes.",
    longTermGoal:
      "My long-term goal is to become a full-stack web developer, expanding from high-quality user interfaces into robust backend architectures and scalable full-stack applications.",
    details: [
      { label: "Name", value: "Rashedul Alam Rashed" },
      { label: "Location", value: "Bangladesh" },
      { label: "Primary Focus", value: "Frontend Web Development" },
      { label: "Core Stack", value: "React, Next.js, JavaScript, Tailwind CSS" },
      { label: "Goal", value: "Full-Stack Web Development" },
    ],
  },

  // Primary Call-To-Action buttons
  cta: {
    primaryText: "Explore My Work",
    primaryHref: "#projects",
    secondaryText: "Download Resume",
    contactText: "Let's Talk",
    contactHref: "#contact",

    // Resume Configuration
    resume: {
      url: "", // e.g. "/resume.pdf"
      isAvailable: false,
      placeholderMessage:
        "My updated resume is currently being finalized. In the meantime, explore my projects below or get in touch!",
    },
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  // Social Links
  // Leave empty strings until real profile URLs are supplied; links will only render when configured.
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/rasheduldev", // e.g. "https://github.com/your-username"
      ariaLabel: "Visit Rashedul's GitHub profile",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rashedul-alam-rashed/", // e.g. "https://linkedin.com/in/your-username"
      ariaLabel: "Visit Rashedul's LinkedIn profile",
    },
  ],

  // Contact Information
  // Leave empty strings until real contact details are configured.
  contactInfo: {
    email: "rashedulalam2k04@gmail.com", // e.g. "rashed@example.com"
    phone: "", // e.g. "+8801XXXXXXXXX"
    whatsapp: "", // e.g. "https://wa.me/8801XXXXXXXXX"
    location: "Bangladesh",
  },
};
