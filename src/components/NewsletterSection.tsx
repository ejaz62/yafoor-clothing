import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    // Save locally or demonstrate subscription
    try {
      const existing = JSON.parse(localStorage.getItem('yafoor_newsletter') || '[]');
      existing.push({ email, subscribedAt: new Date().toISOString() });
      localStorage.setItem('yafoor_newsletter', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setStatus('success');
    setMessage('Thank you for subscribing. You will receive private previews of new fabric arrivals.');
    setEmail('');
  };

  return (
    <section className="py-16 bg-[#0f1118] text-[#f4efe6] border-t border-[#1e2230]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atelier Private Dispatch</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#faf8f5] mb-3">
          Subscribe to Seasonal Sartorial Editions
        </h3>

        <p className="text-xs sm:text-sm text-[#a8a49a] max-w-lg mx-auto mb-8 font-light">
          Receive exclusive invitations to bespoke fabric arrivals from Italy and England, private trunk shows in Lahore, and bridal couture lookbooks.
        </p>

        {status === 'success' ? (
          <div className="p-4 bg-[#141926] border border-[#d4af37]/40 rounded-sm inline-flex items-center gap-3 text-xs text-[#e7cf85] animate-fade-in">
            <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-[#8e8a80] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  className="w-full bg-[#161823] border border-[#2b2f42] rounded-sm pl-10 pr-3.5 py-3 text-xs text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#d4af37] hover:bg-[#e7cf85] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all whitespace-nowrap shadow-md"
              >
                Subscribe
              </button>
            </div>

            {status === 'error' && (
              <p className="text-[11px] text-red-400 mt-2 text-left">{message}</p>
            )}

            <p className="text-[11px] text-[#78756c] mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
