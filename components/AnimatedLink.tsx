'use client';

import Link from 'next/link';

interface SimpleLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SimpleLink = ({ href, children, className, onClick }: SimpleLinkProps) => {
  // Check if it's an external link, mailto, or PDF
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.endsWith('.pdf');

  if (isExternal) {
    const isMail = href.startsWith('mailto:');
    const isPdf = href.endsWith('.pdf');
    
    if (isMail) {
      return (
        <a
          href={href}
          className={className}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    
    if (isPdf) {
      return (
        <a
          href={href}
          download
          className={className}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    
    // External link
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // For internal links, use Next.js Link
  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default SimpleLink;