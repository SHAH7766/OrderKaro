'use client';

import React from 'react';
import { MapPin, Search, ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/cartSlice';
import { useRouter } from 'next/navigation';

const MobileHeader = () => {
  const router = useRouter();
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="md:hidden relative -mx-4 -mt-4">
      {/* Light Header Background with Animated Blobs */}
      <div className="relative bg-gradient-to-r from-[#b3dae5] to-[#cec9e5] p-6 pt-12 pb-6 overflow-hidden shadow-sm">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 animate-pulse"></div>

        {/* Top Bar: Location & Profile */}
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => router.push('/')}>
            <div className="w-11 h-11 rounded-full bg-[#9fdbe5] flex items-center justify-center shadow-lg shadow-black/5 active:scale-95 transition-transform duration-300">
              <MapPin className="w-5 h-5 text-[#07b6d4]" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-white/90 font-bold uppercase tracking-widest drop-shadow-sm">
                Delivery To
              </p>
              <div className="flex items-center">
                <p className="text-sm font-extrabold text-white drop-shadow-md">
                  Home • 128 Sky Tower
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {/* Cart Icon */}
            <div
              onClick={() => router.push('/checkout')}
              className="relative w-11 h-11 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg cursor-pointer active:scale-95 transition-transform"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-400 rounded-full border border-white flex items-center justify-center text-[8px] font-black text-white">{cartCount}</span>
              )}
            </div>
            {/* User Avatar */}
            <div className="w-11 h-11 rounded-full bg-orange-200 border-2 border-white shadow-lg overflow-hidden cursor-pointer active:scale-95 transition-transform">
              <img
                src="https://ui-avatars.com/api/?name=User&background=ffd5b4&color=d97706"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="relative z-10 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#619ba8]" />
          <input
            type="text"
            placeholder="Search for shops or products"
            className="w-full bg-white/95 backdrop-blur-xl rounded-full py-4 pr-6 pl-14 shadow-xl shadow-black/5 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-300 font-bold text-[#619ba8] text-sm placeholder:text-[#619ba8]/70"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
