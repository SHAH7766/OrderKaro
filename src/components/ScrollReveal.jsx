'use client';

import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const transformStart = direction === "up" ? "translate-y-16 scale-95" :
                         direction === "left" ? "translate-x-12" :
                         direction === "right" ? "-translate-x-12" :
                         "scale-90";

  return (
    <div
      ref={domRef}
      className={`transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : `opacity-0 ${transformStart}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
