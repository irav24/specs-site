import React from 'react';

export default function Registration() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              
              {/* Table Header */}
              <thead>
                {/* Top Level Header */}
                <tr className="bg-[#0057b2] text-white">
                  <th className="font-serif text-lg font-bold py-4 px-6 border-b border-[#004185] border-r w-1/3">
                    Authors
                  </th>
                  <th colSpan="2" className="font-serif text-lg font-bold py-4 px-6 border-b border-[#004185] border-r text-center">
                    Indian Participants
                  </th>
                  <th colSpan="2" className="font-serif text-lg font-bold py-4 px-6 border-b border-[#004185] text-center">
                    Foreign Participants
                  </th>
                </tr>
                {/* Sub Level Header */}
                <tr className="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider font-bold">
                  <th className="py-3 px-6 border-b border-r border-slate-200">Category</th>
                  <th className="py-3 px-4 border-b border-r border-slate-200 text-center">IEEE Member</th>
                  <th className="py-3 px-4 border-b border-r border-slate-200 text-center">Non-IEEE Member</th>
                  <th className="py-3 px-4 border-b border-r border-slate-200 text-center">IEEE Member</th>
                  <th className="py-3 px-4 border-b border-slate-200 text-center">Non-IEEE Member</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-slate-700 font-medium">
                
                {/* Main Authors */}
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-100">Academicians /<br/>R&D Professional</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 8000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 10000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">USD 300</td>
                  <td className="py-4 px-4 text-center font-mono">USD 350</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200 hover:bg-slate-100 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-200">Students</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">INR 5500</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">INR 6500</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">USD 140</td>
                  <td className="py-4 px-4 text-center font-mono">USD 175</td>
                </tr>

                {/* Co-Authors Section */}
                <tr>
                  <td colSpan="5" className="bg-[#0057b2]/10 py-3 px-6 font-bold text-[#0057b2] text-sm text-center border-b border-slate-200">
                    Co-Authors (If main author is already registered and Co-Author also wants to register)
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-100">Academicians /<br/>R&D Professional</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 4000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 4800</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">USD 175</td>
                  <td className="py-4 px-4 text-center font-mono">USD 200</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200 hover:bg-slate-100 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-200">Students</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">INR 2500</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">INR 3000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">USD 110</td>
                  <td className="py-4 px-4 text-center font-mono">USD 140</td>
                </tr>

                {/* Non-Author Participants Section */}
                <tr>
                  <td colSpan="5" className="bg-[#0057b2]/10 py-3 px-6 font-bold text-[#0057b2] text-sm text-center border-b border-slate-200">
                    Non-Author Participants
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-100">Academicians /<br/>R&D Professionals<br/><span className="text-xs font-medium text-slate-500">(3 Days Registration)</span></td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 3000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 4000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">USD 113</td>
                  <td className="py-4 px-4 text-center font-mono">USD 140</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200 hover:bg-slate-100 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-200">Academicians /<br/>R&D Professionals<br/><span className="text-xs font-medium text-slate-500">(1 Day Registration)</span></td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">INR 2000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">INR 2500</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">USD 75</td>
                  <td className="py-4 px-4 text-center font-mono">USD 88</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-100">Students<br/><span className="text-xs font-medium text-slate-500">(3 Days Registration)</span></td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 2500</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 3500</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">USD 64</td>
                  <td className="py-4 px-4 text-center font-mono">USD 94</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200 hover:bg-slate-100 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-200">Students<br/><span className="text-xs font-medium text-slate-500">(1 Day Registration)</span></td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">INR 2000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">INR 3000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-200">USD 51</td>
                  <td className="py-4 px-4 text-center font-mono">USD 81</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold border-r border-slate-100">Industry</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 11000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">INR 12000</td>
                  <td className="py-4 px-4 text-center font-mono border-r border-slate-100">USD 413</td>
                  <td className="py-4 px-4 text-center font-mono">USD 420</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}