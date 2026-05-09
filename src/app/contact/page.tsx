"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import { Calendar, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
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

  <div id="contact-map" data-section="contact-map">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get in touch"
      title="Visit Us in Shenoy Nagar"
      description="Flat No. 1, Srijees Apartment, 8th Cross St W, B Block, Shenoy Nagar, Chennai, Tamil Nadu 600030. Call: 09962517162"
    />
  </div>

  <div id="contact-info" data-section="contact-info">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Call Now", description: "09962517162", bentoComponent: "reveal-icon", icon: Phone },
        { title: "Book Appointment", description: "Schedule your clinic visit.", bentoComponent: "reveal-icon", icon: Calendar },
        { title: "Get Directions", description: "Navigate to Shenoy Nagar.", bentoComponent: "reveal-icon", icon: MapPin }
      ]}
      title="Direct Contact"
      description="Reach out through your preferred method."
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
