import React from 'react';
import { SEO_CONSTANTS, PAGE_SEO } from '../utils/seo.ts';
import StructuredData from './StructuredData';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  structuredData?: {
    type: 'organization' | 'website' | 'localBusiness' | 'breadcrumb' | 'article' | 'faq';
    data?: any;
    breadcrumbs?: Array<{ name: string; url: string }>;
  };
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  structuredData
}) => {
  // Generate page-specific data
  const pagePath = url?.replace(SEO_CONSTANTS.SITE_URL, '') || '/';
  const pageSeo = PAGE_SEO[pagePath as keyof typeof PAGE_SEO] || PAGE_SEO.home;
  
  const finalTitle = title || pageSeo.title;
  const finalDescription = description || pageSeo.description;
  const finalKeywords = [...keywords, ...pageSeo.keywords, ...SEO_CONSTANTS.KEYWORDS];
  const finalImage = image || `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.DEFAULT_OG_IMAGE}`;
  const finalUrl = url || `${SEO_CONSTANTS.SITE_URL}${pagePath}`;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <meta name="author" content={SEO_CONSTANTS.SITE_NAME} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={SEO_CONSTANTS.LANGUAGE} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:site_name" content={SEO_CONSTANTS.SITE_NAME} />
      <meta property="og:locale" content={SEO_CONSTANTS.LOCALE} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content={SEO_CONSTANTS.THEME_COLOR} />
      <meta name="msapplication-TileColor" content={SEO_CONSTANTS.THEME_COLOR} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={SEO_CONSTANTS.SITE_NAME} />
      
      {/* Favicon and Icons */}
      <link rel="icon" href={SEO_CONSTANTS.FAVICON} />
      <link rel="apple-touch-icon" href={SEO_CONSTANTS.FAVICON} />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      {structuredData && (
        <StructuredData
          type={structuredData.type}
          data={structuredData.data}
          breadcrumbs={structuredData.breadcrumbs}
        />
      )}
      
      {/* Default Structured Data for Organization */}
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="localBusiness" />
    </>
  );
};

export default Seo;