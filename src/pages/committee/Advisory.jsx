import React from 'react';

export default function Advisory() {
  const nationalAdvisory = [
    { name: "Anirban Mukherjee", affiliation: "IIT Kharagpur", email: "anirban@ee.iitkgp.ac.in" },
    { name: "Ashok Kumar Pradhan", affiliation: "IIT Kharagpur", email: "akpradhan@ee.iitkgp.ernet.in" },
    { name: "Aurobinda Routray", affiliation: "IIT Kharagpur", email: "aroutray@ee.iitkgp.ac.in" },
    { name: "Karabi Biswas", affiliation: "IIT Kharagpur", email: "karabi@ee.iitkgp.ac.in" },
    { name: "Rajarshi Gupta", affiliation: "University of Calcutta", email: "rgaphy@ieee.org" }
  ];

  const internationalAdvisory = [
    { name: "Aitor J. Garrido", affiliation: "Automatic Control Group, University of the Basque Country, Spain", email: "aitor.garrido@ehu.eus" },
    { name: "Arindam Basu, FIEEE", affiliation: "City University of Hong Kong, Hong Kong", email: "arinbasu@cityu.edu.hk" },
    { name: "Izaskun Garrido", affiliation: "Automatic Control Group, University of the Basque Country, Spain", email: "izaskun.garrido@ehu.eus" },
    { name: "Santu Rana", affiliation: "Deakin University, Australia", email: "santu.rana@deakin.edu.au" }
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

        {/* National Advisory Section */}
        <section className="mb-20">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 whitespace-nowrap">
              National Advisory Board
            </h2>
            <div className="flex-1 h-px bg-slate-300"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalAdvisory.map((member, idx) => (
              <div key={idx} className="bg-white border-l-4 border-[#0057b2] hover:border-[#7ed957] p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#0057b2] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-1.5 mb-4 flex-grow">
                  {member.affiliation}
                </p>
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-xs font-mono text-[#0057b2] hover:text-[#7ed957] transition-colors truncate block border-t border-slate-100 pt-3 mt-auto"
                    title={member.email}
                  >
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* International Advisory Section */}
        <section>
          <div className="flex items-center gap-6 mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 whitespace-nowrap">
              International Advisory Board
            </h2>
            <div className="flex-1 h-px bg-slate-300"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {internationalAdvisory.map((member, idx) => (
              <div key={idx} className="bg-white border-l-4 border-[#0057b2] hover:border-[#7ed957] p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#0057b2] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-1.5 mb-4 flex-grow leading-relaxed">
                  {member.affiliation}
                </p>
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-xs font-mono text-[#0057b2] hover:text-[#7ed957] transition-colors truncate block border-t border-slate-100 pt-3 mt-auto"
                    title={member.email}
                  >
                    {member.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}