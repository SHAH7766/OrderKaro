'use client';

import React from 'react';
import {
  ArrowLeft,
  Search,
  Check,
  MapPin,
  Route,
  Timer,
  Clock3,
  ReceiptText,
  ChevronRight,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const payoutRows = [
  { label: 'Base Fare', value: '$5.50' },
  { label: 'Distance Bonus', value: '$2.35', accent: 'text-[#108aa0]' },
  { label: 'Peak Hour Surge', value: '+$3.00', accent: 'text-[#ff42a7]' },
  { label: 'Customer Tip', value: '$4.00', strong: true, accent: 'text-[#00a9cb]' },
];

function MetricCard({ icon: Icon, label, value, tone }) {
  const toneClass =
    tone === 'purple'
      ? 'bg-purple-100 text-purple-600 shadow-purple-100/80'
      : 'bg-cyan-100 text-[#00a9cb] shadow-cyan-100/80';

  return (
    <section className="delivery-card rounded-[1.5rem] bg-white/82 p-5 text-center shadow-[0_14px_38px_rgba(10,86,110,0.05)] ring-1 ring-white/75 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(10,86,110,0.11)] md:p-6">
      <div className={`delivery-orb mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full shadow-lg md:mb-4 md:h-14 md:w-14 ${toneClass}`}>
        <Icon className="h-8 w-8" strokeWidth={2.3} />
      </div>
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#1b8ba0] md:text-xs">{label}</p>
      <h3 className="mt-1 text-[18px] font-black text-gray-950 md:text-[22px]">{value}</h3>
    </section>
  );
}

export default function DeliveryCompletePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf8f8_0%,#f8fbfb_46%,#eef8f9_100%)] text-gray-950">
      <div className="mx-auto min-h-screen max-w-[1320px] bg-transparent lg:grid lg:grid-cols-[minmax(390px,500px)_1fr] lg:gap-8 lg:px-8 lg:py-8">
        <section className="profile-hero relative overflow-hidden lg:min-h-[calc(100vh-4rem)] lg:rounded-[2.5rem] lg:bg-white lg:shadow-[0_24px_80px_rgba(23,90,138,0.14)]">
          <header className="relative z-20 flex h-[86px] items-center justify-between bg-gradient-to-r from-[#c0d7e1] via-[#c6d0e8] to-[#d5c8e9] px-6 lg:rounded-t-[2.5rem]">
            <button
              type="button"
              aria-label="Go back"
              onClick={() => router.back()}
              className="group flex h-11 w-11 items-center justify-center rounded-full text-[#00a9cb] transition hover:bg-white/35 active:scale-95"
            >
              <ArrowLeft className="h-7 w-7 transition group-hover:-translate-x-1" strokeWidth={2.4} />
            </button>
            <h1 className="mr-auto ml-3 text-[24px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00a9cb] via-[#4387cf] to-[#ec74d2] md:text-[28px]">
              OrderKro
            </h1>
            <button
              type="button"
              aria-label="Search"
              className="group flex h-11 w-11 items-center justify-center rounded-full text-[#00a9cb] transition hover:bg-white/35 active:scale-95"
            >
              <Search className="h-7 w-7 transition group-hover:rotate-12 group-hover:scale-110" strokeWidth={2.4} />
            </button>
          </header>

          <div className="relative h-[380px] bg-[#f3f9f9] lg:h-[calc(100%-86px)] lg:min-h-[620px]">
            <div className="profile-wave absolute inset-x-0 top-0 h-[320px] overflow-hidden bg-gradient-to-br from-[#167c9d] via-[#35689f] to-[#8050ad] lg:h-[440px]">
              <div className="profile-sheen absolute inset-0 opacity-25 [background-image:linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.55)_45%,transparent_70%)]" />
              <div className="absolute -bottom-8 left-1/2 h-16 w-[125%] -translate-x-1/2 rounded-[0_0_50%_50%] bg-[#f3f9f9]" />
            </div>

            <div className="absolute inset-x-0 top-10 flex flex-col items-center px-8 text-center lg:top-20">
              <div className="delivery-badge profile-check relative flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.16)] md:h-[104px] md:w-[104px]">
                <span className="absolute inset-5 rounded-full bg-cyan-100" />
                <span className="relative flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#0bb6d7] text-white md:h-[58px] md:w-[58px]">
                  <Check className="h-8 w-8 md:h-10 md:w-10" strokeWidth={3.6} />
                </span>
              </div>
              <h2 className="profile-name mt-6 text-[28px] font-black tracking-tight text-white drop-shadow-[0_6px_18px_rgba(13,55,95,0.22)] md:text-[34px] lg:text-[40px]">
                Delivery Complete
              </h2>
              <p className="profile-status mt-3 text-[13px] font-black uppercase tracking-[0.16em] text-white/82 md:text-[15px]">
                Order #OK-82931-CX
              </p>

              <div className="delivery-status-panel mt-7 hidden w-full max-w-[390px] rounded-[1.75rem] bg-white/14 p-4 text-left text-white ring-1 ring-white/20 backdrop-blur-md lg:block">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">Status</p>
                <p className="mt-1 text-[18px] font-black">Payout queued for processing</p>
                <p className="mt-2 text-[13px] font-semibold text-white/72">Receipt and proof are ready for review.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-[76px] space-y-7 px-7 pb-12 lg:mt-0 lg:grid lg:grid-cols-2 lg:content-start lg:gap-7 lg:space-y-0 lg:px-0 lg:pb-0">
          <section className="delivery-card delivery-card-delay-1 rounded-[2rem] bg-white/90 p-6 shadow-[0_20px_52px_rgba(10,86,110,0.11)] ring-1 ring-white/80 backdrop-blur lg:col-span-2 md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[11px] font-black uppercase tracking-[0.16em] text-[#1b8ba0] md:text-xs">Proof of Delivery</h2>
              <span className="delivery-pill rounded-full bg-cyan-50 px-4 py-2 text-[11px] font-black uppercase tracking-wide text-[#00a9cb] shadow-[0_10px_24px_rgba(0,169,203,0.08)] md:text-xs">
                Verified
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[1.4rem] bg-slate-200 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85"
                alt="Groceries delivered at the front door"
                className="h-[210px] w-full object-cover transition duration-700 hover:scale-105 md:h-[280px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/68 to-transparent p-5">
                <p className="flex items-center gap-2 text-[14px] font-black text-white md:text-base">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5" /> 124 Maple Avenue, Front Door
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#1b8ba0] md:text-xs">Customer</p>
                <h3 className="mt-3 text-[17px] font-black leading-tight text-gray-950 md:text-[20px]">Eleanor Fitzwilliam</h3>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#1b8ba0] md:text-xs">Total Payout</p>
                <h3 className="mt-2 text-[28px] font-black tracking-tight text-[#00a9cb] md:text-[34px]">$14.85</h3>
              </div>
            </div>
          </section>

          <div className="delivery-card delivery-card-delay-2">
            <MetricCard icon={Route} label="Distance" value="3.2 km" />
          </div>
          <div className="delivery-card delivery-card-delay-3">
            <MetricCard icon={Timer} label="Trip Time" value="18 mins" tone="purple" />
          </div>

          <section className="delivery-card delivery-card-delay-4 rounded-[1.75rem] bg-white/90 p-6 shadow-[0_16px_44px_rgba(10,86,110,0.06)] ring-1 ring-white/80 backdrop-blur lg:col-span-2 md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[15px] font-black uppercase tracking-[0.12em] text-gray-950 md:text-[17px]">Earnings Breakdown</h2>
              <ReceiptText className="h-6 w-6 text-[#1b8ba0]" />
            </div>

            <div className="delivery-processing -mx-6 mb-5 flex items-center justify-between rounded-full bg-[#102628] px-6 py-3.5 text-white shadow-[0_16px_38px_rgba(16,38,40,0.2)] md:-mx-7 md:px-7">
              <span className="text-[13px] font-black uppercase tracking-wide md:text-[15px]">Payout Processing...</span>
              <Clock3 className="delivery-clock h-5 w-5" />
            </div>

            <div className="space-y-4">
              {payoutRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`delivery-row flex items-center justify-between text-[15px] md:text-[17px] ${index === payoutRows.length - 1 ? 'border-t border-gray-200 pt-5' : ''}`}
                  style={{ animationDelay: `${420 + index * 90}ms` }}
                >
                  <span className={`${row.strong ? 'font-black text-gray-950' : 'font-medium text-[#108aa0]'}`}>{row.label}</span>
                  <span className={`font-black ${row.accent || 'text-gray-950'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-5 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            <button
              type="button"
              onClick={() => router.push('/driver')}
              className="delivery-button delivery-card-delay-5 group flex h-[68px] w-full items-center justify-center gap-3 rounded-[1.25rem] bg-gradient-to-r from-[#12b7d4] via-[#287ab3] to-[#7b55ad] text-[18px] font-black text-white shadow-[0_18px_36px_rgba(18,183,212,0.25)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(123,85,173,0.28)] active:scale-[0.98] md:text-[22px]"
            >
              Back to Dashboard
              <ChevronRight className="h-6 w-6 transition group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              className="delivery-button delivery-card-delay-5 h-[60px] w-full rounded-[1.25rem] bg-white/60 text-[17px] font-black text-[#1b8ba0] shadow-[0_10px_28px_rgba(10,86,110,0.04)] ring-1 ring-white/70 transition hover:-translate-y-1 hover:bg-white active:scale-[0.98] md:text-[20px]"
            >
              View Receipt History
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
