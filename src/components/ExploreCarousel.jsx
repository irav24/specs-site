import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'; 
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const destinations = [
  {
    title: "NIT Silchar Campus",
    desc: "A breathtaking 600-acre lush green campus featuring modern infrastructure and serene lakes.",
    image: "/nits.jpeg", // Update with your actual filename in the public folder
  },
  {
    title: "Central Library",
    desc: "One of the largest digital libraries in Asia, serving as the academic heart of the institute.",
    image: "/library.jpg", // Update with your actual filename in the public folder
  },
  {
    title: "Assam Tea Gardens",
    desc: "Experience the iconic, sprawling tea estates that define the landscape of the Barak Valley.",
    image: "/teag.jpeg", // Update with your actual filename in the public folder
  },
  {
    title: "Kachakanti Temple",
    desc: "Kachakanti Mandir in Silchar is a Hindu temple dedicated to the Dimasa Kachari Mother Goddess “Kachakanti”. It is one of the oldest temples of Cachar district.",
    image: "/kachakanti.jpeg", // Update with your actual filename in the public folder
  },
  {
    title: "Khaspur Ruins",
    desc: "Explore the ancient ruins of the Dimasa Kachari Kingdom, just a short drive from the city.",
    image: "/khaspur.jpeg", // Update with your actual filename in the public folder
  }
];

export default function ExploreCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { dragFree: true, containScroll: 'trimSnaps' },
    [WheelGesturesPlugin()]
  );

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <div>
            {/* Styled with IEEE Blue & Lime */}
            <div className="inline-block px-3 py-1 mb-5 rounded-full bg-[#0057b2]/5 border border-[#0057b2]/20 text-[#0057b2] text-xs font-black tracking-widest uppercase">
              Discover the Valley
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
              Explore <span className="text-[#0057b2]">Silchar</span>
            </h2>
            <p className="text-slate-600 text-[15px] md:text-base max-w-2xl font-medium">
              Swipe to discover the vibrant culture, historic landmarks, and beautiful campus awaiting you at SPeCS 2027.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="embla w-full overflow-hidden pl-4 sm:pl-6 lg:pl-8 pb-8 pt-2" ref={emblaRef}>
        <div className="embla__container flex cursor-grab active:cursor-grabbing">
          {destinations.map((dest, index) => (
            <div key={index} className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] min-w-0 pl-4 relative group">
              <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                {dest.image ? (
                  <img src={dest.image} alt={dest.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">Image Placeholder</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b5e] via-[#0057b2]/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#7ed957]" />
                    {dest.title}
                  </h3>
                  <p className="text-sm text-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-medium">
                    {dest.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}