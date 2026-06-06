import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";

import { Home } from "@/pages/home";
import { Events } from "@/pages/events";
import { Experience } from "@/pages/experience";
import { Artists } from "@/pages/artists";
import { Community } from "@/pages/community";
import { Sponsors } from "@/pages/sponsors";
import { About } from "@/pages/about";
import { Contact } from "@/pages/contact";
import { Booking } from "@/pages/booking";
import { TicketConfirmation } from "@/pages/ticket";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/experience" component={Experience} />
        <Route path="/artists" component={Artists} />
        <Route path="/community" component={Community} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/book/:eventId" component={Booking} />
        <Route path="/book" component={Booking} />
        <Route path="/ticket" component={TicketConfirmation} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
