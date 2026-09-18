import React from 'react';
import { Calendar, Clock, CheckCircle2, FileText, Upload } from 'lucide-react';

export default function ImportantDates() {
  const dates = [
    {
      id: 1,
      title: "Paper Submission Starts",
      date: "September 10, 2027",
      
      icon: <FileText className="w-6 h-6 text-white" />,
      color: "bg-[#0057b2]",
            isHighlight: true

    },
    {
      id: 2,
      title: "Paper Submission Deadline",
      date: "December 31, 2027",
      
      icon: <Clock className="w-6 h-6 text-white" />,
      color: "bg-[#0057b2]",
            isHighlight: true

    },
    {
      id: 3,
      title: "Paper Acceptance Notification",
      date: "January 31, 2027",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      color: "bg-[#0057b2]",
            isHighlight: true

    },
    {
      id: 4,
      title: "Author Registration",
      date: "February 10, 2027",
      icon: <Upload className="w-6 h-6 text-white" />,
      color: "bg-[#0057b2]",
            isHighlight: true

    },
    {
      id: 5,
      title: "Camera Ready Submission",
      date: "February 20, 2027",
      icon: <Upload className="w-6 h-6 text-white" />,
      color: "bg-[#0057b2]",
            isHighlight: true

    },
    {
      id: 6,
      title: "Conference Dates",
      date: "May 24 – 26, 2027",
      icon: <Calendar className="w-6 h-6 text-white" />,
      color: "bg-[#7ed957]",
      isHighlight: true
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            Important Dates
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Mark your calendars for these critical milestones leading up to IEEE SPeCS 2027.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-12 top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>

          <div className="space-y-8 md:space-y-12">
            {dates.map((item) => (
              <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group">
                
                {/* Timeline Icon */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full ${item.color} shadow-lg flex-shrink-0 mx-auto md:mx-0 border-4 border-white transition-transform group-hover:scale-110`}>
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-sm border ${item.isHighlight ? 'border-[#7ed957] ring-1 ring-[#7ed957]/50' : 'border-slate-200'} transition-all group-hover:shadow-md w-full`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase ${item.isHighlight ? 'bg-[#7ed957]/20 text-[#0057b2]' : 'bg-slate-100 text-slate-600'}`}>
                      {item.date}
                    </span>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}