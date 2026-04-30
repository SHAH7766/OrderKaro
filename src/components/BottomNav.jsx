'use client';

import React, { useState } from 'react';
import { Home, Search, ShoppingBag, User, Plus } from 'lucide-react';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 bg-white/80 backdrop-blur-2xl border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between relative">

        {/* Navigation Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
              activeTab === item.id ? 'scale-110' : 'opacity-40 grayscale'
            }`}
          >
            <div className={`p-2 rounded-2xl transition-colors duration-300 ${
              activeTab === item.id ? 'bg-sky-500/10' : ''
            }`}>
              <item.icon className={`w-6 h-6 ${
                activeTab === item.id ? 'text-sky-500 stroke-[2.5px]' : 'text-gray-900'
              }`} />
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${
              activeTab === item.id ? 'text-sky-500' : 'text-gray-900'
            }`}>
              {item.label}
            </span>
          </button>
        ))}

        {/* Center "Action" Highlight */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-12">
          <div className="w-14 h-14 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-2xl rotate-45 shadow-lg shadow-sky-500/40 flex items-center justify-center border-4 border-white">
            <Plus className="w-8 h-8 text-white -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
