import { useState, useEffect } from 'react';
import { Download, ExternalLink, CalendarDays } from 'lucide-react';
import ExploreCarousel from '../components/ExploreCarousel';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const deadline = new Date('2026-12-15T00:00:00');
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
      
      {/* Immersive Video Background Hero */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center py-24 overflow-hidden border-b border-slate-900">
        
        {/* 1. The Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          {/* UPDATE THIS SRC TO MATCH YOUR VIDEO FILENAME IN THE PUBLIC FOLDER */}
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>

        {/* 2. The Premium Overlays (Ensures text is always readable) */}
        <div className="absolute inset-0 bg-slate-900/60 z-0 mix-blend-multiply"></div>
        

        {/* 3. The Hero Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 text-white text-xs font-mono font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ed957] animate-pulse"></span>
            May 24 – 26, 2027 • NIT Silchar, India
          </div>
          
          {/* The "Pow" Headline (White text with Lime Green Highlight) */}
          {/* The "Pow" Headline (White text with Lime Green Highlight) */}
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
  International Conference on <br />
  <span className="text-[#7ed957]">S</span>ignal,{' '}
  <span className="text-[#7ed957]">P</span>ow<span className="text-[#7ed957]">e</span>r &{' '}
  <span className="text-[#7ed957]">C</span>omputing{' '}
  <span className="text-[#7ed957]">S</span>ystems
</h1>

          
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-12 drop-shadow-md">
            The premier technical venue bridging foundational research with applied engineering paradigms.
          </p>
          
          {/* High Contrast Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://cmt3.research.microsoft.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-[#0057b2] border border-[#0057b2] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#004185] hover:border-[#004185] transition-all rounded-lg shadow-xl flex items-center justify-center gap-2">
              Submit Manuscript <ExternalLink className="w-4 h-4 text-[#7ed957]" />
            </a>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white/30 text-sm font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors rounded-lg backdrop-blur-sm">
              Registration Portal
            </button>
          </div>
        </div>
      </section>

      {/* Structural Document Layout */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-8 space-y-16">
            
            <article>
              <h3 className="font-serif text-3xl font-bold text-slate-900 mb-6">About SPeCS 2027</h3>
              <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                <p>
                  The 2027 IEEE International Conference on Signal, Power & Computing Systems (SPeCS) provides a highly structured, peer-reviewed platform for academics and industry professionals. The technical program covers advanced smart grid integration, power electronics topologies, and next-generation computing architectures.
                </p>
                <p>
                  All technical submissions undergo a rigorous blind review process conducted by the Technical Program Committee. Accepted and presented papers will be submitted for possible inclusion in the IEEE Xplore Digital Library, adhering strictly to IEEE's quality metrics.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8">Publication Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-[#0057b2]">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">IEEE Xplore Scoping</h4>
                  <p className="text-slate-600 leading-relaxed">Presented records will be routed directly to IEEE for publication indexing approvals. Manuscripts must follow the standard double-column format.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-[#7ed957]">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Extended Journals</h4>
                  <p className="text-slate-600 leading-relaxed">Authors of high-scoring presented papers will be invited to route expanded technical configurations to selected technical transaction pipelines.</p>
                </div>
              </div>
            </article>

          </div>

          {/* Right Column: Operations Desk */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Countdown Desk */}
            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0057b2] blur-3xl rounded-full opacity-50"></div>
              
              <h3 className="font-serif text-xl font-bold text-white mb-6 relative z-10 flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-[#7ed957]" />
                Submission Closes In
              </h3>
              
              <div className="grid grid-cols-4 gap-2 relative z-10 mb-6">
                {[['Days', timeLeft.days], ['Hrs', timeLeft.hours], ['Mins', timeLeft.minutes], ['Secs', timeLeft.seconds]].map(([label, value]) => (
                  <div key={label} className="bg-white/10 border border-white/20 p-2 text-center rounded-lg backdrop-blur-sm">
                    <span className="block text-xl font-black text-white tabular-nums">{value}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase block mt-1">{label}</span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 border-t border-white/20 pt-4">
                <span className="inline-block px-2 py-1 bg-[#7ed957] text-slate-900 font-bold font-mono text-[10px] uppercase tracking-widest rounded mb-3">
                  System Live
                </span>
                <p className="leading-relaxed text-sm text-slate-300 font-medium">The Microsoft CMT paper submission engine is open and accepting initial paper registrations.</p>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Official Brochure (.PDF)", url: "#" },
                  { name: "MS-Word Template (.DOCX)", url: "https://www.ieee.org" },
                  { name: "LaTeX Archive (.ZIP)", url: "https://www.ieee.org" }
                ].map((file, idx) => (
                  <li key={idx}>
                    <a href={file.url} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-[#0057b2] hover:border-[#0057b2] hover:text-white text-slate-700 font-semibold transition-all group">
                      <span>{file.name}</span>
                      <Download className="w-5 h-5 text-slate-400 group-hover:text-[#7ed957]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
      
      <ExploreCarousel />
    </div>
  );
}