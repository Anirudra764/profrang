import { Link } from "wouter";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-5xl text-primary tracking-wider">
                RANGREZ
              </span>
            </Link>
            <p className="text-white/60 text-lg max-w-md mb-8">
              We don't just play music, we create feelings. The one night everyone talks about on Monday.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/rangrezencore/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:hello@rangrezencore.com"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl tracking-wide mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/events" className="text-white/60 hover:text-primary transition-colors">Events</Link>
              </li>
              <li>
                <Link href="/experience" className="text-white/60 hover:text-primary transition-colors">Experience</Link>
              </li>
              <li>
                <Link href="/artists" className="text-white/60 hover:text-primary transition-colors">Artists</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-primary transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl tracking-wide mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="shrink-0 mt-1 text-primary" size={20} />
                <span>Jamshedpur,<br />Jharkhand, IN</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="shrink-0 text-primary" size={20} />
                <span>hello@rangrezencore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Rangrez Encore. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <span className="hover:text-white/80 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/80 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
