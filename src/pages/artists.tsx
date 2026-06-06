import { motion } from "framer-motion";
import bandPosterImg from "@assets/WhatsApp_Image_2026-05-30_at_9.22.44_PM_1780673664127.jpeg";
import vishnuPosterImg from "@assets/WhatsApp_Image_2026-05-30_at_9.22.46_PM_1780673664130.jpeg";
import vaanandPosterImg from "@assets/WhatsApp_Image_2026-05-30_at_9.22.44_PM_(1)_1780673664126.jpeg";
import dhawalPosterImg from "@assets/WhatsApp_Image_2026-05-30_at_9.22.45_PM_1780673664129.jpeg";
import yashPosterImg from "@assets/WhatsApp_Image_2026-05-30_at_9.22.45_PM_(1)_1780673664128.jpeg";
import guitaristImg from "@assets/IMG_6810_1780673664115.JPG";
import groupPhotoImg from "@assets/IMG_6956_1780673664120.JPG";

export function Artists() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4">THE <span className="text-primary">ARTISTS</span></h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            The faces behind the sound. 
          </p>
        </motion.div>

        {/* Main Band Poster */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto mb-32 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img src={bandPosterImg} alt="Rangrez Band Lineup" className="w-full h-auto" />
        </motion.div>

        {/* Band Members Grid */}
        <h2 className="font-display text-3xl md:text-4xl mb-10 text-center">The Lineup</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { img: vishnuPosterImg, name: "VISHNU", role: "Lead Guitar" },
            { img: vaanandPosterImg, name: "V.AANAND", role: "Tabla" },
            { img: dhawalPosterImg, name: "DHAWAL", role: "Drums" },
            { img: yashPosterImg, name: "YASH", role: "Flute / Percussion" },
          ].map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/10">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-white/60 font-medium tracking-wide uppercase text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Members Text mention since we don't have individual posters for all */}
        <div className="text-center mb-32">
          <p className="text-xl text-white/70 font-medium">
            Featuring <strong className="text-white">Aadarsh</strong> on Vocals & <strong className="text-white">Anubhav</strong> on Bass Guitar
          </p>
        </div>

        {/* Stage Shot */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden relative"
        >
          <img src={groupPhotoImg} alt="Band group photo on stage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-12">
            <h2 className="font-display text-4xl md:text-5xl text-white drop-shadow-lg">RANGREZ</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export * from "./artists";