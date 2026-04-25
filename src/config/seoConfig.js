// SEO Configuration for Portfolio
// This file contains all SEO metadata and structured data

export const seoConfig = {
  // Base metadata
  baseUrl: "https://mokshbhardwaj.netlify.app",
  siteName: "Moksh Bhardwaj | Generative AI & Full-Stack AI Engineer",
  
  // Person/Author Schema
  author: {
    name: "Moksh Bhardwaj",
    jobTitle: "Generative AI & Full-Stack AI Engineer",
    description: "Building production-grade AI agents and scalable full-stack AI products with 3+ years of experience in LLM engineering, RAG systems, and end-to-end development.",
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
      title: "Moksh Bhardwaj | Generative AI & Full-Stack AI Engineer",
      description: "Discover Moksh Bhardwaj's portfolio featuring AI agents, LLM applications, and full-stack AI products built for production use.",
      keywords: [
        "Generative AI Engineer",
        "Full-Stack AI Engineer",
        "LLM Engineer",
        "RAG Developer",
        "AI Agent Developer",
        "Generative AI",
        "Full-Stack Development",
        "AI Product Development"
      ],
    },
    about: {
      title: "About Moksh Bhardwaj | Generative AI & Full-Stack AI Engineer",
      description: "Learn about Moksh Bhardwaj's background, education, and mission to build LLM-powered products and scalable AI systems for real-world impact.",
      keywords: [
        "Moksh Bhardwaj background",
        "Generative AI engineer experience",
        "LLM specialist",
        "Full-stack AI engineer",
        "Zoho developer certified"
      ],
    },
    projects: {
      title: "Generative AI & Full-Stack AI Projects | Moksh Bhardwaj",
      description: "Explore 15+ projects including AI agents, LLM applications, RAG systems, and full-stack AI solutions built with React, Python, Flask, and modern toolchains.",
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
      title: "Contact Moksh Bhardwaj | Generative AI & Full-Stack AI Engineer",
      description: "Get in touch with Moksh Bhardwaj for project inquiries, collaborations, or discussions about AI agents, LLM systems, and full-stack AI products.",
      keywords: [
        "contact",
        "hire generative AI engineer",
        "collaboration",
        "project inquiry"
      ],
    },
    blog: {
      title: "Blog | AI & Web Development Articles by Moksh Bhardwaj",
      description: "Read articles and insights on generative AI, LLM engineering, full-stack AI architecture, and practical production workflows.",
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
