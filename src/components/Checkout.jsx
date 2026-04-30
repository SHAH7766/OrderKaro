'use client';

import React, { useEffect } from 'react';
import { ChevronLeft, MapPin, CreditCard, CheckCircle2, PlusCircle, ChevronRight, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import ScrollReveal from './ScrollReveal';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, removeFromCart } from '../redux/cartSlice';

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotal);
  const deliveryFee = 2.00;
  const grandTotal = cartTotalAmount + deliveryFee;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#def5f9] via-[#e8ebfb] to-[#fde2ee] md:bg-[#f4f7fb] font-sans antialiased text-gray-800 flex flex-col">

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      <main className="flex-1 max-w-[1200px] mx-auto w-full md:px-8 md:py-10">

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-6 pt-6 pb-6 relative z-20">
          <button
            onClick={() => router.back()}
            className="p-2 -ml-2 text-gray-800 hover:bg-white/20 rounded-full transition-colors active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-lg font-bold text-gray-900 absolute left-1/2 -translate-x-1/2">Checkout</h1>
          <div className="w-8"></div>
        </div>

        {/* Desktop Title Header */}
        <div className="hidden md:flex items-center gap-4 mb-8">
          <button
            onClick={() => router.back()}
            className="p-3 text-gray-800 bg-white shadow-sm hover:shadow-md rounded-full transition-all active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 px-6 md:px-0">

          {/* Left Column: Address and Payment */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-8">

            {/* Delivery Details */}
            <ScrollReveal direction="left" delay={100}>
              <section>
                <div className="flex items-center justify-between mb-3 px-2">
                  <h4 className="text-[11px] md:text-xs font-black text-[#5baeb4] uppercase tracking-[0.15em]">Deliver To</h4>
                  <button className="text-sm font-bold text-[#0096c7] hover:text-[#0077b6] transition-colors">Change</button>
                </div>
                <div className="bg-white/60 md:bg-white backdrop-blur-xl border border-white/50 md:border-gray-100 rounded-[2rem] p-4 lg:p-5 flex items-center gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] md:shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#def5f9] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0096c7]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-extrabold text-gray-900 text-[15px] lg:text-base mb-0.5 truncate">Home (Default)</h5>
                    <p className="text-[#6c9fa3] text-[13px] font-semibold truncate leading-snug">21, Kensington Gardens, New Delhi, 110023</p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Payment Method */}
            <ScrollReveal direction="left" delay={200}>
              <section>
                <div className="flex items-center justify-between mb-3 px-2">
                  <h4 className="text-[11px] md:text-xs font-black text-[#5baeb4] uppercase tracking-[0.15em]">Payment Method</h4>
                  <button className="text-sm font-bold text-[#0096c7] hover:text-[#0077b6] transition-colors">Edit</button>
                </div>
                <div className="bg-white/60 md:bg-white backdrop-blur-xl border border-white/50 md:border-gray-100 rounded-[2rem] p-4 lg:p-5 flex items-center gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] md:shadow-sm cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-[#fde2ee] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <CreditCard className="w-6 h-6 text-[#f551a9]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-extrabold text-gray-900 text-[15px] lg:text-base mb-0.5 truncate flex items-center gap-2">Visa •••• 4242</h5>
                    <p className="text-[#6c9fa3] text-[12px] font-semibold truncate leading-snug">Expires 12/26</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-gray-300 stroke-[1.5]" />
                </div>
              </section>
            </ScrollReveal>

            {/* Add delivery note */}
            <ScrollReveal direction="up" delay={300}>
              <button className="w-full mt-2 lg:mt-6 py-4 flex items-center justify-center gap-2 border-[1.5px] border-dashed border-[#84dcc6] text-[#0096c7] font-extrabold rounded-[2rem] hover:bg-white/50 transition-colors active:scale-[0.98]">
                <PlusCircle className="w-5 h-5 stroke-[2.5]" />
                Add a delivery note
              </button>
            </ScrollReveal>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 flex flex-col pb-8 lg:pb-0 z-10 w-full relative">

            <ScrollReveal direction="right" delay={200} className="flex-1 flex flex-col">
              <div className="bg-white/80 md:bg-white backdrop-blur-xl border border-white md:border-gray-100 rounded-[2.5rem] lg:rounded-[3rem] p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.03)] md:shadow-md flex-1">

                <h2 className="text-[22px] lg:text-2xl font-black text-gray-900 mb-6 tracking-tight">Order Summary</h2>

                {/* Items List */}
                <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                  {cartItems.length === 0 ? (
                    <p className="text-gray-500 font-semibold py-4">Your cart is empty.</p>
                  ) : (
                    cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-black text-[15px] lg:text-base text-gray-900 leading-tight mb-1">{item.name}</h4>
                          <p className="text-[#6c9fa3] font-bold text-[13px]">{item.quantity} x ${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-[60px] h-[38px] lg:w-[70px] lg:h-[44px] rounded-2xl overflow-hidden bg-white border border-gray-100 flex items-center justify-center p-1">
                            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                          </div>
                          <span className="font-black text-gray-900 lg:text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                          <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-2 text-red-500 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Subtotals */}
                <div className="border-t border-gray-100/80 md:border-gray-100 pt-6 space-y-3 mb-6">
                  <div className="flex items-center justify-between text-[14px] lg:text-base">
                    <span className="font-bold text-[#5baeb4]">Subtotal</span>
                    <span className="font-bold text-gray-800">${cartTotalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[14px] lg:text-base">
                    <span className="font-bold text-[#5baeb4]">Delivery Fee</span>
                    <span className="font-bold text-gray-800">${cartItems.length > 0 ? deliveryFee.toFixed(2) : "0.00"}</span>
                  </div>
                </div>

                {/* Total Amount */}
                <div className="flex items-center justify-between pt-1 mb-8">
                  <span className="text-xl lg:text-2xl font-black text-gray-900 tracking-tight">Total Amount</span>
                  <span className="text-xl lg:text-2xl font-black text-[#0096c7] tracking-tight">${cartItems.length > 0 ? grandTotal.toFixed(2) : "0.00"}</span>
                </div>

              </div>
            </ScrollReveal>

            {/* Confirm Order */}
            <ScrollReveal direction="up" delay={400}>
              <div className="bg-white/80 md:bg-white backdrop-blur-xl border border-white md:border-gray-100 rounded-[2.5rem] p-5 md:p-6 mt-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:shadow-lg">
                <button
                  disabled={cartItems.length === 0}
                  className={`w-full bg-gradient-to-r from-[#0caadc] to-[#f551a9] text-white rounded-[2rem] py-4 px-6 flex items-center justify-between shadow-[0_8px_25px_rgba(245,81,169,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(245,81,169,0.35)] active:scale-95 transition-all duration-300 ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="font-extrabold text-base lg:text-lg tracking-wide ml-2">Confirm Order</span>
                  <div className="flex items-center gap-1">
                    <span className="font-black text-base lg:text-lg">${cartItems.length > 0 ? grandTotal.toFixed(2) : "0.00"}</span>
                    <ChevronRight className="w-5 h-5 stroke-[3]" />
                  </div>
                </button>
                <p className="text-[8px] lg:text-[10px] text-gray-400 font-extrabold uppercase tracking-widest text-center mt-5 leading-relaxed">
                  BY CONFIRMING, YOU AGREE TO OUR TERMS OF<br />SERVICE
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </main>

    </div>
  );
};

export default Checkout;
