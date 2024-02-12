"use client";
import Link from "next/link";
// components/Homepage2.js
import React, { useEffect, useRef } from "react";

const templates = [
  {
    imageTemplate: "/RevolutionizingHuman-MachineInteraction.jpg",
    title: "Revolutionizing Human-Machine Interaction",
    description: "Pioneering Natural Language Processing, we revolutionize human-tech interaction. Expertise spans advanced chatbot creation, fostering intelligent dialogues, and nuanced sentiment analysis. Our precise language translation transcends global barriers, fostering seamless understanding. Immerse in a world where Language Models redefine human-computer synergy, shaping a boundaryless linguistic future.",
  },
  {
    imageTemplate: "/AIVision.jpg",
    title: "Revolutionizing AI Vision",
    description: "Revolutionizing visual information processing, our AI Vision solutions, enriched by state-of-the-art techniques, decode image intricacies and elevate machines to heightened perceptual sophistication. From autonomous vehicles to medical diagnostics, our innovations redefine industries. Explore the future of visual intelligence with our cutting-edge solutions, advancing AI boundaries.",
  },
  {
    imageTemplate: "/AIAudio.jpg",
    title: "Unveiling the Future of AI Audio",
    description: "Inception marks a paradigm shift in Audio AI, seamlessly blending the symphony of sound with technology's limitless potential. Beyond conventional limits, we reshape connections to sound, offering immersive experiences, pioneering speech recognition, and audio analytics. Embrace the fusion of sound and technology, as Inception unlocks limitless possibilities in AI Audio.",
  },
  {
    imageTemplate: "/VastTextualVolumes.png",
    title: "Effortlessly Manage Vast Textual Volumes",
    description: "Navigating through extensive volumes of text, including documents, emails, FAQs, chat transcripts, records, and more, is made seamless with the assistance of HailAGI. Our capabilities extend beyond conventional boundaries, offering services such as editing, rewriting, summarizing, classifying, extracting structured data, conducting Q&A based on content, and more. Whatever your textual challenge, HailAGI is your comprehensive solution.",
  },
  {
    imageTemplate: "/FosterGenuineConversation.jpg",
    title: "Foster Genuine Conversations",
    description: "With HailAGI, unlock the ability to engage in authentic, naturalistic dialogues. HailAGI seamlessly assumes various roles within a conversation, offering detailed information on specific roles, FAQs, and adeptly responding to common questions. Experience the art of meaningful, context-aware conversations with HailAGI at your service.",
  },
  {
    imageTemplate: "/OptimizeEfficiency.png",
    title: "Optimize Operational Efficiency",
    description: "HailAGI is adept at automating diverse workflows, effortlessly executing basic instructions and logical scenarios. From formatting outputs to your exact specifications, seamlessly adhering to if-then statements, to conducting a series of intricate logical evaluations within a single prompt, HailAGI streamlines and enhances operational efficiency with precision.",
  },

]

const Homepage3 = () => {

  return (
    <div className="background-div-color">
      <h1 className='text-center text-2xl font-bold pt-4 text-black px-5'>HailAGI</h1>
      <div className="flex flex-wrap justify-around pb-4 md:flex">
        {templates.map((item, index) => (
          <div className="w-full sm:w-full md:w-3/4 lg:w-customWidth m-2 py-4 flex flex-col items-center">
            <img src={item.imageTemplate} alt="Your Image" className="w-full h-auto rounded mb-3" />
            <p className="text-center font-bold text-lg mb-2">{item.title}</p>
            <p className="text-justify">
              {item.description}
            </p>
          </div>
        )
        )
        }
      </div>
    </div>
  );
};

export default Homepage3;
