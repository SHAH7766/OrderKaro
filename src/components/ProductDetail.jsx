'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, Heart, Star, Minus, Plus, MapPin, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import ScrollReveal from './ScrollReveal';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { selectSelectedProduct } from '../redux/productSlice';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // Read selected product from Redux (set by TrendingProducts before navigating)
  const selectedProduct = useSelector(selectSelectedProduct);
  const product = selectedProduct || {
    id: 101,
    name: "Organic Avocado",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
    rating: 4.8
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product: { id: product.id, name: product.name, price: product.price, image: product.image }, quantity }));
    toast.success('Added to cart successfully');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    router.push(`/?scrollTo=${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] md:bg-[#f8f9fa] font-sans antialiased text-gray-800 pb-10 md:pb-0">

      {/* Desktop Navbar */}
      <Navbar />

      <main className="max-w-[1200px] mx-auto md:px-8 md:pt-10 md:pb-24">

        {/* Desktop Breadcrumbs */}
        <div className="hidden md:flex items-center gap-2 mb-6 text-sm font-bold text-gray-400">
          <span className="cursor-pointer hover:text-sky-500 transition-colors" onClick={() => router.push('/')}>Home</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-sky-500 transition-colors" onClick={() => scrollToSection('categories')}>Categories</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-sky-500 transition-colors" onClick={() => scrollToSection('trending-products')}>Fresh Products</span>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Mobile Back Button */}
        <div className="md:hidden flex items-center justify-between px-6 pt-6 pb-2 relative z-20">
          <button
            onClick={() => router.back()}
            className="p-3 -ml-3 text-gray-800 bg-white/50 backdrop-blur-md rounded-full shadow-sm hover:bg-gray-50 transition-colors active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>
          <button className="p-3 -mr-3 text-red-500 bg-white/50 backdrop-blur-md rounded-full shadow-sm hover:bg-red-50 transition-colors active:scale-95">
            <Heart className="w-6 h-6 fill-current" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 relative z-10 w-full">

          {/* Left Column: Image Area */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-center">
            <ScrollReveal direction="left" delay={100} className="w-full relative">

              {/* Mobile background curve */}
              <div className="md:hidden absolute top-0 left-0 right-0 h-[45vh] bg-gradient-to-br from-[#f8f6fc] via-[#faebf6] to-[#ebf4fa] rounded-b-[3rem] -z-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"></div>

              <div className="relative w-full aspect-square md:aspect-[4/3] flex flex-col items-center justify-center md:bg-white md:rounded-[2.5rem] md:shadow-sm md:border md:border-gray-100 group">
                <div className="hidden md:block absolute top-6 right-6 z-20">
                  <button className="p-3 text-red-500 bg-red-50 hover:bg-red-100 rounded-full transition-colors active:scale-95">
                    <Heart className="w-6 h-6 fill-current" />
                  </button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[75%] md:w-[85%] max-w-none h-auto object-contain drop-shadow-2xl md:drop-shadow-xl group-hover:scale-105 transition-transform duration-700 -mt-8 md:mt-0 mix-blend-multiply"
                />

                {/* Dots */}
                <div className="flex gap-1.5 md:bottom-6 absolute bottom-[-1.5rem] md:bottom-8 z-20">
                  <div className="w-2 h-2 rounded-full bg-gray-600 transition-all duration-300 transform scale-110"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Details Area */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col md:pt-4">
            <ScrollReveal direction="up" delay={200} className="flex-grow flex flex-col">

              <div className="bg-white md:bg-transparent rounded-t-[3rem] md:rounded-none px-6 pt-8 md:px-0 md:pt-0 -mt-6 md:mt-0 z-20 flex-grow">

                {/* Title & Price */}
                <div className="flex justify-between items-start mb-3 md:mb-6">
                  <div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-2">
                      {product.name}
                    </h1>

                    <div className="flex items-center gap-1.5 mb-2 md:mb-0">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 fill-current" />)}
                      </div>
                      <span className="font-extrabold text-sm md:text-base ml-1 text-gray-900">{product.rating}</span>
                      <span className="text-gray-400 text-xs md:text-sm font-bold hover:text-sky-500 cursor-pointer transition-colors">(124 reviews)</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl md:text-4xl font-black text-sky-500 block tracking-tight">${product.price.toFixed(2)}</span>
                    <span className="text-[10px] md:text-xs uppercase font-extrabold text-gray-400 tracking-wider">{product.unit || 'per piece'}</span>
                  </div>
                </div>

                {/* Details text */}
                <div className="mb-8 md:mb-10">
                  <h4 className="font-black text-gray-900 text-base md:text-xl mb-2 md:mb-4">Details</h4>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed font-semibold md:max-w-[90%]">
                    Creamy, rich in healthy fats, and perfectly ripened. Our organic avocados are sourced directly from sustainable farms in Michoacán. Perfect for guacamole, toast, or smoothies. High in potassium and vitamins K, C, and E.
                  </p>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 md:mb-12">
                  {/* Quantity Selector */}
                  <div className="flex items-center justify-between md:justify-start md:gap-4 border border-gray-100 p-2 pl-6 md:p-3 md:pl-5 rounded-[1.25rem] md:rounded-2xl bg-[#fbfbfd]">
                    <span className="font-extrabold text-sm md:text-base text-gray-900 md:hidden">Quantity</span>
                    <div className="flex items-center gap-4 md:gap-6 bg-white shadow-sm border border-gray-100/50 rounded-xl p-2 px-4 md:py-2.5 relative z-10 w-full md:w-auto justify-between md:justify-center">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-sky-500 hover:text-sky-600 hover:bg-sky-50 p-1 rounded-md active:scale-90 transition-all"><Minus className="w-5 h-5 stroke-[3]" /></button>
                      <span className="font-black text-base md:text-lg w-6 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="text-sky-500 hover:text-sky-600 hover:bg-sky-50 p-1 rounded-md active:scale-90 transition-all"><Plus className="w-5 h-5 stroke-[3]" /></button>
                    </div>
                  </div>

                  {/* Desktop Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    className="hidden md:flex flex-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl py-4 flex items-center justify-center gap-3 shadow-[0_12px_30px_rgba(14,165,233,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(14,165,233,0.4)] active:scale-95 transition-all duration-300 border border-white/20"
                  >
                    <ShoppingBag className="w-5 h-5 mb-0.5" />
                    <span className="font-extrabold text-lg tracking-wide">Add to Cart</span>
                  </button>
                </div>

                {/* Sold By Block */}
                <div className="bg-white/60 md:bg-white backdrop-blur-xl border border-gray-100 md:border-gray-200 rounded-[1.25rem] md:rounded-2xl p-4 flex items-center justify-between mb-8 md:mb-0 shadow-sm md:shadow-md hover:border-sky-200 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3.5 md:gap-5">
                    <div className="w-11 h-11 md:w-14 md:h-14 bg-gray-50 border border-gray-100 md:border-gray-200 rounded-full flex items-center justify-center font-black text-[7px] md:text-[9px] tracking-[0.2em] text-gray-400 shadow-inner group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-500 transition-colors">
                      MARKET
                    </div>
                    <div>
                      <p className="text-[9px] md:text-[10px] text-gray-500 font-extrabold uppercase tracking-[0.1em] mb-0.5 md:mb-1">Sold by</p>
                      <h5 className="font-black text-[13px] md:text-base text-gray-900 group-hover:text-sky-500 transition-colors">Green Life Organic Market</h5>
                      <p className="text-[9px] md:text-[11px] font-black text-sky-500 flex items-center mt-0.5 md:mt-1 tracking-wide">
                        <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 mr-0.5 md:mr-1 inline stroke-[2.5]" /> Downtown Hub (1.2 km away)
                      </p>
                    </div>
                  </div>
                  <button className="text-[11px] md:text-xs font-black text-sky-500 bg-sky-50 group-hover:bg-sky-100 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl transition-colors">
                    Visit
                  </button>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* You might also like */}
        <ScrollReveal direction="up" delay={300}>
          <div className="px-6 md:px-0 pt-0 md:pt-16 pb-32 md:pb-0 relative z-0 mt-8 md:mt-0">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h4 className="font-black text-xl md:text-2xl text-gray-900 tracking-tight">You might also like</h4>
              <button className="text-sm font-black text-sky-500 hover:text-sky-600 transition-colors">See all</button>
            </div>

            <div className="flex md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x -mx-6 px-6 md:mx-0 md:px-0">

              {/* Related Item 1 */}
              <div className="w-[130px] md:w-full min-w-[130px] md:min-w-0 bg-white rounded-[1.5rem] p-3 md:p-4 shadow-sm md:shadow-md border border-gray-50 snap-center flex-shrink-0 cursor-pointer active:scale-95 md:hover:-translate-y-2 transition-all group hover:shadow-lg">
                <div className="bg-[#111] rounded-[1.25rem] h-[100px] md:h-[130px] mb-3 md:mb-4 overflow-hidden flex items-center justify-center p-2">
                  <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=200&q=80" alt="Tomatoes" className="w-[120%] max-w-none h-auto object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg drop-shadow-md" />
                </div>
                <h5 className="text-[11px] md:text-sm font-extrabold text-gray-900 mb-0.5 md:mb-1 truncate group-hover:text-sky-500 transition-colors">Cherry Tomatoes</h5>
                <span className="text-[11px] md:text-sm font-black text-sky-500">$2.99</span>
              </div>

              {/* Related Item 2 */}
              <div className="w-[130px] md:w-full min-w-[130px] md:min-w-0 bg-white rounded-[1.5rem] p-3 md:p-4 shadow-sm md:shadow-md border border-gray-50 snap-center flex-shrink-0 cursor-pointer active:scale-95 md:hover:-translate-y-2 transition-all group hover:shadow-lg">
                <div className="bg-[#f0f2ef] rounded-[1.25rem] h-[100px] md:h-[130px] mb-3 md:mb-4 flex items-center justify-center p-3 overflow-hidden">
                  <img src="/fresh_limes.png" alt="Limes" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
                </div>
                <h5 className="text-[11px] md:text-sm font-extrabold text-gray-900 mb-0.5 md:mb-1 truncate group-hover:text-sky-500 transition-colors">Fresh Limes</h5>
                <span className="text-[11px] md:text-sm font-black text-sky-500">$0.50</span>
              </div>

              {/* Related Item 3 */}
              <div className="w-[130px] md:w-full min-w-[130px] md:min-w-0 bg-white rounded-[1.5rem] p-3 md:p-4 shadow-sm md:shadow-md border border-gray-50 snap-center flex-shrink-0 cursor-pointer active:scale-95 md:hover:-translate-y-2 transition-all group hover:shadow-lg">
                <div className="bg-[#1c2128] rounded-[1.25rem] h-[100px] md:h-[130px] mb-3 md:mb-4 flex items-center justify-center overflow-hidden p-2">
                  <img src="/organic_celery.png" alt="Celery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg drop-shadow-lg" />
                </div>
                <h5 className="text-[11px] md:text-sm font-extrabold text-gray-900 mb-0.5 md:mb-1 truncate group-hover:text-sky-500 transition-colors">Organic Celery</h5>
                <span className="text-[11px] md:text-sm font-black text-sky-500">$1.20</span>
              </div>

              {/* Related Item 4 (Desktop Only) */}
              <div className="hidden md:block w-[130px] md:w-full min-w-[130px] md:min-w-0 bg-white rounded-[1.5rem] p-3 md:p-4 shadow-sm md:shadow-md border border-gray-50 snap-center flex-shrink-0 cursor-pointer active:scale-95 md:hover:-translate-y-2 transition-all group hover:shadow-lg">
                <div className="bg-[#fff4e6] rounded-[1.25rem] h-[100px] md:h-[130px] mb-3 md:mb-4 flex items-center justify-center overflow-hidden p-2">
                  <img src="/fresh_carrots.png" alt="Carrots" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md" />
                </div>
                <h5 className="text-[11px] md:text-sm font-extrabold text-gray-900 mb-0.5 md:mb-1 truncate group-hover:text-sky-500 transition-colors">Fresh Carrots</h5>
                <span className="text-[11px] md:text-sm font-black text-sky-500">$1.80</span>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </main>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="md:hidden sticky bottom-0 left-0 right-0 p-4 pb-6 z-50 bg-white/90 backdrop-blur-xl border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-sky-400 to-[#f551a9] text-white rounded-[2rem] py-4 px-6 flex items-center justify-center gap-3 shadow-[0_12px_35px_rgba(245,81,169,0.35)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,81,169,0.45)] active:scale-95 transition-all duration-300 border border-white/20"
        >
          <ShoppingBag className="w-[22px] h-[22px] mb-0.5" />
          <span className="font-extrabold text-base tracking-wide">Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
        </button>
      </div>

    </div>
  );
};

export default ProductDetail;
