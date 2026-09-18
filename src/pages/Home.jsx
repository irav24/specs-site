import { useState, useEffect } from 'react';
import { Download, ExternalLink, CalendarDays, MapPin, Building, Globe } from 'lucide-react';
import ExploreCarousel from '../components/ExploreCarousel';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const deadline = new Date('2026-12-31T00:00:00');
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
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
            IEEE Conference on <br />
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
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-[#0057b2]" /> About SPeCS
              </h3>
              <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
The IEEE Conference on Signal, Power and Computing Systems (SPeCS 2027) aims to provide a premier international forum for researchers, academicians, industry professionals, and practitioners to exchange ideas, present recent advances, and discuss emerging challenges in the areas of signal processing, power and energy systems, intelligent computing, and allied technologies. The conference seeks to foster interdisciplinary collaboration and promote interactions among academia, industry, research laboratories, and government organizations. Through keynote lectures, technical sessions, tutorials, workshops, and panel discussions, SPeCS 2027 will facilitate the dissemination of innovative research and technological developments that contribute to sustainable and intelligent engineering solutions.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-[#0057b2]" /> About NIT Silchar
              </h3>
              <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-[#7ed957]">
                <p>
                 
*National Institute of Technology Silchar (NIT Silchar), established in 1967 as a Regional Engineering College and accorded the status of an Institute of National Importance in 2002, is one of the premier technical institutions in Assam, India. Spread across a sprawling 600-acre lush green campus, enriched by numerous natural lakes, the Institute provides a vibrant academic and research environment supported by state-of-the-art infrastructure, quality technical education, and consistently strong placement records. Its strong commitment to innovation, interdisciplinary research, and academic excellence makes NIT Silchar an ideal venue for hosting an international conference of such stature*                </p>
              </div>
            </article>

            <article>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-[#0057b2]" /> About the Department
              </h3>
              <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  
The Department of Electrical Engineering at NIT Silchar is one of the leading departments of electrical engineering in the North-Eastern region of India. The department is recognized for its strong academic programs, high-quality research output, and active engagement with industry and research organizations. The department offers B.Tech., M.Tech., and PhD programmes in diverse specializations including Power and Energy Systems, Control and Automation, Power Electronics and Drives, Smart Grid Technologies, Renewable Energy Systems, and Intelligent Control. Equipped with modern laboratories and advanced computational facilities, the department provides an excellent environment for cutting-edge research and innovation. The department's dedicated faculty members, research scholars, and students actively contribute to advancements in electrical engineering and related interdisciplinary domains, making it a vibrant hub for learning, research, and technological development.
                </p>
              </div>
            </article>

            <article>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-8 pt-4 border-t border-slate-200">Publication Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-[#0057b2] hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">IEEE Xplore Scoping</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">Presented records will be routed directly to IEEE for publication indexing approvals. Manuscripts must follow the standard double-column format.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-[#7ed957] hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Extended Journals</h4>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">Authors of high-scoring presented papers will be invited to route expanded technical configurations to selected technical transaction pipelines.</p>
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
                      <span className="truncate mr-2 text-sm md:text-base">{file.name}</span>
                      <Download className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-[#7ed957] flex-shrink-0" />
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