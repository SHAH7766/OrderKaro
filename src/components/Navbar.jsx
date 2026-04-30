'use client';

import React from 'react';
import { ShoppingBasket, Search, MapPin, Bell, ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCartCount, selectCartTotal } from '../redux/cartSlice';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <nav className="hidden md:flex items-center justify-between px-8 py-5 bg-white/70 backdrop-blur-2xl border-b border-white/40 shadow-sm sticky top-0 z-50 transition-all duration-300">

      {/* Logo Section */}
      <div className="flex items-center gap-10">
        <div onClick={() => router.push('/')} className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
            <ShoppingBasket className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-sky-500 transition-colors duration-300">
            Order<span className="text-sky-500 font-light">Karo</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8 ml-4">
          <div className="flex items-center text-sm font-bold text-sky-500 border-b-2 border-sky-500 py-1 cursor-pointer">
            Home
          </div>
          <div className="flex items-center text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors py-1 cursor-pointer">
            Explore
          </div>
          <div className="flex items-center text-sm font-bold text-gray-400 hover:text-gray-800 transition-colors py-1 cursor-pointer">
            Deals
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl px-12">
        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-sky-500 transition-transform duration-300 group-focus-within:scale-110" />
          <input
            type="text"
            placeholder="Search for restaurants, groceries..."
            className="w-full bg-white border-2 border-transparent focus:border-sky-500/20 rounded-full py-3.5 pr-6 pl-14 shadow-sm hover:shadow-md focus:shadow-[0_8px_30px_rgb(14,165,233,0.12)] focus:outline-none transition-all duration-300 font-semibold text-gray-700 text-sm placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <div className="flex items-center bg-gray-50 hover:bg-sky-50 px-4 py-2.5 rounded-2xl cursor-pointer transition-all duration-300 border border-gray-100 hover:border-sky-200 group">
          <MapPin className="w-5 h-5 text-gray-400 group-hover:text-sky-500 mr-3 transition-colors" />
          <div className="text-left">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Delivering to</p>
            <p className="text-sm font-extrabold text-gray-800 group-hover:text-sky-500 transition-colors">128 Sky Tower</p>
          </div>
        </div>

        <button className="relative p-3 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
          <Bell className="w-5 h-5 text-gray-500 group-hover:text-sky-500 transition-colors" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>

        <button
          onClick={() => router.push('/checkout')}
          className="hidden lg:flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-[0_10px_40px_-10px_rgba(14,165,233,0.7)] hover:-translate-y-0.5 transition-all duration-300 group relative"
        >
          <ShoppingCart className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">{cartCount}</span>
          )}
          <span>${cartTotal.toFixed(2)}</span>
        </button>

        <div className="w-12 h-12 rounded-full cursor-pointer overflow-hidden border-2 border-transparent hover:border-sky-500 transition-all duration-300 shadow-inner group p-0.5">
          <div className="w-full h-full rounded-full overflow-hidden bg-orange-100">
            <img src="https://ui-avatars.com/api/?name=User&background=ffd5b4&color=d97706" alt="Avatar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
