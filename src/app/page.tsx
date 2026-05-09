"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Activity, Award, Calendar, Shield, Smile, Sparkles, Star, User, Zap } from "lucide-react";

export default function LandingPage() {
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

  <div id="home-hero" data-section="home-hero">
      <HeroBillboardGallery
      background={{ variant: "gradient-bars" }}
      title="Expert Plastic & Reconstructive Surgery in Chennai"
      description="Trusted by 200+ patients with 5-star care and results for your transformation journey."
      buttons={[{ text: "Book Consultation", href: "/contact" }, { text: "Call Now", href: "tel:09962517162" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/empty-stomatology-orthodontist-hospital-cabinet-with-nobody-it_482257-10435.jpg", imageAlt: "medical clinic interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/border-from-potted-plant-medical-supplies_23-2147796510.jpg", imageAlt: "medical consultation room" },
        { imageSrc: "http://img.b2bpic.net/free-photo/beautiful-spacious-office-dentist_8353-9976.jpg", imageAlt: "clean operating room" }
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="home-services" data-section="home-services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Reconstructive Surgery", description: "Restoring function and aesthetic appearance with precision.", bentoComponent: "reveal-icon", icon: Shield },
        { title: "Cosmetic Surgery", description: "Enhancing natural beauty with state-of-the-art techniques.", bentoComponent: "reveal-icon", icon: Sparkles },
        { title: "Liposuction", description: "Contouring your body for a refined silhouette.", bentoComponent: "reveal-icon", icon: Zap },
        { title: "Rhinoplasty", description: "Customized nasal reshaping for balanced aesthetics.", bentoComponent: "reveal-icon", icon: User },
        { title: "Hair Transplant", description: "Advanced solutions for natural-looking hair restoration.", bentoComponent: "reveal-icon", icon: Award },
        { title: "Burn & Trauma Care", description: "Expert reconstructive support after injury or burn.", bentoComponent: "reveal-icon", icon: Activity }
      ]}
      title="Our Core Services"
      description="Comprehensive care for your reconstructive and cosmetic needs."
    />
  </div>

  <div id="home-metrics" data-section="home-metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", title: "Happy Patients", value: "230+", icon: Smile },
        { id: "m2", title: "Rating", value: "5.0", icon: Star },
        { id: "m3", title: "Certified Years", value: "15+", icon: Calendar }
      ]}
      title="Proven Excellence"
      description="Numbers reflecting our commitment to patient satisfaction."
    />
  </div>

  <div id="home-testimonials" data-section="home-testimonials">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      animationType="blur-reveal"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Meena Kumari", role: "Patient", company: "Chennai", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-woman-entertaining-herself-by-dancing_482257-110602.jpg" },
        { id: "t2", name: "Rajesh Kumar", role: "Patient", company: "Chennai", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-senior-man-listening-music_23-2149207193.jpg" },
        { id: "t3", name: "Priya Sharma", role: "Patient", company: "Chennai", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-successful-woman-with-blue-shirt_1098-3627.jpg" },
        { id: "t4", name: "Suresh Babu", role: "Patient", company: "Chennai", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/female-patient-smiling-while-looking-doctor_107420-74008.jpg" },
        { id: "t5", name: "Anjali Rao", role: "Patient", company: "Chennai", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/cheerful-manager_1098-15671.jpg" }
      ]}
      title="Patient Success Stories"
      description="What our patients say about their journey with us."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Trusted by Experts"
      description="We adhere to international standards in medical aesthetics and surgery."
      names={["Chennai Medical Association", "Plastic Surgery Council", "National Accreditation Board", "International Aesthetic Society", "Advanced Surgical Forum"]}
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
