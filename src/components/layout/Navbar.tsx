import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/events", label: "Events" },
  { href: "/experience", label: "Experience" },
  { href: "/artists", label: "Artists" },
  { href: "/community", label: "Community" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-display text-4xl text-primary tracking-wider hover:scale-105 transition-transform">
            RANGREZ
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6 font-bold uppercase tracking-wider font-display text-lg">
            <Link href="/events">Join the Night</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 overflow-hidden absolute top-20 left-0 right-0 h-screen"
          >
            <nav className="flex flex-col items-center justify-start pt-12 gap-8 h-full">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display text-3xl tracking-wide transition-colors ${
                    location === link.href ? "text-primary" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="rounded-full px-8 py-6 mt-4 font-bold uppercase tracking-wider font-display text-xl w-3/4 max-w-[300px]">
                <Link href="/events">Join the Night</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
