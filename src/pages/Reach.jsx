import React from 'react';
import { Plane, Train, Bus, MapPin, Navigation } from 'lucide-react';

export default function Reach() {
  const travelModes = [
    {
      icon: <Plane className="w-8 h-8 text-[#0057b2]" />,
      title: "By Air",
      description: "The nearest airport is Silchar Airport (IXS) at Kumbhirgram, located about 35 km from the NIT Silchar campus. There are regular daily flights connecting Silchar to Kolkata, Guwahati, and Delhi. Pre-paid taxis and cabs are readily available at the airport to reach the campus (travel time: approx. 1 hour).",
      highlight: "Silchar Airport (IXS) - 35 km away"
    },
    {
      icon: <Train className="w-8 h-8 text-[#0057b2]" />,
      title: "By Train",
      description: "Silchar Railway Station (SCL) is approximately 10 km from the campus. It is well-connected to major cities including Guwahati, Kolkata, New Delhi, and Agartala. From the station, you can easily hire an auto-rickshaw or a taxi directly to the NIT Silchar campus.",
      highlight: "Silchar Railway Station (SCL) - 10 km away"
    },
   
    {
      icon: <Navigation className="w-8 h-8 text-[#0057b2]" />,
      title: "Local Commute",
      description: "Once in Silchar town, the most convenient way to reach the campus is by local taxi. Ensure you ask for 'NIT Campus' or 'REC' (the former name of the institute), as locals are very familiar with both names.",
      highlight: "Ask for 'NIT Campus' or 'REC'"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Page Header */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-[#0057b2] mb-5 tracking-tight">
            How to Reach
          </h1>
          <div className="w-24 h-1.5 bg-[#7ed957] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            National Institute of Technology (NIT) Silchar is well-connected by air and train. Plan your journey to the conference with these details.
          </p>
        </div>

        {/* Travel Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {travelModes.map((mode, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-slate-50 rounded-xl group-hover:bg-[#0057b2]/10 transition-colors">
                  {mode.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {mode.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium mb-6 flex-grow">
                {mode.description}
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#7ed957] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#0057b2]" />
                  {mode.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Map / Address Section */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col lg:flex-row">
          
          {/* Address Details */}
          <div className="p-8 md:p-12 lg:w-1/3 bg-[#0057b2] text-white flex flex-col justify-center">
            <h3 className="font-serif text-3xl font-bold mb-6">Conference Venue</h3>
            <div className="space-y-4 font-medium text-white/90 leading-relaxed">
              <p>
                <strong>National Institute of Technology Silchar</strong><br />
                (An Institute of National Importance)<br />
                Cachar, Assam, India - 788010
              </p>
              <div className="w-12 h-1 bg-[#7ed957] my-6 rounded-full"></div>
             
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:w-2/3 h-64 sm:h-96 lg:h-auto min-h-[400px]">
            <iframe 
              title="NIT Silchar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14470.970597334339!2d92.8183188544485!3d24.757714841968846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}