import React, { useState } from 'react';
import toast from 'react-hot-toast';

const PLANS = [
  {
    name: 'Free',
    icon: '🌱',
    monthly: 0,
    yearly: 0,
    tagline: 'Start your journey at no cost.',
    color: '#34d399',
    glow: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.18)',
    btn: 'Get Started Free',
    btnStyle: 'secondary',
    features: [
      { label: 'Access to 30+ free courses', yes: true },
      { label: 'Practice arena (basic problems)', yes: true },
      { label: 'Community forum access', yes: true },
      { label: 'Progress tracking', yes: true },
      { label: 'Limited assignments (10/month)', yes: true },
      { label: 'Premium courses (200+)', yes: false },
      { label: '1-on-1 mentor sessions', yes: false },
      { label: 'Certificate of completion', yes: false },
      { label: 'Team management', yes: false },
    ],
  },
  {
    name: 'Pro',
    icon: '🚀',
    monthly: 29,
    yearly: 23,
    tagline: 'For serious developers leveling up fast.',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.12)',
    border: 'rgba(167,139,250,0.28)',
    btn: 'Start 7-Day Free Trial',
    btnStyle: 'primary',
    popular: true,
    features: [
      { label: 'Everything in Free', yes: true },
      { label: 'All 200+ premium courses', yes: true },
      { label: 'Unlimited assignments', yes: true },
      { label: '2× mentor sessions / month', yes: true },
      { label: 'Certificate of completion', yes: true },
      { label: 'Career guidance & resume review', yes: true },
      { label: 'Interview preparation kits', yes: true },
      { label: 'Priority support (< 4h response)', yes: true },
      { label: 'Team management', yes: false },
    ],
  },
  {
    name: 'Enterprise',
    icon: '🏢',
    monthly: 99,
    yearly: 79,
    tagline: 'Scalable learning for teams & orgs.',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.1)',
    border: 'rgba(96,165,250,0.18)',
    btn: 'Contact Sales',
    btnStyle: 'outline',
    features: [
      { label: 'Everything in Pro', yes: true },
      { label: 'Custom curriculum builder', yes: true },
      { label: 'Unlimited team seats', yes: true },
      { label: 'Advanced team analytics', yes: true },
      { label: 'API & SSO integration', yes: true },
      { label: 'White-label solution', yes: true },
      { label: 'Dedicated success manager', yes: true },
      { label: 'SLA & security review', yes: true },
      { label: 'Custom integrations (Slack, Jira)', yes: true },
    ],
  },
];

const FAQS = [
  { q: "Can I switch plans anytime?", a: "Yes! You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes take effect on your next billing cycle." },
  { q: "Is there a free trial for Pro?", a: "Absolutely. The Pro plan comes with a 7-day free trial — no credit card required to get started." },
  { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards (Visa, Mastercard, Amex), UPI, and PayPal. Enterprise customers can also pay by invoice." },
  { q: "What's your refund policy?", a: "We offer a 30-day money-back guarantee on all paid plans, no questions asked." },
];

export default function PricingSection() {
  const [yearly, setYearly]   = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .price-page {
          min-height: 100vh;
          background: #f8faff;
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative; overflow: hidden;
        }
        .price-page::before {
          content: '';
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 450px;
          background: radial-gradient(ellipse, rgba(79,70,229,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .price-inner { max-width: 1080px; margin: 0 auto; position: relative; z-index: 1; }

        .price-hero { text-align: center; margin-bottom: 56px; }
        .price-eyebrow {
          display: inline-block; padding: 6px 18px;
          background: rgba(79,70,229,0.08); border: 1px solid rgba(79,70,229,0.18);
          border-radius: 100px; color: #4f46e5; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.2rem;
        }
        .price-title { font-size: clamp(2rem,4vw,3rem); font-weight: 900; color: #1e1b4b; margin: 0 0 1rem; letter-spacing: -0.04em; }
        .price-title span {
          background: linear-gradient(135deg, #4f46e5, #0ea5e9);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .price-subtitle { font-size: 1rem; color: #6b7280; max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }

        .price-toggle {
          display: inline-flex; align-items: center; gap: 12px;
          background: #fff; border: 1px solid #e5e7eb;
          border-radius: 100px; padding: 6px 20px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        }
        .price-toggle-label { font-size: 0.875rem; font-weight: 600; color: #9ca3af; cursor: pointer; transition: color 0.2s; }
        .price-toggle-label.active { color: #1e1b4b; }
        .price-switch {
          position: relative; width: 44px; height: 24px;
          background: #e5e7eb; border-radius: 100px;
          cursor: pointer; transition: background 0.3s; border: 1px solid #d1d5db;
        }
        .price-switch.on { background: linear-gradient(135deg, #4f46e5, #0ea5e9); border-color: transparent; }
        .price-switch-knob {
          position: absolute; top: 3px; left: 3px;
          width: 16px; height: 16px; border-radius: 50%; background: #fff;
          transition: transform 0.3s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .price-switch.on .price-switch-knob { transform: translateX(20px); }
        .price-save-badge {
          font-size: 0.68rem; font-weight: 700;
          background: linear-gradient(135deg, #10b981, #0284c7);
          color: #fff; padding: 3px 9px; border-radius: 100px; letter-spacing: 0.04em;
        }

        .price-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-bottom: 64px; align-items: start; }

        .price-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 24px; padding: 32px 28px;
          transition: all 0.35s ease;
          position: relative; overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }
        .price-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(79,70,229,0.12); border-color: rgba(79,70,229,0.2); }
        .price-card.popular {
          background: #fff;
          border-color: rgba(79,70,229,0.35);
          box-shadow: 0 0 0 1px rgba(79,70,229,0.15), 0 20px 60px rgba(79,70,229,0.12);
          transform: scale(1.03);
        }
        .price-card.popular:hover { transform: scale(1.03) translateY(-6px); }
        .price-card.popular::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #4f46e5, #818cf8, #0ea5e9);
          border-radius: 24px 24px 0 0;
        }

        .price-popular-tag {
          position: absolute; top: 18px; right: 18px;
          background: linear-gradient(135deg, #4f46e5, #0ea5e9);
          color: #fff; font-size: 0.68rem; font-weight: 700;
          padding: 4px 12px; border-radius: 100px; letter-spacing: 0.06em; text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(79,70,229,0.35);
        }

        .price-plan-icon { font-size: 2rem; margin-bottom: 12px; }
        .price-plan-name { font-size: 1.2rem; font-weight: 800; color: #1e1b4b; margin-bottom: 6px; }
        .price-plan-tagline { font-size: 0.83rem; color: #6b7280; margin-bottom: 24px; line-height: 1.5; }

        .price-amount-row { display: flex; align-items: baseline; gap: 4px; margin-bottom: 6px; }
        .price-currency { font-size: 1.1rem; font-weight: 700; color: #9ca3af; margin-top: 6px; }
        .price-amount { font-size: 3rem; font-weight: 900; color: #1e1b4b; line-height: 1; }
        .price-period { font-size: 0.85rem; color: #9ca3af; }
        .price-yearly-note { font-size: 0.75rem; color: #d1d5db; margin-bottom: 24px; min-height: 18px; }
        .price-yearly-note.show { color: #10b981; }

        .price-divider { height: 1px; background: #f3f4f6; margin: 20px 0; }

        .price-feat-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 9px; }
        .price-feat-item { display: flex; align-items: center; gap: 10px; font-size: 0.84rem; }
        .price-feat-item.yes { color: #374151; }
        .price-feat-item.no { color: #d1d5db; text-decoration: line-through; }
        .price-feat-tick { flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; }
        .price-feat-item.yes .price-feat-tick { background: rgba(16,185,129,0.12); color: #10b981; }
        .price-feat-item.no .price-feat-tick { background: #f3f4f6; color: #d1d5db; }

        .price-btn {
          width: 100%; padding: 13px; border-radius: 12px;
          font-weight: 700; font-size: 0.92rem; cursor: pointer;
          font-family: 'Inter', sans-serif; transition: all 0.25s ease; border: 1px solid transparent;
          text-align: center;
        }
        .price-btn.primary {
          background: linear-gradient(135deg, #4f46e5, #0ea5e9); color: #fff;
          box-shadow: 0 4px 18px rgba(79,70,229,0.3);
        }
        .price-btn.primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(79,70,229,0.45); }
        .price-btn.secondary {
          background: #f3f4f6; color: #374151;
          border-color: #e5e7eb;
        }
        .price-btn.secondary:hover { background: #e5e7eb; color: #111827; }
        .price-btn.outline {
          background: transparent; color: #0ea5e9; border-color: rgba(14,165,233,0.35);
        }
        .price-btn.outline:hover { background: rgba(14,165,233,0.06); border-color: rgba(14,165,233,0.5); }

        .price-guarantee {
          background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.18);
          border-radius: 14px; padding: 18px 24px; margin-bottom: 60px;
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        .price-guarantee-icon { font-size: 1.6rem; flex-shrink: 0; }
        .price-guarantee h4 { font-size: 0.95rem; font-weight: 700; color: #1e1b4b; margin: 0 0 3px; }
        .price-guarantee p { font-size: 0.82rem; color: #6b7280; margin: 0; }

        .price-faq-label { font-size: 0.72rem; font-weight: 600; color: #9ca3af; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; }
        .price-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .price-faq-item {
          background: #fff; border: 1px solid #e5e7eb;
          border-radius: 14px; overflow: hidden; transition: border-color 0.2s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .price-faq-item.open { border-color: rgba(79,70,229,0.25); }
        .price-faq-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 16px 18px; background: none; border: none;
          text-align: left; cursor: pointer; gap: 12px; font-family: 'Inter', sans-serif;
        }
        .price-faq-q { font-size: 0.88rem; font-weight: 600; color: #374151; }
        .price-faq-item.open .price-faq-q { color: #1e1b4b; }
        .price-faq-chevron {
          width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0;
          background: #f3f4f6; border: 1px solid #e5e7eb;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.7rem; color: #9ca3af; transition: all 0.25s;
        }
        .price-faq-item.open .price-faq-chevron { background: rgba(79,70,229,0.1); border-color: rgba(79,70,229,0.25); color: #4f46e5; transform: rotate(45deg); }
        .price-faq-ans { padding: 0 18px 16px; font-size: 0.83rem; color: #6b7280; line-height: 1.7; border-top: 1px solid #f3f4f6; padding-top: 12px; }

        @media (max-width: 900px) { .price-grid { grid-template-columns: 1fr; } .price-card.popular { transform: none; } .price-faq-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) { .price-guarantee { flex-direction: column; } }
            `}</style>

      <div className="price-page">
        <div className="price-inner">

          {/* Hero */}
          <div className="price-hero">
            <div className="price-eyebrow">Pricing</div>
            <h1 className="price-title">Simple, <span>Transparent Pricing</span></h1>
            <p className="price-subtitle">
              Start free, upgrade when you're ready. No hidden fees, no lock-in — cancel anytime.
            </p>

            {/* Toggle */}
            <div className="price-toggle">
              <span
                className={`price-toggle-label${!yearly ? ' active' : ''}`}
                onClick={() => setYearly(false)}
              >Monthly</span>
              <div className={`price-switch${yearly ? ' on' : ''}`} onClick={() => setYearly(v => !v)}>
                <div className="price-switch-knob" />
              </div>
              <span
                className={`price-toggle-label${yearly ? ' active' : ''}`}
                onClick={() => setYearly(true)}
              >Yearly</span>
              {yearly && <span className="price-save-badge">Save ~20%</span>}
            </div>
          </div>

          {/* Cards */}
          <div className="price-grid">
            {PLANS.map((plan, pi) => (
              <div key={pi} className={`price-card${plan.popular ? ' popular' : ''}`}>
                {plan.popular && <div className="price-popular-tag">⭐ Most Popular</div>}

                <div className="price-plan-icon">{plan.icon}</div>
                <div className="price-plan-name">{plan.name}</div>
                <div className="price-plan-tagline">{plan.tagline}</div>

                <div className="price-amount-row">
                  <span className="price-currency">$</span>
                  <span className="price-amount">{yearly ? plan.yearly : plan.monthly}</span>
                  <span className="price-period">/ {yearly ? 'mo, billed yearly' : 'month'}</span>
                </div>
                <div className={`price-yearly-note${yearly && plan.yearly > 0 ? ' show' : ''}`}>
                  {yearly && plan.yearly > 0 ? `💰 Save $${(plan.monthly - plan.yearly) * 12}/year` : '\u00a0'}
                </div>

                <div className="price-divider" />

                <ul className="price-feat-list">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className={`price-feat-item ${f.yes ? 'yes' : 'no'}`}>
                      <span className="price-feat-tick">{f.yes ? '✓' : '×'}</span>
                      {f.label}
                    </li>
                  ))}
                </ul>

                <button
                  className={`price-btn ${plan.btnStyle}`}
                  onClick={() => toast(`Redirecting to ${plan.name} plan…`)}
                >
                  {plan.btn}
                </button>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="price-guarantee">
            <div className="price-guarantee-icon">🛡️</div>
            <div>
              <h4>30-Day Money-Back Guarantee</h4>
              <p>Not satisfied? Get a full refund within 30 days of purchase — no questions asked, ever.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="price-faq-label">Pricing FAQs</div>
          <div className="price-faq-grid">
            {FAQS.map((faq, fi) => (
              <div key={fi} className={`price-faq-item${openFaq === fi ? ' open' : ''}`}>
                <button className="price-faq-btn" onClick={() => setOpenFaq(openFaq === fi ? null : fi)}>
                  <span className="price-faq-q">{faq.q}</span>
                  <span className="price-faq-chevron">+</span>
                </button>
                {openFaq === fi && <div className="price-faq-ans">{faq.a}</div>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}