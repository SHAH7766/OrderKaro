'use client';

import React from 'react';
import { Star, MapPin, ChevronRight, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FeaturedShops = () => {
  const shops = [
    {
      id: 1,
      name: "Fresh Mart Express",
      category: "Groceries",
      rating: 4.8,
      distance: "1.2 km",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=400&q=80",
      tagColor: "text-emerald-600 bg-emerald-50",
      accent: "group-hover:text-emerald-500",
      btnHover: "group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:shadow-[0_10px_20px_-10px_rgba(16,185,129,0.5)]"
    },
    {
      id: 2,
      name: "Pure Dairy Hub",
      category: "Dairy & Eggs",
      rating: 4.9,
      distance: "0.8 km",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=400&q=80",
      tagColor: "text-blue-600 bg-blue-50",
      accent: "group-hover:text-blue-500",
      btnHover: "group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.5)]"
    },
    {
      id: 3,
      name: "Fresh Meet",
      category: "Meat",
      rating: 4.7,
      distance: "3.5 km",
      image: "/fresh_meet_picture.png",
      tagColor: "text-rose-600 bg-rose-50",
      accent: "group-hover:text-rose-500",
      btnHover: "group-hover:from-rose-500 group-hover:to-pink-500 group-hover:shadow-[0_10px_20px_-10px_rgba(244,63,94,0.5)]"
    },
    {
      id: 4,
      name: "Bake & Cake",
      category: "Bakery",
      rating: 4.6,
      distance: "2.1 km",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80",
      tagColor: "text-amber-600 bg-amber-50",
      accent: "group-hover:text-amber-500",
      btnHover: "group-hover:from-amber-500 group-hover:to-orange-500 group-hover:shadow-[0_10px_20px_-10px_rgba(245,158,11,0.5)]"
    }
  ];

  return (
    <section className="mb-16">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8 px-2 md:px-0">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Featured Shops</h3>
          <a href="#" className="flex items-center text-sm font-bold text-sky-500 hover:text-sky-600 transition-colors group">
            View All <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </ScrollReveal>

      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-8 snap-x px-2 pt-2">
        {shops.map((shop, idx) => (
          <ScrollReveal delay={idx * 150} key={shop.id} className="min-w-[280px] w-[280px] md:w-full md:min-w-0 flex-shrink-0 snap-center h-full">
            <div className="h-full bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col group relative">
              {/* Shop Image Container */}
              <div className="relative h-48 overflow-hidden rounded-t-[2rem]">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-gray-900 font-bold text-xs flex items-center shadow-[0_8px_16px_rgba(0,0,0,0.1)] border border-white/50 z-20">
                  {shop.rating} <Star className="w-3.5 h-3.5 ml-1 text-amber-400 fill-current" />
                </div>
              </div>

              {/* Shop Details */}
              <div className="p-6 flex flex-col flex-grow bg-white z-10 relative">
                <div className="flex justify-between items-start mb-2">
                  <h4 className={`font-black text-gray-900 text-xl tracking-tight transition-colors duration-300 ${shop.accent}`}>
                    {shop.name}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-widest ${shop.tagColor}`}>
                    {shop.category}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-500 font-bold flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> {shop.distance}
                  </span>
                </div>

                <button className={`mt-auto w-full bg-gray-50 border border-gray-100 text-gray-900 font-bold py-3.5 rounded-xl group-hover:bg-gradient-to-r group-hover:border-transparent group-hover:text-white transition-all duration-300 group-active:scale-95 text-sm uppercase tracking-wide shadow-sm ${shop.btnHover}`}>
                  Visit Shop
                </button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default FeaturedShops;
