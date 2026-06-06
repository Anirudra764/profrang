import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { generateTicketPDF, TicketData } from "@/lib/ticketPdf";

export function TicketConfirmation() {
  const [location] = useLocation();
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const searchStr = window.location.search;
    const params = new URLSearchParams(searchStr);
    const raw = params.get("data");
    if (raw) {
      try {
        setTicket(JSON.parse(decodeURIComponent(raw)));
      } catch {
        setTicket(null);
      }
    }
  }, [location]);

  function handleDownload() {
    if (!ticket) return;
    generateTicketPDF(ticket);
    setDownloaded(true);
  }

  if (!ticket) {
    return (
      <div className="pt-32 pb-32 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/40 text-lg mb-6">No booking found.</p>
        <Link href="/events">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Back to Events
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 min-h-screen">
      <div className="container mx-auto px-4 max-w-xl">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-6"
          >
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <h1 className="font-display text-3xl md:text-4xl text-white mb-2">YOU'RE IN.</h1>
          <p className="text-white/50 text-base">Booking confirmed. Download your ticket below.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="bg-primary px-6 py-5">
            <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">Event</p>
            <h2 className="font-display text-3xl text-white mt-1">{ticket.eventName}</h2>
            <p className="text-white/80 text-sm mt-1">{ticket.eventDate}</p>
            <p className="text-white/80 text-sm">{ticket.venue}</p>
          </div>

          <div className="p-6 space-y-4">
            <Row label="Booking ID" value={ticket.bookingId} highlight />
            <Row label="Name" value={ticket.name} />
            <Row label="Email" value={ticket.email} />
            <Row label="Phone" value={ticket.phone} />
            <Row label="Ticket Type" value={ticket.ticketType} />
            <Row label="Quantity" value={`${ticket.tickets} ticket${ticket.tickets > 1 ? "s" : ""}`} />
            <Row label="Booked On" value={ticket.bookedAt} />
            {ticket.totalAmount > 0 && (
              <Row label="Total" value={`₹${ticket.totalAmount}`} highlight />
            )}
            <Row label="Payment" value="Pay at venue" />
          </div>

          <div className="border-t border-white/10 px-6 py-5 bg-black/30 space-y-3">
            <Button
              data-testid="button-download-ticket"
              onClick={handleDownload}
              className="w-full h-13 font-display text-lg tracking-widest rounded-full bg-primary hover:bg-primary/90 text-white transition-all"
            >
              {downloaded ? "DOWNLOAD AGAIN" : "DOWNLOAD PDF TICKET"}
            </Button>
            {downloaded && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-white/40 text-xs"
              >
                Ticket saved to your downloads. Show it at the venue entrance.
              </motion.p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white/5 border border-white/10 rounded-xl p-5 text-sm text-white/50 space-y-2"
        >
          <p className="text-white/70 font-semibold text-xs uppercase tracking-widest mb-3">What's next?</p>
          <p>Present this ticket (printed or on your phone) at the venue entrance.</p>
          <p>Follow <a href="https://www.instagram.com/rangrezencore/" target="_blank" rel="noreferrer" className="text-primary hover:underline">@rangrezencore</a> for event updates and venue details.</p>
          <p>Arrive at least 30 minutes before the event starts.</p>
        </motion.div>

        <div className="mt-8 text-center">
          <Link href="/events">
            <span className="text-white/30 hover:text-white/60 text-sm transition-colors cursor-pointer">
              &larr; Back to Events
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-white/40 text-xs uppercase tracking-widest shrink-0 mt-0.5">{label}</span>
      <span className={`text-right text-sm font-medium ${highlight ? "text-primary font-bold" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

export * from "./ticket";
