"use client";

import { useState } from "react";
import Header from "./Header";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary">
      <Header />

      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="https://embryologytraining.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-new.04afd306.webp&w=1200&q=75"
              alt="SEART Logo"
              className="h-12 w-auto"
            />
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-black">
            <li><a href="/about">About</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/infrastructure">Infrastructure</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/happenings">Happenings</a></li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="lg:hidden flex flex-col gap-4 py-4 text-black font-medium">
            <li><a href="/about">About</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/infrastructure">Infrastructure</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/happenings">Happenings</a></li>
          </ul>
        )}
      </div>
    </header>
  );
}
