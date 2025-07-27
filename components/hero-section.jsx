"use client";
import { PiGithubLogoFill, PiLinkedinLogoFill, PiXLogoFill, PiEnvelopeSimpleFill } from "react-icons/pi";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Avatar */}
        <div className="relative mx-auto mb-8">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto">
            <div
              className="w-full h-full rounded-full border overflow-hidden relative group"
              style={{
                borderColor: "oklch(0.2600 0 0)",
                backgroundColor: "oklch(0.1400 0 0)",
              }}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Alex Rodriguez
        </h1>

        {/* Job title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal mb-6">
          {typedText}
          <span className="animate-pulse ml-1">|</span>
        </h2>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg lg:text-xl mb-10 leading-relaxed px-4 font-normal"
          style={{ color: "oklch(0.7200 0 0)" }}
        >
          Building scalable web solutions with passion and precision
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { Icon: PiGithubLogoFill, href: "https://github.com", label: "GitHub" },
            { Icon: PiLinkedinLogoFill, href: "https://linkedin.com", label: "LinkedIn" },
            { Icon: PiXLogoFill, href: "https://twitter.com", label: "Twitter" },
            { Icon: PiEnvelopeSimpleFill, href: "mailto:alex@example.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 border rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <a href="#portfolio">
            <button className="px-6 py-3 font-medium rounded-md transition-colors duration-200 text-sm sm:text-base">
              View My Work
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;