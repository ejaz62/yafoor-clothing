import React, { useState } from 'react';
import { X, Ruler, CheckCircle, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/products';

interface BespokeFittingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BespokeFittingGuideModal: React.FC<BespokeFittingGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'suits' | 'traditional' | 'custom'>('suits');
  const [clientFit, setClientFit] = useState({
    name: '',
    phone: '',
    garmentType: 'Custom Suit',
    height: "5'10\"",
    chest: '',
    waist: '',
    shoulder: '',
    length: '',
    fitPreference: 'Slim Tailored'
  });

  if (!isOpen) return null;

  const handleSendMeasurementsWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `*Bespoke Tailoring Measurement Submission - YAFOOR Clothing*\n\n`;
    text += `Client Name: ${clientFit.name || 'Gentleman'}\n`;
    text += `Phone: ${clientFit.phone || 'N/A'}\n`;
    text += `Garment Interest: ${clientFit.garmentType}\n`;
    text += `Fit Preference: ${clientFit.fitPreference}\n`;
    text += `Height: ${clientFit.height}\n`;
    text += `Chest: ${clientFit.chest || 'To be measured'} inches\n`;
    text += `Waist: ${clientFit.waist || 'To be measured'} inches\n`;
    text += `Shoulder: ${clientFit.shoulder || 'To be measured'} inches\n`;
    text += `Length: ${clientFit.length || 'To be measured'} inches\n\n`;
    text += `Please schedule a fitting appointment or advise on fabric swatches.`;

    const url = `https://wa.me/${BRAND_INFO.phone1Raw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-[#11131b] border border-[#2b2f3f] rounded-sm max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl text-[#f4efe6] p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#222636] pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] mb-1">
              <Ruler className="w-4 h-4" />
              <span>Tailoring Precision</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#faf8f5]">
              Bespoke Sizing &amp; Fitting Guide
            </h3>
            <p className="text-xs text-[#9d998f]">
              Handmade in Lahore with Double Press finishing.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9d998f] hover:text-[#d4af37] bg-[#1a1c27] rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#202434] pb-2">
          <button
            onClick={() => setActiveTab('suits')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
              activeTab === 'suits'
                ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                : 'text-[#9c978d] hover:text-[#f4efe6]'
            }`}
          >
            Suits &amp; Coats
          </button>
          <button
            onClick={() => setActiveTab('traditional')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
              activeTab === 'traditional'
                ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                : 'text-[#9c978d] hover:text-[#f4efe6]'
            }`}
          >
            Shalwar Kameez &amp; Sherwanis
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
              activeTab === 'custom'
                ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                : 'text-[#9c978d] hover:text-[#f4efe6]'
            }`}
          >
            Submit Custom Fit
          </button>
        </div>

        {/* Content by Tab */}
        {activeTab === 'suits' && (
          <div className="space-y-6 text-xs text-[#c5c1b8]">
            <p className="leading-relaxed">
              Our bespoke suiting utilizes English and Italian measurement baselines, tailored with floating chest canvas and soft shoulder structure.
            </p>
            <div className="overflow-x-auto border border-[#232737] rounded-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#171a25] text-[#d4af37] border-b border-[#232737]">
                    <th className="p-3">Size (UK/US)</th>
                    <th className="p-3">Chest (in)</th>
                    <th className="p-3">Waist (in)</th>
                    <th className="p-3">Shoulder (in)</th>
                    <th className="p-3">Jacket Length (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2230] tabular-nums">
                  <tr>
                    <td className="p-3 font-semibold text-[#f5f2ea]">38R</td>
                    <td className="p-3">38 - 39</td>
                    <td className="p-3">32 - 33</td>
                    <td className="p-3">17.75</td>
                    <td className="p-3">29.5</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#f5f2ea]">40R</td>
                    <td className="p-3">40 - 41</td>
                    <td className="p-3">34 - 35</td>
                    <td className="p-3">18.25</td>
                    <td className="p-3">30.0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#f5f2ea]">42R</td>
                    <td className="p-3">42 - 43</td>
                    <td className="p-3">36 - 37</td>
                    <td className="p-3">18.75</td>
                    <td className="p-3">30.5</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#f5f2ea]">44R</td>
                    <td className="p-3">44 - 45</td>
                    <td className="p-3">38 - 39</td>
                    <td className="p-3">19.25</td>
                    <td className="p-3">31.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-[#151824] rounded-sm border border-[#24293a] space-y-2">
              <div className="flex items-center gap-2 font-medium text-[#d4af37]">
                <CheckCircle className="w-4 h-4" />
                <span>The YAFOOR Double Press Advantage</span>
              </div>
              <p className="text-[11px] text-[#a4a095] leading-relaxed">
                Every bespoke jacket is hand-pressed twice during assembly and post-finishing. This anchors the canvas permanently to your anatomy, preventing bubbling or collar slippage.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'traditional' && (
          <div className="space-y-6 text-xs text-[#c5c1b8]">
            <p className="leading-relaxed">
              For Shalwar Kameez, Waistcoats, and Sherwanis, comfort and shoulder grace are paramount. Our cuts balance traditional Pakistani silhouettes with clean contemporary lines.
            </p>
            <div className="overflow-x-auto border border-[#232737] rounded-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#171a25] text-[#d4af37] border-b border-[#232737]">
                    <th className="p-3">Size</th>
                    <th className="p-3">Kameez Chest (in)</th>
                    <th className="p-3">Kameez Length (in)</th>
                    <th className="p-3">Collar / Band (in)</th>
                    <th className="p-3">Shalwar Length (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2230] tabular-nums">
                  <tr>
                    <td className="p-3 font-semibold text-[#f5f2ea]">Small</td>
                    <td className="p-3">40 - 41</td>
                    <td className="p-3">40</td>
                    <td className="p-3">15.0</td>
                    <td className="p-3">39</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#f5f2ea]">Medium</td>
                    <td className="p-3">42 - 43</td>
                    <td className="p-3">42</td>
                    <td className="p-3">15.5</td>
                    <td className="p-3">40</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#f5f2ea]">Large</td>
                    <td className="p-3">44 - 45</td>
                    <td className="p-3">43</td>
                    <td className="p-3">16.0</td>
                    <td className="p-3">41</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-[#f5f2ea]">XL</td>
                    <td className="p-3">46 - 48</td>
                    <td className="p-3">44</td>
                    <td className="p-3">16.5</td>
                    <td className="p-3">42</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'custom' && (
          <form onSubmit={handleSendMeasurementsWhatsApp} className="space-y-4">
            <p className="text-xs text-[#b8b4aa] leading-relaxed">
              Prefer an exact custom fit? Fill in your measurements below. Our atelier team in Lahore led by Rana Shahroz Iqbal will prepare your pattern.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-[11px] text-[#9d998f] block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Ahmed"
                  value={clientFit.name}
                  onChange={(e) => setClientFit({ ...clientFit, name: e.target.value })}
                  className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] text-[#9d998f] block mb-1">WhatsApp / Phone Number</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={clientFit.phone}
                  onChange={(e) => setClientFit({ ...clientFit, phone: e.target.value })}
                  className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] text-[#9d998f] block mb-1">Garment Type</label>
                <select
                  value={clientFit.garmentType}
                  onChange={(e) => setClientFit({ ...clientFit, garmentType: e.target.value })}
                  className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                >
                  <option value="Custom Suit">Custom Bespoke Suit</option>
                  <option value="Prince Coat / Overcoat">Coats &amp; Prince Coats</option>
                  <option value="Waistcoat">Tailored Waistcoat</option>
                  <option value="Shalwar Kameez">Egyptian Cotton Shalwar Kameez</option>
                  <option value="Wedding Sherwani">Bespoke Wedding Sherwani</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-[#9d998f] block mb-1">Fit Preference</label>
                <select
                  value={clientFit.fitPreference}
                  onChange={(e) => setClientFit({ ...clientFit, fitPreference: e.target.value })}
                  className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-3 py-2 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                >
                  <option value="Slim Tailored">Slim Tailored (Modern contour)</option>
                  <option value="Classic Regular">Classic Regular (Comfort drape)</option>
                  <option value="Relaxed Royal">Relaxed Royal (Ceremonial)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
              <div>
                <label className="text-[10px] text-[#8e8a80] block mb-1">Chest (in)</label>
                <input
                  type="text"
                  placeholder="e.g. 40"
                  value={clientFit.chest}
                  onChange={(e) => setClientFit({ ...clientFit, chest: e.target.value })}
                  className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-2.5 py-1.5 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] text-[#8e8a80] block mb-1">Waist (in)</label>
                <input
                  type="text"
                  placeholder="e.g. 34"
                  value={clientFit.waist}
                  onChange={(e) => setClientFit({ ...clientFit, waist: e.target.value })}
                  className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-2.5 py-1.5 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] text-[#8e8a80] block mb-1">Shoulder (in)</label>
                <input
                  type="text"
                  placeholder="e.g. 18.5"
                  value={clientFit.shoulder}
                  onChange={(e) => setClientFit({ ...clientFit, shoulder: e.target.value })}
                  className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-2.5 py-1.5 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] text-[#8e8a80] block mb-1">Length (in)</label>
                <input
                  type="text"
                  placeholder="e.g. 30"
                  value={clientFit.length}
                  onChange={(e) => setClientFit({ ...clientFit, length: e.target.value })}
                  className="w-full bg-[#161822] border border-[#2b2f3f] rounded px-2.5 py-1.5 text-[#f5f2ea] focus:border-[#d4af37] outline-none"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#25d366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Measurements to WhatsApp (+92 313 7777234)</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
