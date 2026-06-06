import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

import crowdRedImg from "@assets/IMG_6890_1780673664118.JPG";
import vocalistImg from "@assets/IMG_6750_1780673664112.JPG";
import afterpartyImg from "@assets/IMG-20260525-WA0023.jpg_1780673664123.jpeg";
import bandStageImg from "@assets/WhatsApp_Image_2026-05-30_at_9.22.43_PM_1780677582923.jpeg";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-end justify-center overflow-hidden pb-16 sm:pb-20 md:items-center md:pb-0">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          {/* Strong top gradient so navbar stays fully readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
          {/* Subtle side vignettes */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)] z-10" />
          <img
            src={crowdRedImg}
            alt="Rangrez Concert Crowd in Red Lighting"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container relative z-20 px-5 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Fluid hero type — comfortable at every screen size */}
            <h1
              className="font-display leading-none tracking-wide mb-6 drop-shadow-2xl"
              style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)" }}
            >
              <span className="block text-primary">SOUL.</span>
              <span className="block text-white">VIBE.</span>
              <span className="block text-white/80">ENERGY.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <p
              className="text-white/75 font-light mb-8 tracking-wide"
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)" }}
            >
              We don't just play music, we create feelings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 sm:h-14 px-7 sm:px-10 rounded-full font-display tracking-widest w-full sm:w-auto"
                style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}
              >
                <Link href="/events">Be Part of the Vibe</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 sm:h-14 px-7 sm:px-10 rounded-full font-display tracking-widest bg-white/10 hover:bg-white/20 border-white/25 w-full sm:w-auto backdrop-blur-sm"
                style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}
              >
                <Link href="/experience">
                  <PlayCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Watch Experience
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-primary text-primary-foreground py-8 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <span className="font-display text-4xl block mb-1">500+</span>
              <span className="text-sm uppercase tracking-widest font-semibold opacity-90">People</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30" />
            <div>
              <span className="font-display text-4xl block mb-1">1</span>
              <span className="text-sm uppercase tracking-widest font-semibold opacity-90">Unforgettable Night</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30" />
            <div>
              <span className="font-display text-4xl block mb-1">JAMSHEDPUR</span>
              <span className="text-sm uppercase tracking-widest font-semibold opacity-90">The Roots</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-white">The one night <span className="text-primary">everyone talks about</span> on Monday.</h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                The feeling of being in a dark venue where the stage lights cut through smoke, the bass hits your chest, and you forget everything else. Premium but not pretentious. Exclusive but welcoming.
              </p>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Like the first night you ever went to a real concert and realized music could do that to you. This is Rangrez.
              </p>
              <Button asChild variant="link" className="text-primary p-0 h-auto font-display text-lg tracking-wide hover:no-underline hover:text-white transition-colors group">
                <Link href="/about" className="flex items-center">
                  Our Story <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10"
              >
                <img src={vocalistImg} alt="Vocalist on stage" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-lg overflow-hidden border-4 border-black shadow-2xl hidden md:block"
              >
                <img src={afterpartyImg} alt="Crowd vibe" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event Teaser */}
      <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-2">Next Show</h2>
              <p className="text-white/60 text-lg">Secure your spot before it's gone.</p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto">
                <img src={bandStageImg} alt="Band performing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6 w-fit uppercase tracking-wider">
                  Upcoming
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">Rangrez Encore III</h3>
                <div className="space-y-4 mb-8 text-white/70">
                  <p className="flex items-center gap-3">
                    <span className="w-5 text-center text-primary">📍</span> Secret Venue, Jamshedpur (TBA)
                  </p>
                </div>
                <p className="text-lg leading-relaxed mb-8">
                  The third chapter. Bigger sound, darker room, raw energy. Pre-register now to get the drop on tickets before they go public.
                </p>
                <Link href="/book/encore-iii">
                  <Button data-testid="button-home-book" className="h-11 rounded-full font-display text-sm tracking-wider w-full md:w-auto self-start px-7 flex items-center gap-2">
                    Secure Your Spot <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative text-center px-4">
        <div className="container max-w-3xl mx-auto relative z-10">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Feel the Soul.<br/><span className="text-primary">Live the Vibe.</span></h2>
          <p className="text-xl text-white/70 mb-10">
            Join the community of music lovers in Jamshedpur. Don't miss out on the next unforgettable night.
          </p>
          <Button asChild size="lg" className="h-12 px-10 rounded-full font-display text-base tracking-widest">
            <Link href="/community">Join the Community</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
