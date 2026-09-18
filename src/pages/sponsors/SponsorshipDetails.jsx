import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SponsorshipDetails() {
  const tiers = [
    {
      name: "Platinum Sponsor",
     
      color: "border-slate-800",
      bg: "bg-slate-900",
      text: "text-white",
      benefits: [
        "Logo on all promotional materials and website",
        
      ]
    },
    {
      name: "Gold Sponsor",
      color: "border-[#0057b2]",
      bg: "bg-[#0057b2]",
      text: "text-white",
      benefits: [
        "Logo on promotional materials and website",
        
      ]
    },
    {
      name: "Silver Sponsor",
      color: "border-[#7ed957]",
      bg: "bg-[#7ed957]",
      text: "text-slate-900",
      benefits: [
        "Logo on website sponsor page",
        
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Sponsorship Opportunities
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Partner with IEEE SPeCS 2027 to showcase your brand to a global audience of researchers, engineers, and industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`rounded-2xl border-2 ${tier.color} bg-white flex flex-col overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300`}>
              <div className={`${tier.bg} ${tier.text} p-6 text-center`}>
                <h2 className="font-serif text-2xl font-bold mb-2">{tier.name}</h2>
                <div className="font-mono font-bold tracking-widest text-sm opacity-90">{tier.price}</div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {tier.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${tier.name === 'Silver Sponsor' ? 'text-[#0057b2]' : tier.name === 'Gold Sponsor' ? 'text-[#0057b2]' : 'text-[#7ed957]'}`} />
                      <span className="text-slate-600 font-medium text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a href="/contact" className={`block w-full py-3 text-center font-bold uppercase tracking-widest text-xs rounded-xl border-2 transition-colors ${tier.name === 'Silver Sponsor' ? 'border-[#0057b2] text-[#0057b2] hover:bg-[#0057b2] hover:text-white' : 'border-slate-200 text-slate-900 hover:border-slate-900'}`}>
                  Become a Sponsor
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}