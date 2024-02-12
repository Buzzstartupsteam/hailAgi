"use client";
// components/HeroSection.js
import Link from "next/link";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center lg:py-48 text-[#fabf68] lg:absolute lg:bg-transparent bg-[#18191B] pt-20 pb-4">
        <div className="container lg:pl-40">
          <div className="flex flex-col gap-2 fadeInUp-animation">
            {/* Apply the typing-animation class to the text elements */}
            <h1 className="text-3xl md:text-5xl lg:text-4xl font-semibold">Pioneering Ethical AI:</h1>
            <h1 className="text-3xl md:text-5xl lg:text-4xl font-semibold"> Crafting Responsible</h1>
            <h1 className="text-3xl md:text-5xl lg:text-4xl font-semibold"> Innovations for a Better Future.</h1>
          </div>
          <div className="pt-2 lg:w-1/2 w-full">
            <TypewriterComponent className="w-full "
              options={{
                strings: [
                  "Advancing AI research and development with a focus on responsible practices, ensuring that the benefits of artificial intelligence are equitably distributed across diverse communities",
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
        className="hidden lg:block bg-[#333] text-white bg-cover bg-center h-[calc(100vh-1.20rem)]"
        style={{
          backgroundImage: "url(/hero.jpg)",
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
