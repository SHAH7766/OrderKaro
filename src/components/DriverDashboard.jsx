'use client';

import React, { useEffect } from 'react';
import {
  Bell,
  MapPin,
  Navigation,
  Filter,
  Clock,
  X,
  Hammer,
  LayoutDashboard,
  ReceiptText,
  LineChart,
  CircleUser,
  Plus
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const DriverDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bids = [
    {
      id: 1,
      timeLeft: "14s left",
      category: "PHARMACY",
      title: "Apollo Pharmacy Delivery",
      pickup: "0.8km",
      drop: "2.4km",
      estPayout: "₹65",
      bidAmount: "₹68.00",
      progress: 30,
      color: "pink"
    },
    {
      id: 2,
      timeLeft: "52s left",
      category: "GROCERY",
      title: "Smart Basket - Grocery Hub",
      pickup: "1.2km",
      drop: "4.1km",
      estPayout: "₹112",
      bidAmount: "₹115.00",
      progress: 65,
      color: "cyan"
    },
    {
      id: 3,
      timeLeft: "High Value",
      category: "RESTAURANT",
      title: "The Golden Dragon Express",
      pickup: "0.5km",
      drop: "1.8km",
      estPayout: "₹45",
      bidAmount: "₹48.00",
      progress: 85,
      color: "cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans antialiased text-gray-800 pb-24 md:pb-0">

      <div className="max-w-[1400px] mx-auto md:px-6 md:py-8 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 min-h-screen">

        {/* LEFT COLUMN */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col space-y-6">

          {/* Header */}
          <div className="bg-white md:rounded-3xl p-5 md:p-6 shadow-sm border-b border-gray-100 md:border-none flex items-center justify-between sticky top-0 z-30 md:relative animate-slide-down">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm flex-shrink-0 animate-pulse">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
                  alt="Rider"
                  className="w-full h-full object-cover"
                  onLoad={(e) => e.target.parentElement.classList.remove('animate-pulse')}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[13px] font-black text-gray-800 uppercase tracking-widest leading-none mb-1">Orderkro</h2>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" style={{ animationDuration: '3s' }}></div>
                  <span className="text-sm font-bold text-gray-700">Online • <span className="font-black">₹1,240.00</span></span>
                </div>
              </div>
            </div>
            <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell className="w-5 h-5 text-gray-700" />
              <div className="absolute top-2 right-2.5 w-2 h-2 bg-pink-500 rounded-full border-2 border-gray-50"></div>
            </button>
          </div>

          {/* Map Area */}
          <div className="px-5 md:px-0 relative z-10 w-full animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="w-full h-[200px] md:h-[260px] bg-sky-100 rounded-[2rem] overflow-hidden relative shadow-inner border border-sky-200/50 group hover:shadow-sky-200/40 transition-shadow duration-500">
              {/* Fake Map Grid Background */}
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#add8e6 1px, transparent 1px), linear-gradient(90deg, #add8e6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute inset-0 bg-sky-200 opacity-20"></div>

              {/* Map Route SVG */}
              <svg className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out" xmlns="http://www.w3.org/2000/svg">
                <path d="M 50,150 Q 120,100 200,80 T 350,120" fill="none" stroke="#0ea5e9" strokeWidth="4" strokeDasharray="6 6" className="opacity-60" />
              </svg>

              {/* Map Center Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center animate-float">
                <div className="w-10 h-10 bg-sky-500/20 rounded-full animate-ping absolute"></div>
                <div className="w-6 h-6 bg-sky-500 border-2 border-white rounded-full shadow-lg relative z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute -top-8 bg-white px-3 py-1.5 rounded-xl shadow-md font-bold text-xs text-gray-800 flex items-center gap-1.5 min-w-max">
                  <span className="text-gray-400 text-[10px]">Mumbai</span>
                </div>
              </div>

              {/* Map Floating Pills */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-[11px] font-bold text-sky-500 animate-float" style={{ animationDelay: '500ms' }}>
                <Navigation className="w-3 h-3" /> Near Bandra West
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-[11px] font-bold text-gray-600 animate-float" style={{ animationDelay: '1000ms' }}>
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Low Traffic
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="px-5 md:px-0 grid grid-cols-3 gap-3 md:gap-4 z-10">
            <div className="bg-[#e4fcff] border border-sky-100 rounded-3xl p-4 flex flex-col justify-center shadow-sm animate-slide-up hover:shadow-md hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: '200ms' }}>
              <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider mb-1">Nearby</span>
              <span className="text-sky-500 font-black text-sm md:text-base leading-tight">12<br />Orders</span>
            </div>
            <div className="bg-[#e4fcff] border border-sky-100 rounded-3xl p-4 flex flex-col justify-center shadow-sm animate-slide-up hover:shadow-md hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: '300ms' }}>
              <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider mb-1">Avg. Fare</span>
              <span className="text-sky-500 font-black text-sm md:text-base leading-tight"><br />₹75.50</span>
            </div>
            <div className="bg-[#e4fcff] border border-sky-100 rounded-3xl p-4 flex flex-col justify-center shadow-sm animate-slide-up hover:shadow-md hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: '400ms' }}>
              <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider mb-1">Expected</span>
              <span className="text-sky-500 font-black text-sm md:text-base leading-tight">High<br />Demand</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Bids */}
        <div className="md:col-span-7 lg:col-span-8 px-5 md:px-0 flex flex-col h-full mt-4 md:mt-0">

          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-lg md:text-2xl font-black text-gray-900 tracking-tight">Available Bids</h3>
            <button className="flex items-center gap-1.5 text-sky-500 text-sm font-bold hover:bg-sky-50 px-3 py-1.5 rounded-full transition-colors">
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>

          <div className="space-y-4 md:space-y-5 flex-1 md:overflow-y-auto md:pr-4 md:-mr-4 scrollbar-hide">
            {bids.map((bid, idx) => (
              <div
                key={bid.id}
                className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100/60 hover:border-sky-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transform hover:-translate-y-1 transition-all duration-300 flex flex-col animate-slide-up group"
                style={{ animationDelay: `${400 + (idx * 150)}ms` }}
              >
                {/* Bid Top Row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`px-2 py-1 rounded-md flex items-center gap-1 ${bid.color === 'pink' ? 'bg-pink-100 text-pink-600' : 'bg-sky-100 text-sky-500'}`}>
                      <Clock className="w-3 h-3 stroke-[3]" />
                      <span className="text-[10px] font-black uppercase tracking-wider">{bid.timeLeft}</span>
                    </div>
                    <span className="text-gray-300 font-bold text-xs">•</span>
                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{bid.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider mb-0.5 group-hover:text-sky-400 transition-colors">Est. Payout</p>
                    <p className="text-lg md:text-xl font-black text-sky-500 leading-none group-hover:scale-105 origin-right transition-transform">{bid.estPayout}</p>
                  </div>
                </div>

                <h4 className="text-[17px] md:text-lg font-black text-gray-900 leading-tight mb-1">{bid.title}</h4>
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-500 font-bold mb-4">
                  <Navigation className="w-3 h-3 text-gray-400" />
                  <span>Pickup: {bid.pickup}</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <span>Drop: {bid.drop}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-100 rounded-full mb-5 overflow-hidden">
                  <div
                    className={`h-full rounded-full animate-progress ${bid.color === 'pink' ? 'bg-pink-500' : 'bg-sky-500'}`}
                    style={{ width: `${bid.progress}%` }}
                  ></div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 md:gap-4 mt-auto">
                  <button className="relative overflow-hidden flex-1 bg-gradient-to-r from-[#0caadc] to-[#e02673] text-white rounded-[1.25rem] md:rounded-[1.5rem] py-2.5 md:py-3.5 px-3 md:px-6 flex items-center justify-center gap-1.5 md:gap-2 shadow-[0_8px_20px_rgba(224,38,115,0.25)] hover:shadow-[0_12px_25px_rgba(224,38,115,0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300 group/btn">
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:animate-shimmer skew-x-12"></div>
                    <Hammer className="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10" />
                    <span className="font-black text-[13px] md:text-[15px] tracking-wide relative z-10">Bid Now: {bid.bidAmount}</span>
                  </button>
                  <button className="w-11 h-11 md:w-14 md:h-14 bg-gray-50 hover:bg-red-50 border border-gray-100/50 hover:border-red-100 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 active:scale-90">
                    <X className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-[70px] bg-white border-t border-gray-100 flex items-center justify-between px-6 pb-2 z-50">

        <button className="flex flex-col items-center justify-center gap-1 w-12 group cursor-pointer">
          <LayoutDashboard className="w-6 h-6 text-[#0caadc]" />
          <span className="text-[10px] font-extrabold text-[#0caadc] transition-colors">Bids</span>
        </button>

        <button className="flex flex-col items-center justify-center gap-1 w-12 group cursor-pointer mr-6">
          <ReceiptText className="w-6 h-6 text-gray-400 group-hover:text-[#0caadc] transition-colors" />
          <span className="text-[10px] font-extrabold text-gray-400 group-hover:text-[#0caadc] transition-colors">History</span>
        </button>

        {/* Center Floating Button */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <button className="w-[58px] h-[58px] bg-[#0caadc] rounded-full shadow-[0_10px_25px_rgba(12,170,220,0.4)] flex items-center justify-center text-white border-[3px] border-white hover:scale-105 active:scale-95 transition-transform">
            <Plus className="w-8 h-8 stroke-[2]" />
          </button>
        </div>

        <button className="flex flex-col items-center justify-center gap-1 w-12 group cursor-pointer ml-6">
          <LineChart className="w-6 h-6 text-gray-400 group-hover:text-[#0caadc] transition-colors" />
          <span className="text-[10px] font-extrabold text-gray-400 group-hover:text-[#0caadc] transition-colors">Earnings</span>
        </button>

        <button className="flex flex-col items-center justify-center gap-1 w-12 group cursor-pointer">
          <CircleUser className="w-6 h-6 text-gray-400 group-hover:text-[#0caadc] transition-colors" />
          <span className="text-[10px] font-extrabold text-gray-400 group-hover:text-[#0caadc] transition-colors">Profile</span>
        </button>

      </div>

    </div>
  );
};

export default DriverDashboard;
