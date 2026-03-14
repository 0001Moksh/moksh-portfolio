import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import seoConfig, { getPersonSchema, getWebsiteSchema, getBreadcrumbSchema } from '../config/seoConfig';

/**
 * Custom hook for managing page-level SEO metadata
 * @param {string} pageKey - Key from seoConfig.pages
 * @param {object} overrides - Optional overrides for metadata
 */
export const useSEO = (pageKey, overrides = {}) => {
  const pageConfig = seoConfig.pages[pageKey] || {};
  
  const metadata = {
    title: overrides.title || pageConfig.title || seoConfig.siteName,
    description: overrides.description || pageConfig.description || seoConfig.pages.home.description,
    keywords: overrides.keywords || pageConfig.keywords || [],
    image: overrides.image || seoConfig.og.image,
    url: overrides.url || `${seoConfig.baseUrl}${pageKey === 'home' ? '' : `/${pageKey}`}`,
    ...overrides
  };

  return metadata;
};

/**
 * Component for injecting meta tags into page head
 */
export const SEOHelmet = ({ 
  title, 
  description, 
  keywords = [], 
  image, 
  url, 
  pageType = 'website',
  breadcrumbs = [],
  jsonLd = null,
  pageKey = 'home'
}) => {
  // Use useSEO hook to get metadata if not provided
  const seoData = useSEO(pageKey, {
    title,
    description,
    keywords,
    image,
    url
  });

  const fullTitle = seoData.title;
  const fullDescription = seoData.description;
  
  // Combine keywords into a string
  const keywordsString = Array.isArray(seoData.keywords) ? seoData.keywords.join(', ') : seoData.keywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <meta name="author" content={seoConfig.author.name} />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.url || seoConfig.baseUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={seoData.image || seoConfig.og.image} />
      <meta property="og:url" content={seoData.url || seoConfig.baseUrl} />
      <meta property="og:type" content={pageType} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={seoConfig.twitter.cardType} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={seoData.image || seoConfig.og.image} />
      <meta name="twitter:site" content={seoConfig.twitter.site} />
      <meta name="twitter:creator" content={seoConfig.twitter.handle} />

      {/* Robots Meta */}
      <meta name="robots" content={`${seoConfig.robots.index ? 'index' : 'noindex'}, ${seoConfig.robots.follow ? 'follow' : 'nofollow'}`} />
      <meta name="googlebot" content={`${seoConfig.robots.googleBot.index ? 'index' : 'noindex'}, ${seoConfig.robots.googleBot.follow ? 'follow' : 'nofollow'}`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />

      {/* Breadcrumb Schema */}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema(breadcrumbs))}
        </script>
      )}

      {/* Additional JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

/**
 * Hook to add schema.org JSON-LD to page
 */
export const useJsonLd = (schema) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [schema]);
};

/**
 * Generate meta robots tag content
 */
export const getMetaRobots = () => {
  const rules = [];
  if (seoConfig.robots.index) rules.push('index');
  else rules.push('noindex');
  
  if (seoConfig.robots.follow) rules.push('follow');
  else rules.push('nofollow');
  
  if (!seoConfig.robots.nocache) rules.push('nocache');

  return rules.join(', ');
};

/**
 * Format URL for social media sharing
 */
export const formatSocialUrl = (path, platform) => {
  const url = encodeURIComponent(`${seoConfig.baseUrl}${path}`);
  
  switch(platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${url}&text=Check%20out%20this%20amazing%20portfolio`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    case 'whatsapp':
      return `https://wa.me/?text=${url}`;
    default:
      return url;
  }
};

export default useSEO;
