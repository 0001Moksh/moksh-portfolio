import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-scroll';
import { useEffect, useState } from 'react';
import {
  getPersonSchema,
  getWebsiteSchema,
  getBreadcrumbSchema,
  getOrganizationSchema,
} from '../config/seoConfig';

/**
 * SchemaInjector: Injects JSON-LD structured data into the page head
 * Automatically injects Person schema and Organization schema
 * Breadcrumb schema can be customized per page
 */
const SchemaInjector = ({ pageKey = 'home', customSchemas = [] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Base schemas that are always injected
  const baseSchemas = [
    getPersonSchema(),
    getWebsiteSchema(),
    getOrganizationSchema(),
  ];

  // Combine with any custom schemas passed in
  const allSchemas = [...baseSchemas, ...customSchemas];

  return (
    <Helmet>
      {allSchemas.map((schema, idx) => (
        <script key={`schema-${idx}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SchemaInjector;
