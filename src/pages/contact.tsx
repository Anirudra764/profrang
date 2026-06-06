import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4">GET IN <span className="text-primary">TOUCH</span></h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Events, partnerships, or just want to say hi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl mb-6">Direct Line</h2>
              <div className="space-y-6">
                <a href="mailto:hello@rangrezencore.com" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">hello@rangrezencore.com</span>
                </a>
                <a href="https://www.instagram.com/rangrezencore/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span className="text-lg">@rangrezencore</span>
                </a>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">Jamshedpur, Jharkhand, IN</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-white/10">
              <h3 className="font-display text-xl md:text-2xl mb-2">Booking the Band</h3>
              <p className="text-white/60 mb-6">
                Looking to bring the Rangrez energy to your venue or private event? Fill out the form with your details.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Name</label>
                  <Input placeholder="Your name" className="bg-black/50 border-white/10 focus-visible:ring-primary h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email</label>
                  <Input type="email" placeholder="Your email" className="bg-black/50 border-white/10 focus-visible:ring-primary h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Inquiry Type</label>
                <Select>
                  <SelectTrigger className="bg-black/50 border-white/10 focus:ring-primary h-12">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10">
                    <SelectItem value="events">Booking / Events</SelectItem>
                    <SelectItem value="partnerships">Partnerships / Sponsorships</SelectItem>
                    <SelectItem value="press">Press / Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <Textarea 
                  placeholder="Tell us what's on your mind..." 
                  className="min-h-[150px] bg-black/50 border-white/10 focus-visible:ring-primary resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-11 rounded-full font-display text-sm tracking-wider hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export * from "./contact";