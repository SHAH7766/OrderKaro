'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import MobileHeader from '../components/MobileHeader';
import CarouselUnderNavbar from '../components/CarouselUnderNavbar';
import Categories from '../components/Categories';
import FeaturedShops from '../components/Shops';
import TrendingProducts from '../components/TrendingProducts';
import BottomNav from '../components/BottomNav';
import { Suspense } from 'react';

// Inner component that reads searchParams
function HomeContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen pb-24 md:pb-12 bg-[#f4f7fb] font-sans antialiased text-gray-800 selection:bg-sky-500/30 relative">
      <Navbar />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-10">
        <MobileHeader />
        <CarouselUnderNavbar />
        <Categories />
        <FeaturedShops />
        <TrendingProducts />
      </main>

      <BottomNav />
    </div>
  );
}

// Wrap in Suspense because useSearchParams requires it in Next.js App Router
export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
