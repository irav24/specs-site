import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function CallForPapers() {
  const tracks = [
    { id: "Track I", name: "Signal Processing and Computer Vision" },
    { id: "Track II", name: "Power & Energy Systems" },
    { id: "Track III", name: "Power Electronics, Drives and Energy-Efficient Converters" },
    { id: "Track IV", name: "VLSI, Communications, and Nanotechnology" },
    { id: "Track V", name: "Computational Intelligence, Techniques, Data Informatics" },
    { id: "Track VI", name: "Embedded Systems for Digitization in Industry Applications" },
    { id: "Track VII", name: "Control, Automation and Robotics" },
    { id: "Track VIII", name: "Cybersecurity and Emerging Technologies" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Call for Papers
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Authors are invited to submit original, unpublished research papers (4-6 pages PDF following the IEEE double-column template).
          </p>
        </div>

        {/* Technical Tracks Grid */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 text-center border-b border-slate-200 pb-4">
            Technical Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-[#0057b2] hover:border-t-[#7ed957] hover:shadow-md transition-all group flex flex-col h-full">
                <span className="font-mono text-xs text-[#0057b2] font-bold uppercase tracking-widest block mb-3">
                  {track.id}
                </span>
                <h3 className="font-serif text-lg text-slate-900 font-bold leading-snug group-hover:text-[#0057b2] transition-colors">
                  {track.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Action Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#7ed957]"></div>
          <FileText className="w-12 h-12 text-[#0057b2] mx-auto mb-6" />
          <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Paper Submission is Open</h3>
          <p className="text-slate-600 font-medium mb-8 max-w-2xl mx-auto">
            A paper will appear in the proceedings if at least one of the authors of the accepted paper registers before the registration deadline. Presenting the accepted paper is a prerequisite for appearing in IEEE Xplore.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://cmt3.research.microsoft.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#0057b2] text-white font-bold uppercase tracking-wider rounded-xl hover:bg-[#004185] transition-colors shadow-md flex items-center gap-2 w-full sm:w-auto justify-center">
              Microsoft CMT Portal <ExternalLink className="w-4 h-4 text-[#7ed957]" />
            </a>
            <a href="https://www.ieee.org" className="px-8 py-4 bg-slate-100 text-slate-700 font-bold uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              IEEE Formatting Templates <Download className="w-4 h-4 text-[#0057b2]" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}