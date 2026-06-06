import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

import bandStageImg from "@assets/WhatsApp_Image_2026-05-30_at_9.22.43_PM_1780677582923.jpeg";
import eventPosterImg from "@assets/WhatsApp_Image_2026-05-30_at_9.22.43_PM_1780673664124.jpeg";
import afterpartyImg from "@assets/IMG-20260525-WA0023.jpg_1780673664123.jpeg";

export function Events() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4">THE <span className="text-primary">EVENTS</span></h1>
          <p className="text-xl text-white/70 max-w-2xl">
            Where the music lives. Be part of the energy.
          </p>
        </motion.div>

        {/* Upcoming */}
        <section className="mb-24">
          <h2 className="font-display text-2xl md:text-3xl mb-8 border-b border-white/10 pb-4">Upcoming</h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-card hover:border-primary/50 transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto">
                <img src={bandStageImg} alt="Band performing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6 w-fit uppercase tracking-wider">
                  Pre-register
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">Rangrez Encore III</h3>
                <div className="space-y-4 mb-8 text-white/70">
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" /> Secret Location, Jamshedpur (TBA)
                  </p>
                </div>
                <p className="text-lg leading-relaxed mb-8">
                  The third chapter. Bigger sound, darker room, raw energy. Secure your spot before the public drop.
                </p>
                <Link href="/book/encore-iii">
                  <Button data-testid="button-book-event" className="h-11 rounded-full font-display text-sm tracking-wider w-full md:w-auto self-start px-7 flex items-center gap-2">
                    Secure Your Spot <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="font-display text-2xl md:text-3xl mb-8 border-b border-white/10 pb-4">Past Nights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="aspect-[3/4] relative">
                <img src={eventPosterImg} alt="Rangrez at Cirque Poster" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md text-xs font-semibold mb-4 w-fit uppercase tracking-wider">
                    Past
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">Rangrez Live Experience</h3>
                  <p className="text-white/80">Sunday, 24th May 2026 • Cirque, Jamshedpur</p>
                  <p className="text-primary text-sm mt-2 font-semibold">Sponsored by Shreyora</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="aspect-[3/4] relative">
                <img src={afterpartyImg} alt="Rangrez Afterparty" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-md text-xs font-semibold mb-4 w-fit uppercase tracking-wider">
                    Past
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">Encore Genesis</h3>
                  <p className="text-white/80">The night it all started.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export * from "./events";