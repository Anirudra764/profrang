import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { generateTicketPDF, TicketData } from "@/lib/ticketPdf";

const EVENTS: Record<string, {
  id: string;
  name: string;
  date: string;
  venue: string;
  ticketTypes: { label: string; price: number }[];
}> = {
  "encore-iii": {
    id: "encore-iii",
    name: "Rangrez Encore III",
    date: "August 2026",
    venue: "Secret Location, Jamshedpur (TBA)",
    ticketTypes: [
      { label: "General Entry", price: 149 },
      { label: "VIP Pass", price: 269 },
    ],
  },
};

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit phone number")
    .max(15, "Phone number too long")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  college: z.string().optional(),
  ticketType: z.string().min(1, "Select a ticket type"),
  quantity: z.string().min(1, "Select quantity"),
  consent: z.boolean().refine((v) => v === true, "You must agree to the terms"),
});

type BookingForm = z.infer<typeof bookingSchema>;

function generateBookingId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "RNZ-";
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

export function Booking() {
  const params = useParams<{ eventId: string }>();
  const [, setLocation] = useLocation();
  const [submitting, setSubmitting] = useState(false);

  const eventId = params.eventId || "encore-iii";
  const event = EVENTS[eventId] || EVENTS["encore-iii"];

  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      college: "",
      ticketType: "",
      quantity: "1",
      consent: false,
    },
  });

  const selectedType = form.watch("ticketType");
  const selectedQty = parseInt(form.watch("quantity") || "1", 10);
  const ticketInfo = event.ticketTypes.find((t) => t.label === selectedType);
  const totalAmount = ticketInfo ? ticketInfo.price * selectedQty : 0;

  function onSubmit(values: BookingForm) {
    setSubmitting(true);
    const bookingId = generateBookingId();
    const bookedAt = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const ticketData: TicketData = {
      bookingId,
      name: values.name,
      email: values.email,
      phone: values.phone,
      tickets: parseInt(values.quantity, 10),
      ticketType: values.ticketType,
      eventName: event.name,
      eventDate: event.date,
      venue: event.venue,
      totalAmount,
      bookedAt,
    };

    setTimeout(() => {
      setSubmitting(false);
      const encoded = encodeURIComponent(JSON.stringify(ticketData));
      setLocation(`/ticket?data=${encoded}`);
    }, 1200);
  }

  return (
    <div className="pt-24 pb-32 min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Reserve Your Spot</span>
            <h1 className="font-display text-3xl md:text-4xl mt-2 mb-1">{event.name}</h1>
            <p className="text-white/50 text-sm">{event.date} &mdash; {event.venue}</p>
          </div>

          <div className="bg-card border border-white/10 rounded-2xl p-6 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-xs uppercase tracking-widest">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            data-testid="input-name"
                            placeholder="Your full name"
                            className="bg-black/60 border-white/20 text-white placeholder:text-white/30 h-12 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-xs uppercase tracking-widest">Email Address</FormLabel>
                        <FormControl>
                          <Input
                            data-testid="input-email"
                            type="email"
                            placeholder="you@email.com"
                            className="bg-black/60 border-white/20 text-white placeholder:text-white/30 h-12 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-xs uppercase tracking-widest">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            data-testid="input-phone"
                            type="tel"
                            placeholder="10-digit mobile number"
                            className="bg-black/60 border-white/20 text-white placeholder:text-white/30 h-12 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="college"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-xs uppercase tracking-widest">College / Workplace <span className="text-white/30 normal-case">(optional)</span></FormLabel>
                        <FormControl>
                          <Input
                            data-testid="input-college"
                            placeholder="e.g. XLRI, Tata Steel..."
                            className="bg-black/60 border-white/20 text-white placeholder:text-white/30 h-12 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="ticketType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-xs uppercase tracking-widest">Ticket Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger
                              data-testid="select-ticket-type"
                              className="bg-black/60 border-white/20 text-white h-12 focus:border-primary"
                            >
                              <SelectValue placeholder="Select ticket type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/20">
                            {event.ticketTypes.map((t) => (
                              <SelectItem key={t.label} value={t.label} className="text-white focus:bg-white/10">
                                {t.label} {t.price > 0 ? `— ₹${t.price}` : "— Free"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-xs uppercase tracking-widest">Number of Tickets</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger
                              data-testid="select-quantity"
                              className="bg-black/60 border-white/20 text-white h-12 focus:border-primary"
                            >
                              <SelectValue placeholder="How many?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-white/20">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <SelectItem key={n} value={String(n)} className="text-white focus:bg-white/10">
                                {n} {n === 1 ? "Ticket" : "Tickets"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {ticketInfo && (
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-widest">Order Summary</p>
                      <p className="text-white font-semibold mt-1">
                        {selectedQty} x {selectedType}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-xs uppercase tracking-widest">Total</p>
                      <p className="text-primary font-display text-2xl">
                        {totalAmount === 0 ? "FREE" : `₹${totalAmount}`}
                      </p>
                    </div>
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <input
                          data-testid="checkbox-consent"
                          type="checkbox"
                          id="consent"
                          checked={field.value}
                          onChange={field.onChange}
                          className="mt-1 w-4 h-4 accent-red-600 cursor-pointer"
                        />
                        <Label htmlFor="consent" className="text-white/60 text-sm leading-relaxed cursor-pointer">
                          I confirm the details above are correct and agree to Rangrez Encore's event terms. I understand that tickets are non-refundable and non-transferable.
                        </Label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  data-testid="button-book"
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 font-display text-sm tracking-widest rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-200"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Booking your spot...
                    </span>
                  ) : (
                    "SECURE MY SPOT"
                  )}
                </Button>

                <p className="text-center text-white/30 text-xs">
                  You will receive a PDF ticket instantly after booking. No payment required now — payment collected at venue.
                </p>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export * from "./booking";
