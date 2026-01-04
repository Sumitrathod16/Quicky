import React, { useState } from 'react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        'Access to basic courses',
        'Community forum access',
        'Basic project templates',
        'Email support',
        'Limited assignments'
      ],
      buttonText: 'Get Started',
      buttonVariant: 'secondary',
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: 29, yearly: 290 },
      description: 'Most popular for serious learners',
      features: [
        'All premium courses',
        'Unlimited assignments',
        '1-on-1 mentor sessions',
        'Advanced project templates',
        'Priority support',
        'Certificate of completion',
        'Career guidance',
        'Interview preparation'
      ],
      buttonText: 'Start Pro Trial',
      buttonVariant: 'primary',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 99, yearly: 990 },
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Custom curriculum',
        'Team management dashboard',
        'Advanced analytics',
        'API access',
        'White-label solutions',
        'Dedicated success manager',
        'Custom integrations'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline',
      popular: false
    }
  ];

  const handleSubscribe = (planName) => {
    // This would integrate with payment processor like Stripe
    alert(`Redirecting to payment for ${planName} plan...`);
  };

  return (
    <div className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>Choose Your Learning Journey</h2>
          <p>Unlock your potential with our flexible pricing plans</p>

          <div className="billing-toggle">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={billingCycle === 'yearly'}
                onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              />
              <span className="slider"></span>
            </label>
            <span className={billingCycle === 'yearly' ? 'active' : ''}>
              Yearly
              <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <div className="plan-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price[billingCycle]}</span>
                  <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <p className="description">{plan.description}</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`plan-button ${plan.buttonVariant}`}
                onClick={() => handleSubscribe(plan.name)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <div className="guarantee">
            <div className="guarantee-icon">🛡️</div>
            <div className="guarantee-text">
              <h4>30-Day Money Back Guarantee</h4>
              <p>Not satisfied? Get a full refund within 30 days, no questions asked.</p>
            </div>
          </div>

          <div className="faq-link">
            <a href="#faq">Have questions? Check our FAQ →</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
        }

        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .pricing-header h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .pricing-header p {
          font-size: 1.2rem;
          color: #7f8c8d;
          margin-bottom: 2rem;
        }

        .billing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background: white;
          border-radius: 50px;
          padding: 0.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          width: fit-content;
          margin: 0 auto;
        }

        .billing-toggle span {
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          border-radius: 25px;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .billing-toggle span.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 24px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }

        .save-badge {
          background: #e74c3c;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          margin-left: 0.5rem;
          font-weight: 600;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 60px;
        }

        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .pricing-card.popular {
          border-color: #667eea;
          transform: scale(1.05);
        }

        .pricing-card.popular::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
        }

        .plan-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .plan-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .currency {
          font-size: 1.5rem;
          color: #7f8c8d;
          margin-right: 0.25rem;
        }

        .amount {
          font-size: 3rem;
          font-weight: 800;
          color: #2c3e50;
        }

        .period {
          font-size: 1.2rem;
          color: #7f8c8d;
          margin-left: 0.25rem;
        }

        .description {
          color: #7f8c8d;
          font-size: 1rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }

        .features-list li {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: #555;
        }

        .check-icon {
          color: #28a745;
          margin-right: 0.75rem;
          font-weight: bold;
        }

        .plan-button {
          width: 100%;
          padding: 1rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .plan-button.primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .plan-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .plan-button.secondary {
          background: #f8f9fa;
          color: #6c757d;
          border-color: #dee2e6;
        }

        .plan-button.secondary:hover {
          background: #e9ecef;
        }

        .plan-button.outline {
          background: transparent;
          color: #667eea;
          border-color: #667eea;
        }

        .plan-button.outline:hover {
          background: #667eea;
          color: white;
        }

        .pricing-footer {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid #dee2e6;
        }

        .guarantee {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .guarantee-icon {
          font-size: 2rem;
        }

        .guarantee-text h4 {
          margin: 0;
          color: #2c3e50;
          font-size: 1.1rem;
        }

        .guarantee-text p {
          margin: 0.25rem 0 0 0;
          color: #7f8c8d;
          font-size: 0.9rem;
        }

        .faq-link {
          text-align: right;
        }

        .faq-link a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .faq-link a:hover {
          color: #764ba2;
        }

        @media (max-width: 768px) {
          .pricing-header h2 {
            font-size: 2.5rem;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card.popular {
            transform: none;
            order: -1;
          }

          .billing-toggle {
            flex-direction: column;
            gap: 0.5rem;
          }

          .pricing-footer {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 1rem;
          }

          .faq-link {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingSection;