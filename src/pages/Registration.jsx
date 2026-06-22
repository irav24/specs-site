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
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold tracking-wide uppercase"
          >
            Registration
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" 
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Conference <span className="text-emerald-600">Fees</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Secure your spot at SPeCS 2027. Early bird registration ends soon.
          </motion.p>
        </div>

        {/* Pricing Table Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-5 px-6 text-sm font-bold text-slate-500 uppercase tracking-wider w-1/2">Author Category</th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Indian (INR)</th>
                  <th className="py-5 px-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Foreign (USD)</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((group, groupIndex) => (
                  <React.Fragment key={groupIndex}>
                    {/* Category Header Row */}
                    <tr className="bg-slate-50/50">
                      <td colSpan="3" className="py-4 px-6 border-b border-slate-100">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide ${group.badgeStyles}`}>
                          {group.category}
                        </span>
                      </td>
                    </tr>
                    {/* Data Rows */}
                    {group.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                        <td className="py-5 px-6 font-semibold text-slate-800">{row.role}</td>
                        <td className="py-5 px-6 font-bold text-slate-600">{row.inr}</td>
                        <td className="py-5 px-6 font-bold text-slate-600">{row.usd}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Action Footer inside the card */}
          <div className="bg-slate-50 p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-sm text-slate-500">
              <AlertCircle className="w-4 h-4 mr-2 text-amber-500" />
              Taxes and gateway charges may apply.
            </div>
            <button className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              Proceed to Payment
            </button>
          </div>
        </motion.div>

        {/* What's Included Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included in Registration?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
