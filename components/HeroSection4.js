"use client";
import Image from "next/image";
import Link from "next/link";
// components/Homepage2.js
import React, { useEffect, useRef } from "react";

const Homepage4 = () => {

  return (
    <div className="background-div-color">
      <h1 className='text-center text-2xl font-bold mb-4 pt-4 text-black px-5'>Our Research</h1>
      <div className="mx-auto lg:w-3/4 sm:w-90 sm:p-4">
        <div className="flex flex-wrap mb-8">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-12 pr-0 lg:pr-4 rounded-md mx-4 sm:mx-0">
            <img src="/AdvancingAISafetyandReliability.jpg" alt="Your Image" className="w-full h-auto rounded" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-4 mb-8 lg:mb-0  mx-4 sm:mx-0">
            <div>
              <h3 className="text-2xl font-bold mb-2 lg:mb-4">Advancing AI Safety and Reliability</h3>
              <p>
                Our research is dedicated to developing secure AI systems and deploying them with unwavering reliability. By focusing on large-scale AI systems at the forefront of technology, where novel challenges are likely to emerge, we gain insights into their safety properties. Leveraging these insights, we engineer models that are not only safer and more reliable but also highly controllable. The culmination of our efforts is manifested in externally deployed systems, such as HailAGI.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mb-8">
          <div className="w-full lg:w-1/2 lg:pr-4 mb-8 lg:mb-0  mx-4 sm:mx-0">
            <div>
              <h3 className="text-2xl font-bold mb-2 lg:mb-4">Crafting a Beneficial and Safe Assistant through Reinforcement Learning from Human Feedback</h3>
              <p>
              We employ cutting-edge techniques, including preference modeling and reinforcement learning from human feedback (RLHF), to fine-tune language models. Our goal is to create assistants that are not only helpful but also harmless. This alignment training significantly enhances performance across a spectrum of Natural Language Processing (NLP) evaluations. Importantly, it seamlessly integrates with specialized skill training, such as python coding and summarization, ensuring versatility in our AI models
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-4 lg:mb-12 pr-0 lg:pl-4 rounded-md mx-4 sm:mx-0">
            <img src="/CraftingABeneficial.jpg" alt="Your Image" className="w-full h-auto rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage4;
