import React from 'react';

export default function Registration() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Registration Fees
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Student registration allows for a single paper. Academia registration allows for a maximum of two papers.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0057b2] text-white">
                  <th className="font-serif text-lg font-bold py-4 px-6 border-b border-[#004185]">Author Category</th>
                  <th className="font-serif text-lg font-bold py-4 px-6 border-b border-[#004185] text-center">Indian (INR)</th>
                  <th className="font-serif text-lg font-bold py-4 px-6 border-b border-[#004185] text-center">Foreign (USD)</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 font-medium">
                {/* IEEE Member Section */}
                <tr>
                  <td colSpan="3" className="bg-slate-100 py-3 px-6 font-bold text-slate-900 uppercase tracking-widest text-xs text-center border-b border-slate-200">
                    IEEE Member
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold">Students (UG/PG/PhD)</td>
                  <td className="py-4 px-6 text-center font-mono">5000.00</td>
                  <td className="py-4 px-6 text-center font-mono">100.00</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold">Academia (Faculty)</td>
                  <td className="py-4 px-6 text-center font-mono">10,000.00</td>
                  <td className="py-4 px-6 text-center font-mono">250.00</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold">Industry</td>
                  <td className="py-4 px-6 text-center font-mono">15,000.00</td>
                  <td className="py-4 px-6 text-center font-mono">400.00</td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold">Attendee</td>
                  <td className="py-4 px-6 text-center font-mono">4000.00</td>
                  <td className="py-4 px-6 text-center font-mono">80.00</td>
                </tr>

                {/* Non-IEEE Member Section */}
                <tr>
                  <td colSpan="3" className="bg-slate-100 py-3 px-6 font-bold text-slate-900 uppercase tracking-widest text-xs text-center border-b border-slate-200">
                    Non-IEEE Member
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold">Students (UG/PG/PhD)</td>
                  <td className="py-4 px-6 text-center font-mono">6000.00</td>
                  <td className="py-4 px-6 text-center font-mono">120.00</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold">Academia (Faculty)</td>
                  <td className="py-4 px-6 text-center font-mono">12,000.00</td>
                  <td className="py-4 px-6 text-center font-mono">300.00</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold">Industry</td>
                  <td className="py-4 px-6 text-center font-mono">18,000.00</td>
                  <td className="py-4 px-6 text-center font-mono">500.00</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold">Attendee</td>
                  <td className="py-4 px-6 text-center font-mono">5000.00</td>
                  <td className="py-4 px-6 text-center font-mono">100.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}