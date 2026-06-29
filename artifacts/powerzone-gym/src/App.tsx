import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Preloader } from '@/components/Preloader';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { TrustBar } from '@/components/TrustBar';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhySection } from '@/components/WhySection';
import { TransformationsSection } from '@/components/TransformationsSection';
import { PopularTimesSection } from '@/components/PopularTimesSection';
import { MembershipSection } from '@/components/MembershipSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CtaBanner } from '@/components/CtaBanner';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <TransformationsSection />
      <PopularTimesSection />
      <MembershipSection />
      <TestimonialsSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={() => <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center text-white font-heading text-4xl">404 NOT FOUND</div>} />
    </Switch>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
        <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.7s ease-in-out' }}>
          <Router />
        </div>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
