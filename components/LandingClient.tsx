"use client";

import { AIInitCard } from "@/components/AIInitCard";
import { AIInitModal } from "@/components/modals/AIInitModal";
import { CoreValues } from "@/components/CoreValues";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WaitlistModal } from "@/components/modals/WaitlistModal";
import { PricingSection } from "@/components/PricingSection";
import { ProofSection } from "@/components/ProofSection";
import { WaitlistInlineCard } from "@/components/WaitlistInlineCard";
import { useCallback, useState } from "react";

export function LandingClient() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistInitialEmail, setWaitlistInitialEmail] = useState("");
  const [waitlistSession, setWaitlistSession] = useState(0);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiModalSession, setAiModalSession] = useState(0);

  const openWaitlist = useCallback((email?: string) => {
    setWaitlistInitialEmail(email ?? "");
    setWaitlistSession((s) => s + 1);
    setWaitlistOpen(true);
  }, []);

  const scrollToDemo = useCallback(() => {
    document.getElementById("ban-demo")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openAiModal = useCallback(() => {
    setAiModalSession((v) => v + 1);
    setAiModalOpen(true);
  }, []);

  return (
    <>
      <Header onWaitlistClick={() => openWaitlist()} />
      <main className="flex-1 pt-16">
        <Hero onDemoClick={scrollToDemo} onTestClick={openAiModal} />
        <WaitlistInlineCard onContinue={(email) => openWaitlist(email)} />
        <CoreValues />
        <ProofSection />
        <AIInitCard onStartTest={openAiModal} />
        <PricingSection onRegister={() => openWaitlist()} />
        <Footer />
      </main>

      <WaitlistModal
        key={waitlistSession}
        open={waitlistOpen}
        onOpenChange={setWaitlistOpen}
        initialEmail={waitlistInitialEmail}
      />
      <AIInitModal key={aiModalSession} open={aiModalOpen} onOpenChange={setAiModalOpen} />
    </>
  );
}
