'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Header from '../../components/Header';
import styles from './login.module.css';

export default function LoginPage() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);
  const [loading, setLoading]   = useState(false);
  const [focused, setFocused]   = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
  };

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.root}>
        <span className={styles.ring1} aria-hidden="true" />
        <span className={styles.ring2} aria-hidden="true" />
        <span className={styles.ring3} aria-hidden="true" />

        <div className={styles.card}>

          {/* Logo */}
          <Link href="/" className={styles.logoWrap}>
            <div className={styles.logoBox}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="10" cy="4"  r="1.2" fill="white" opacity="0.9"/>
                <circle cx="16" cy="2"  r="1.5" fill="white"/>
                <circle cx="22" cy="4"  r="1.2" fill="white" opacity="0.9"/>
                <path d="M6 10h20l-2.5 10H8.5L6 10z" fill="white" opacity="0.95"/>
                <path d="M4 7h2.5l2 13" stroke="white" strokeWidth="1.8"
                  strokeLinecap="round" fill="none"/>
                <circle cx="11" cy="25" r="2" fill="white"/>
                <circle cx="21" cy="25" r="2" fill="white"/>
              </svg>
            </div>
            <p className={styles.appName}>OrderKro</p>
          </Link>

          <h1 className={styles.heading}>Welcome Back</h1>
          <p  className={styles.sub}>Login to continue ordering</p>

          <form onSubmit={handleSubmit} className={styles.form} noValidate>

            {/* Email */}
            <div className={styles.fieldWrap}>
              <label htmlFor="login-email" className={styles.label}>Email</label>
              <div className={styles.inputRow}>
                <Mail
                  size={15}
                  className={`${styles.fieldIcon} ${focused === 'email' ? styles.fieldIconActive : ''}`}
                />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="name@example.com"
                  autoComplete="email"
                  className={`${styles.input} ${focused === 'email' ? styles.inputFocused : ''}`}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className={styles.fieldWrap}>
              <div className={styles.labelRow}>
                <label htmlFor="login-password" className={styles.label}>Password</label>
                <Link href="/forgot-password" className={styles.forgot}>Forgot Password?</Link>
              </div>
              <div className={styles.inputRow}>
                <Lock
                  size={15}
                  className={`${styles.fieldIcon} ${focused === 'pw' ? styles.fieldIconActive : ''}`}
                />
                <input
                  id="login-password"
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused('pw')}
                  onBlur={() => setFocused(null)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className={`${styles.input} ${styles.inputPr} ${focused === 'pw' ? styles.inputFocused : ''}`}
                  required
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPw(!showPw)}
                  aria-label="Toggle password visibility"
                >
                  {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              id="login-submit"
              disabled={loading}
              className={`${styles.loginBtn} ${loading ? styles.loginBtnLoading : ''}`}
            >
              {loading ? <span className={styles.spinner} /> : 'Login'}
            </button>
          </form>

          <div className={styles.orRow}>
            <span className={styles.orLine} />
            <span className={styles.orText}>OR</span>
            <span className={styles.orLine} />
          </div>

          <p className={styles.signupLine}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" className={styles.signupLink}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
