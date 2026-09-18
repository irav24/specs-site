import React from 'react';

export default function Advisory() {
  const advisoryMembers = [
    { name: "Aitor J. Garrido", affiliation: "Automatic Control Group, University of the Basque Country, Spain" },
    { name: "Anirban Mukherjee", affiliation: "IIT Kharagpur" },
    { name: "Arindam Basu, FIEEE", affiliation: "City University of Hong Kong, Hong Kong" },
    { name: "Ashok Kumar Pradhan", affiliation: "IIT Kharagpur" },
    { name: "Aurobinda Routray", affiliation: "IIT Kharagpur" },
    { name: "Izaskun Garrido", affiliation: "Automatic Control Group, University of the Basque Country, Spain" },
    { name: "Karabi Biswas", affiliation: "IIT Kharagpur" },
    { name: "Rajarshi Gupta", affiliation: "University of Calcutta" },
    { name: "Santu Rana", affiliation: "Deakin University, Australia" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Advisory Committee
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Distinguished experts providing strategic guidance and a global perspective.
          </p>
        </div>

        {/* Unified Advisory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisoryMembers.map((member, idx) => (
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

      </div>
    </div>
  );
}