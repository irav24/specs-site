import React from 'react';

export default function Technical() {
  const tpcMembers = [
    { name: "Akshaya Kumar Pati", affiliation: "KIIT University, Bhubaneswar" },
    { name: "Amitkumar V. Jha", affiliation: "KIIT University, Bhubaneswar" },
    { name: "Anagha Bhattacharya", affiliation: "NIT Mizoram" },
    { name: "Anirban Dasgupta", affiliation: "IIT Guwahati" },
    { name: "Anirudh Nath", affiliation: "IIEST Shibpur" },
    { name: "Chandan Kumar", affiliation: "STCT, Pune" },
    { name: "Debraj Chakraborty", affiliation: "IIT Bombay" },
    { name: "Korra Balu", affiliation: "NIT Calicut" },
    { name: "Mayank Kumar", affiliation: "DTU, Delhi" },
    { name: "Nasirul Haque", affiliation: "NIT Calicut" },
    { name: "Pravin Malik", affiliation: "NIT Kurukshetra" },
    { name: "Ram Krishan", affiliation: "NIT Warangal" },
    { name: "Sarasij Das", affiliation: "IISc Bengaluru" },
    { name: "Sourav Das", affiliation: "IEM Kolkata" },
    { name: "Sudipta Chakraborty", affiliation: "NIT Silchar" },
    { name: "Sumit Chatterjee", affiliation: "IIT Delhi" },
    { name: "Supratim Gupta", affiliation: "NIT Rourkela" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Technical Program Committee
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            The distinguished experts responsible for the peer-review process and technical program curation for IEEE SPeCS 2027.
          </p>
        </div>

        {/* Dynamic List Rendering */}
        {tpcMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tpcMembers.map((member, idx) => (
              <div key={idx} className="bg-white border-l-4 border-[#0057b2] hover:border-[#7ed957] p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#0057b2] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-1.5 flex-grow">
                  {member.affiliation}
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* "To be updated" Placeholder */
          <div className="w-full flex justify-center mt-12">
            <span className="px-6 py-2 bg-slate-200 text-slate-600 font-medium rounded-full text-sm uppercase tracking-widest border border-slate-300 shadow-sm">
              To be updated
            </span>
          </div>
        )}

      </div>
    </div>
  );
}