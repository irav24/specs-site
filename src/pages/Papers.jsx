import React from 'react';

export default function Papers() {
  
  const tracks = [
    { id: "TRACK I", name: "Signal Processing and Computer Vision" },
    { id: "TRACK II", name: "Power & Energy Systems" },
    { id: "TRACK III", name: "Power Electronics & Converters" },
    { id: "TRACK IV", name: "VLSI, Communications & Nanotechnology" },
    { id: "TRACK V", name: "Computational Intelligence & AI" },
    { id: "TRACK VI", name: "Cybersecurity & Emerging Tech" }
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching the screenshot perfectly */}
        <div className="mb-16 border-b border-slate-200 pb-10">
          <h2 className="font-serif text-4xl text-[#0057b2] mb-4">
            Technical Tracks
          </h2>
          <p className="text-slate-600 text-lg font-medium max-w-2xl leading-relaxed">
            Submissions are categorized by domain. Authors must strictly match their manuscript to the appropriate track during the CMT submission process.
          </p>
        </div>

        {/* Minimalist Grid Layout with Hairline Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {tracks.map((track) => (
            <div key={track.id} className="border-t border-slate-200 pt-4 group">
              <span className="font-mono text-xs text-[#0057b2] font-bold uppercase tracking-widest block mb-3">
                {track.id}
              </span>
              <h3 className="font-serif text-2xl text-[#0057b2] leading-snug group-hover:text-[#7ed957] transition-colors cursor-pointer">
                {track.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}