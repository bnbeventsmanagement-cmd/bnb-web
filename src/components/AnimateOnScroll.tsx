import React, { useEffect, useRef } from 'react';
interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
}
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);
  return <div ref={elementRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>;
};
export default AnimateOnScroll;