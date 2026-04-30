'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft, ChevronDown, Store, Tag,
  Package, MapPin, Shield, BadgeCheck,
} from 'lucide-react';
import Header from '../../../components/Header';
import styles from './seller.module.css';

const CATEGORIES = [
  'Grocery & Supermarket',
  'Restaurant & Food',
  'Pharmacy & Health',
  'Electronics',
  'Fashion & Clothing',
  'Beauty & Personal Care',
  'Home & Kitchen',
  'Sports & Fitness',
  'Books & Stationery',
  'Other',
];

const PRODUCT_CATEGORIES = [
  'Fresh Produce',
  'Packaged Foods',
  'Beverages',
  'Dairy & Eggs',
  'Meat & Seafood',
  'Snacks & Sweets',
  'Ready to Eat',
  'Organic Products',
  'Other',
];

export default function SellerOnboardingPage() {
  const router = useRouter();

  const [shopName, setShopName]               = useState('');
  const [shopCategory, setShopCategory]       = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [address, setAddress]                 = useState('');
  const [focused, setFocused]                 = useState(null);
  const [loading, setLoading]                 = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    router.push('/');
  };

  const ic = (name) =>
    `${styles.fieldIcon} ${focused === name ? styles.fieldIconActive : ''}`;

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.body}>
        <span className={styles.ring1} aria-hidden="true" />
        <span className={styles.ring2} aria-hidden="true" />

        <div className={styles.card}>

          {/* ── Top bar ── */}
          <div className={styles.topBar}>
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => router.push('/signup')}
              aria-label="Go back"
            >
              <ChevronLeft size={17} />
            </button>
            <span className={styles.topTitle}>Seller Onboarding</span>
            <span className={styles.topSpacer} />
          </div>

          {/* ── Step indicator: "STEP 2 of 3" + dot labels ── */}
          <div className={styles.stepSection}>
            <div className={styles.stepMeta}>
              <span className={styles.stepMetaLabel}>STEP 2 of 3</span>
            </div>

            {/* Two labelled dots with connecting line */}
            <div className={styles.dotsRow}>
              {/* Store Details – active */}
              <div className={styles.dotItem}>
                <div className={`${styles.dot} ${styles.dotActive}`} />
                <span className={`${styles.dotLabel} ${styles.dotLabelActive}`}>
                  Store Details
                </span>
              </div>

              {/* connecting bar – partially filled */}
              <div className={styles.connectorTrack}>
                <div className={styles.connectorFill} />
              </div>

              {/* Almost there – upcoming */}
              <div className={styles.dotItem}>
                <div className={styles.dot} />
                <span className={styles.dotLabel}>Almost there</span>
              </div>
            </div>
          </div>

          {/* ── Heading ── */}
          <h1 className={styles.heading}>Tell us about your shop</h1>
          <p className={styles.sub}>
            Provide accurate details to help customers find your business easily.
          </p>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit} className={styles.form} noValidate>

            {/* Shop Name */}
            <div className={styles.fieldWrap}>
              <label htmlFor="shop-name" className={styles.label}>Shop Name</label>
              <div className={styles.inputRow}>
                <Store size={15} className={ic('shopname')} />
                <input
                  id="shop-name"
                  type="text"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  onFocus={() => setFocused('shopname')}
                  onBlur={() => setFocused(null)}
                  placeholder="e.g. Blue Ribbon Gourmet"
                  className={`${styles.input} ${focused === 'shopname' ? styles.inputFocused : ''}`}
                  required
                />
              </div>
            </div>

            {/* Shop Category */}
            <div className={styles.fieldWrap}>
              <label htmlFor="shop-category" className={styles.label}>Shop Category</label>
              <div className={styles.inputRow}>
                <Tag size={15} className={ic('shopcat')} />
                <select
                  id="shop-category"
                  value={shopCategory}
                  onChange={(e) => setShopCategory(e.target.value)}
                  onFocus={() => setFocused('shopcat')}
                  onBlur={() => setFocused(null)}
                  className={`${styles.input} ${styles.select} ${!shopCategory ? styles.placeholder : ''} ${focused === 'shopcat' ? styles.inputFocused : ''}`}
                  required
                >
                  <option value="" disabled hidden>Select category</option>
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown size={14} className={styles.selectArrow} />
              </div>
            </div>

            {/* Primary Product Category */}
            <div className={styles.fieldWrap}>
              <label htmlFor="prod-category" className={styles.label}>
                Primary Product Category
              </label>
              <div className={styles.inputRow}>
                <Package size={15} className={ic('prodcat')} />
                <select
                  id="prod-category"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  onFocus={() => setFocused('prodcat')}
                  onBlur={() => setFocused(null)}
                  className={`${styles.input} ${styles.select} ${!productCategory ? styles.placeholder : ''} ${focused === 'prodcat' ? styles.inputFocused : ''}`}
                  required
                >
                  <option value="" disabled hidden>Select primary product</option>
                  {PRODUCT_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown size={14} className={styles.selectArrow} />
              </div>
            </div>

            {/* Business Address */}
            <div className={styles.fieldWrap}>
              <label htmlFor="biz-address" className={styles.label}>Business Address</label>
              <div className={`${styles.inputRow} ${styles.textareaRow}`}>
                <MapPin size={15} className={`${ic('address')} ${styles.iconTop}`} />
                <textarea
                  id="biz-address"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onFocus={() => setFocused('address')}
                  onBlur={() => setFocused(null)}
                  placeholder="Full street address, city, and postal code"
                  className={`${styles.input} ${styles.textarea} ${focused === 'address' ? styles.inputFocused : ''}`}
                  required
                />
              </div>
            </div>

            {/* Complete Registration button */}
            <button
              type="submit"
              id="seller-complete"
              disabled={loading}
              className={`${styles.completeBtn} ${loading ? styles.completeBtnLoading : ''}`}
            >
              {loading
                ? <span className={styles.spinner} />
                : <>
                    <span>Complete Registration</span>
                    <span className={styles.btnArrow}>›</span>
                  </>
              }
            </button>
          </form>

          {/* Legal */}
          <p className={styles.legal}>
            By clicking complete, you agree to OrderKro&apos;s{' '}
            <a href="#" className={styles.legalLink}>Seller Terms of Service</a>{' '}
            and{' '}
            <a href="#" className={styles.legalLink}>Privacy Policy</a>.
          </p>

          {/* Trust badges */}
          <div className={styles.trustRow}>
            <div className={styles.trustBadge}>
              <Shield size={12} className={styles.trustIcon} />
              <span>Secured &amp; Verified Onboarding</span>
            </div>
            <span className={styles.trustSep}>•</span>
            <div className={styles.trustBadge}>
              <BadgeCheck size={12} className={styles.trustIcon} />
              <span>SSL Registered</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
