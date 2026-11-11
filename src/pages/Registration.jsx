import React from 'react';

export default function Registration() {
  
  // Data for Indian Delegates
  const indianData = [
    { category: "Student (UG/PG/Ph.D.)", earlyNon: "₹ 6500", earlyIeee: "₹ 6000", regNon: "₹ 7500", regIeee: "₹ 7000" },
    { category: "Academia", earlyNon: "₹ 9000", earlyIeee: "₹ 8000", regNon: "₹ 10000", regIeee: "₹ 9000" },
    { category: "Industry Professional", earlyNon: "₹ 20000", earlyIeee: "₹ 18000", regNon: "₹ 21000", regIeee: "₹ 19000" },
    { category: "Attendee", earlyNon: "₹ 5500", earlyIeee: "₹ 5000", regNon: "₹ 6500", regIeee: "₹ 6000" },
    { category: "Additional Page", earlyNon: "₹ 1000/page", earlyIeee: "₹ 1000/page", regNon: "₹ 1000/page", regIeee: "₹ 1000/page" } // <-- New Row Added
  ];

  // Data for Foreign Delegates
  const foreignData = [
    { category: "Student (UG/PG/Ph.D.)", earlyNon: "$250", earlyIeee: "$200", regNon: "$300", regIeee: "$250" },
    { category: "Academician / Research Scholar", earlyNon: "$350", earlyIeee: "$300", regNon: "$400", regIeee: "$350" },
    { category: "Industry Professional", earlyNon: "$450", earlyIeee: "$400", regNon: "$500", regIeee: "$450" },
    { category: "Attendee", earlyNon: "$200", earlyIeee: "$150", regNon: "$250", regIeee: "$200" },
    { category: "Additional Page", earlyNon: "$50/page", earlyIeee: "$50/page", regNon: "$50/page", regIeee: "$50/page" } // <-- New Row Added
  ];

  // Reusable Table Component to keep code clean and DRY
  const RegistrationTable = ({ title, currency, data }) => (
    <div className="mb-20">
      
      {/* Table Header Section */}
      <div className="flex justify-between items-end mb-4 px-2">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-wide">
          {title}
        </h2>
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          {currency}
        </span>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse min-w-[900px]">
            
            {/* Brand Colors Header */}
            <thead>
              <tr className="bg-[#0057b2] text-white">
                <th rowSpan="2" className="py-6 px-8 text-left font-black tracking-widest uppercase border-r border-white/20 w-1/3 align-middle text-sm">
                  Category
                </th>
                <th colSpan="2" className="py-5 px-4 font-black tracking-widest uppercase text-[#7ed957] border-b border-r border-white/20 text-xs">
                  Early Bird (Closes 10th March 2027)
                </th>
                <th colSpan="2" className="py-5 px-4 font-black tracking-widest uppercase text-white border-b border-white/20 text-xs">
                  Regular Registration (After 10th March 2027)
                </th>
              </tr>
              {/* Slightly darker blue for the sub-header row to create depth */}
              <tr className="bg-[#004185] text-white text-[11px] tracking-widest uppercase">
                <th className="py-4 px-4 font-black text-[#7ed957] border-r border-white/20">IEEE Member</th>
                <th className="py-4 px-4 font-bold border-r border-white/20">Non-IEEE</th>
                <th className="py-4 px-4 font-black text-[#7ed957] border-r border-white/20">IEEE Member</th>
                <th className="py-4 px-4 font-bold">Non-IEEE</th>
              </tr>
            </thead>

            {/* Table Body - Removed 'uppercase tracking-wider' classes here */}
            <tbody className="text-sm font-bold text-slate-700">
              {data.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="bg-white hover:bg-slate-50 border-b border-slate-100 last:border-0 transition-colors"
                >
                  <td className="py-6 px-8 text-left font-black text-slate-900 border-r border-slate-100">
                    {row.category}
                  </td>
                  
                  <td className="py-6 px-4 font-black text-[#0057b2] border-r border-slate-100 text-base">
                    {row.earlyIeee}
                  </td>
                  <td className="py-6 px-4 font-black text-[#555555] border-r border-slate-100 text-base">
                    {row.earlyNon}
                  </td>
                  <td className="py-6 px-4 font-black text-[#0057b2] border-r border-slate-100 text-base">
                    {row.regIeee}
                  </td>
                  <td className="py-6 px-4 font-black text-[#555555] border-r border-slate-100 text-base">
                    {row.regNon}
                  </td>
                  
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Registration Fees
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full"></div>
        </div>

        {/* Indian Delegates Table */}
        <RegistrationTable 
          title="For Indian Delegates" 
          currency="INR (₹)" 
          data={indianData} 
        />

        {/* Foreign Delegates Table */}
        <RegistrationTable 
          title="For Foreign Delegates" 
          currency="USD ($)" 
          data={foreignData} 
        />

        {/* Notes Added Below the Tables */}
        <div className="max-w-4xl mx-auto mt-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 border-l-4 border-l-[#0057b2]">
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-5 border-b border-slate-100 pb-3">
            Notes
          </h3>
          <ul className="space-y-4 text-slate-600 font-medium list-disc list-outside ml-6 marker:text-[#7ed957]">
            <li>Registration fees are exclusive of 18% GST and payment gateway charges.</li>
                        <li>In case of student registration, registering author must be student with valid ID proof.</li>
                        

            <li>Attendee registration covers participation in all sessions.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}