"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

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
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Reviews",
          id: "/reviews",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Selva Plastic Surgery Clinic"
    />
  </div>

  <div id="reviews-all" data-section="reviews-all">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "r1",
          name: "Arjun",
          role: "Patient",
          company: "Chennai",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104578.jpg",
        },
        {
          id: "r2",
          name: "Divya",
          role: "Patient",
          company: "Chennai",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/celebration-deity-navratri_23-2151220048.jpg",
        },
        {
          id: "r3",
          name: "Karthik",
          role: "Patient",
          company: "Chennai",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bald-man-with-beard-wearing-business-clothes-glasses-smiling-cheerful-showing-pointing-with-fingers-teeth-mouth-dental-health-concept_839833-16033.jpg",
        },
        {
          id: "r4",
          name: "Sneha",
          role: "Patient",
          company: "Chennai",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-excited-woman-holding-smartphone_23-2149313451.jpg",
        },
        {
          id: "r5",
          name: "Vijay",
          role: "Patient",
          company: "Chennai",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-staff-airport-terminal_107420-85049.jpg",
        },
      ]}
      title="Patient Feedback"
      description="More stories of successful patient experiences."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      title="Common Review Queries"
      description="Everything you need to know about leaving a review and our process."
      faqs={[
        {
          id: "q1",
          title: "How to leave a review?",
          content: "You can share your story via our contact page or email.",
        },
        {
          id: "q2",
          title: "Are reviews anonymous?",
          content: "We respect patient privacy; reviews can be posted anonymously.",
        },
        {
          id: "q3",
          title: "How do you verify reviews?",
          content: "Every review is verified against our appointment records.",
        },
        {
          id: "q4",
          title: "Can I request changes?",
          content: "Contact our office and we will handle any request promptly.",
        },
        {
          id: "q5",
          title: "Why leave a review?",
          content: "Your feedback helps others choose the right surgical path.",
        },
      ]}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer-main" data-section="footer-main">
      <FooterBase
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Use",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Selva Plastic Surgery Clinic"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
