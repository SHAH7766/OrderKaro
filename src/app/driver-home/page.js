'use client';

import React from 'react';
import {
  Bell,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Headset,
  House,
  Medal,
  Route,
  Fuel,
  Star,
  UserRound,
  ChevronRight,
  TimerReset,
  MapPin,
  Bike,
  Gauge,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const quickActions = [
  { label: 'Support', icon: Headset, tone: 'text-cyan-600 bg-cyan-50' },
  { label: 'Bonus', icon: Medal, tone: 'text-amber-500 bg-amber-50' },
  { label: 'Fuel', icon: Fuel, tone: 'text-violet-500 bg-violet-50' },
  { label: 'Reports', icon: ClipboardList, tone: 'text-blue-500 bg-blue-50' },
];

const recentActivity = [
  { place: 'Steakhouse Prime', meta: '12:45 PM | 3.2 KM', amount: '+$12.20' },
  { place: 'Fresh Market Grocery', meta: '11:15 AM | 1.8 KM', amount: '+$8.45' },
];

const navItems = [
  { label: 'Home', icon: House, active: true },
  { label: 'Orders', icon: ClipboardList },
  { label: 'Payouts', icon: CircleDollarSign },
  { label: 'Account', icon: UserRound },
];

function MetricCard({ icon: Icon, label, value, className = '', iconTone = '', textTone = '' }) {
  return (
    <section className={`delivery-card rounded-[1.75rem] p-5 shadow-[0_18px_42px_rgba(15,63,90,0.10)] ring-1 ring-white/70 ${className}`}>
      <div className={`mb-8 flex h-11 w-11 items-center justify-center rounded-full ${iconTone}`}>
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <p className={`text-[11px] font-black uppercase tracking-[0.16em] ${textTone || 'text-white/80'}`}>{label}</p>
      <h3 className={`mt-1 text-[17px] font-black ${textTone ? 'text-slate-950' : 'text-white'}`}>{value}</h3>
    </section>
  );
}

export default function DriverHomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf7f8_0%,#f7fbfb_42%,#eef8f9_100%)] text-slate-950">
      <div className="mx-auto min-h-screen max-w-[1240px] lg:grid lg:grid-cols-[430px_1fr] lg:gap-8 lg:px-8 lg:py-8">
        <section className="relative overflow-hidden lg:rounded-[2.25rem] lg:bg-white lg:shadow-[0_26px_76px_rgba(14,71,100,0.12)]">
          <header className="bg-gradient-to-r from-[#c7dde2] via-[#c9d7e5] to-[#ddd3e7] px-4 py-4 lg:rounded-t-[2.25rem]">
            <div className="flex items-start justify-between lg:items-center">
              <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=160&q=80"
                alt="Alex"
                className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-md"
              />
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#167f97]">Hello, Alex</p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex h-6 w-12 items-center rounded-full bg-[#18b98a] p-0.5 shadow-inner">
                    <div className="ml-auto h-5 w-5 rounded-full bg-white shadow-sm" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#0b8d63]">Online</span>
                </div>
              </div>
              </div>

              <button
                type="button"
                onClick={() => router.push('/profile')}
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/50 text-[#00a9cb] shadow-[0_10px_24px_rgba(255,255,255,0.18)] transition hover:bg-white/70"
              >
                <Bell className="h-5 w-5" strokeWidth={2.2} />
                <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-pink-500" />
              </button>
            </div>

            <div className="mt-3 flex justify-center lg:hidden">
              <h1 className="text-[21px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00a9cb] via-[#4388cf] to-[#eb72d0]">
                ORDERKRO
              </h1>
            </div>

            <div className="hidden lg:flex lg:absolute lg:inset-x-0 lg:top-4 lg:justify-center">
              <h1 className="text-[24px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00a9cb] via-[#4388cf] to-[#eb72d0]">
                ORDERKRO
              </h1>
            </div>
          </header>

          <div className="h-[3px] bg-[#1d5f94]" />

          <div className="relative h-[174px] overflow-hidden bg-[#f4f9f9]">
            <div className="absolute inset-x-0 top-0 h-[144px] bg-gradient-to-r from-[#146d91] via-[#386d9f] to-[#7354ab]">
              <div className="absolute -bottom-7 left-1/2 h-14 w-[125%] -translate-x-1/2 rounded-[0_0_50%_50%] bg-[#f4f9f9]" />
            </div>
          </div>
        </section>

        <section className="-mt-[124px] px-4 pb-28 lg:mt-0 lg:px-0 lg:pb-0">
          <section className="delivery-card rounded-[2rem] bg-[linear-gradient(180deg,rgba(180,204,229,0.92)_0%,rgba(255,255,255,0.98)_62%)] p-7 shadow-[0_22px_58px_rgba(18,73,104,0.14)] ring-1 ring-white/80 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#5a91a8]">Today&apos;s Earnings</p>
                <h2 className="mt-2 text-[35px] font-black tracking-tight text-slate-950">$142.50</h2>
              </div>
              <div className="text-right">
                <span className="inline-flex rounded-full border border-[#79d5bd] bg-[#dcfff2] px-4 py-2 text-[14px] font-black text-[#12b07c]">
                  +12.4%
                </span>
                <p className="mt-3 text-[12px] font-black uppercase tracking-[0.12em] text-[#4f9aad]">VS LAST WEEK</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[110px_1fr] md:items-center">
              <div className="mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[conic-gradient(from_130deg,#15a8d3_0deg,#15a8d3_228deg,#ffffff_228deg,#ffffff_246deg,#f65aad_246deg,#f65aad_322deg,#dff4f7_322deg)] p-[8px] shadow-[0_12px_24px_rgba(21,168,211,0.12)]">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
                  <span className="text-[18px] font-black text-slate-950">14</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#16879a]">ORDERS</span>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#16879a]">Daily Goal Progress</p>
                  <span className="text-[12px] font-black text-[#2482a8]">14/20</span>
                </div>
                <div className="h-2.5 rounded-full bg-[#e6eef4] shadow-inner">
                  <div className="h-2.5 w-[78%] rounded-full bg-gradient-to-r from-[#1ab0d4] to-[#f25ea9] shadow-[0_6px_14px_rgba(242,94,169,0.24)]" />
                </div>
                <p className="mt-4 flex items-center gap-2 text-[14px] text-slate-600">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-amber-400 text-amber-400">
                    <Star className="h-2.5 w-2.5" fill="currentColor" />
                  </span>
                  <span><strong className="font-semibold">6 more</strong> for $50 bonus!</span>
                </p>
              </div>
            </div>
          </section>

          <div className="mt-9 grid grid-cols-3 gap-4">
            <MetricCard
              icon={Bike}
              label="Trips"
              value="242"
              className="bg-gradient-to-br from-[#10acd1] to-[#0a88b1] text-white"
              iconTone="bg-white/18 text-white"
            />
            <MetricCard
              icon={Route}
              label="KM"
              value="84.2"
              className="bg-gradient-to-br from-[#8d57bb] to-[#f358a8] text-white"
              iconTone="bg-white/18 text-white"
            />
            <MetricCard
              icon={Star}
              label="Rating"
              value="4.9"
              className="bg-white"
              iconTone="bg-amber-50 text-amber-400"
              textTone="text-[#16879a]"
            />
          </div>

          <div className="mt-10 flex items-center justify-between">
            <h2 className="text-[20px] font-black tracking-tight text-slate-950">Active Bid Available</h2>
            <div className="flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-[14px] font-black text-red-500 shadow-[0_8px_20px_rgba(239,68,68,0.08)]">
              <TimerReset className="h-4 w-4" strokeWidth={2.2} />
              02:45
            </div>
          </div>

          <section className="delivery-card mt-6 overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_52px_rgba(20,76,104,0.12)] ring-1 ring-white/80">
            <div className="relative h-[230px] overflow-hidden border-b border-slate-100 bg-[#f8fbfd]">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage: 'radial-gradient(circle, #c7d9ea 1.5px, transparent 1.5px)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div className="absolute top-5 left-5 rounded-xl bg-white px-4 py-2 text-[14px] font-black text-slate-950 shadow-md">
                3.2 km (8 mins)
              </div>
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M95 140C140 125 178 87 228 81C264 77 290 99 328 101" stroke="#1ab0d4" strokeWidth="6" strokeDasharray="10 10" />
              </svg>
              <span className="absolute left-[92px] bottom-[69px] h-6 w-6 rounded-full bg-[#0ea9d1] shadow-[0_10px_18px_rgba(14,169,209,0.35)]" />
              <span className="absolute right-[88px] top-[76px] h-6 w-6 rounded-full bg-[#f25ea9] shadow-[0_10px_18px_rgba(242,94,169,0.35)]" />
            </div>

            <div className="grid gap-5 p-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0ea9d1]">
                    <span className="h-2 w-2 rounded-full bg-[#0ea9d1]" />
                  </span>
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">PICKUP</p>
                    <h3 className="text-[17px] font-black text-slate-950">Artisan Bakery & Cafe</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#ff58ab]" strokeWidth={2.2} />
                  <div>
                    <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">DROP-OFF</p>
                    <h3 className="text-[17px] font-black text-slate-950">422 Oakwood Heights</h3>
                  </div>
                </div>
              </div>

              <div className="text-left lg:text-right">
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">POTENTIAL PAYOUT</p>
                <h3 className="mt-1 text-[30px] font-black tracking-tight text-[#f45aa9] drop-shadow-[0_8px_18px_rgba(244,90,169,0.18)]">$18.50</h3>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                type="button"
                className="group flex h-[62px] w-full items-center rounded-[1.25rem] border border-slate-200 bg-[#eff5fb] px-3 shadow-inner transition hover:bg-[#e9f3fb]"
              >
                <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gradient-to-r from-[#15b0d5] to-[#f25ea9] text-white shadow-[0_12px_26px_rgba(21,176,213,0.28)] transition group-hover:translate-x-1">
                  <ChevronRight className="h-7 w-7" strokeWidth={3} />
                </span>
                <span className="flex-1 text-center text-[15px] font-black uppercase tracking-[0.18em] text-slate-400">
                  Slide to Accept
                </span>
              </button>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-[20px] font-black tracking-tight text-slate-950">Quick Actions</h2>
            <div className="mt-6 grid grid-cols-4 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={action.label}
                  type="button"
                  className="delivery-card rounded-[1.4rem] bg-white px-3 py-5 text-center shadow-[0_16px_32px_rgba(14,71,100,0.06)] ring-1 ring-slate-200/70 transition hover:-translate-y-1"
                  style={{ animationDelay: `${260 + index * 70}ms` }}
                >
                  <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${action.tone}`}>
                    <action.icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <span className="mt-4 block text-[12px] font-black uppercase tracking-[0.12em] text-[#16879a]">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-black tracking-tight text-slate-950">Recent Activity</h2>
              <button type="button" className="text-[14px] font-black uppercase tracking-[0.12em] text-[#08afd0]">
                View All
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {recentActivity.map((item, index) => (
                <article
                  key={item.place}
                  className="delivery-card flex items-center justify-between rounded-[1.5rem] bg-white px-5 py-5 shadow-[0_16px_36px_rgba(20,76,104,0.06)] ring-1 ring-white/80"
                  style={{ animationDelay: `${420 + index * 90}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                      <CheckCircle2 className="h-7 w-7" strokeWidth={2.2} />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-black text-slate-950">{item.place}</h3>
                      <p className="mt-1 text-[13px] font-medium text-[#4d9ab0]">{item.meta}</p>
                    </div>
                  </div>
                  <span className="text-[18px] font-black text-slate-950">{item.amount}</span>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 rounded-t-[2rem] bg-white px-4 pt-4 pb-5 shadow-[0_-18px_44px_rgba(20,76,104,0.10)] lg:hidden">
        <div className="grid grid-cols-4 gap-3">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`delivery-card rounded-[1.2rem] px-2 py-3 text-center transition ${item.active ? 'bg-cyan-50 text-[#08afd0]' : 'text-slate-400'}`}
              style={{ animationDelay: `${520 + index * 60}ms` }}
            >
              <item.icon className="mx-auto h-6 w-6" strokeWidth={2.2} />
              <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
