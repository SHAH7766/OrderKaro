'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft, User, Mail, Lock, Eye, EyeOff,
  Phone, ShoppingCart, Store,
} from 'lucide-react';
import Header from '../../components/Header';
import styles from './signup.module.css';

export default function SignupPage() {
  const router = useRouter();

  const [username, setUsername]       = useState('');
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [showPw, setShowPw]           = useState(false);
  const [accountType, setAccountType] = useState('customer');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [phone, setPhone]         = useState('');

  const [otp, setOtp] = useState(['', '', '', '']);

  const [step, setStep]       = useState(1);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);

  const TOTAL_STEPS = 3;
  const stepLabels  = ['BASIC CREDENTIALS', 'PERSONAL DETAILS', 'VERIFY EMAIL'];

  const handleNext = (e) => {
    e.preventDefault();
    // Seller accounts go to the dedicated seller onboarding flow
    if (step === 1 && accountType === 'seller') {
      router.push('/signup/seller');
      return;
    }
    if (step < TOTAL_STEPS) setStep((s) => s + 1);
    else handleSubmit();
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    router.push('/');
  };

  const handleOtpChange = (val, idx) => {
    const next = [...otp];
    next[idx] = val.replace(/\D/, '').slice(-1);
    setOtp(next);
    if (val && idx < 3) document.getElementById(`otp-${idx + 1}`)?.focus();
  };

  /* icon helper – active colour handled via CSS class */
  const ic = (name) => `${styles.fieldIcon} ${focused === name ? styles.fieldIconActive : ''}`;

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.body}>
        <span className={styles.ring1} aria-hidden="true" />
        <span className={styles.ring2} aria-hidden="true" />
        <span className={styles.ring3} aria-hidden="true" />

        <div className={styles.card}>

          {/* ── Top bar ── */}
          <div className={styles.topBar}>
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => step > 1 ? setStep((s) => s - 1) : router.push('/login')}
              aria-label="Go back"
            >
              <ChevronLeft size={18} />
            </button>
            <span className={styles.topTitle}>Create Account</span>
            <span className={styles.stepCounter}>{step}/{TOTAL_STEPS}</span>
          </div>

          {/* ── Step label ── */}
          <div className={styles.stepLabelRow}>
            <span className={styles.stepLabel}>STEP {step}: {stepLabels[step - 1]}</span>
          </div>

          {/* ── Progress bar ── */}
          <div className={styles.progressTrack}>
            <div className={styles.progressFill}
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
          </div>

          {/* ── Heading ── */}
          <h1 className={styles.heading}>Join OrderKro</h1>
          <p className={styles.sub}>
            {step === 1 && 'Enter your details to get started with your new account.'}
            {step === 2 && 'Tell us a little more about yourself.'}
            {step === 3 && 'We sent a 4-digit code to your email.'}
          </p>

          {/* ══ STEP 1 ══ */}
          {step === 1 && (
            <form onSubmit={handleNext} className={styles.form} noValidate>

              <div className={styles.fieldWrap}>
                <label htmlFor="su-username" className={styles.label}>User Name</label>
                <div className={styles.inputRow}>
                  <User size={15} className={ic('username')} />
                  <input id="su-username" type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setFocused('username')} onBlur={() => setFocused(null)}
                    placeholder="Choose a unique username" autoComplete="username"
                    className={`${styles.input} ${focused === 'username' ? styles.inputFocused : ''}`}
                    required />
                </div>
              </div>

              <div className={styles.fieldWrap}>
                <label htmlFor="su-email" className={styles.label}>Email Address</label>
                <div className={styles.inputRow}>
                  <Mail size={15} className={ic('email')} />
                  <input id="su-email" type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    placeholder="name@example.com" autoComplete="email"
                    className={`${styles.input} ${focused === 'email' ? styles.inputFocused : ''}`}
                    required />
                </div>
              </div>

              <div className={styles.fieldWrap}>
                <label htmlFor="su-password" className={styles.label}>Password</label>
                <div className={styles.inputRow}>
                  <Lock size={15} className={ic('pw')} />
                  <input id="su-password" type={showPw ? 'text' : 'password'}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocused('pw')} onBlur={() => setFocused(null)}
                    placeholder="Create a strong password" autoComplete="new-password"
                    className={`${styles.input} ${styles.inputPr} ${focused === 'pw' ? styles.inputFocused : ''}`}
                    required />
                  <button type="button" className={styles.eyeBtn}
                    onClick={() => setShowPw(!showPw)} aria-label="Toggle password">
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Account Type */}
              <div className={styles.fieldWrap}>
                <span className={styles.label}>Account Type</span>
                <div className={styles.typeRow}>
                  <button type="button" id="type-customer"
                    className={`${styles.typeBtn} ${accountType === 'customer' ? styles.typeBtnActive : ''}`}
                    onClick={() => setAccountType('customer')}>
                    <ShoppingCart size={16} /> Customer
                  </button>
                  <button type="button" id="type-seller"
                    className={`${styles.typeBtn} ${accountType === 'seller' ? styles.typeBtnActive : ''}`}
                    onClick={() => setAccountType('seller')}>
                    <Store size={16} /> Seller
                  </button>
                </div>
              </div>

              <button type="submit" id="signup-next-1" className={styles.submitBtn}>
                Sign Up
              </button>
            </form>
          )}

          {/* ══ STEP 2 ══ */}
          {step === 2 && (
            <form onSubmit={handleNext} className={styles.form} noValidate>
              <div className={styles.fieldWrap}>
                <label htmlFor="su-firstname" className={styles.label}>First Name</label>
                <div className={styles.inputRow}>
                  <User size={15} className={ic('firstname')} />
                  <input id="su-firstname" type="text" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onFocus={() => setFocused('firstname')} onBlur={() => setFocused(null)}
                    placeholder="Your first name"
                    className={`${styles.input} ${focused === 'firstname' ? styles.inputFocused : ''}`}
                    required />
                </div>
              </div>
              <div className={styles.fieldWrap}>
                <label htmlFor="su-lastname" className={styles.label}>Last Name</label>
                <div className={styles.inputRow}>
                  <User size={15} className={ic('lastname')} />
                  <input id="su-lastname" type="text" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={() => setFocused('lastname')} onBlur={() => setFocused(null)}
                    placeholder="Your last name"
                    className={`${styles.input} ${focused === 'lastname' ? styles.inputFocused : ''}`}
                    required />
                </div>
              </div>
              <div className={styles.fieldWrap}>
                <label htmlFor="su-phone" className={styles.label}>Phone Number</label>
                <div className={styles.inputRow}>
                  <Phone size={15} className={ic('phone')} />
                  <input id="su-phone" type="tel" value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                    placeholder="+91 00000 00000"
                    className={`${styles.input} ${focused === 'phone' ? styles.inputFocused : ''}`}
                    required />
                </div>
              </div>
              <button type="submit" id="signup-next-2" className={styles.submitBtn}>
                Continue
              </button>
            </form>
          )}

          {/* ══ STEP 3 – OTP ══ */}
          {step === 3 && (
            <form onSubmit={handleNext} className={styles.form} noValidate>
              <p className={styles.otpHint}>
                Code sent to <strong>{email || 'your email'}</strong>
              </p>
              <div className={styles.otpRow}>
                {otp.map((digit, i) => (
                  <input key={i} id={`otp-${i}`} type="text" inputMode="numeric"
                    maxLength={1} value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, i)}
                    className={`${styles.otpBox} ${digit ? styles.otpBoxFilled : ''}`} />
                ))}
              </div>
              <button type="submit" id="signup-verify" disabled={loading}
                className={`${styles.submitBtn} ${loading ? styles.submitBtnLoading : ''}`}>
                {loading ? <span className={styles.spinner} /> : 'Verify & Create Account'}
              </button>
              <button type="button" className={styles.resendBtn}>Resend code</button>
            </form>
          )}

          <p className={styles.loginLine}>
            Already have an account?{' '}
            <Link href="/login" className={styles.loginLink}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
