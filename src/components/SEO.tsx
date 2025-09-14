import React from 'react';

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
  title
}) => {
  // Simple SEO component that just sets the title
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default Seo;
