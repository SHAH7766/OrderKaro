'use client';

import React from 'react';
import {
  Bike,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  CreditCard,
  FileText,
  Headset,
  History,
  House,
  LogOut,
  MapPin,
  MapPinned,
  PackageCheck,
  Settings,
  ShieldCheck,
  Star,
  TimerReset,
  UserRound,
  Wallet,
  WalletCards,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

const sidebarLinks = [
  { label: 'Dashboard', icon: House, href: '/driver-home' },
  { label: 'My Profile', icon: UserRound, href: '/driver-profile' },
  { label: 'Documents', icon: FileText, href: '/driver-documents' },
  { label: 'Earnings', icon: WalletCards, href: '/driver-earnings' },
  { label: 'Payouts', icon: CreditCard, href: '/driver-payouts' },
  { label: 'Orders', icon: ClipboardList, href: '/driver-orders', active: true },
  { label: 'History', icon: History, href: '/driver-history' },
  { label: 'Wallet', icon: Wallet, href: '/driver-wallet' },
  { label: 'Zones', icon: MapPinned, href: '/driver-zones' },
  { label: 'Settings', icon: Settings, href: '/driver-settings' },
];

const orderStats = [
  { label: 'Active', value: '3', icon: TimerReset },
  { label: 'Completed', value: '28', icon: CheckCircle2 },
  { label: 'Today Trips', value: '14', icon: Bike },
];

const activeOrders = [
  {
    id: 'ORD-2941',
    title: 'Artisan Bakery & Cafe',
    pickup: 'Gulberg Market',
    dropoff: '422 Oakwood Heights',
    status: 'Pickup ready',
    time: '8 mins',
    payout: '$18.50',
  },
  {
    id: 'ORD-2938',
    title: 'Fresh Market Grocery',
    pickup: 'North Avenue Store',
    dropoff: '14 Lake View Apartments',
    status: 'On route',
    time: '14 mins',
    payout: '$12.20',
  },
  {
    id: 'ORD-2935',
    title: 'Apollo Pharmacy',
    pickup: 'Main Boulevard',
    dropoff: 'House 88, Block C',
    status: 'Awaiting handoff',
    time: '22 mins',
    payout: '$9.80',
  },
];

function DriverSidebar({ router }) {
  return (
    <aside className="sticky top-8 hidden h-[calc(100vh-4rem)] flex-col overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_24px_70px_rgba(14,71,100,0.12)] ring-1 ring-white/80 lg:flex">
      <div className="rounded-[1.5rem] bg-gradient-to-br from-[#0ea9d1] via-[#467fd2] to-[#f35ca8] p-4 text-white shadow-[0_18px_42px_rgba(21,168,211,0.22)]">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=160&q=80"
            alt="Alex driver profile"
            className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
          />
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">Driver Profile</p>
            <h2 className="mt-1 text-lg font-black leading-tight">Alex Carter</h2>
            <p className="mt-1 text-xs font-bold text-white/80">ID: DRV-2481</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/16 p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/70">Rating</p>
            <p className="mt-1 text-lg font-black">4.9</p>
          </div>
          <div className="rounded-2xl bg-white/16 p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/70">Trips</p>
            <p className="mt-1 text-lg font-black">242</p>
          </div>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {sidebarLinks.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => router.push(item.href)}
            className={`flex h-12 w-full items-center gap-3 rounded-2xl px-4 text-left text-sm font-black transition ${
              item.active
                ? 'bg-cyan-50 text-[#08afd0] shadow-[0_10px_24px_rgba(0,169,203,0.08)]'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-950'
            }`}
          >
            <item.icon className="h-5 w-5" strokeWidth={2.2} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-3">
        <div className="rounded-[1.25rem] border border-slate-100 bg-slate-50 p-4">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-[#08afd0]" strokeWidth={2.2} />
            <div>
              <p className="text-xs font-black text-slate-950">Shift</p>
              <p className="text-xs font-bold text-slate-500">8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 text-sm font-black text-slate-500 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
        >
          <LogOut className="h-5 w-5" strokeWidth={2.2} />
          Sign out
        </button>
      </div>
    </aside>
  );
}

export default function DriverOrdersPage() {
  const router = useRouter();

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf7f8_0%,#f8fbfb_46%,#eef8f9_100%)] text-slate-950">
      <div className="mx-auto min-h-screen max-w-[1280px] lg:grid lg:grid-cols-[286px_1fr] lg:gap-7 lg:px-8 lg:py-8">
        <DriverSidebar router={router} />

        <section className="px-4 py-5 pb-28 lg:px-0 lg:py-0 lg:pb-0">
          <header className="rounded-[2rem] bg-gradient-to-r from-[#146d91] via-[#386d9f] to-[#7354ab] p-5 text-white shadow-[0_24px_70px_rgba(20,76,104,0.16)] lg:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Driver Orders</p>
                <h1 className="mt-1 text-3xl font-black tracking-tight">Active delivery queue</h1>
                <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/82">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2.4} />
                  3 orders need attention right now
                </p>
              </div>

              <button
                type="button"
                onClick={() => router.push('/driver-home')}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-[#087ea0] shadow-[0_14px_34px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5"
              >
                <House className="h-5 w-5" strokeWidth={2.3} />
                Dashboard
              </button>
            </div>
          </header>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {orderStats.map((stat, index) => (
              <section
                key={stat.label}
                className="delivery-card rounded-[1.75rem] bg-white p-5 shadow-[0_18px_42px_rgba(14,71,100,0.08)] ring-1 ring-white/80"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#16879a]">{stat.label}</p>
                    <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{stat.value}</h2>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-[#08afd0]">
                    <stat.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                </div>
              </section>
            ))}
          </div>

          <section className="delivery-card mt-7 rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Orders</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950">Current assignments</h2>
              </div>
              <PackageCheck className="h-8 w-8 text-[#08afd0]" strokeWidth={2.2} />
            </div>

            <div className="mt-7 space-y-4">
              {activeOrders.map((order, index) => (
                <article
                  key={order.id}
                  className="rounded-[1.5rem] border border-slate-100 bg-[#f8fbfd] p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_36px_rgba(20,76,104,0.08)]"
                  style={{ animationDelay: `${260 + index * 70}ms` }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#08afd0] shadow-sm">
                          {order.id}
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-amber-600">
                          <Clock className="h-3.5 w-3.5" strokeWidth={2.4} />
                          {order.time}
                        </span>
                      </div>
                      <h3 className="mt-4 text-xl font-black text-slate-950">{order.title}</h3>
                      <div className="mt-4 grid gap-3 md:grid-cols-2">
                        <p className="flex items-start gap-2 text-sm font-bold text-slate-600">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#08afd0]" strokeWidth={2.2} />
                          Pickup: {order.pickup}
                        </p>
                        <p className="flex items-start gap-2 text-sm font-bold text-slate-600">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f45aa9]" strokeWidth={2.2} />
                          Drop-off: {order.dropoff}
                        </p>
                      </div>
                    </div>

                    <div className="md:text-right">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#16879a]">{order.status}</p>
                      <p className="mt-2 text-2xl font-black text-[#f45aa9]">{order.payout}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => router.push(`/driver-orders/${order.id}`)}
                    className="mt-5 flex h-[52px] w-full items-center justify-between rounded-2xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-[#087ea0] md:w-[220px]"
                  >
                    View order
                    <ChevronRight className="h-5 w-5" strokeWidth={2.4} />
                  </button>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 rounded-t-[2rem] bg-white px-4 pt-4 pb-5 shadow-[0_-18px_44px_rgba(20,76,104,0.10)] lg:hidden">
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => router.push('/driver-home')}
            className="delivery-card rounded-[1.2rem] px-2 py-3 text-center text-slate-400 transition"
          >
            <House className="mx-auto h-6 w-6" strokeWidth={2.2} />
            <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">Dashboard</span>
          </button>
          <button
            type="button"
            className="delivery-card rounded-[1.2rem] bg-cyan-50 px-2 py-3 text-center text-[#08afd0] transition"
          >
            <ClipboardList className="mx-auto h-6 w-6" strokeWidth={2.2} />
            <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">Orders</span>
          </button>
          <button
            type="button"
            onClick={() => router.push('/driver-profile')}
            className="delivery-card rounded-[1.2rem] px-2 py-3 text-center text-slate-400 transition"
          >
            <UserRound className="mx-auto h-6 w-6" strokeWidth={2.2} />
            <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">Profile</span>
          </button>
        </div>
      </nav>
    </main>
    </>
  );
}
