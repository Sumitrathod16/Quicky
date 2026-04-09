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
          background: linear-gradient(180deg, #0f0c29 0%, #1a1535 55%, #0f0c29 100%);
          font-family: 'Inter', sans-serif;
          padding: 80px 24px 100px;
          position: relative; overflow: hidden;
        }
        .price-page::before {
          content: '';
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 450px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .price-inner { max-width: 1080px; margin: 0 auto; position: relative; z-index: 1; }

        /* Hero */
        .price-hero { text-align: center; margin-bottom: 56px; }
        .price-eyebrow {
          display: inline-block; padding: 6px 18px;
          background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.25);
          border-radius: 100px; color: #a78bfa; font-size: 0.78rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.2rem;
        }
        .price-title { font-size: clamp(2rem,4vw,3rem); font-weight: 900; color: #fff; margin: 0 0 1rem; letter-spacing: -0.04em; }
        .price-title span {
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .price-subtitle { font-size: 1rem; color: rgba(255,255,255,0.45); max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }

        /* Toggle */
        .price-toggle {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 100px; padding: 6px 20px;
        }
        .price-toggle-label { font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,0.45); cursor: pointer; transition: color 0.2s; }
        .price-toggle-label.active { color: #fff; }
        .price-switch {
          position: relative; width: 44px; height: 24px;
          background: rgba(255,255,255,0.1); border-radius: 100px;
          cursor: pointer; transition: background 0.3s; border: 1px solid rgba(255,255,255,0.12);
        }
        .price-switch.on { background: linear-gradient(135deg, #7c3aed, #4f46e5); border-color: transparent; }
        .price-switch-knob {
          position: absolute; top: 3px; left: 3px;
          width: 16px; height: 16px; border-radius: 50%; background: #fff;
          transition: transform 0.3s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        .price-switch.on .price-switch-knob { transform: translateX(20px); }
        .price-save-badge {
          font-size: 0.68rem; font-weight: 700;
          background: linear-gradient(135deg, #059669, #0284c7);
          color: #fff; padding: 3px 9px; border-radius: 100px; letter-spacing: 0.04em;
        }

        /* Grid */
        .price-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-bottom: 64px; align-items: start; }

        .price-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px; padding: 32px 28px;
          transition: all 0.35s ease;
          position: relative; overflow: hidden;
        }
        .price-card:hover { transform: translateY(-6px); box-shadow: 0 30px 70px rgba(0,0,0,0.3); }
        .price-card.popular {
          background: rgba(167,139,250,0.07);
          border-color: rgba(167,139,250,0.3);
          box-shadow: 0 0 0 1px rgba(167,139,250,0.15), 0 20px 60px rgba(124,58,237,0.15);
          transform: scale(1.03);
        }
        .price-card.popular:hover { transform: scale(1.03) translateY(-6px); }
        .price-card.popular::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #7c3aed, #818cf8, #60a5fa);
          border-radius: 24px 24px 0 0;
        }

        /* Popular badge */
        .price-popular-tag {
          position: absolute; top: 18px; right: 18px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff; font-size: 0.68rem; font-weight: 700;
          padding: 4px 12px; border-radius: 100px; letter-spacing: 0.06em; text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(124,58,237,0.4);
        }

        /* Plan header */
        .price-plan-icon { font-size: 2rem; margin-bottom: 12px; }
        .price-plan-name { font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 6px; }
        .price-plan-tagline { font-size: 0.83rem; color: rgba(255,255,255,0.42); margin-bottom: 24px; line-height: 1.5; }

        .price-amount-row { display: flex; align-items: baseline; gap: 4px; margin-bottom: 6px; }
        .price-currency { font-size: 1.1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin-top: 6px; }
        .price-amount { font-size: 3rem; font-weight: 900; color: #fff; line-height: 1; }
        .price-period { font-size: 0.85rem; color: rgba(255,255,255,0.4); }
        .price-yearly-note { font-size: 0.75rem; color: rgba(255,255,255,0.3); margin-bottom: 24px; min-height: 18px; }
        .price-yearly-note.show { color: #34d399; }

        /* Divider */
        .price-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 20px 0; }

        /* Feature list */
        .price-feat-list { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 9px; }
        .price-feat-item { display: flex; align-items: center; gap: 10px; font-size: 0.84rem; }
        .price-feat-item.yes { color: rgba(255,255,255,0.72); }
        .price-feat-item.no { color: rgba(255,255,255,0.22); text-decoration: line-through; }
        .price-feat-tick { flex-shrink: 0; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; }
        .price-feat-item.yes .price-feat-tick { background: rgba(52,211,153,0.15); color: #34d399; }
        .price-feat-item.no .price-feat-tick { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.2); }

        /* Buttons */
        .price-btn {
          width: 100%; padding: 13px; border-radius: 12px;
          font-weight: 700; font-size: 0.92rem; cursor: pointer;
          font-family: 'Inter', sans-serif; transition: all 0.25s ease; border: 1px solid transparent;
          text-align: center;
        }
        .price-btn.primary {
          background: linear-gradient(135deg, #7c3aed, #4f46e5); color: #fff;
          box-shadow: 0 4px 18px rgba(124,58,237,0.38);
        }
        .price-btn.primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(124,58,237,0.55); }
        .price-btn.secondary {
          background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.65);
          border-color: rgba(255,255,255,0.1);
        }
        .price-btn.secondary:hover { background: rgba(255,255,255,0.09); color: #fff; border-color: rgba(255,255,255,0.18); }
        .price-btn.outline {
          background: transparent; color: #60a5fa; border-color: rgba(96,165,250,0.25);
        }
        .price-btn.outline:hover { background: rgba(96,165,250,0.08); border-color: rgba(96,165,250,0.4); }

        /* Guarantee bar */
        .price-guarantee {
          background: rgba(52,211,153,0.06); border: 1px solid rgba(52,211,153,0.15);
          border-radius: 14px; padding: 18px 24px; margin-bottom: 60px;
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        .price-guarantee-icon { font-size: 1.6rem; flex-shrink: 0; }
        .price-guarantee h4 { font-size: 0.95rem; font-weight: 700; color: #fff; margin: 0 0 3px; }
        .price-guarantee p { font-size: 0.82rem; color: rgba(255,255,255,0.45); margin: 0; }

        /* FAQ section */
        .price-faq-label { font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.28); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; }
        .price-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .price-faq-item {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px; overflow: hidden; transition: border-color 0.2s;
        }
        .price-faq-item.open { border-color: rgba(167,139,250,0.2); }
        .price-faq-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 16px 18px; background: none; border: none;
          text-align: left; cursor: pointer; gap: 12px; font-family: 'Inter', sans-serif;
        }
        .price-faq-q { font-size: 0.88rem; font-weight: 600; color: rgba(255,255,255,0.78); }
        .price-faq-item.open .price-faq-q { color: #fff; }
        .price-faq-chevron {
          width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.7rem; color: rgba(255,255,255,0.35); transition: all 0.25s;
        }
        .price-faq-item.open .price-faq-chevron { background: rgba(124,58,237,0.18); border-color: rgba(124,58,237,0.3); color: #a78bfa; transform: rotate(45deg); }
        .price-faq-ans { padding: 0 18px 16px; font-size: 0.83rem; color: rgba(255,255,255,0.5); line-height: 1.7; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 12px; }

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