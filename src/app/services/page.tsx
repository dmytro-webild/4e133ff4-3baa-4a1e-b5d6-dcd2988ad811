"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

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

  <div id="services-list" data-section="services-list">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "s1",
          name: "Liposuction",
          price: "Customized",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-collection-medicine-with-stethoscope_23-2148529758.jpg",
        },
        {
          id: "s2",
          name: "Rhinoplasty",
          price: "Customized",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-doctor-checking-patient-s-nose_23-2149352155.jpg",
        },
        {
          id: "s3",
          name: "Hair Transplant",
          price: "Customized",
          imageSrc: "http://img.b2bpic.net/free-photo/adult-male-having-balding-problems_23-2149152793.jpg",
        },
        {
          id: "s4",
          name: "Breast Augmentation",
          price: "Customized",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-with-measure-tape-measuring-size-patient-s-breast_1301-7531.jpg",
        },
        {
          id: "s5",
          name: "Gynecomastia",
          price: "Customized",
          imageSrc: "http://img.b2bpic.net/free-photo/man-getting-facial-massage-clinic_107420-65160.jpg",
        },
        {
          id: "s6",
          name: "Burn Reconstruction",
          price: "Customized",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-experiencing-skin-disease_23-2151159338.jpg",
        },
      ]}
      title="Comprehensive Services"
      description="Detailed surgical solutions for your needs."
    />
  </div>

  <div id="services-more" data-section="services-more">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Scar Removal",
          content: "Advanced treatments for skin refinement.",
        },
        {
          id: "f2",
          title: "Earlobe Repair",
          content: "Restorative procedures for earlobe health.",
        },
        {
          id: "f3",
          title: "Body Contouring",
          content: "Whole body aesthetic refinement.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/doctor-cleaning-face-patient-with-face-sponge_107420-65178.jpg"
      title="Additional Procedures"
      description="More ways we can help you achieve your goals."
      faqsAnimation="blur-reveal"
      mediaAnimation="blur-reveal"
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
