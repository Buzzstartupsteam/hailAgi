"use client";
import Link from "next/link";
// components/Homepage2.js
import React, { useEffect, useRef } from "react";

const Homepage2 = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeInUp-animation");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" } // Adjust the rootMargin as needed to control when the animation triggers
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden relative gradient group space-x-2 ">
      <div
        ref={contentRef}
        className="lg:w-1/2 lg:ml-10 text-center lg:text-left my-10 lg:my-32 px-5"
      >
        {/* Updated classes for responsiveness */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4">
          Make your products generate or summarize text
        </h1>
        <p className="text-base md:text-lg lg:text-lg text-black">
          Our Command model can generate text quickly and accurately for a
          variety of purposes. Whether you need product descriptions, blog
          posts, or articles, Command can help you create high-quality content
          that engages your audience. You can also use Command to create
          concise, relevant, and customizable summaries of text and documents.
          This makes it a powerful tool for businesses and individuals who need
          to communicate effectively.
        </p>
        <button className="mt-6 bg-[#FFDAA9] cursor-pointer text-black font-semibold rounded-lg px-6 py-3 shadow-md hover:bg-[#ffa227]">
          <Link href={"#"}>Try Playground</Link>
        </button>
      </div>
      <div className="lg:w-1/2 relative items-center p-2">
        <div
          className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:flex lg:items-center lg:justify-center"
          style={{ pointerEvents: "none" }}
        >
          <div className="w-full max-w-lg mx-auto my-auto">
            <video
              autoPlay
              loop
              muted
              className="w-full rounded-lg"
              style={{ backgroundColor: "transparent" }}
            >
              <source src="/Q&A2.mp4" type="video/mp4" />
              {/* Add other video formats here if needed */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage2;
