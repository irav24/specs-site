import React from 'react';

export default function OurSponsors() {
  
  // 1. Technical Co-Sponsors Array
  // Keep adding new sponsors inside these brackets [ ] separated by commas
  const technicalSponsors = [
    { name: "Signal Processing Society, Kolkata Subsection", logo: "/Sponsor.png", tier: "Technical Co-Sponsor" },
    { name: "Silchar Subsection", logo: "/sponsor2.jpeg", tier: "Technical Co-Sponsor" },
    // ADD NEW TECHNICAL SPONSORS HERE:
    // { name: "Example Name", logo: "/example.png", tier: "Technical Co-Sponsor" },
  ];

  // 2. Financial Sponsors Array
  // Keep adding new sponsors inside these brackets [ ] separated by commas
  const financialSponsors = [
    { name: "Sponsor 1", logo: "/Sponsor.png", tier: "Financial Sponsor" },
    
    // ADD NEW FINANCIAL SPONSORS HERE:
    // { name: "Example Name", logo: "/example.png", tier: "Silver Sponsor" },
  ];

  // Reusable Card Component for clean code
  const SponsorCard = ({ sponsor }) => (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0057b2]/30 transition-all flex flex-col items-center justify-center min-h-[200px] group">
      <div className="h-20 w-full flex items-center justify-center mb-5">
        <img 
          src={sponsor.logo} 
          alt={sponsor.name} 
          className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="w-full text-center border-t border-slate-200 pt-3 mt-auto">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0057b2]">
          {sponsor.tier}
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Our Sponsors
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            We are grateful to the following organizations for their generous support of IEEE SPeCS 2027.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Column: Technical Co-Sponsors */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center border-b-2 border-slate-100 pb-4">
              Technical Co-Sponsors
            </h2>
            {technicalSponsors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {technicalSponsors.map((sponsor, idx) => (
                  <SponsorCard key={`tech-${idx}`} sponsor={sponsor} />
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center mt-8 mb-4">
                <span className="px-6 py-2 bg-slate-100 text-slate-500 font-medium rounded-full text-sm uppercase tracking-widest border border-slate-200">
                  To be updated
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Financial Sponsors */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center border-b-2 border-slate-100 pb-4">
              Financial Sponsors
            </h2>
            {financialSponsors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {financialSponsors.map((sponsor, idx) => (
                  <SponsorCard key={`fin-${idx}`} sponsor={sponsor} />
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center mt-8 mb-4">
                <span className="px-6 py-2 bg-slate-100 text-slate-500 font-medium rounded-full text-sm uppercase tracking-widest border border-slate-200">
                  To be updated
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}