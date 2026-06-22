import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, ShieldCheck, Award, FileText, ChevronRight, Download, ExternalLink, CalendarDays } from 'lucide-react';
import ExploreCarousel from '../components/ExploreCarousel';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const deadline = new Date('2026-08-01T00:00:00');
    const timer = setInterval(() => {
      const diff = deadline - new Date();
      if(diff <= 0) return;
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0')
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Structural Hero Frame: Clean High-Contrast Setup */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hero Core Specifications */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-xs block">
                May 25 – 27, 2027 // NIT Silchar, Cachar, Assam, India
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl">
                2027 IEEE International Conference on Signal, Power & Computing Systems
              </h2>
              <p className="text-slate-400 text-sm md:text-base max-w-3xl font-medium leading-relaxed">
                The premier technical event organized by the Department of Electrical Engineering, National Institute of Technology Silchar, bringing together global researchers, industry leaders, and innovators.
              </p>
              
              {/* Core Targets Matrix */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="https://cmt3.research.microsoft.com" target="_blank" rel="noreferrer" className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center gap-2">
                  Submit via Microsoft CMT <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider rounded-md transition-all border border-slate-700">
                  Registration Portal
                </button>
              </div>
            </div>

            {/* Micro Countdown Block */}
            <div className="lg:col-span-4 bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-inner">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-wider text-slate-400 uppercase">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                Paper Submission Closes In
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[['Days', timeLeft.days], ['Hrs', timeLeft.hours], ['Mins', timeLeft.minutes], ['Secs', timeLeft.seconds]].map(([label, value]) => (
                  <div key={label} className="bg-slate-900 border border-slate-800 p-3 rounded text-center">
                    <span className="block text-xl font-black text-white tracking-tight tabular-nums">{value}</span>
                    <span className="text-[9px] font-bold text-slate-500 uppercase block mt-1">{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Structural Layout Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dense Narrative & Journal Pipelines (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Grounded Institutional Context */}
            <div className="bg-white p-8 border border-slate-200 rounded-none shadow-xs">
              <h3 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-3 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                About SPeCS 2027
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4">
                The 2027 IEEE International Conference on Signal, Power & Computing Systems (SPeCS) is organized by the Department of Electrical Engineering, National Institute of Technology Silchar. The conference provides a structured peer-reviewed platform covering foundational and applied engineering paradigms across signal processing, advanced smart grid integration, power electronics topologies, and computing systems architecture.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                All technical submissions undergo a rigorous blind review process conducted by the Technical Program Committee. Accepted and presented papers will be submitted for possible inclusion in the IEEE Xplore Digital Library, subject to meeting IEEE's scope and quality requirements.
              </p>
            </div>

            {/* Indexing Assurances & Extended Journal Pathways */}
            <div className="bg-white p-6 border border-slate-200 rounded-none shadow-xs space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                Publication Guidelines & Indexing Metrics
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wide">IEEE Xplore Scoping</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">Presented records will be routed directly to IEEE for publication indexing approvals.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wide">Technical Honors</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">Best Manuscript selections will be recognized within each specific technical pipeline presentation.</p>
                  </div>
                </div>
              </div>
              <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-md mt-2">
                <span className="text-[10px] font-black uppercase text-blue-800 block mb-0.5">🚨 Extended Journal Opportunity</span>
                <p className="text-xs text-blue-900 font-medium leading-normal">
                  Authors of high-scoring presented papers will be invited to route expanded technical configurations to selected technical transaction pipelines for standard peer evaluation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Announcements & Operational Download Center (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Announcements Desk (Mirrors authentic INSTCon / UPCON models) */}
            <div className="bg-white border border-slate-200 rounded-none shadow-xs overflow-hidden">
              <div className="bg-slate-900 px-5 py-3.5 flex items-center justify-between text-white border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-amber-400" />
                  <h3 className="font-bold tracking-wider text-xs uppercase">Announcements Desk</h3>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="p-5 divide-y divide-slate-100 text-xs max-h-[290px] overflow-y-auto">
                <div className="pb-4">
                  <span className="text-[9px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-1.5 py-0.5 uppercase block w-fit mb-1.5 rounded-xs">
                    Submission Link
                  </span>
                  <p className="font-bold text-slate-800 leading-normal">
                    The Microsoft CMT paper submission engine is open and accepting initial paper registrations. Submissions must strictly follow IEEE templates.
                  </p>
                </div>
                <div className="py-4">
                  <span className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-100 px-1.5 py-0.5 uppercase block w-fit mb-1.5 rounded-xs">
                    Logistics Update
                  </span>
                  <p className="font-medium text-slate-600 leading-normal">
                    Initial operational guidelines for early hostel allocations and paid on-campus guest room configurations have been structured on the logistical sub-board.
                  </p>
                </div>
              </div>
            </div>

            {/* Resource Matrix: Authentic File Target Node */}
            <div className="bg-white p-5 border border-slate-200 rounded-none shadow-xs">
              <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase mb-3.5 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-400" /> Resource Downloads
              </h3>
              <div className="space-y-1.5">
                {[
                  { name: "Official Call for Papers Brochure (.PDF)", url: "#" },
                  { name: "IEEE Manuscript MS-Word Template (.DOCX)", url: "https://www.ieee.org" },
                  { name: "IEEE LaTeX Manuscript Archive (.ZIP)", url: "https://www.ieee.org" }
                ].map((file, idx) => (
                  <a 
                    key={idx} 
                    href={file.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 group transition-colors rounded-sm"
                  >
                    <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                      {file.name}
                    </span>
                    <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Valleys Tourism Section */}
      <ExploreCarousel />
    </div>
  );
}