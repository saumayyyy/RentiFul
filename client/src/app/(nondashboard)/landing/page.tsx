import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DiscoverSection from "./DiscoverSection";
import CallToActionSection from "./CallToActionSection";
import FooterSection from "./FooterSection";
import ImageGalleryComp from "@/components/ImageGalleryComp";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ImageGalleryComp/>
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Landing;
