import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    category: 'Custom Suits',
    measurements: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.contact.trim()) {
      setErrorMessage('Please provide a valid phone or email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter your inquiry details.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleSendToWhatsApp = () => {
    let text = `*New Atelier Inquiry - YAFOOR Clothing*\n\n`;
    text += `Name: ${formData.name || 'Gentleman'}\n`;
    text += `Contact: ${formData.contact || 'N/A'}\n`;
    text += `Interest: ${formData.category}\n`;
    if (formData.measurements) {
      text += `Measurements / Fit: ${formData.measurements}\n`;
    }
    text += `Message: ${formData.message || 'I would like to consult with Rana Shahroz Iqbal on bespoke tailoring.'}\n`;

    const url = `https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0a0a0c] text-[#f4efe6] border-t border-[#1a1c24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af37] mb-2">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] mb-4">
            Bespoke Inquiries &amp; Consultations
          </h2>
          <p className="text-sm text-[#9f9b90]">
            Speak directly with Rana Shahroz Iqbal’s atelier in Lahore for made-to-measure tailoring, bridal sherwanis, or worldwide shipping consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12141c] border border-[#1e2230] p-6 sm:p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-[#faf8f5] mb-6">
                Official Atelier Details
              </h3>

              <div className="space-y-6 text-sm">
                {/* Primary Phone / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#1a1c26] text-[#d4af37] rounded-sm shrink-0 border border-[#2b2f3f]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8e8a80] block mb-0.5">
                      Primary Phone &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.phone1}`}
                      className="font-semibold text-[#f5f2ea] hover:text-[#d4af37] transition-colors block text-base"
                    >
                      {BRAND_INFO.phone1}
                    </a>
                    <span className="text-xs text-[#9d998e]">Direct bespoke hotline</span>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#1a1c26] text-[#d4af37] rounded-sm shrink-0 border border-[#2b2f3f]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8e8a80] block mb-0.5">
                      Additional Line
                    </span>
                    <a
                      href={`tel:${BRAND_INFO.phone2}`}
                      className="font-semibold text-[#f5f2ea] hover:text-[#d4af37] transition-colors block text-base"
                    >
                      {BRAND_INFO.phone2}
                    </a>
                    <span className="text-xs text-[#9d998e]">Atelier customer support</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#1a1c26] text-[#d4af37] rounded-sm shrink-0 border border-[#2b2f3f]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8e8a80] block mb-0.5">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="font-semibold text-[#f5f2ea] hover:text-[#d4af37] transition-colors block text-base"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#1a1c26] text-[#d4af37] rounded-sm shrink-0 border border-[#2b2f3f]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8e8a80] block mb-0.5">
                      Atelier Location
                    </span>
                    <p className="font-semibold text-[#f5f2ea] text-base">
                      {BRAND_INFO.location}
                    </p>
                    <p className="text-xs text-[#9d998e]">
                      Serving Lahore clients with home visits &amp; dispatching worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="mt-8 pt-6 border-t border-[#1e2230]">
                <a
                  href={`https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(
                    'Hello Rana Shahroz Iqbal, I would like to schedule a bespoke consultation with YAFOOR Clothing.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Conversation (+92 313 7777234)</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="mt-6 flex items-center justify-between text-xs text-[#8e8a80] pt-4 border-t border-[#1e2230]">
                <span>Official Channels:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={BRAND_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#d4af37] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <span>·</span>
                  <a
                    href={BRAND_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#d4af37] transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Order Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#12141c] border border-[#1e2230] p-6 sm:p-8 rounded-sm">
            <h3 className="font-serif text-2xl font-bold text-[#faf8f5] mb-2">
              Send Bespoke Inquiry
            </h3>
            <p className="text-xs text-[#9e9a8f] mb-6">
              Our tailoring team will review your specifications and contact you to arrange fabric selection and fitting.
            </p>

            {isSuccess ? (
              <div className="p-8 bg-[#161a25] border border-[#d4af37]/50 rounded-sm text-center space-y-4 animate-fade-in">
                <CheckCircle className="w-12 h-12 text-[#d4af37] mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-[#faf8f5]">
                  Inquiry Received with Distinction
                </h4>
                <p className="text-xs sm:text-sm text-[#b8b4aa] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#f5f2ea] font-medium">{formData.name}</span>. Rana Shahroz Iqbal and the YAFOOR Clothing team have logged your interest in {formData.category}. We will reach out to you shortly via {formData.contact}.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all"
                  >
                    Fast-Track to WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        contact: '',
                        category: 'Custom Suits',
                        measurements: '',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-transparent border border-[#2e3244] hover:border-[#d4af37] text-xs text-[#dcd7cb] rounded-sm transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs rounded-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#9d998f] block mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shahroz Iqbal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3.5 py-2.5 text-xs text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#9d998f] block mb-1.5 font-medium">
                      Phone Number / Email *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +92 313 7777234 or email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3.5 py-2.5 text-xs text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#9d998f] block mb-1.5 font-medium">
                      Product Interest
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3.5 py-2.5 text-xs text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                    >
                      <option value="Custom Suits">Custom Bespoke Suits</option>
                      <option value="Coats">Coats &amp; Prince Coats</option>
                      <option value="Waistcoats">Tailored Waistcoats</option>
                      <option value="Shalwar Kameez">Egyptian Cotton Shalwar Kameez</option>
                      <option value="Sherwanis">Bridal / Wedding Sherwanis</option>
                      <option value="Complete Wardrobe">Complete Bespoke Wardrobe</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#9d998f] block mb-1.5 font-medium">
                      Measurements / Sizing (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 40R chest, 34 waist or need consultation"
                      value={formData.measurements}
                      onChange={(e) => setFormData({ ...formData, measurements: e.target.value })}
                      className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3.5 py-2.5 text-xs text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#9d998f] block mb-1.5 font-medium">
                    Message / Fabric &amp; Fitting Preferences *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the occasion, fabric preferences (e.g. Italian wool, raw silk, Egyptian cotton), and whether you prefer an atelier fitting in Lahore or international dispatch."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3.5 py-2.5 text-xs text-[#f5f2ea] focus:border-[#d4af37] outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3 px-6 bg-[#d4af37] hover:bg-[#e7cf85] disabled:opacity-50 text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Inquiry...' : 'Submit Bespoke Inquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto py-3 px-5 bg-[#1f2331] hover:bg-[#282d3e] text-[#f5f2ea] border border-[#323648] hover:border-[#d4af37] text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25d366]" />
                    <span>Send Via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
