import { motion } from "framer-motion";
import crowdRedImg from "@assets/IMG_6890_1780673664118.JPG";
import vocalistImg from "@assets/IMG_6750_1780673664112.JPG";
import performerBackImg from "@assets/IMG_6782_(1)_1780673664114.JPG";
import wristbandImg from "@assets/IMG_6668_1780673664108.JPG";
import awardImg from "@assets/IMG_6686_1780673664109.JPG";
import afterpartyImg from "@assets/IMG-20260525-WA0023.jpg_1780673664123.jpeg";

export function Experience() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4">THE <span className="text-primary">EXPERIENCE</span></h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            A night at Rangrez is more than a concert. It's the lights, the crowd, the bass, and the feeling of being exactly where you're supposed to be.
          </p>
        </motion.div>
      </div>

      {/* Full bleed image */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full h-[60vh] md:h-[80vh] my-16"
      >
        <img src={crowdRedImg} alt="Crowd vibe in red lighting" className="w-full h-full object-cover" />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center my-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">Lost in the Music</h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              When the lights go down and the first chord strikes, the room changes. The energy shifts. It's loud, it's raw, it's unfiltered.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 aspect-square rounded-2xl overflow-hidden"
          >
            <img src={vocalistImg} alt="Vocalist performance" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center my-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img src={performerBackImg} alt="Performer from behind" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-6">From the Stage</h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Looking out at a sea of people singing the words back to you. The connection between the artist and the crowd is electric.
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="my-32">
          <h2 className="font-display text-3xl md:text-4xl mb-10 text-center">The Vibe Check</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <img src={wristbandImg} alt="Wristbands" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <img src={awardImg} alt="Stage award" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-square rounded-xl overflow-hidden"
            >
              <img src={afterpartyImg} alt="Afterparty crowd" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export * from "./experience";