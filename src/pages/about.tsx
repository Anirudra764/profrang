import { motion } from "framer-motion";
import groupPhoto2Img from "@assets/IMG_6957_1780673664121.JPG";

export function About() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4">THE <span className="text-primary">ROOTS</span></h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 mb-24 max-w-5xl mx-auto"
        >
          <img src={groupPhoto2Img} alt="Rangrez Team" className="w-full h-full object-cover" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10 text-base md:text-lg text-white/80 leading-relaxed font-light">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Rangrez Encore was born out of a simple realization: Jamshedpur needed a pulse. 
              Not just another venue playing background music, but a real, raw, live music culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              We are a collective of musicians, creators, and believers building something from the ground up in our hometown. 
              We blend genres, break rules, and focus on the one thing that actually matters: <strong className="text-white font-medium">the feeling.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              From small acoustic sets to full-scale concert productions, the mission remains the same. 
              We want to give the youth of Jamshedpur a night they'll remember. A place to drop the pretense and just feel the music.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-white/10 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-widest">SOUL. VIBE. ENERGY.</h2>
            <p className="text-primary font-medium">Made in Jamshedpur, Jharkhand, IN.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export * from "./about";