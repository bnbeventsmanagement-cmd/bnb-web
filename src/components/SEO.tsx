import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  og?: {
    type?: string;
  };
  noIndex?: boolean;
  structuredData?: object | object[];
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  image = '/og-default.jpg',
  og = { type: 'website' },
  noIndex = false,
  structuredData
}) => {
  const fullImageUrl = image.startsWith('http') ? image : `https://www.bnb-rsvp.co.il${image}`;
  const fullCanonicalUrl = canonical ? `https://www.bnb-rsvp.co.il${canonical}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Hreflang */}
      {fullCanonicalUrl && (
        <link rel="alternate" hrefLang="he-IL" href={fullCanonicalUrl} />
      )}
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={og.type} />
      <meta property="og:site_name" content="B&B אישורי הגעה" />
      <meta property="og:locale" content="he_IL" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Mobile optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="B&B אישורי הגעה" />
      
      {/* Accessibility for mobile */}
      <meta name="color-scheme" content="light dark" />
      <meta name="supported-color-schemes" content="light dark" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;