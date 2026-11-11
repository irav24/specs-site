import React from 'react';
import { User } from 'lucide-react';

export default function Advisory() {
  // Only the green highlighted members are included, alphabetized.
  // Update these paths to match the images you upload to your 'public' folder.
  const advisoryMembers = [
    { name: "Amit Konar", affiliation: "Jadavpur University", image: "/amit.jpeg" },
    { name: "Amitava Chatterjee", affiliation: "Jadavpur University", image: "/amitavac.jpg" },
        { name: "Anirban Mukherjee", affiliation: "IIT Kharagpur", image: "/anirban.jpeg" },

    { name: "Arindam Basu, FIEEE", affiliation: "City University of Hong Kong, Hong Kong", image: "/arindam.jpeg" },
        { name: "Asheesh Kumar Singh", affiliation: "MNNIT Allahabad, Prayagraj", image: "/ashishk.jpg" },
            { name: "Izaskun Garrido", affiliation: "Automatic Control Group, University of the Basque Country, Spain", image: "/izaskun.png" },
                { name: "Karabi Biswas", affiliation: "IIT Kharagpur", image: "/karabi.jpeg" },



    { name: "Nidul Sinha", affiliation: "NIT Silchar", image: "/nidul.jpg" },
    { name: "Rajarshi Gupta", affiliation: "University of Calcutta", image: "/rajarshi.jpeg" },
    { name: "Santu Rana", affiliation: "Deakin University, Australia", image: "/santu.jpeg" },
    { name: "Sivaji Chakravorti", affiliation: "Jadavpur University", image: "/sivaji.png" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Advisory Committee
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
        </div>

        {/* Dynamic List Rendering */}
        {advisoryMembers.length > 0 ? (
          /* FLEXBOX LAYOUT for centered wrapping (Pyramid style) */
          <div className="flex flex-wrap justify-center gap-8">
            {advisoryMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white border-t-4 border-[#0057b2] hover:border-[#7ed957] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[360px]"
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
                <div className="text-center mt-auto px-2 flex-grow flex flex-col justify-center">
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#0057b2] transition-colors leading-snug mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {member.affiliation}
                  </p>
                </div>
                
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