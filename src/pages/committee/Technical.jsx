import React from 'react';
import { User } from 'lucide-react';

export default function Technical() {
  // Only the green highlighted members are included, alphabetized.
  const tpcMembers = [
    { name: "Amitava Halder", affiliation: "SurTech, JIS Group", image: "" },
    { name: "Amitkumar V. Jha", affiliation: "KIIT University, Bhubaneswar", image: "/amitkumar.webp" },
    { name: "Anagha Bhattacharya", affiliation: "NIT Mizoram", image: "/anagha.jpeg" },
    { name: "Anirudh Nath", affiliation: "IIEST Shibpur", image: "/anirudh.jpeg" },
    { name: "Chandan Kumar", affiliation: "STCT, Pune", image: "" },
    { name: "Debbrota Paul Chowdhury", affiliation: "NIT Silchar", image: "/debbrota.jpg.jpeg" },
    { name: "Korra Balu", affiliation: "NIT Calicut", image: "/korra.png" },
    { name: "Manika Saha", affiliation: "NIT Durgapur", image: "" },
    { name: "Mayank Kumar", affiliation: "DTU, Delhi", image: "/mayank.jpg.jpeg" },
    { name: "Nasirul Haque", affiliation: "NIT Calicut", image: "/nasirul.png" },
    { name: "R. Murugan", affiliation: "NIT Puducherry", image: "" },
    { name: "Saibal Ghosh", affiliation: "ISI Kolkata", image: "" },
    { name: "Sanjib Ganguly", affiliation: "IIT Guwahati", image: "" },
    { name: "Sayanjit Singha Roy", affiliation: "IIT Kanpur", image: "" },
    { name: "Sayanti Chaudhuri", affiliation: "Adamas University, Kolkata", image: "" },
    { name: "Soumya Chatterjee", affiliation: "NIT Durgapur", image: "" },
    { name: "Sourav Das", affiliation: "IEM Kolkata", image: "/sourab das.jpg.jpeg" },
    { name: "Sudipta Chakraborty", affiliation: "NIT Silchar", image: "/sudipta.jfif.jpeg" },
    { name: "Sumit K Chattopadhyay", affiliation: "IIT Delhi", image: "/sumit_k.jpg.jpeg" },
    { name: "Supratim Gupta", affiliation: "NIT Rourkela", image: "/supratim.jpg.jpeg" },
    { name: "Tripti Goel", affiliation: "NIT Silchar", image: "/Tripti_Goel.jpg.jpeg" }
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
          
        </div>

        {/* Dynamic List Rendering */}
        {tpcMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tpcMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white border-t-4 border-[#0057b2] hover:border-[#7ed957] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center h-full"
              >
                
                {/* Profile Image Container */}
                <div className="w-24 h-24 mb-5 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm group-hover:border-[#7ed957]/20 transition-colors bg-slate-100 flex items-center justify-center shrink-0">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if the image link is broken
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback Icon if no image is provided or if image fails to load */}
                  <div className={`w-full h-full flex items-center justify-center text-[#0057b2]/40 ${member.image ? 'hidden' : 'flex'}`}>
                    <User className="w-10 h-10" />
                  </div>
                </div>

                {/* Member Details */}
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#0057b2] transition-colors leading-snug mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium flex-grow">
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