import React from 'react';
import { SEO_CONSTANTS } from '../lib/seo/constants';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'localBusiness' | 'breadcrumb' | 'article' | 'faq';
  data?: any;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data, breadcrumbs }) => {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": SEO_CONSTANTS.SITE_NAME,
          "url": SEO_CONSTANTS.SITE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.DEFAULT_LOGO}`,
            "width": 200,
            "height": 200
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": SEO_CONSTANTS.BUSINESS_PHONE,
            "contactType": "customer service",
            "email": SEO_CONSTANTS.BUSINESS_EMAIL
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IL",
            "addressRegion": "ישראל"
          },
          "sameAs": [
            SEO_CONSTANTS.SOCIAL_LINKS.website,
            SEO_CONSTANTS.SOCIAL_LINKS.instagram,
            SEO_CONSTANTS.SOCIAL_LINKS.whatsapp,
            SEO_CONSTANTS.SOCIAL_LINKS.facebook
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": SEO_CONSTANTS.SITE_NAME,
          "url": SEO_CONSTANTS.SITE_URL,
          "description": SEO_CONSTANTS.SITE_DESCRIPTION,
          "publisher": {
            "@type": "Organization",
            "name": SEO_CONSTANTS.SITE_NAME,
            "logo": {
              "@type": "ImageObject",
              "url": `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.DEFAULT_LOGO}`
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${SEO_CONSTANTS.SITE_URL}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": SEO_CONSTANTS.SITE_NAME,
          "url": SEO_CONSTANTS.SITE_URL,
          "description": SEO_CONSTANTS.SITE_DESCRIPTION,
          "image": `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.DEFAULT_OG_IMAGE}`,
          "logo": `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.DEFAULT_LOGO}`,
          "telephone": SEO_CONSTANTS.BUSINESS_PHONE,
          "email": SEO_CONSTANTS.BUSINESS_EMAIL,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IL",
            "addressRegion": "ישראל"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Israel"
          },
          "serviceType": [
            "אישורי הגעה לאירועים",
            "ניהול אורחים",
            "סידור הושבה",
            "צוות קבלת פנים",
            "עיצוב הזמנות דיגיטליות"
          ],
          "openingHours": "Mo-Su 09:00-18:00"
        };

      case 'breadcrumb':
        if (!breadcrumbs || breadcrumbs.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${SEO_CONSTANTS.SITE_URL}${item.url}`
          }))
        };

      case 'article':
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image ? `${SEO_CONSTANTS.SITE_URL}${data.image}` : `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.DEFAULT_OG_IMAGE}`,
          "author": {
            "@type": "Organization",
            "name": SEO_CONSTANTS.SITE_NAME
          },
          "publisher": {
            "@type": "Organization",
            "name": SEO_CONSTANTS.SITE_NAME,
            "logo": {
              "@type": "ImageObject",
              "url": `${SEO_CONSTANTS.SITE_URL}${SEO_CONSTANTS.DEFAULT_LOGO}`
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${SEO_CONSTANTS.SITE_URL}${data.url}`
          }
        };

      case 'faq':
        if (!data || !data.faqs || data.faqs.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
};

export default StructuredData;
