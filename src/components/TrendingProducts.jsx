'use client';

import React from 'react';
import { Plus, Star } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ScrollReveal from './ScrollReveal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { setSelectedProduct } from '../redux/productSlice';
import toast from 'react-hot-toast';

const TrendingProducts = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const products = [
    {
      id: 1,
      name: "Organic Avocado",
      price: 4.50,
      unit: "per kg",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=400&q=80",
      discount: "10% OFF",
      bgHover: "group-hover:bg-emerald-50",
      btnHover: "hover:bg-emerald-500 hover:shadow-emerald-500/40"
    },
    {
      id: 2,
      name: "Apple Watch S9",
      price: 399.00,
      unit: "each",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80",
      discount: null,
      bgHover: "group-hover:bg-sky-50",
      btnHover: "hover:bg-sky-500 hover:shadow-sky-500/40"
    },
    {
      id: 3,
      name: "Sony Headphones Pro",
      price: 249.00,
      unit: "1 item",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80",
      discount: "Sale!",
      bgHover: "group-hover:bg-purple-50",
      btnHover: "hover:bg-purple-500 hover:shadow-purple-500/40"
    },
    {
      id: 4,
      name: "Vintage Film Camera",
      price: 89.00,
      unit: "each",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=400&q=80",
      discount: "Rare",
      bgHover: "group-hover:bg-amber-50",
      btnHover: "hover:bg-amber-500 hover:shadow-amber-500/40"
    }
  ];

  const handleProductClick = (product) => {
    // Store selected product in Redux before navigating (replaces location.state)
    dispatch(setSelectedProduct(product));
    router.push('/product');
  };

  return (
    <section id="trending-products" className="mb-20">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8 px-2 md:px-0">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Trending Now</h3>
            <p className="text-sm font-semibold text-gray-400 mt-1">Discover what everyone is buying</p>
          </div>
          <span className="hidden md:inline-flex px-3 py-1 bg-sky-50 text-sky-500 text-xs font-black uppercase tracking-[0.2em] rounded-full">Updated Hourly</span>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 px-2 md:px-0">
        {products.map((product, idx) => (
          <ScrollReveal delay={idx * 150} key={product.id} className="block h-full">
            <div
              onClick={() => handleProductClick(product)}
              className={`group relative bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:border-transparent shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col cursor-pointer h-full`}
            >
              {/* Product Image */}
              <div className={`relative aspect-square rounded-[2rem] overflow-hidden mb-5 bg-[#f8fafc] ${product.bgHover} transition-colors duration-500 p-6 flex items-center justify-center`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 drop-shadow-xl transition-transform duration-700 ease-out relative z-0"
                />

                {product.discount && (
                  <div className="absolute bottom-4 left-4 z-20 bg-gray-900 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                    {product.discount}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="px-2 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 mb-2">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-current drop-shadow-sm" />
                  <span className="text-[11px] font-black text-gray-500">{product.rating}</span>
                </div>

                <h4 className="font-extrabold text-gray-900 text-base md:text-lg group-hover:text-sky-500 transition-colors tracking-tight line-clamp-2 mb-2 leading-snug">
                  {product.name}
                </h4>

                <div className="flex items-end justify-between gap-1 mt-auto pt-4 border-t border-gray-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase mb-0.5 whitespace-nowrap">{product.unit}</span>
                    <span className="text-base sm:text-lg md:text-2xl font-black text-gray-900 tracking-tighter sm:tracking-tight whitespace-nowrap">${product.price.toFixed(2)}</span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToCart({ product: { id: product.id, name: product.name, price: product.price, image: product.image }, quantity: 1 }));
                      toast.success('Added to cart successfully');
                    }}
                    className={`w-8 h-8 md:w-12 md:h-12 flex-shrink-0 rounded-lg md:rounded-[1.25rem] bg-gray-900 text-white flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-[0_8px_20px_rgba(0,0,0,0.15)] ${product.btnHover}`}
                  >
                    <Plus className="w-4 h-4 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
