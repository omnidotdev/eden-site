import { createFileRoute } from "@tanstack/react-router";

import {
  Background,
  CTASection,
  ConfigSection,
  FeaturesSection,
  Footer,
  Header,
  HeroSection,
  ProblemSolutionSection,
  TerminalDemo,
  UseCasesSection,
} from "@/components/landing";

/**
 * Landing page for Eden.
 */
const LandingPage = () => (
  <div className="relative">
    <Background />
    <Header />

    <div className="relative z-10 flex min-h-dvh w-full flex-col">
      <main className="flex-1">
        <HeroSection />
        <TerminalDemo />
        <ProblemSolutionSection />
        <FeaturesSection />
        <ConfigSection />
        <UseCasesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  </div>
);

export const Route = createFileRoute("/")({
  component: LandingPage,
});

export default LandingPage;
