import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import afterpartyImg from "@assets/IMG-20260525-WA0023.jpg_1780673664123.jpeg";

export function Community() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4">THE <span className="text-primary">COMMUNITY</span></h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Rangrez isn't just the band on stage. It's the people in the room. The energy you bring makes the night what it is.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 mb-24 relative"
        >
          <img src={afterpartyImg} alt="Rangrez Community" className="w-full h-full object-cover" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Ambassador Program */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-2xl border border-white/10"
          >
            <h2 className="font-display text-2xl md:text-3xl mb-4">Ambassador Program</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Want to be the face of Rangrez in your college? Bring the vibe to your campus, get exclusive access to events, VIP passes, and behind-the-scenes perks.
            </p>
            <Button className="w-full h-11 rounded-full font-display text-sm tracking-wider">
              Apply Now
            </Button>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-2xl border border-white/10"
          >
            <h2 className="font-display text-2xl md:text-3xl mb-4">Stay in the Loop</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Get first access to ticket drops, secret show announcements, and exclusive community events before anyone else.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-14 bg-black/50 border-white/20 focus-visible:ring-primary text-lg"
              />
              <Button type="submit" variant="outline" className="w-full h-11 rounded-full font-display text-sm tracking-wider hover:bg-primary hover:text-white hover:border-primary transition-colors">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export * from "./community";