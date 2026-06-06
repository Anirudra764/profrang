import jsPDF from "jspdf";

export interface TicketData {
  bookingId: string;
  name: string;
  email: string;
  phone: string;
  tickets: number;
  ticketType: string;
  eventName: string;
  eventDate: string;
  venue: string;
  totalAmount: number;
  bookedAt: string;
}

export function generateTicketPDF(data: TicketData): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();

  const toHex = (h: number, s: number, l: number): [number, number, number] => {
    s /= 100; l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color);
    };
    return [f(0), f(8), f(4)];
  };

  const black: [number, number, number] = [10, 10, 10];
  const red: [number, number, number] = [230, 0, 0];
  const white: [number, number, number] = [255, 255, 255];
  const lightGray: [number, number, number] = [200, 200, 200];
  const darkGray: [number, number, number] = [30, 30, 30];

  doc.setFillColor(...black);
  doc.rect(0, 0, w, 297, "F");

  doc.setFillColor(...red);
  doc.rect(0, 0, w, 48, "F");

  doc.setTextColor(...white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(32);
  doc.text("RANGREZ", w / 2, 20, { align: "center" });

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...white);
  doc.text("SOUL  \u2022  VIBE  \u2022  ENERGY", w / 2, 30, { align: "center" });

  doc.setFontSize(9);
  doc.setTextColor(255, 200, 200);
  doc.text("OFFICIAL EVENT TICKET", w / 2, 40, { align: "center" });

  doc.setFillColor(...darkGray);
  doc.roundedRect(14, 56, w - 28, 54, 4, 4, "F");

  doc.setTextColor(...red);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(data.eventName.toUpperCase(), w / 2, 72, { align: "center" });

  doc.setTextColor(...lightGray);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(data.eventDate, w / 2, 82, { align: "center" });
  doc.text(data.venue, w / 2, 90, { align: "center" });

  doc.setTextColor(...red);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(`${data.tickets} x ${data.ticketType}`, w / 2, 100, { align: "center" });

  const infoY = 122;
  const col1 = 20;
  const col2 = w / 2 + 4;
  const rowH = 14;

  const fields: Array<[string, string, number, number]> = [
    ["ATTENDEE", data.name, col1, infoY],
    ["EMAIL", data.email, col2, infoY],
    ["PHONE", data.phone, col1, infoY + rowH],
    ["TICKETS", `${data.tickets} x ${data.ticketType}`, col2, infoY + rowH],
    ["BOOKING DATE", data.bookedAt, col1, infoY + rowH * 2],
    ["BOOKING ID", data.bookingId, col2, infoY + rowH * 2],
  ];

  fields.forEach(([label, value, x, y]) => {
    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...red);
    doc.text(label, x, y);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...white);
    const maxWidth = w / 2 - 24;
    doc.text(value, x, y + 6, { maxWidth });
  });

  if (data.totalAmount > 0) {
    const totalY = infoY + rowH * 3 + 6;
    doc.setFillColor(...red);
    doc.roundedRect(14, totalY, w - 28, 14, 3, 3, "F");
    doc.setTextColor(...white);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(`TOTAL AMOUNT: \u20B9${data.totalAmount}`, w / 2, totalY + 9, { align: "center" });
  }

  const cutY = 190;
  doc.setDrawColor(...red);
  doc.setLineDashPattern([3, 3], 0);
  doc.setLineWidth(0.4);
  doc.line(14, cutY, w - 14, cutY);
  doc.setLineDashPattern([], 0);

  doc.setTextColor(80, 80, 80);
  doc.setFontSize(7);
  doc.text("CUT HERE", w / 2, cutY - 2, { align: "center" });

  doc.setFillColor(...darkGray);
  doc.roundedRect(14, cutY + 6, w - 28, 24, 3, 3, "F");

  doc.setTextColor(...red);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("ENTRY PASS", col1 + 6, cutY + 18);

  doc.setTextColor(...white);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(data.bookingId, col1 + 6, cutY + 25);

  doc.setTextColor(...lightGray);
  doc.setFontSize(8);
  doc.text(data.name, w - 20, cutY + 15, { align: "right" });
  doc.text(`${data.tickets} ticket(s)`, w - 20, cutY + 22, { align: "right" });

  const notesY = cutY + 40;
  doc.setTextColor(100, 100, 100);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("IMPORTANT NOTES", 14, notesY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  const notes = [
    "1. Present this ticket (printed or digital) at the venue entrance.",
    "2. This ticket is non-transferable and valid for the named attendee only.",
    "3. Doors open 30 minutes before the event. Please arrive on time.",
    "4. For support, contact us on Instagram: @rangrezencore",
    "5. Rangrez reserves the right to deny entry for misconduct.",
  ];
  notes.forEach((note, i) => {
    doc.text(note, 14, notesY + 8 + i * 6);
  });

  doc.setFillColor(...red);
  doc.rect(0, 280, w, 17, "F");
  doc.setTextColor(...white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("RANGREZ ENCORE  \u2022  JAMSHEDPUR, JHARKHAND", w / 2, 287, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text("instagram.com/rangrezencore", w / 2, 293, { align: "center" });

  const safeEventName = data.eventName.replace(/\s+/g, "_");
  doc.save(`Rangrez_Ticket_${safeEventName}_${data.bookingId}.pdf`);
}
