// pages/index.js
import HeroSection from "@/components/HeroSection";
import Homepage3 from "@/components/HeroSection3";
import Homepage4 from "@/components/HeroSection4";
import Homepage2 from "@/components/HomePage2";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className=" border-[#18191B] border-4"></div>
      <Homepage2 />
      <div className=" border-[#18191B] border-4"></div>
      <Homepage3 />
      <div className=" border-[#18191B] border-4"></div>
      <Homepage4 />
    </div>
  );
};

export default Home;
