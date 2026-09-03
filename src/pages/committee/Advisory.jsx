import React from 'react';

export default function Advisory() {
  const nationalAdvisory = [
    { name: "Prof. Ram Bilash Pachori", affiliation: "IIT Indore" },
    { name: "Prof. Dhiman Mallick", affiliation: "IIT Delhi" },
    { name: "Prof. Sarasij Das", affiliation: "IISc Bengaluru" },
    { name: "Prof. Ashok Kumar Pradhan", affiliation: "IIT Kharagpur" },
    { name: "Prof. Santanau Kapat", affiliation: "IIT Kharagpur" },
    { name: "Prof. Subhashis Chowdhury", affiliation: "IIT Bombay" },
    { name: "Prof. Rajarshi Gupta", affiliation: "Calcutta University" },
    { name: "Prof. Amlan Chakrabarti", affiliation: "Calcutta University" },
    { name: "Prof. Amitava Chatterjee", affiliation: "Jadavpur University" },
    { name: "Prof. Amit Konar", affiliation: "Jadavpur University" },
    { name: "Prof. N. B. Dev Choudhury", affiliation: "NIT Silchar" },
    { name: "Prof. L. C. Saikia", affiliation: "NIT Silchar" },
    { name: "Prof. A. K. Goswami", affiliation: "NIT Silchar" },
    { name: "Prof. Saurabh Chaudhury", affiliation: "NIT Silchar" }
  ];

  const internationalAdvisory = [
    { name: "Prof. Arindam Basu", affiliation: "City University of Hong Kong" },
    { name: "Prof. Antonio Visioli", affiliation: "University of Brescia, Italy" },
    { name: "Prof. Aitor J. Garrido", affiliation: "Automatic Control Group, University of the Basque Country, Spain" },
    { name: "Prof. Izaskun Garrido", affiliation: "Automatic Control Group, University of the Basque Country, Spain" },
    { name: "Prof. Nicu Bizon", affiliation: "The National University of Science and Technology POLITEHNICA Bucharest, Pitești University Centre, Romania" }
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalAdvisory.map((member, idx) => (
              <div key={idx} className="bg-white border-l-4 border-[#0057b2] hover:border-[#7ed957] p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#0057b2] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-1.5">
                  {member.affiliation}
                </p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalAdvisory.map((member, idx) => (
              <div key={idx} className="bg-white border-l-4 border-[#0057b2] hover:border-[#7ed957] p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#0057b2] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-1.5 leading-relaxed">
                  {member.affiliation}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}