import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'; // 1. Import Plugin
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const destinations = [
  {
    title: "NIT Silchar Campus",
    desc: "A breathtaking 600-acre lush green campus featuring modern infrastructure and serene lakes.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", 
  },
  {
    title: "Central Library",
    desc: "One of the largest digital libraries in Asia, serving as the academic heart of the institute.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Assam Tea Gardens",
    desc: "Experience the iconic, sprawling tea estates that define the landscape of the Barak Valley.",
    image: "https://images.unsplash.com/photo-1581404176461-8eb13e00fc96?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Bhuban Mahadev Temple",
    desc: "A historic and spiritually significant site situated on the Bhuban Hill.",
    image: "https://images.unsplash.com/photo-1621831825102-1cb66a33cb8e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Khaspur Ruins",
    desc: "Explore the ancient ruins of the Dimasa Kachari Kingdom, just a short drive from the city.",
    image: "https://images.unsplash.com/photo-1605649487212-4d4b1a43a290?auto=format&fit=crop&q=80&w=800",
  }
];

export default function ExploreCarousel() {
  // 2. Inject the WheelGesturesPlugin into the Embla hook
  const [emblaRef] = useEmblaCarousel(
    { dragFree: true, containScroll: 'trimSnaps' },
    [WheelGesturesPlugin()] 
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <div>
            <div className="inline-block px-3 py-1 mb-5 rounded-full border border-slate-800 text-slate-900 text-xs font-medium tracking-wide uppercase">
              Discover the Valley
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Merriweather', serif", color: "var(--navy)" }}>
              Explore Silchar
            </h2>
            <p className="text-slate-700 text-[15px] md:text-base max-w-2xl">
              Swipe to discover the vibrant culture, historic landmarks, and beautiful campus awaiting you at SPeCS 2027.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3. FIX: Added 'overflow-hidden' right here so the drag physics calculate correctly */}
      <div className="embla w-full overflow-hidden pl-4 sm:pl-6 lg:pl-8 pb-8 pt-2" ref={emblaRef}>
        <div className="embla__container flex cursor-grab active:cursor-grabbing">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] min-w-0 pl-4 relative group"
            >
              <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    {dest.title}
                  </h3>
                  <p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
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