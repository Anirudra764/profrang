import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Sponsors() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4">OUR <span className="text-primary">PARTNERS</span></h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            The brands that help make the music happen. We partner with visionaries who understand youth culture in Jamshedpur.
          </p>
        </motion.div>

        {/* Current Sponsor */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden mb-24"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-8 uppercase tracking-wider">
            Official Partner
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl mb-3 tracking-wider">SHREYORA</h2>
          <p className="text-lg md:text-xl text-white/80 font-light italic mb-8">"Street meets statement"</p>
          
          <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full" />
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-black border border-white/5 rounded-3xl p-12 md:p-20"
        >
          <h2 className="font-display text-3xl md:text-4xl mb-6">Partner With Us</h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Want to put your brand in front of thousands of highly engaged college students and young professionals? Let's talk about creating a moment.
          </p>
          <Button size="lg" className="h-12 px-10 rounded-full font-display text-sm tracking-widest">
            Become a Sponsor
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export * from "./sponsors";