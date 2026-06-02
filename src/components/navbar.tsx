"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // debug log to verify handler runs in the browser console
    // keep this temporary so we can confirm the click reaches the client
    // eslint-disable-next-line no-console
    console.log("Navbar: toggleMenu clicked — currently open:", isMenuOpen);
    setIsMenuOpen((s) => !s);
  };

  return (
    <>
      <nav className="relative flex items-center justify-between px-6 md:px-12 py-6 sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="h-10 w-20 relative">
          <Link href="/" className="block h-full w-full">
            <Image src="/woman.png" alt="Thonette salon-logo" fill className="object-contain cursor-pointer" />
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-gray-800"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex gap-8 text-sm font-bold text-gray-700 uppercase tracking-tighter mini-h-screen">
          <li>
            <Link href="/#home" className="hover:text-black transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/#about" className="hover:text-black transition-colors">About Us</Link>
          </li>
          <li>
            <Link href="/#services" className="hover:text-black transition-colors">Our Services</Link>
          </li>
          <li>
            <Link href="/#packages" className="hover:text-black transition-colors">Packages</Link>
          </li>
          <li>
            <Link href="/#gallery" className="hover:text-black transition-colors">Gallery</Link>
          </li>
          <li>
            <Link href="/wig-styling" className="hover:text-black transition-colors">Wigs & Bridal</Link>
          </li>
          <li>
            <Link href="/wigs" className="hover:text-black transition-colors">Wigs Gallery</Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-black transition-colors">Cart</Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-black transition-colors">Contact Us</Link>
          </li>
        </ul>

        <Link href="/booking" className="bg-[#2D2D2D] text-white px-6 py-3 text-[10px] uppercase font-bold hover:bg-black transition-colors rounded-xl">Online Booking</Link>
        {/* Mobile menu - shown only on small screens when toggled (absolute dropdown) */}
        <div id="mobile-menu" className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-md pb-4 ${isMenuOpen ? "block" : "hidden"} z-50`}>
        <ul className="flex flex-col gap-4 text-sm font-bold text-gray-700 uppercase tracking-tighter">
          <li>
            <Link href="/#home" onClick={() => setIsMenuOpen(false)} className="block">Home</Link>
          </li>
          <li>
            <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="block">About Us</Link>
          </li>
          <li>
            <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="block">Our Services</Link>
          </li>
          <li>
            <Link href="/#packages" onClick={() => setIsMenuOpen(false)} className="block">Packages</Link>
          </li>
          <li>
            <Link href="/#gallery" onClick={() => setIsMenuOpen(false)} className="block">Gallery</Link>
          </li>
          <li>
            <Link href="/wig-styling" onClick={() => setIsMenuOpen(false)} className="block">Wigs & Bridal</Link>
          </li>
          <li>
            <Link href="/wigs" onClick={() => setIsMenuOpen(false)} className="block">Wigs Gallery</Link>
          </li>
          <li>
            <Link href="/cart" onClick={() => setIsMenuOpen(false)} className="block">Cart</Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="block">Contact Us</Link>
          </li>
          <li>
            <Link href="/booking" onClick={() => setIsMenuOpen(false)} className="mt-2 inline-block bg-[#2D2D2D] text-white px-6 py-3 text-[10px] uppercase font-bold hover:bg-black transition-colors rounded-xl">Online Booking</Link>
          </li>
        </ul>
      </div>
      </nav>
    </>
  );
}
