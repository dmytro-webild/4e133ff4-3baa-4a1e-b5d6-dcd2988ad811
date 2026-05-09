"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import { MessageCircle, Sun, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "/" },
        { name: "About", id: "/about" },
        { name: "Services", id: "/services" },
        { name: "Reviews", id: "/reviews" },
        { name: "Contact", id: "/contact" }
      ]}
      brandName="Selva Plastic Surgery Clinic"
    />
  </div>

  <div id="about-bio" data-section="about-bio">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Meet Dr. Selva Seetharaman" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/nurse-preparing-consult_23-2149309930.jpg", alt: "professional plastic surgeon" }
      ]}
    />
  </div>

  <div id="about-detail" data-section="about-detail">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Patient-friendly", description: "Focus on clarity and comfort.", bentoComponent: "reveal-icon", icon: MessageCircle },
        { title: "Precision", description: "Attention to every surgical detail.", bentoComponent: "reveal-icon", icon: Target },
        { title: "Natural Results", description: "Aiming for harmonious aesthetics.", bentoComponent: "reveal-icon", icon: Sun }
      ]}
      title="Surgical Philosophy"
      description="Dr. Selva is a highly experienced surgeon known for precision, patient-centric care, and ethical outcomes."
    />
  </div>

  <div id="footer-main" data-section="footer-main">
      <FooterBase
      columns={[
        { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Contact", href: "/contact" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Use", href: "#" }] }
      ]}
      logoText="Selva Plastic Surgery Clinic"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
