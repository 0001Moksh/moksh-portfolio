// SEO Configuration for Portfolio
// This file contains all SEO metadata and structured data

export const seoConfig = {
  // Base metadata
  baseUrl: "https://mokshbhardwaj.netlify.app",
  siteName: "Moksh Bhardwaj | AI Engineer & Full Stack Developer",
  
  // Person/Author Schema
  author: {
    name: "Moksh Bhardwaj",
    jobTitle: "AI Engineer & Full Stack Developer",
    description: "Building intelligent AI systems and scalable web applications with 3+ years of experience in Machine Learning, Generative AI, and Full Stack Development.",
    email: "mokshbhardwaj2333@gmail.com",
    sameAs: [
      "https://github.com/0001Moksh",
      "https://www.linkedin.com/in/moksh-bhardwaj-0001moksh",
      "https://www.instagram.com/moksh_bhardwaj23/",
      "https://www.youtube.com/@NexYugTech"
    ],
    image: "https://mokshbhardwaj.netlify.app/profile-image.jpg",
  },

  // Pages with metadata
  pages: {
    home: {
      title: "Moksh Bhardwaj | AI Engineer & Full Stack Developer Portfolio",
      description: "Discover Moksh Bhardwaj's portfolio featuring AI/ML projects, full-stack development, and production-ready applications built with modern technologies.",
      keywords: [
        "AI Engineer",
        "Full Stack Developer",
        "Machine Learning",
        "React Developer",
        "Python Developer",
        "Generative AI",
        "Data Science",
        "Web Development"
      ],
    },
    about: {
      title: "About Moksh Bhardwaj | AI Engineer with 3+ Years Experience",
      description: "Learn about Moksh Bhardwaj's background, education, skills, and mission to build intelligent AI systems that solve real-world problems.",
      keywords: [
        "Moksh Bhardwaj background",
        "AI engineer experience",
        "ML specialist",
        "Full stack developer",
        "Zoho developer certified"
      ],
    },
    projects: {
      title: "AI & Full Stack Projects | Moksh Bhardwaj Portfolio",
      description: "Explore 15+ projects including AI chatbots, machine learning models, web applications, and full-stack solutions built with React, Python, Flask, and more.",
      keywords: [
        "AI projects",
        "Machine learning projects",
        "Web development projects",
        "React applications",
        "Python projects",
        "Full stack applications"
      ],
    },
    experience: {
      title: "Technical Skills & Experience | Moksh Bhardwaj",
      description: "Comprehensive overview of 50+ technologies including AI/ML frameworks, web development tools, cloud platforms, and databases used in production projects.",
      keywords: [
        "technical skills",
        "AI/ML technologies",
        "web development stack",
        "programming languages",
        "cloud platforms"
      ],
    },
    contact: {
      title: "Contact Moksh Bhardwaj | AI Engineer & Developer",
      description: "Get in touch with Moksh Bhardwaj for project inquiries, collaborations, or discussions about AI, machine learning, and web development.",
      keywords: [
        "contact",
        "hire AI engineer",
        "collaboration",
        "project inquiry"
      ],
    },
    blog: {
      title: "Blog | AI & Web Development Articles by Moksh Bhardwaj",
      description: "Read articles and insights on AI, machine learning, web development, and technology trends from AI engineer Moksh Bhardwaj.",
      keywords: [
        "AI blog",
        "machine learning articles",
        "web development tips",
        "technology insights"
      ],
    }
  },

  // Open Graph defaults
  og: {
    type: "website",
    image: "https://mokshbhardwaj.netlify.app/og-preview.png",
    imageWidth: 1200,
    imageHeight: 630,
    locale: "en_US",
  },

  // Twitter Card defaults
  twitter: {
    cardType: "summary_large_image",
    handle: "@mokshbhardwaj",
    site: "@mokshbhardwaj",
  },

  // Canonical URLs
  canonicalUrl: (path) => `https://mokshbhardwaj.netlify.app${path}`,

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    }
  },
};

// JSON-LD Schema for Person Profile
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: seoConfig.author.name,
  jobTitle: seoConfig.author.jobTitle,
  url: seoConfig.baseUrl,
  image: seoConfig.author.image,
  email: seoConfig.author.email,
  description: seoConfig.author.description,
  sameAs: seoConfig.author.sameAs,
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Full Stack Development",
    "Web Development",
    "Python Programming",
    "Data Science",
    "Cloud Computing"
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "MDU University",
    url: "https://mdurohtak.ac.in"
  },
  givenName: "Moksh",
  familyName: "Bhardwaj",
});

// JSON-LD Schema for Website
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: seoConfig.baseUrl,
  name: seoConfig.siteName,
  description: seoConfig.pages.home.description,
  creator: {
    "@type": "Person",
    name: seoConfig.author.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${seoConfig.baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

// JSON-LD Schema for BreadcrumbList
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${seoConfig.baseUrl}${item.url}`
  }))
});

// JSON-LD Schema for CreativeWork (Projects)
export const getProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.name,
  description: project.description,
  url: project.liveUrl,
  creator: {
    "@type": "Person",
    name: seoConfig.author.name
  },
  keywords: project.techStack.join(", "),
  programmingLanguage: project.techStack,
  sourceOrganization: {
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.baseUrl
  }
});

// JSON-LD Schema for Organization
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: seoConfig.author.name,
  url: seoConfig.baseUrl,
  logo: seoConfig.author.image,
  sameAs: seoConfig.author.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General",
    email: seoConfig.author.email,
    url: seoConfig.baseUrl + "/contact"
  }
});

export default seoConfig;
