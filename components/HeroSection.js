"use client";
// components/HeroSection.js
import Link from "next/link";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center lg:py-48 text-[#fabf68] lg:absolute lg:bg-transparent bg-[#18191B] pt-20">
        <div className="container lg:pl-40">
          <div className="flex flex-col gap-2 fadeInUp-animation">
            {/* Apply the typing-animation class to the text elements */}
            <h1 className="text-5xl font-semibold">Give your</h1>
            <h1 className="text-5xl font-semibold">technology language</h1>
          </div>
          <div className="pt-2">
            <TypewriterComponent
              options={{
                strings: [
                  "We provide innovative solutions to your technology needs.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <button className="mt-6 bg-[#FFDAA9] text-black font-semibold rounded-lg px-6 py-3 shadow-md hover:bg-[#ffa227]">
            <Link href="#">Get Started</Link>
          </button>
        </div>
      </div>
      <div
        className="bg-[#333] text-white bg-cover bg-center h-[calc(100vh-1.20rem)]"
        style={{
          backgroundImage: "url(/hero.jpg)",
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
