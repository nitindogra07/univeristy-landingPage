"use client"

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#470415] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Embryology Training</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We provide hands-on training in assisted reproductive technology (ART) and embryology. Learn from experts and excel in your clinical and research skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
            <li><a href="/programs" className="hover:text-yellow-400 transition-colors">Programs</a></li>
            <li><a href="/research" className="hover:text-yellow-400 transition-colors">Research</a></li>
            <li><a href="/happenings" className="hover:text-yellow-400 transition-colors">Happenings</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/fellowship-clinical-art" className="hover:text-yellow-400 transition-colors">Fellowship in Clinical ART</a></li>
            <li><a href="/diploma-pg-diploma" className="hover:text-yellow-400 transition-colors">Diploma & PG Diploma</a></li>
            <li><a href="/certification-programs" className="hover:text-yellow-400 transition-colors">Certification Programs</a></li>
            <li><a href="/state-of-art-facilities" className="hover:text-yellow-400 transition-colors">State-of-Art Facilities</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-300 text-sm mb-2">
            <a href="tel:+917042009545" className="hover:text-yellow-400 transition-colors">+91 70420 09545</a>
          </p>
          <p className="text-gray-300 text-sm mb-4">
            <a href="mailto:admissions@embryologytraining.in" className="hover:text-yellow-400 transition-colors">admissions@embryologytraining.in</a>
          </p>

          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com" target="_blank" className="hover:text-yellow-400 transition-colors"><FaFacebookF /></a>
            <a href="https://www.instagram.com" target="_blank" className="hover:text-yellow-400 transition-colors"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" className="hover:text-yellow-400 transition-colors"><FaLinkedinIn /></a>
            <a href="https://wa.me/+917042009545" target="_blank" className="hover:text-yellow-400 transition-colors"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Embryology Training. All rights reserved.
      </div>
    </footer>
  );
}
