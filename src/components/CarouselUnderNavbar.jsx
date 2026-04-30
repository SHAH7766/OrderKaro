'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const CarouselUnderNavbar = () => {
  const promos = [
    {
      id: 1,
      title: "50% Off First Order",
      code: "ORDERPRO",
      tag: "Special Offer",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      gradient: "from-[#0a2318] via-[#1b4332]/90",
      tagBg: "bg-[#ff5ca8]",
      tagShadow: "shadow-[0_0_15px_rgba(255,92,168,0.5)]"
    },
    {
      id: 2,
      title: "Summer Splash Sale",
      discount: "Up to 40% Off",
      tag: "Mega Deal",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
      gradient: "from-[#382312] via-[#8c6746]/80",
      tagBg: "bg-sky-500",
      tagShadow: "shadow-[0_0_15px_rgba(14,165,233,0.5)]"
    },
    {
      id: 3,
      title: "Weekend Party Feast",
      discount: "Flat 30% Off",
      tag: "Weekend Special",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      gradient: "from-[#4a0404] via-[#7d1212]/80",
      tagBg: "bg-purple-600",
      tagShadow: "shadow-[0_0_15px_rgba(147,51,234,0.5)]"
    }
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideWidth = () => scrollRef.current ? scrollRef.current.clientWidth : 0;

  const handleScroll = () => {
    if (scrollRef.current) {
      const slideWidth = getSlideWidth();
      if (slideWidth === 0) return;
      const index = Math.round(scrollRef.current.scrollLeft / slideWidth);
      if (index !== activeIndex && index >= 0 && index < promos.length) {
        setActiveIndex(index);
      }
    }
  };

  const scrollToIndex = (idx) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: idx * getSlideWidth(),
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % promos.length;
      scrollToIndex(nextIndex);
      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex, promos.length]);

  return (
    <div className="relative w-full overflow-hidden mt-8 md:mt-0 mb-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory w-full"
        >
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="min-w-full w-full flex-shrink-0 relative rounded-[2rem] overflow-hidden snap-center group cursor-pointer transition-all duration-500 ease-out"
            >
              {/* Dark Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${promo.gradient} to-transparent z-10`}></div>

              {/* Background Image */}
              <img
                src={promo.image}
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />

              {/* Content Container */}
              <div className="relative z-20 p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
                <div className="flex items-center gap-3 w-fit mb-4">
                  <span className={`${promo.tagBg} text-white text-[10px] md:text-sm font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${promo.tagShadow} backdrop-blur-sm`}>
                    {promo.tag}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-black max-w-[90%] md:max-w-[70%] leading-tight mb-6 drop-shadow-2xl">
                  {promo.title}
                </h2>

                <div className="flex items-center gap-3">
                  {promo.code ? (
                    <>
                      <p className="text-white/90 text-sm md:text-base font-semibold">Use code</p>
                      <p className="text-sky-500 font-black text-sm md:text-base bg-white px-4 py-2 rounded-lg shadow-lg border border-white/20 uppercase tracking-widest">
                        {promo.code}
                      </p>
                    </>
                  ) : (
                    <p className="text-white font-bold text-sm md:text-base bg-white/20 backdrop-blur-md px-5 py-2 rounded-xl border border-white/30 uppercase tracking-wider">
                      {promo.discount}
                    </p>
                  )}
                </div>
              </div>

              {/* Hover Arrow Icon */}
              <div className="absolute right-8 bottom-8 w-14 h-14 rounded-full flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <ChevronRight className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3 pb-2 relative z-20">
          {promos.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-emerald-600 w-8' : 'bg-gray-300 w-2 hover:bg-emerald-400'}`}
              onClick={() => {
                setActiveIndex(idx);
                scrollToIndex(idx);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselUnderNavbar;
