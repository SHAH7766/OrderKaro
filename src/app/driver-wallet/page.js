'use client';

import React from 'react';
import {
  ArrowDownLeft,
  ArrowUpRight,
  ClipboardList,
  CreditCard,
  FileText,
  Headset,
  History,
  House,
  LogOut,
  MapPinned,
  ReceiptText,
  Settings,
  UserRound,
  Wallet,
  WalletCards,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import DriverHeader from '../../components/DriverHeader';

const sidebarLinks = [
  { label: 'Dashboard', icon: House, href: '/driver-home' },
  { label: 'My Profile', icon: UserRound, href: '/driver-profile' },
  { label: 'Documents', icon: FileText, href: '/driver-documents' },
  { label: 'Earnings', icon: WalletCards, href: '/driver-earnings' },
  { label: 'Payouts', icon: CreditCard, href: '/driver-payouts' },
  { label: 'Orders', icon: ClipboardList, href: '/driver-orders' },
  { label: 'History', icon: History, href: '/driver-history' },
  { label: 'Wallet', icon: Wallet, href: '/driver-wallet', active: true },
  { label: 'Zones', icon: MapPinned, href: '/driver-zones' },
  { label: 'Settings', icon: Settings, href: '/driver-settings' },
];

const walletStats = [
  { label: 'Available Balance', value: '$246.80', icon: Wallet },
  { label: 'Cash Collected', value: '$92.40', icon: ArrowDownLeft },
  { label: 'Bonuses', value: '$58.00', icon: ArrowUpRight },
];

const transactions = [
  { title: 'Delivery payout', date: 'Today, 12:45 PM', amount: '+$18.50', type: 'credit' },
  { title: 'Cash collected adjustment', date: 'Today, 11:10 AM', amount: '-$22.00', type: 'debit' },
  { title: 'Peak hour bonus', date: 'Yesterday, 8:30 PM', amount: '+$10.00', type: 'credit' },
  { title: 'Late cancellation fee', date: 'May 15, 2026', amount: '-$4.50', type: 'debit' },
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

      <nav className="mt-6 space-y-2 overflow-y-auto pr-1 scrollbar-hide">
        {sidebarLinks.map((item) => (
          <button key={item.label} type="button" onClick={() => router.push(item.href)} className={`flex h-12 w-full items-center gap-3 rounded-2xl px-4 text-left text-sm font-black transition ${item.active ? 'bg-cyan-50 text-[#08afd0] shadow-[0_10px_24px_rgba(0,169,203,0.08)]' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-950'}`}>
            <item.icon className="h-5 w-5" strokeWidth={2.2} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-3 pt-4">
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

export default function DriverWalletPage() {
  const router = useRouter();

  return (
    <>
      <DriverHeader />
      <main className="min-h-screen bg-[linear-gradient(180deg,#edf7f8_0%,#f8fbfb_46%,#eef8f9_100%)] text-slate-950">
        <div className="mx-auto min-h-screen max-w-[1280px] lg:grid lg:grid-cols-[286px_1fr] lg:gap-7 lg:px-8 lg:py-8">
          <DriverSidebar router={router} />

          <section className="px-4 py-5 pb-28 lg:px-0 lg:py-0 lg:pb-0">
            <header className="rounded-[2rem] bg-gradient-to-r from-[#146d91] via-[#386d9f] to-[#7354ab] p-5 text-white shadow-[0_24px_70px_rgba(20,76,104,0.16)] lg:p-7">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Driver Wallet</p>
              <h1 className="mt-1 text-3xl font-black tracking-tight">Balance and adjustments</h1>
              <p className="mt-2 text-sm font-bold text-white/82">Track bonuses, penalties, cash collected, and wallet balance.</p>
            </header>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {walletStats.map((stat, index) => (
                <section key={stat.label} className="delivery-card rounded-[1.75rem] bg-white p-5 shadow-[0_18px_42px_rgba(14,71,100,0.08)] ring-1 ring-white/80" style={{ animationDelay: `${120 + index * 70}ms` }}>
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
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Transactions</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-950">Wallet activity</h2>
                </div>
                <ReceiptText className="h-8 w-8 text-[#08afd0]" strokeWidth={2.2} />
              </div>

              <div className="mt-7 space-y-3">
                {transactions.map((transaction) => (
                  <article key={`${transaction.title}-${transaction.date}`} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f8fbfd] p-4">
                    <div>
                      <h3 className="font-black text-slate-950">{transaction.title}</h3>
                      <p className="mt-1 text-sm font-bold text-slate-500">{transaction.date}</p>
                    </div>
                    <span className={`text-lg font-black ${transaction.type === 'credit' ? 'text-emerald-600' : 'text-red-500'}`}>{transaction.amount}</span>
                  </article>
                ))}
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
