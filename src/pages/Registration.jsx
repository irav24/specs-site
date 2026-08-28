import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CreditCard, AlertCircle } from 'lucide-react';

const pricingData = [
  {
    category: "IEEE Member",
    badgeStyles: "bg-green-100 text-green-700 border border-green-200",
    rows: [
      { role: "Students (UG/PG/PhD)", inr: "₹5,000", usd: "$100" },
      { role: "Academia (Faculty) / Industry", inr: "₹10,000", usd: "$250" },
    ]
  },
  {
    category: "Non-IEEE Member",
    badgeStyles: "bg-orange-100 text-orange-700 border border-orange-200",
    rows: [
      { role: "Students (UG/PG/PhD)", inr: "₹6,000", usd: "$120" },
      { role: "Academia (Faculty) / Industry", inr: "₹12,000", usd: "$300" },
    ]
  }
];

const inclusions = [
  "Access to all keynote and technical sessions",
  "Conference proceedings & publication in IEEE Xplore (for authors)",
  "Official conference kit and badge",
  "Working lunches and tea/coffee breaks",
  "Gala Dinner entry",
  "Certificate of Presentation / Participation"
];

export default function Registration() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 mb-4 rounded-full bg-[#7ed957]/20 border border-[#7ed957]/30 text-[#0057b2] text-xs font-black tracking-widest uppercase">
            Registration
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-black text-[#0057b2] mb-4">
            Conference Fees
          </motion.h2>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          {/* ... Keep the exact same Table HTML structure here ... */}
          <div className="bg-slate-50 p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-slate-500 font-medium">
              <AlertCircle className="w-4 h-4 mr-2 text-[#0057b2]" />
              Taxes and gateway charges may apply.
            </div>
            {/* Themed Button */}
            <button className="w-full sm:w-auto px-8 py-3 bg-[#0057b2] hover:bg-[#004185] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#0057b2]/20 flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5 text-[#7ed957]" />
              Proceed to Payment
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-black text-[#0057b2] mb-6">What's Included in Registration?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7ed957] flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}