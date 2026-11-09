import React from 'react';
import { ExternalLink, FileText, Info } from 'lucide-react';

export default function PaperSubmission() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Paper Submission
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Submit your original research papers through our official conference management portal.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative">
          
          {/* Top Green Accent Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#7ed957]"></div>

          <div className="p-8 md:p-12 text-center">
            
            <FileText className="w-16 h-16 text-[#0057b2] mx-auto mb-6" />
            
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Microsoft CMT Portal
            </h2>
            
            <p className="text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              All paper submissions for IEEE SPeCS 2027 must be submitted electronically via the Microsoft CMT platform. Please ensure your manuscript strictly follows the IEEE template guidelines before uploading your document.
            </p>

            <a 
              href="https://cmt3.research.microsoft.com" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0057b2] text-white font-bold uppercase tracking-wider rounded-xl hover:bg-[#004185] transition-all shadow-md hover:shadow-lg active:scale-[0.98] w-full sm:w-auto"
            >
              Go to Submission Portal <ExternalLink className="w-5 h-5 text-[#7ed957]" />
            </a>
          </div>

          {/* Microsoft Acknowledgment Footer */}
          <div className="bg-slate-50 border-t border-slate-200 p-6 md:p-8">
            <div className="flex items-start gap-4 max-w-3xl mx-auto">
              <Info className="w-6 h-6 text-[#0057b2] shrink-0 mt-0.5" />
              <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}