import React from 'react';

export default function Steering() {
  const steeringCommittee = [
    { name: "Prof. Pier Luggi Dragotti", affiliation: "Imperial College London" },
    { name: "Prof. K V S Hari", affiliation: "IISc Bangalore" },
    { name: "Prof. Anamika Dubey", affiliation: "WSU" },
    { name: "Prof. Sukumar Kamalasadan", affiliation: "UNC Charlotte" },
    { name: "Dr. Anamitra Pal", affiliation: "ASU" },
    { name: "Dr. Lilik J Awain", affiliation: "University of Airlangga" },
    { name: "Dr. Santu Rana", affiliation: "Deakin University" },
    { name: "Dr. Kanendra Naidu", affiliation: "UiTM Shah Alam" },
    { name: "Prof. Sukumar Mishra", affiliation: "Director IIT (ISM) Dhanbad" },
    { name: "Prof. K Shanti Swarup", affiliation: "IIT Madras" },
    { name: "Prof. Sandip Ghosh", affiliation: "IIT (BHU), India" },
    { name: "Prof. Saugat Bhattacharya", affiliation: "Ulster University, United Kingdom" },
    { name: "Prof. Anindya Nag", affiliation: "Dresden, Germany" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Steering Committee
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            The executive oversight board providing strategic direction for IEEE SPeCS 2027.
          </p>
        </div>
        
        {/* Academic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steeringCommittee.map((member, idx) => (
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

      </div>
    </div>
  );
}