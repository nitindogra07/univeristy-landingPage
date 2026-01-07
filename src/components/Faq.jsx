"use client";

import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes SEART a top choice for embryology training?",
      answer:
        "SEART is known for its comprehensive curriculum in Clinical Embryology and ART, combining strong theoretical knowledge with extensive hands-on practical training in advanced IVF labs. Its industry connections and experienced faculty prepare students for careers in reproductive healthcare. :contentReference[oaicite:1]{index=1}",
    },
    {
      question: "What kind of practical experience do students get?",
      answer:
        "Students train in real embryology and ART environments, learning techniques such as micromanipulation of gametes, IVF procedures, embryo culture, and cryopreservation under expert supervision. :contentReference[oaicite:2]{index=2}",
    },
    {
      question: "Does SEART offer internationally recognized programs?",
      answer:
        "Yes. SEART’s programs, including B.Sc., M.Sc., and diploma courses, are affiliated with a UGC-recognized university, and graduates are prepared to work in fertility clinics in India and abroad. :contentReference[oaicite:3]{index=3}",
    },
    {
      question: "Who can enroll in SEART’s embryology courses?",
      answer:
        "SEART welcomes both science and medical graduates. Programs are designed for students who want to learn embryology, reproductive science, and assisted reproductive technology. Practical training makes students job-ready for clinical roles. :contentReference[oaicite:4]{index=4}",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#20364b]">
        <div className="max-w-4xl bg-[] mx-auto grid md:grid-cols-2 gap-20 px-4 py-16 items-center">
          {/* Left Image */}
          <img
            src="https://embryologytraining.in/img/home/why-seart/why-seart-img-1.webp"
            alt="SEART Embryology Training"
            className="rounded-2xl object-cover shadow-lg"
            width = {300}
          />

          {/* FAQ Content */}
          <div>
            <p className="text-white text-sm font-medium">
              Frequently Asked Questions
            </p>
            <h1 className="text-3xl font-semibold text-white mt-1">
              Common Questions About SEART
            </h1>
            <p className="text-sm text-white mt-2 mb-6">
              Below are answers to questions aspiring embryologists often ask
              about training and careers at SEART.
            </p>

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#fbc736] py-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-white">
                    {faq.question}
                  </h3>
                  <svg
                    width="18"
                    height="18"
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-white">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
