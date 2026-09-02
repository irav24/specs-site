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
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 border-b border-slate-200 pb-10">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#0057b2] mb-4">
            Steering Committee
          </h1>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            The executive oversight board for IEEE SPeCS 2027.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steeringCommittee.map((member, idx) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-100 rounded-lg hover:border-[#0057b2]/30 hover:shadow-sm transition-all">
              <p className="font-bold text-[#0057b2] text-[15px]">{member.name}</p>
              <p className="text-sm text-slate-600 font-medium mt-1 leading-snug">{member.affiliation}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}