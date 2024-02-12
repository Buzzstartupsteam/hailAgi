"use client";
import Link from "next/link";
// components/Homepage2.js
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Homepage2 = () => {

  return (
    <div className="background-div-color">
      <h3 className="text-center text-2xl font-bold pt-4 text-black px-5">
        Elevate Your LLM Infrastructure to New Heights
      </h3>
      <div className="flex flex-wrap justify-around px-4 pb-4 md:flex">
        <div className="w-full sm:w-full md:w-3/4 lg:w-customWidth py-4 m-2 flex flex-col items-center">
          <Image src="/FineTuning.png" height={70} width={90} alt="" className="mb-4" />
          <p className="text-center font-bold text-lg mb-2">Fine-Tuning Excellence</p>
          <p className="text-justify">
            Embark on a seamless journey with HailAGI, effortlessly uploading your data to achieve a robust endpoint.
            Streamlined processes ensure efficiency in refining your models.
          </p>
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-customWidth py-4 p-4 m-2 flex flex-col items-center">
          <Image src="/PrivacyCommitment.png" height={70} width={90} alt="" className="mb-4" />
          <p className="text-center font-bold text-lg mb-2">Privacy Commitment</p>
          <p className="text-justify">
            At HailAGI, privacy is not merely a feature but a foundational
            principle. Be assured, we prioritize the sanctity of your data, committing to its non-utilization
            to uphold your privacy standards.
          </p>
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-customWidth py-4 p-4 m-2 flex flex-col items-center">
          <Image src="/InferenceMastery.png" height={70} width={90} alt="" className="mb-4" />
          <p className="text-center font-bold text-lg mb-2">Inference Mastery</p>
          <p className="text-justify">
            HailAGI's finely-tuned models are meticulously crafted to achieve
            unparalleled performance, boasting a threefold speed enhancement over GPT-4 while
            maintaining an unwavering commitment to superior quality.
          </p>
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-customWidth py-4 p-4 m-2 flex flex-col items-center">
          <Image src="/SeamlessIntegration.png" height={70} width={90} alt="" className="mb-4" />
          <p className="text-center font-bold text-lg mb-2">Seamless Integration</p>
          <p className="text-justify">
            Effortlessly integrate your current systems with langchain, llama-index,
            and other platforms. HailAGI solutions are meticulously designed for compatibility, ensuring
            a smooth transition and harmonious operation within your existing infrastructure.
          </p>
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-customWidth py-4 p-4 m-2 flex flex-col items-center">
          <Image src="/ContinuousPreTraining.png" height={70} width={90} alt="" className="mb-4" />
          <p className="text-center font-bold text-lg mb-2">Continuous Pre-Training Empowerment</p>
          <p className="text-justify">
            Unleash the boundless potential of your Language
            Models (LLMs) with HailAGI. Seamlessly continue pre-training using domain-specific data,
            books, or company documents, providing you the capability to refine and enhance LLMs
            tailored to meet your specific needs at your fingertips.
          </p>
        </div>
        <div className="w-full sm:w-full md:w-3/4 lg:w-customWidth py-4 p-4 m-2 flex flex-col items-center">
          <Image src="/AdaptiveScaling.png" height={70} width={90} alt="" className="mb-4" />
          <p className="text-center font-bold text-lg mb-2">Adaptive Scaling</p>
          <p className="text-justify">
            HailAGI ensures effortless adjustments to meet evolving demands for your AI models, maintaining peak performance without compromise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage2;
