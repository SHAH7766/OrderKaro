'use client';

import React from 'react';
import { ShoppingBasket, Pill, MonitorSmartphone, Utensils, Gift, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const Categories = () => {
  const categoryList = [
    { name: 'Groceries', icon: ShoppingBasket, gradient: 'from-[#00c6ed] to-[#008cb0]', shadow: 'shadow-cyan-500/40' },
    { name: 'Pharmacy', icon: Pill, gradient: 'from-[#ff6bae] to-[#e03a83]', shadow: 'shadow-pink-500/40' },
    { name: 'Electronics', icon: MonitorSmartphone, gradient: 'from-[#8e63fa] to-[#5d31d1]', shadow: 'shadow-purple-500/40' },
    { name: 'Food', icon: Utensils, gradient: 'from-[#f58458] to-[#d45525]', shadow: 'shadow-orange-500/40' },
    { name: 'Gifts', icon: Gift, gradient: 'from-[#2cd9ab] to-[#12a179]', shadow: 'shadow-teal-500/40' },
  ];

  return (
    <section id="categories" className="mb-16">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8 px-2 md:px-0">
          <h3 className="text-24xl md:text-3xl font-black text-gray-900 tracking-tight">Categories</h3>
          <Link href="/" className="flex items-center text-sm md:text-base font-bold text-sky-500 hover:text-blue-600 transition-colors group">
            View All <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollReveal>

      <div className="flex md:grid md:grid-cols-5 md:gap-6 gap-4 overflow-x-auto scrollbar-hide pb-10 pt-2 snap-x px-2">
        {categoryList.map((cat, idx) => (
          <ScrollReveal delay={idx * 100} key={idx} className="snap-center flex-shrink-0 min-w-[120px] md:w-full">
            <div className="flex flex-col items-center justify-center p-6 cursor-pointer group bg-white rounded-[2rem] shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 border border-gray-100 transition-all duration-500 ease-out relative overflow-hidden h-full">
              {/* Subtle background color on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`}></div>

              {/* Icon Container */}
              <div className={`w-16 h-16 md:w-[76px] md:h-[76px] rounded-[1.25rem] bg-gradient-to-br ${cat.gradient} ${cat.shadow} shadow-lg flex items-center justify-center mb-5 transform group-hover:scale-110 group-active:scale-95 transition-all duration-500 relative z-10 border border-white/20`}>
                <cat.icon className="w-8 h-8 md:w-9 md:h-9 text-white relative z-10 group-hover:-rotate-6 transition-transform duration-300 drop-shadow-sm" />

                {/* Glossy top highlight */}
                <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-b from-white/40 to-transparent opacity-60"></div>
              </div>

              <span className="text-sm font-extrabold text-gray-800 md:text-base group-hover:text-gray-900 transition-colors relative z-10 tracking-wide">
                {cat.name}
              </span>

              {/* Decorative background glow on hover */}
              <div className={`absolute -bottom-10 -right-10 w-28 h-28 bg-gradient-to-br ${cat.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Categories;
