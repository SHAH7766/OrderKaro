'use client';

import React from 'react';
import {
  BadgeCheck,
  Bike,
  CalendarDays,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  FileText,
  Headset,
  History,
  House,
  LineChart,
  LogOut,
  MapPinned,
  Settings,
  ShieldCheck,
  Star,
  TrendingUp,
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
  { label: 'Earnings', icon: WalletCards, href: '/driver-earnings', active: true },
  { label: 'Payouts', icon: CreditCard, href: '/driver-payouts' },
  { label: 'Orders', icon: ClipboardList, href: '/driver-orders' },
  { label: 'History', icon: History, href: '/driver-history' },
  { label: 'Wallet', icon: Wallet, href: '/driver-wallet' },
  { label: 'Zones', icon: MapPinned, href: '/driver-zones' },
  { label: 'Settings', icon: Settings, href: '/driver-settings' },
];

const earningsCards = [
  { label: 'Today', value: '$142.50', helper: '+12.4% vs last week', icon: CircleDollarSign },
  { label: 'This Week', value: '$684.20', helper: '42 completed deliveries', icon: TrendingUp },
  { label: 'Pending Payout', value: '$318.00', helper: 'Scheduled for Friday', icon: CreditCard },
];

const payoutRows = [
  { title: 'Artisan Bakery & Cafe', date: 'Today, 12:45 PM', amount: '+$18.50' },
  { title: 'Fresh Market Grocery', date: 'Today, 11:15 AM', amount: '+$12.20' },
  { title: 'Steakhouse Prime', date: 'Yesterday, 7:10 PM', amount: '+$21.80' },
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
        <button type="button" className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-cyan-100 bg-cyan-50 text-sm font-black text-[#08afd0] transition hover:bg-cyan-100">
          <Headset className="h-5 w-5" strokeWidth={2.2} />
          Support
        </button>
        <button type="button" className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 text-sm font-black text-slate-500 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500">
          <LogOut className="h-5 w-5" strokeWidth={2.2} />
          Sign out
        </button>
      </div>
    </aside>
  );
}

export default function DriverEarningsPage() {
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
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Driver Earnings</p>
                <h1 className="mt-1 text-3xl font-black tracking-tight">Payout dashboard</h1>
                <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/82">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2.4} />
                  Verified payouts | Online now
                </p>
              </div>

              <button
                type="button"
                onClick={() => router.push('/driver-payouts')}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-[#087ea0] shadow-[0_14px_34px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5"
              >
                <CreditCard className="h-5 w-5" strokeWidth={2.3} />
                Payouts
              </button>
            </div>
          </header>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {earningsCards.map((card, index) => (
              <section
                key={card.label}
                className="delivery-card rounded-[1.75rem] bg-white p-5 shadow-[0_18px_42px_rgba(14,71,100,0.08)] ring-1 ring-white/80"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#16879a]">{card.label}</p>
                    <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{card.value}</h2>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-[#08afd0]">
                    <card.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                </div>
                <p className="mt-4 text-sm font-bold text-slate-500">{card.helper}</p>
              </section>
            ))}
          </div>

          <section className="delivery-card mt-7 rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Earnings Overview</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950">Weekly payout activity</h2>
              </div>
              <LineChart className="h-8 w-8 text-[#08afd0]" strokeWidth={2.2} />
            </div>

            <div className="mt-7 grid h-[240px] grid-cols-7 items-end gap-3 rounded-[1.5rem] bg-[#f5fbfc] p-5">
              {[42, 68, 55, 84, 72, 94, 76].map((height, index) => (
                <div key={height} className="flex h-full flex-col justify-end gap-3">
                  <div
                    className="rounded-t-2xl bg-gradient-to-t from-[#08afd0] to-[#f45aa9] shadow-[0_12px_24px_rgba(8,175,208,0.16)]"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-center text-[10px] font-black uppercase text-slate-400">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {payoutRows.map((row) => (
                <article key={row.title} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-4">
                  <div>
                    <h3 className="font-black text-slate-950">{row.title}</h3>
                    <p className="mt-1 text-sm font-bold text-slate-500">{row.date}</p>
                  </div>
                  <span className="text-lg font-black text-emerald-600">{row.amount}</span>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 rounded-t-[2rem] bg-white px-4 pt-4 pb-5 shadow-[0_-18px_44px_rgba(20,76,104,0.10)] lg:hidden">
        <div className="grid grid-cols-3 gap-3">
          <button type="button" onClick={() => router.push('/driver-home')} className="delivery-card rounded-[1.2rem] px-2 py-3 text-center text-slate-400 transition">
            <House className="mx-auto h-6 w-6" strokeWidth={2.2} />
            <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">Dashboard</span>
          </button>
          <button type="button" className="delivery-card rounded-[1.2rem] bg-cyan-50 px-2 py-3 text-center text-[#08afd0] transition">
            <WalletCards className="mx-auto h-6 w-6" strokeWidth={2.2} />
            <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">Earnings</span>
          </button>
          <button type="button" onClick={() => router.push('/driver-profile')} className="delivery-card rounded-[1.2rem] px-2 py-3 text-center text-slate-400 transition">
            <UserRound className="mx-auto h-6 w-6" strokeWidth={2.2} />
            <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">Profile</span>
          </button>
        </div>
      </nav>
    </main>
    </>
  );
}
