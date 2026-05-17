'use client';

import React, { useState } from 'react';
import {
  Bell,
  ClipboardList,
  CreditCard,
  Eye,
  EyeOff,
  FileText,
  Headset,
  History,
  House,
  Languages,
  LockKeyhole,
  LogOut,
  MapPinned,
  Mail,
  Phone,
  Save,
  Settings,
  ShieldCheck,
  Star,
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
  { label: 'Orders', icon: ClipboardList, href: '/driver-orders' },
  { label: 'History', icon: History, href: '/driver-history' },
  { label: 'Wallet', icon: Wallet, href: '/driver-wallet' },
  { label: 'Zones', icon: MapPinned, href: '/driver-zones' },
  { label: 'Settings', icon: Settings, href: '/driver-settings', active: true },
];

function Field({ label, icon: Icon, type = 'text', value, onChange, placeholder, autoComplete }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#16879a]">{label}</span>
      <span className="flex h-[54px] items-center gap-3 rounded-2xl border border-slate-100 bg-[#f8fbfd] px-4 transition focus-within:border-cyan-200 focus-within:bg-white focus-within:shadow-[0_12px_28px_rgba(8,175,208,0.08)]">
        {Icon && <Icon className="h-5 w-5 shrink-0 text-[#08afd0]" strokeWidth={2.2} />}
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="h-full min-w-0 flex-1 bg-transparent text-sm font-bold text-slate-950 outline-none placeholder:text-slate-400"
        />
      </span>
    </label>
  );
}

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

export default function DriverSettingsPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    name: 'Alex Carter',
    email: 'alex.carter@orderkro.com',
    phone: '+92 300 1234567',
    emergencyPhone: '+92 321 9876543',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    language: 'English',
    orderAlerts: true,
    payoutAlerts: true,
    promoAlerts: false,
  });

  const update = (key, value) => setSettings((current) => ({ ...current, [key]: value }));

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
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">Driver Settings</p>
                <h1 className="mt-1 text-3xl font-black tracking-tight">Account preferences</h1>
                <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/82">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2.4} />
                  Manage profile, phone, password, and alerts
                </p>
              </div>

              <button
                type="button"
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-[#087ea0] shadow-[0_14px_34px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5"
              >
                <Save className="h-5 w-5" strokeWidth={2.3} />
                Save changes
              </button>
            </div>
          </header>

          <div className="mt-7 grid gap-7 xl:grid-cols-[1fr_380px]">
            <section className="delivery-card rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Personal Information</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-950">Edit driver details</h2>
                </div>
                <UserRound className="h-8 w-8 text-[#08afd0]" strokeWidth={2.3} />
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <Field label="Full Name" icon={UserRound} value={settings.name} onChange={(value) => update('name', value)} autoComplete="name" />
                <Field label="Email Address" icon={Mail} type="email" value={settings.email} onChange={(value) => update('email', value)} autoComplete="email" />
                <Field label="Phone Number" icon={Phone} type="tel" value={settings.phone} onChange={(value) => update('phone', value)} autoComplete="tel" />
                <Field label="Emergency Phone" icon={Phone} type="tel" value={settings.emergencyPhone} onChange={(value) => update('emergencyPhone', value)} autoComplete="tel" />
              </div>
            </section>

            <section className="delivery-card rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Security</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-950">Password</h2>
                </div>
                <LockKeyhole className="h-8 w-8 text-[#08afd0]" strokeWidth={2.3} />
              </div>

              <div className="mt-7 space-y-5">
                <Field label="Current Password" icon={LockKeyhole} type={showPassword ? 'text' : 'password'} value={settings.currentPassword} onChange={(value) => update('currentPassword', value)} autoComplete="current-password" />
                <Field label="New Password" icon={LockKeyhole} type={showPassword ? 'text' : 'password'} value={settings.newPassword} onChange={(value) => update('newPassword', value)} autoComplete="new-password" />
                <Field label="Confirm Password" icon={LockKeyhole} type={showPassword ? 'text' : 'password'} value={settings.confirmPassword} onChange={(value) => update('confirmPassword', value)} autoComplete="new-password" />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-slate-50 text-sm font-black text-slate-600 transition hover:bg-cyan-50 hover:text-[#08afd0]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  {showPassword ? 'Hide password' : 'Show password'}
                </button>
              </div>
            </section>
          </div>

          <section className="delivery-card mt-7 rounded-[2rem] bg-white p-6 shadow-[0_20px_56px_rgba(14,71,100,0.09)] ring-1 ring-white/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#16879a]">Preferences</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950">Notifications and language</h2>
              </div>
              <Settings className="h-8 w-8 text-[#08afd0]" strokeWidth={2.3} />
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-[#16879a]">Language</span>
                <span className="flex h-[54px] items-center gap-3 rounded-2xl border border-slate-100 bg-[#f8fbfd] px-4">
                  <Languages className="h-5 w-5 text-[#08afd0]" strokeWidth={2.2} />
                  <select
                    value={settings.language}
                    onChange={(event) => update('language', event.target.value)}
                    className="h-full flex-1 bg-transparent text-sm font-bold text-slate-950 outline-none"
                  >
                    <option>English</option>
                    <option>Urdu</option>
                    <option>Arabic</option>
                  </select>
                </span>
              </label>

              <div className="rounded-2xl bg-[#f8fbfd] p-4">
                {[
                  ['orderAlerts', 'Order alerts'],
                  ['payoutAlerts', 'Payout alerts'],
                  ['promoAlerts', 'Bonus and promo alerts'],
                ].map(([key, label]) => (
                  <label key={key} className="flex min-h-12 items-center justify-between gap-4 border-b border-slate-100 last:border-b-0">
                    <span className="flex items-center gap-3 text-sm font-black text-slate-700">
                      <Bell className="h-4 w-4 text-[#08afd0]" strokeWidth={2.2} />
                      {label}
                    </span>
                    <input
                      type="checkbox"
                      checked={settings[key]}
                      onChange={(event) => update(key, event.target.checked)}
                      className="h-5 w-5 accent-[#08afd0]"
                    />
                  </label>
                ))}
              </div>
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
          <button type="button" onClick={() => router.push('/driver-profile')} className="delivery-card rounded-[1.2rem] px-2 py-3 text-center text-slate-400 transition">
            <UserRound className="mx-auto h-6 w-6" strokeWidth={2.2} />
            <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">Profile</span>
          </button>
          <button type="button" className="delivery-card rounded-[1.2rem] bg-cyan-50 px-2 py-3 text-center text-[#08afd0] transition">
            <Settings className="mx-auto h-6 w-6" strokeWidth={2.2} />
            <span className="mt-2 block text-[11px] font-black uppercase tracking-[0.14em]">Settings</span>
          </button>
        </div>
      </nav>
    </main>
    </>
  );
}
