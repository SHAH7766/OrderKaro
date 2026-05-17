'use client';

import React from 'react';
import {
  BadgeCheck,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileCheck2,
  FileText,
  Headset,
  House,
  IdCard,
  LogOut,
  Settings,
  ShieldCheck,
  Upload,
  UserRound,
  WalletCards,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

const sidebarLinks = [
  { label: 'Dashboard', icon: House, href: '/driver-home' },
  { label: 'My Profile', icon: UserRound, href: '/driver-profile' },
  { label: 'Documents', icon: FileText, href: '/driver-documents', active: true },
  { label: 'Earnings', icon: WalletCards, href: '/driver-earnings' },
  { label: 'Payouts', icon: CreditCard, href: '/driver-payouts' },
  { label: 'Orders', icon: ClipboardList, href: '/driver-orders' },
  { label: 'Settings', icon: Settings, href: '/driver-settings' },
];

const documents = [
  { label: 'CNIC', detail: '****-*****-4231', status: 'Verified', updated: 'Updated 4 days ago', icon: IdCard },
  { label: 'Driving License', detail: 'Expires Dec 2026', status: 'Verified', updated: 'Renewal reminder enabled', icon: BadgeCheck },
  { label: 'Vehicle Registration', detail: 'ABC-1234', status: 'Verified', updated: 'Matched with Honda CB 150R', icon: FileCheck2 },
  { label: 'Insurance', detail: 'Expires Aug 2026', status: 'Review', updated: 'Upload latest policy copy', icon: FileText },
];

function DriverSidebar({ router }) {
  return (
    <aside className="sticky top-8 hidden h-[calc(100vh-4rem)] flex-col overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_24px_70px_rgba(14,71,100,0.12)] ring-1 ring-white/80 lg:flex">
      <div className="rounded-[1.5rem] bg-gradient-to-br from-[#0ea9d1] via-[#467fd2] to-[#f35ca8] p-4 text-white shadow-[0_18px_42px_rgba(21,168,211,0.22)]">
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=160&q=80" alt="Alex driver profile" className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md" />
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">Driver Profile</p>
            <h2 className="mt-1 text-lg font-black leading-tight">Alex Carter</h2>
            <p className="mt-1 text-xs font-bold text-white/80">ID: DRV-2481</p>
          </div>
        </div>
      </div>

      <nav className="mt-6 space-y-2">
        {sidebarLinks.map((item) => (
          <button key={item.label} type="button" onClick={() => router.push(item.href)} className={`flex h-12 w-full items-center gap-3 rounded-2xl px-4 text-left text-sm font-black transition ${item.active ? 'bg-cyan-50 text-[#08afd0] shadow-[0_10px_24px_rgba(0,169,203,0.08)]' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-950'}`}>
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

export default function DriverDocumentsPage() {
  const router = useRouter();

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[linear-gradient(180deg,#edf7f8_0%,#f8fbfb_46%,#eef8f9_100%)] text-slate-950">
      <div className="mx-auto min-h-screen max-w-[1280px] lg:grid lg:grid-cols-[286px_1fr] lg:gap-7 lg:px-8 lg:py-8">
        <DriverSidebar router={router} />

        <section className="px-4 py-5 pb-28 lg:px-0 lg:py-0 lg:pb-0">
          <header className="rounded-[2rem] bg-gradient-to-r from-[#146d91] via-[#386d9f] to-[#7354ab] p-5 text-white shadow-[0_24px_70px_rgba(20,76,104,0.16)] lg:p-7">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Driver Documents</p>
            <h1 className="mt-1 text-3xl font-black tracking-tight">Verification center</h1>
            <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/82">
              <ShieldCheck className="h-4 w-4" strokeWidth={2.4} />
              3 verified documents, 1 needs review
            </p>
          </header>

          <section className="delivery-card mt-7 rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Documents</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950">Identity and vehicle files</h2>
              </div>
              <Upload className="h-8 w-8 text-[#08afd0]" strokeWidth={2.2} />
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {documents.map((doc) => (
                <article key={doc.label} className="rounded-[1.5rem] border border-slate-100 bg-[#f8fbfd] p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#08afd0] shadow-sm">
                      <doc.icon className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-black text-slate-950">{doc.label}</h3>
                          <p className="mt-1 text-sm font-bold text-slate-500">{doc.detail}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] ${doc.status === 'Verified' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                          {doc.status}
                        </span>
                      </div>
                      <p className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-500">
                        <CalendarDays className="h-4 w-4 text-[#08afd0]" strokeWidth={2.2} />
                        {doc.updated}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button type="button" className="mt-6 flex h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-[#087ea0] md:w-[240px]">
              <Upload className="h-5 w-5" strokeWidth={2.3} />
              Upload document
            </button>
          </section>
        </section>
      </div>
    </main>
    </>
  );
}
