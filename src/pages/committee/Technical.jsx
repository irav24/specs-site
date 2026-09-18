import React from 'react';

export default function Technical() {
  const tpcMembers = [
    { name: "Akshaya Kumar Pati", affiliation: "KIIT University, Bhubaneswar", email: "akshaya.patifet@kiit.ac.in" },
    { name: "Amitkumar V. Jha", affiliation: "KIIT University, Bhubaneswar", email: "amit.jhafet@kiit.ac.in" },
    { name: "Anagha Bhattacharya", affiliation: "NIT Mizoram", email: "anagha.eee@nitmz.ac.in" },
    { name: "Anirban Dasgupta", affiliation: "IIT Guwahati", email: "anirban.dasgupta@iitg.ac.in" },
    { name: "Anirudh Nath", affiliation: "IIEST Shibpur", email: "anirudh@ee.iiests.ac.in" },
    { name: "Chandan Kumar", affiliation: "STCT, Pune", email: "chandanbobby17@gmail.com" },
    { name: "Debraj Chakraborty", affiliation: "IIT Bombay", email: "dc@ee.iitb.ac.in" },
    { name: "Korra Balu", affiliation: "NIT Calicut", email: "korrabalu@nitc.ac.in" },
    { name: "Mayank Kumar", affiliation: "DTU, Delhi", email: "mayankkumar@dtu.ac.in" },
    { name: "Nasirul Haque", affiliation: "NIT Calicut", email: "nasirul@nitc.ac.in" },
    { name: "Pravin Malik", affiliation: "NIT Kurukshetra", email: "parveen.malik@nitkkr.ac.in" },
    { name: "Ram Krishan", affiliation: "NIT Warangal", email: "rkrishan@nitw.ac.in" },
    { name: "Sarasij Das", affiliation: "IISc Bengaluru", email: "sarasij@iisc.ac.in" },
    { name: "Sourav Das", affiliation: "IEM Kolkata", email: "sourav.das@iem.edu.in" },
    { name: "Sudipta Chakraborty", affiliation: "NIT Silchar", email: "sudipta@ei.nits.ac.in" },
    { name: "Sumit Chatterjee", affiliation: "IIT Delhi", email: "sumit@dese.iitd.ac.in" },
    { name: "Supratim Gupta", affiliation: "NIT Rourkela", email: "guptasu@nitrkl.ac.in" }
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
                <p className="text-sm text-slate-600 font-medium mt-1.5 mb-4 flex-grow">
                  {member.affiliation}
                </p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-xs font-mono text-[#0057b2] hover:text-[#7ed957] transition-colors truncate block border-t border-slate-100 pt-3 mt-auto"
                  title={member.email}
                >
                  {member.email}
                </a>
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