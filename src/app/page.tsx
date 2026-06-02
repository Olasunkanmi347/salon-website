"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ThonetteSalon() {
  // Simple state toggle for the dynamic FAQ accordion component
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div id="home" className="font-sans text-gray-800 antialiased bg-stone-50">
      
      <div className="bg-[#1A1A1A] text-white text-center py-2 text-[10px] tracking-widest uppercase">
        Special Offer! Get 20% off on all services this month.
      </div>

      {/* Navbar moved to shared layout */}

  
      <section className="px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-gray-800 mb-6">
            Discover the New You with Thonette Salon Best Beauty Salon in Ibadan
          </h1>
          <p className="text-gray-600 mb-8 text-xl md:text-base max-w-lg">
            Step into a realm where beauty meets luxury and each detail is accomplished with accuracy and love. Located in the lively center of Ibadan.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-[#2D2D2D] text-white px-8 py-4 text-[10px] uppercase font-bold hover:bg-black transition-colors rounded-xl">
              About Us
            </button>
            <Link href="/#contact" className="bg-[#F5E6E0] text-gray-800 px-8 py-4 text-[10px] uppercase font-bold flex items-center gap-2 hover:bg-[#ebd5cc] transition-colors rounded-xl">
              <span>📞</span> Book a Call
            </Link>
          </div>
          <div className="flex gap-12 border-t border-gray-200 pt-8">
            <div>
              <p className="text-3xl font-bold">7+</p>
              <p className="text-[10px] uppercase text-gray-400 font-bold">Year experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3,000+</p>
              <p className="text-[10px] uppercase text-gray-400 font-bold">Happy customer</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-72 md:w-96 h-112.5 md:h-135 bg-gray-200 overflow-hidden shadow-2xl border-12 border-white rounded-t-full">
            <Image 
              src="/main-banner-small-image.jpg" 
              alt="Main Model" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex gap-4 h-125">
          <div className="relative w-1/2 bg-gray-300 self-end h-4/5 shadow-xl rounded-t-full overflow-hidden"> 
            <Image 
              src="/CTA-image-updated.webp" 
              alt="Salon environment feature" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="relative w-1/2 bg-gray-300 h-full shadow-lg border-4 border-white rounded-t-full overflow-hidden"> 
            <Image 
              src="/CTA-image2-updated.webp" 
              alt="Luxury facial experience" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">About Us</span>
          <h2 className="font-serif text-4xl text-gray-800 italic">Welcome To Thonette Beauty Salon</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Confidence starts with taking care of yourself, and at Thonette Salon, it is our goal to assist you in both looking and feeling great. Our wide range of beauty services includes everything from hair care to facials.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">✨</div>
              <p className="font-serif font-bold text-gray-800">Our Mission</p>
              <p className="text-sm text-gray-500">Provide luxury services accessible to every woman.</p>
            </div>
            <div className="space-y-2">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm">🌿</div>
              <p className="font-serif font-bold text-gray-800">Our Vision</p>
              <p className="text-sm text-gray-500">To be the #1 beauty destination in Ibadan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-sm uppercase tracking-widest text-gray-400 font-bold">Benefits</span>
          <h2 className="font-serif text-3xl text-gray-800 font-bold">Natural makeup for radiant skin.</h2>
          <p className="text-gray-600 text-lg">Experience the beauty of skin makeup and luminous skin through our kind, dermatologically tested methods.</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-base font-medium text-gray-700">
              <span className="text-[#D4AF37]">✓</span> Lightweight & Breathable Formulas
            </li>
            <li className="flex items-center gap-3 text-base font-medium text-gray-700">
              <span className="text-[#D4AF37]">✓</span> Hydrating, Dewy Finish
            </li>
            <li className="flex items-center gap-3 text-base font-medium text-gray-700">
              <span className="text-[#D4AF37]">✓</span> Skin-Friendly Natural Makeup
            </li>
          </ul>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 md:h-112.5">
          <Image 
            src="/gallery3.jpg" 
            alt="Natural makeup look display" 
            fill 
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-24 bg-[#2D2D2D] text-white px-6">
        <div className="text-center mb-16">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Our Services</h3>
          <h2 className="font-serif text-4xl italic">We’re committed to your happiness.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1 */}
          <div className="relative group h-112.5 overflow-hidden rounded-t-full">
            <div className="relative w-full h-full">
              <Image 
                src="/waxing.webp" 
                alt="Waxing service treatments" 
                fill 
                className="object-cover transition duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 flex items-center gap-3 shadow-xl whitespace-nowrap">
              <span className="text-[10px] font-bold uppercase tracking-widest">Waxing Services</span>
              <span className="bg-[#D4AF37] text-white h-5 w-5 rounded-full flex items-center justify-center text-[8px]">→</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group h-112.5 overflow-hidden rounded-t-full">
            <div className="relative w-full h-full">
              <Image 
                src="/nail-care-manicure-process-scaled.jpg" 
                alt="Premium nail care and manicure" 
                fill 
                className="object-cover transition duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 flex items-center gap-3 shadow-xl whitespace-nowrap">
              <span className="text-[10px] font-bold uppercase tracking-widest">Nail Care</span>
              <span className="bg-[#D4AF37] text-white h-5 w-5 rounded-full flex items-center justify-center text-[8px]">→</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group h-112.5 overflow-hidden rounded-t-full">
            <div className="relative w-full h-full">
              <Image 
                src="/gallery1.jpg" 
                alt="Soothing facial routine" 
                fill 
                className="object-cover transition duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 flex items-center gap-3 shadow-xl whitespace-nowrap">
              <span className="text-[10px] font-bold uppercase tracking-widest">Facial</span>
              <span className="bg-[#D4AF37] text-white h-5 w-5 rounded-full flex items-center justify-center text-[8px]">→</span>
            </div>
          </div>

        </div>
      </section>

      {/* Offers Section */}
      <section id="packages" className="py-24 bg-[#2D2D2D] text-white px-6">
        <div className="text-center mb-12">
          <h3 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Packages</h3>
          <h2 className="font-serif text-4xl mb-6">Choose a package that suits you</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">Simple, transparent pricing — pick a package and book an appointment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Package: Basic Glow */}
          <div className="bg-black/90 rounded-3xl p-8 shadow-xl border border-white/10">
            <h3 className="font-serif text-2xl mb-2">Basic Glow</h3>
            <p className="text-gray-300 text-sm mb-6">Quick facial & express blow-dry — perfect for a fresh look.</p>
            <p className="text-3xl font-bold mb-6">₦5,000</p>
            <ul className="text-sm text-gray-400 mb-6 space-y-2">
              <li>• 30-minute express facial</li>
              <li>• Quick blow-dry/style</li>
            </ul>
            <Link href="/booking?package=Basic%20Glow" className="w-full inline-block text-center bg-[#D4AF37] text-black font-bold py-3 rounded-xl">Book Now</Link>
          </div>

          {/* Package: Signature Pamper */}
          <div className="bg-black/90 rounded-3xl p-8 shadow-xl border border-white/10">
            <h3 className="font-serif text-2xl mb-2">Signature Pamper</h3>
            <p className="text-gray-300 text-sm mb-6">Full facial, hair treatment and manicure for an indulgent experience.</p>
            <p className="text-3xl font-bold mb-6">₦15,000</p>
            <ul className="text-sm text-gray-400 mb-6 space-y-2">
              <li>• 60-minute facial</li>
              <li>• Hair treatment + blow-dry</li>
              <li>• Express manicure</li>
            </ul>
            <Link href="/booking?package=Signature%20Pamper" className="w-full inline-block text-center bg-[#D4AF37] text-black font-bold py-3 rounded-xl">Book Now</Link>
          </div>

          {/* Package: Bridal Luxe */}
          <div className="bg-black/90 rounded-3xl p-8 shadow-xl border border-white/10">
            <h3 className="font-serif text-2xl mb-2">Bridal Luxe</h3>
            <p className="text-gray-300 text-sm mb-6">Full bridal package including makeup trial and day-of styling.</p>
            <p className="text-3xl font-bold mb-6">₦50,000</p>
            <ul className="text-sm text-gray-400 mb-6 space-y-2">
              <li>• Full makeup trial</li>
              <li>• Bridal day-of styling & touch-ups</li>
              <li>• Priority scheduling</li>
            </ul>
            <Link href="/booking?package=Bridal%20Luxe" className="w-full inline-block text-center bg-[#D4AF37] text-black font-bold py-3 rounded-xl">Book Now</Link>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section id="gallery" className="py-20 bg-white px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Expert Team</span>
            <h2 className="font-serif text-4xl text-gray-800 italic leading-tight">Expert skin analysis. Customized facials.</h2>
            <p className="text-gray-600 text-sm">Experience the magic of deep skin beauty with our skin analysis, dermatologically proven techniques, and customized face treatments.</p>
            <div className="flex gap-4">
              <button className="bg-[#2D2D2D] text-white px-8 py-3 text-[10px] uppercase font-bold hover:bg-black transition-colors">About Us</button>
              <button className="border border-gray-300 px-8 py-3 text-[10px] uppercase font-bold hover:bg-gray-50 transition-colors">Read More</button>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl bg-gray-200 overflow-hidden shadow-md">
              <Image src="/gallery4.jpg" alt="Treatment room setups" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-2xl bg-gray-200 overflow-hidden shadow-md mt-8">
              <Image src="/gallery6.jpg" alt="Esthetician skin analysis session" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-stone-100 px-6 text-center">
        <h2 className="font-serif text-4xl mb-16 text-gray-800 leading-tight">Love hearing from you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#E8F1E6] p-10 text-left rounded-3xl shadow-sm border border-white/50">
            <div className="flex text-[#D4AF37] mb-4">★★★★★</div>
            <p className="font-bold text-gray-800 mb-4 text-xl italic font-serif">“Absolutely amazing service!”</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">“The Moroccan bath and facial were so relaxing. The staff were kind and professional. Definitely recommend for a spa day!”</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Aisha K</p>
          </div>
          <div className="bg-[#F2E8E4] p-10 text-left rounded-3xl shadow-sm border border-white/50">
            <div className="flex text-[#D4AF37] mb-4">★★★★★</div>
            <p className="font-bold text-gray-800 mb-4 text-xl italic font-serif">“Affordable and high quality”</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">“Loved the hair spa and pedicure combo. My hair felt soft and smooth. Great value for money!”</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Reema S</p>
          </div>
        </div>
      </section>

      {/* FAQ Section with functional React states */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">FAQ</h3>
          <h2 className="font-serif text-4xl text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8 h-80">
            <Image src="/CTA-image-updated.webp" alt="FAQ summary banner" fill className="object-cover" />
          </div>
          
          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div className="border border-gray-100 shadow-sm rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === 1 ? 0 : 1)}
                className="w-full text-left p-6 font-bold flex justify-between items-center bg-[#2D2D2D] text-white focus:outline-none"
              >
                What services do you offer? <span>{openFaq === 1 ? '▲' : '▼'}</span>
              </button>
              {openFaq === 1 && (
                <div className="p-6 text-sm text-gray-600 bg-gray-50 transition-all">
                  At Thonette Salon, we believe beauty should be reflected from the inside. We offer hair care, facials, waxing, henna, and luxury spa treatments.
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div className="border border-gray-100 shadow-sm rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === 2 ? 0 : 2)}
                className={`w-full text-left p-6 font-bold flex justify-between items-center focus:outline-none transition-colors ${openFaq === 2 ? 'bg-[#2D2D2D] text-white' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
              >
                Is the salon only for ladies? <span>{openFaq === 2 ? '▲' : '▼'}</span>
              </button>
              {openFaq === 2 && (
                <div className="p-6 text-sm text-gray-600 bg-gray-50">
                  Yes, Thonette Salon provides a dedicated, luxury experience tailored explicitly to the modern woman.
                </div>
              )}
            </div>

            {/* Accordion Item 3 */}
            <div className="border border-gray-100 shadow-sm rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === 3 ? 0 : 3)}
                className={`w-full text-left p-6 font-bold flex justify-between items-center focus:outline-none transition-colors ${openFaq === 3 ? 'bg-[#2D2D2D] text-white' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
              >
                Is your team skilled? <span>{openFaq === 3 ? '▲' : '▼'}</span>
              </button>
              {openFaq === 3 && (
                <div className="p-6 text-sm text-gray-600 bg-gray-50">
                  Absolutely. Our professional estheticians and stylists bring over 7 years of curated industry experience to ensure premium treatments.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Booking Section */}
      <section id="contact" className="py-20 bg-stone-50 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative skew-y-3 rounded-3xl overflow-hidden shadow-2xl h-full min-h-85">
            <Image src="/washing%20hair.webp" alt="Hair washing therapy session" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Appointment</span>
            <h2 className="font-serif text-5xl text-gray-800">Visit Us</h2>
            <p className="text-gray-600 text-xl leading-relaxed">Thonette Salon is your beauty sanctuary for a daily glow or a special occasion glam.</p>
            <div className="space-y-2 text-sm pt-4">
              <p><strong>Call:</strong> (+234)7033792026</p>
              <p><strong>Visit Us:</strong> No 11 Bodija Cresent, Ibadan, Oyo state, Nigeria</p>
              <p><strong>Email:</strong> eyinjuolasunkanmi@gmail.com</p>
            </div>
            <Link href="/#contact" className="bg-[#D4AF37] hover:bg-[#b8962f] transition-colors text-white px-10 py-4 text-[10px] uppercase font-bold shadow-lg text-center inline-flex justify-center">Book a Call</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-gray-400 pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
          <div className="space-y-6">
            <div className="h-14 w-40 rounded-tl-xl rounded-br-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white font-bold text-xl">ThonetteSalon</div>
            <p className="text-sm">Your expert beauty sanctuary in Oyo State.</p>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-[10px] uppercase tracking-widest">
              <li><Link href="/#home" className="hover:text-white cursor-pointer transition-colors">› Home</Link></li>
              <li><Link href="/#about" className="hover:text-white cursor-pointer transition-colors">› About Us</Link></li>
              <li><Link href="/wig-styling" className="hover:text-white cursor-pointer transition-colors">› Wigs & Bridal</Link></li>
              <li><Link href="/wigs" className="hover:text-white cursor-pointer transition-colors">› Wigs Gallery</Link></li>
              <li><Link href="/cart" className="hover:text-white cursor-pointer transition-colors">› Cart</Link></li>
              <li><Link href="/#testimonials" className="hover:text-white cursor-pointer transition-colors">› Testimonials</Link></li>
              <li><Link href="/#packages" className="hover:text-white cursor-pointer transition-colors">› Packages</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-[10px] uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors">› Hair Care</li>
              <li className="hover:text-white cursor-pointer transition-colors">› Nails</li>
              <li className="hover:text-white cursor-pointer transition-colors">› Facials</li>
              <li className="hover:text-white cursor-pointer transition-colors">› Makeup</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <p className="text-sm mb-4">📍 No 11 Bodija Cresent, Ibadan, Oyo state, Nigeria</p>
            <p className="text-sm">📞 (+234) 7033792026</p>
            <p className="text-sm">📧 eyinjuolasunkanmi@gmail.com</p>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px]">© Thonette Salon | Design By Olasunkanmi</p>
          <div className="bg-neutral-800 border border-neutral-700 rounded px-6 py-2 text-gray-300 font-bold text-[10px] flex gap-4">
            <span>WE ACCEPT:</span> <span>VISA</span> <span>MASTERCARD</span> <span>TABBY</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
