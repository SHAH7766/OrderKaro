'use client';

import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  Bike,
  BadgeCheck,
  FileText,
  IdCard,
  Award,
  Languages,
  Wallet,
  Headphones,
  LogOut,
  ChevronRight,
  Home,
  ClipboardList,
  ShoppingCart,
  UserRound,
  Star,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const documents = [
  {
    label: 'CNIC',
    detail: '****-*****-4231',
    icon: IdCard,
    updated: 'Updated 4 days ago',
    note: 'Identity verification is active for delivery payouts.',
  },
  {
    label: 'Driving License',
    detail: 'Exp: 12/2026',
    icon: Award,
    updated: 'Renewal reminder enabled',
    note: 'Eligible for motorcycle and express delivery jobs.',
  },
];

const profileStats = [
  { label: 'Rating', value: '4.9', icon: Star },
  { label: 'Trips', value: '1.2k', icon: Zap },
  { label: 'Verified', value: '100%', icon: ShieldCheck },
];

const languages = ['English (US)', 'Urdu', 'Arabic'];

const settings = [
  {
    label: 'Payout Settings',
    icon: Wallet,
    iconWrap: 'bg-cyan-50 text-cyan-600',
    text: 'text-gray-950',
  },
  {
    label: 'Support Center',
    icon: Headphones,
    iconWrap: 'bg-purple-50 text-purple-600',
    text: 'text-gray-950',
  },
  {
    label: 'Logout Account',
    icon: LogOut,
    iconWrap: 'bg-red-50 text-red-600',
    text: 'text-red-700',
  },
];

const navItems = [
  { label: 'Home', icon: Home },
  { label: 'Orders', icon: ClipboardList },
  { label: 'Cart', icon: ShoppingCart },
  { label: 'Profile', icon: UserRound, active: true },
];

function SectionCard({ children, className = '' }) {
  return (
    <section className={`profile-card rounded-[1.75rem] md:rounded-[2rem] bg-white/88 p-7 shadow-[0_14px_45px_rgba(10,86,110,0.06)] ring-1 ring-white/80 transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(10,86,110,0.12)] ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ children, icon: Icon }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-[15px] font-black uppercase tracking-[0.22em] text-[#1b8ba0] md:text-base">
        {children}
      </h2>
      {Icon && <Icon className="h-7 w-7 text-[#1b8ba0]" strokeWidth={2.2} />}
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const [availability, setAvailability] = useState('online');
  const [expandedDoc, setExpandedDoc] = useState('CNIC');
  const [language, setLanguage] = useState('English (US)');
  const [activeStat, setActiveStat] = useState('Rating');

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#eef8f8_0%,#f8fbfb_42%,#eef8f8_100%)] text-gray-950">
      <div className="mx-auto min-h-screen max-w-[1440px] bg-[#f3f9f9] lg:grid lg:grid-cols-[minmax(380px,520px)_1fr] lg:gap-8 lg:px-8 lg:py-8">
        <section className="profile-hero relative overflow-hidden lg:min-h-[calc(100vh-4rem)] lg:rounded-[2.5rem] lg:bg-white lg:shadow-[0_24px_80px_rgba(23,90,138,0.14)]">
          <div className="relative z-20 flex h-[79px] items-center justify-between bg-gradient-to-r from-[#c0d7e1] via-[#c3d2e6] to-[#d4c9e6] px-6 lg:rounded-t-[2.5rem]">
            <button
              type="button"
              aria-label="Go back"
              onClick={() => router.back()}
              className="group flex h-10 w-10 items-center justify-center rounded-full text-[#00a9cb] transition hover:bg-white/35 hover:shadow-lg active:scale-95"
            >
              <ArrowLeft className="h-6 w-6 transition group-hover:-translate-x-1" strokeWidth={2.5} />
            </button>
            <h1 className="profile-title mr-auto ml-3 text-2xl font-black tracking-tight text-[#00a9cb]">
              OrderKro
            </h1>
            <button
              type="button"
              aria-label="Search"
              className="group flex h-10 w-10 items-center justify-center rounded-full text-[#00a9cb] transition hover:bg-white/35 hover:shadow-lg active:scale-95"
            >
              <Search className="h-6 w-6 transition group-hover:rotate-12 group-hover:scale-110" strokeWidth={2.5} />
            </button>
          </div>

          <div className="relative h-[430px] bg-[#f3f9f9] lg:h-[520px]">
            <div className="profile-wave absolute inset-x-0 top-0 h-[230px] overflow-hidden bg-gradient-to-r from-[#167c9d] via-[#236ba9] to-[#5b55a4] lg:h-[310px]">
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.55)_45%,transparent_70%)] profile-sheen" />
              <div className="absolute -bottom-8 left-1/2 h-16 w-[125%] -translate-x-1/2 rounded-[0_0_50%_50%] bg-[#f3f9f9] shadow-[0_-14px_35px_rgba(255,255,255,0.18)]" />
            </div>

            <div className="profile-avatar-wrap absolute top-[40px] left-1/2 flex -translate-x-1/2 flex-col items-center lg:top-[64px]">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-300/35 blur-2xl profile-glow" />
                <div className="profile-avatar relative rounded-full border-[7px] border-[#6da1da]/75 p-[5px] shadow-[0_18px_36px_rgba(0,178,210,0.28)]">
                  <img
                    src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=360&q=80"
                    alt="Alex Rivera"
                    className="h-[126px] w-[126px] rounded-full border-[7px] border-white object-cover lg:h-[156px] lg:w-[156px]"
                  />
                </div>
                <span className="profile-online absolute right-2 bottom-4 flex h-8 w-8 items-center justify-center rounded-full border-[6px] border-white bg-[#22c85f] shadow-[0_8px_18px_rgba(34,200,95,0.36)]">
                  <span className="h-3 w-3 rounded-full bg-white" />
                </span>
              </div>
              <h2 className="profile-name mt-7 text-3xl font-black text-white drop-shadow-[0_8px_18px_rgba(255,255,255,0.65)] lg:text-4xl">
                Alex Rivera
              </h2>
              <div className="profile-status mt-4 flex rounded-full bg-white/15 p-1 text-xs font-black uppercase tracking-widest text-white shadow-[0_12px_30px_rgba(255,255,255,0.18)] ring-1 ring-white/20 backdrop-blur-md">
                {['online', 'break'].map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setAvailability(status)}
                    className={`rounded-full px-4 py-2 transition ${availability === status ? 'bg-white text-[#087ea0] shadow-lg' : 'text-white/80 hover:text-white'}`}
                  >
                    {status === 'online' ? 'Active Now' : 'On Break'}
                  </button>
                ))}
              </div>
              <div className="mt-8 grid w-[320px] max-w-[88vw] grid-cols-3 gap-3 lg:w-[380px]">
                {profileStats.map((stat) => (
                  <button
                    key={stat.label}
                    type="button"
                    onClick={() => setActiveStat(stat.label)}
                    className={`rounded-2xl border border-white/20 px-3 py-3 text-center text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20 ${activeStat === stat.label ? 'bg-white/24 shadow-[0_14px_34px_rgba(255,255,255,0.16)]' : 'bg-white/12'}`}
                  >
                    <stat.icon className="mx-auto mb-1 h-4 w-4" />
                    <span className="block text-lg font-black leading-none">{stat.value}</span>
                    <span className="mt-1 block text-[9px] font-black uppercase tracking-widest text-white/75">{stat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-5 space-y-8 px-7 pb-32 lg:mt-0 lg:grid lg:grid-cols-2 lg:content-start lg:gap-8 lg:space-y-0 lg:px-0 lg:pb-0">
          <SectionCard className="profile-card-delay-1 lg:col-span-2">
            <div className="flex items-center gap-6">
              <div className="profile-icon-tile relative flex h-[78px] w-[78px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#00b6dc] via-[#3586dc] to-[#7a43b9] shadow-[0_18px_34px_rgba(0,169,203,0.26)]">
                <span className="profile-sheen absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <Bike className="h-10 w-10 text-white drop-shadow" strokeWidth={2.8} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#1b8ba0]">
                  Primary Vehicle
                </p>
                <h3 className="mt-1 text-2xl font-black leading-tight text-gray-950">
                  Honda CB 150R
                </h3>
                <p className="mt-1 text-lg font-semibold text-gray-950">
                  <span className="font-black text-[#087ea0]">Plate:</span> ABC-1234
                </p>
              </div>
              <BadgeCheck className="profile-check h-8 w-8 shrink-0 text-[#00b6dc]" strokeWidth={2.5} />
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ['Fuel', '82%'],
                ['Range', '128 km'],
                ['Zone', 'North'],
                ['Jobs', availability === 'online' ? 'Open' : 'Paused'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-cyan-50/70 px-4 py-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1b8ba0]/70">{label}</p>
                  <p className="mt-1 text-base font-black text-gray-950">{value}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard className="profile-card-delay-2">
            <SectionTitle icon={FileText}>Documentation</SectionTitle>
            <div className="space-y-6">
              {documents.map((doc, index) => {
                const isOpen = expandedDoc === doc.label;
                return (
                <button
                  key={doc.label}
                  type="button"
                  onClick={() => setExpandedDoc(isOpen ? '' : doc.label)}
                  className={`group w-full rounded-2xl bg-white p-4 text-left shadow-[0_12px_30px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)] ${isOpen ? 'ring-2 ring-cyan-100' : ''}`}
                  style={{ animationDelay: `${420 + index * 90}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <doc.icon className="h-8 w-8 shrink-0 text-purple-700 transition group-hover:scale-110 group-hover:text-[#00a9cb]" strokeWidth={2.2} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-black text-gray-950">{doc.label}</h3>
                      <p className="text-sm font-semibold text-slate-500">{doc.detail}</p>
                    </div>
                    <span className="profile-verified rounded-full bg-cyan-50 px-3 py-1 text-xs font-black uppercase text-[#00a9cb]">
                      Verified
                    </span>
                  </div>
                  <div className={`grid transition-all duration-300 ${isOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="rounded-xl bg-[#f5fbfc] p-4 text-sm font-semibold text-slate-600">
                        <p className="flex items-center gap-2 text-[#087ea0]">
                          <CheckCircle2 className="h-4 w-4" /> {doc.updated}
                        </p>
                        <p className="mt-2">{doc.note}</p>
                      </div>
                    </div>
                  </div>
                </button>
              )})}
            </div>
          </SectionCard>

          <SectionCard className="profile-card-delay-3">
            <SectionTitle>Language Settings</SectionTitle>
            <div className="flex items-center gap-5">
              <div className="profile-language-icon flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500 shadow-[0_12px_28px_rgba(236,72,153,0.12)]">
                <Languages className="h-8 w-8" strokeWidth={2.2} />
              </div>
              <div>
                <p className="font-semibold text-[#087ea0]">Current Display</p>
                <h3 className="text-xl font-black text-gray-950">{language}</h3>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2">
              {languages.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={`min-h-[52px] rounded-2xl border px-2 text-sm font-black transition hover:-translate-y-0.5 active:scale-[0.98] ${language === item ? 'border-cyan-200 bg-cyan-50 text-[#00a9cb] shadow-[0_10px_22px_rgba(0,169,203,0.12)]' : 'border-gray-100 bg-white text-slate-500'}`}
                >
                  {item.split(' ')[0]}
                </button>
              ))}
            </div>
          </SectionCard>

          <SectionCard className="profile-card-delay-4 lg:col-span-2">
            <div className="divide-y divide-gray-100">
              {settings.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="group flex w-full items-center gap-4 py-5 text-left transition first:pt-0 last:pb-0 hover:pl-1"
                >
                  <span className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] shadow-sm transition group-hover:scale-105 ${item.iconWrap}`}>
                    <item.icon className="h-6 w-6 transition group-hover:-rotate-6" strokeWidth={2.2} />
                  </span>
                  <span className={`flex-1 text-[15px] leading-[1.15] font-black sm:text-[16px] ${item.text}`}>{item.label}</span>
                  <ChevronRight className={`h-5 w-5 transition group-hover:translate-x-1 ${item.label.includes('Logout') ? 'text-red-600' : 'text-slate-400'}`} strokeWidth={2.6} />
                </button>
              ))}
            </div>
          </SectionCard>
        </section>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 rounded-t-[1.75rem] bg-white px-7 pt-3 pb-4 shadow-[0_-14px_40px_rgba(10,86,110,0.08)] lg:hidden">
        <div className="flex items-center justify-between">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`profile-nav-item flex min-h-[74px] min-w-[64px] flex-col items-center justify-center gap-1 rounded-2xl px-3 transition active:scale-95 ${item.active ? 'bg-cyan-50 text-[#00a9cb] shadow-[0_12px_28px_rgba(0,169,203,0.12)]' : 'text-slate-400'}`}
            >
              <item.icon className="h-6 w-6" strokeWidth={2.4} />
              <span className="text-[11px] font-black uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
