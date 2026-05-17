'use client';

import React from 'react';
import {
  ArrowLeft,
  Bike,
  CheckCircle2,
  ClipboardList,
  Clock,
  House,
  MapPin,
  PackageCheck,
  Phone,
  ReceiptText,
  ShieldCheck,
  UserRound,
  WalletCards,
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';

const orderLookup = {
  'ORD-2941': {
    title: 'Artisan Bakery & Cafe',
    pickup: 'Gulberg Market',
    dropoff: '422 Oakwood Heights',
    customer: 'Sarah Ahmed',
    phone: '+92 300 5550192',
    payout: '$18.50',
    distance: '3.2 km',
    eta: '8 mins',
    status: 'Pickup ready',
    items: ['Sourdough loaf', 'Iced latte', 'Chocolate croissant'],
  },
  'ORD-2938': {
    title: 'Fresh Market Grocery',
    pickup: 'North Avenue Store',
    dropoff: '14 Lake View Apartments',
    customer: 'Omar Khan',
    phone: '+92 300 5550168',
    payout: '$12.20',
    distance: '2.7 km',
    eta: '14 mins',
    status: 'On route',
    items: ['Organic eggs', 'Fresh milk', 'Bananas'],
  },
  'ORD-2935': {
    title: 'Apollo Pharmacy',
    pickup: 'Main Boulevard',
    dropoff: 'House 88, Block C',
    customer: 'Ayesha Malik',
    phone: '+92 300 5550144',
    payout: '$9.80',
    distance: '1.9 km',
    eta: '22 mins',
    status: 'Awaiting handoff',
    items: ['Prescription bag', 'Vitamin C'],
  },
};

export default function DriverOrderDetailPage() {
  const router = useRouter();
  const params = useParams();
  const orderId = String(params.id || 'ORD-2941').toUpperCase();
  const order = orderLookup[orderId] || orderLookup['ORD-2941'];

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf7f8_0%,#f8fbfb_46%,#eef8f9_100%)] px-4 py-5 text-slate-950 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[980px]">
        <button type="button" onClick={() => router.push('/driver-orders')} className="mb-5 flex h-11 items-center gap-2 rounded-2xl bg-white px-4 text-sm font-black text-[#087ea0] shadow-sm">
          <ArrowLeft className="h-5 w-5" strokeWidth={2.3} />
          Back to orders
        </button>

        <header className="rounded-[2rem] bg-gradient-to-r from-[#146d91] via-[#386d9f] to-[#7354ab] p-5 text-white shadow-[0_24px_70px_rgba(20,76,104,0.16)] lg:p-7">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">{orderId}</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight">{order.title}</h1>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/82">
            <ShieldCheck className="h-4 w-4" strokeWidth={2.4} />
            {order.status} | {order.distance} | {order.eta}
          </p>
        </header>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {[
            ['Payout', order.payout, WalletCards],
            ['Distance', order.distance, Bike],
            ['ETA', order.eta, Clock],
          ].map(([label, value, Icon], index) => (
            <section key={label} className="delivery-card rounded-[1.75rem] bg-white p-5 shadow-[0_18px_42px_rgba(14,71,100,0.08)] ring-1 ring-white/80" style={{ animationDelay: `${120 + index * 70}ms` }}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#16879a]">{label}</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{value}</h2>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-[#08afd0]">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_340px]">
          <section className="delivery-card rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Route</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950">Pickup and drop-off</h2>
              </div>
              <MapPin className="h-8 w-8 text-[#08afd0]" strokeWidth={2.2} />
            </div>
            <div className="mt-7 space-y-4">
              <div className="rounded-2xl bg-[#f8fbfd] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#16879a]">Pickup</p>
                <p className="mt-1 text-lg font-black text-slate-950">{order.pickup}</p>
              </div>
              <div className="rounded-2xl bg-[#f8fbfd] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#16879a]">Drop-off</p>
                <p className="mt-1 text-lg font-black text-slate-950">{order.dropoff}</p>
              </div>
            </div>
          </section>

          <section className="delivery-card rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Customer</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950">{order.customer}</h2>
              </div>
              <UserRound className="h-8 w-8 text-[#08afd0]" strokeWidth={2.2} />
            </div>
            <p className="mt-5 flex items-center gap-2 rounded-2xl bg-[#f8fbfd] p-4 text-sm font-black text-slate-700">
              <Phone className="h-5 w-5 text-[#08afd0]" strokeWidth={2.2} />
              {order.phone}
            </p>
          </section>
        </div>

        <section className="delivery-card mt-7 rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Items</p>
              <h2 className="mt-1 text-2xl font-black text-slate-950">Package contents</h2>
            </div>
            <ReceiptText className="h-8 w-8 text-[#08afd0]" strokeWidth={2.2} />
          </div>
          <div className="mt-6 space-y-3">
            {order.items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#f8fbfd] p-4 text-sm font-black text-slate-700">
                <PackageCheck className="h-5 w-5 text-[#08afd0]" strokeWidth={2.2} />
                {item}
              </div>
            ))}
          </div>
          <button type="button" className="mt-6 flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 text-sm font-black text-white transition hover:bg-[#087ea0]">
            <CheckCircle2 className="h-5 w-5" strokeWidth={2.3} />
            Mark next step complete
          </button>
        </section>
      </div>
    </main>
    </>
  );
}
