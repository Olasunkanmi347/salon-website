import React from 'react'

export default function WigStylingPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-900">
      <section className="bg-[#111111] text-white px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-bold">Wig Styling & Bridal Hair</span>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">All Kind of Wig Styling, Ventilation & Installation, and Bridal Hair Styling</h1>
            <p className="max-w-xl text-gray-300 text-lg">We create flawless wig styles, professional ventilation, full installation, and bridal hair looks for women across Nigeria.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Wig Styling</h2>
                <p className="text-sm text-gray-300 mt-3">Custom wig shaping, blending, and style finish to suit your face and occasion.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-xl font-semibold">Ventilation & Installation</h2>
                <p className="text-sm text-gray-300 mt-3">High-quality ventilation and seamless installation for natural, long-lasting edges.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="/booking?package=Bridal%20Luxe" className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase text-black shadow-lg">Book Styling</a>
              <a href="/#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase text-white hover:bg-white/15">Contact Us</a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl bg-white/10">
              <img src="/gallery4.jpg" alt="Bridal hair styling" className="h-96 w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[1.5rem] shadow-lg bg-white/10">
                <img src="/gallery6.webp" alt="Wig ventilation" className="h-44 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[1.5rem] shadow-lg bg-white/10">
                <img src="/CTA-image2-updated.webp" alt="Wig installation" className="h-44 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl">Order from anywhere in Nigeria</h2>
            <p className="text-gray-600 text-lg leading-relaxed">We accept orders from Lagos, Abuja, Port Harcourt, and every state in Nigeria. Choose your style, book your slot, and we’ll deliver a premium wig styling experience.</p>
            <ul className="space-y-3 text-gray-700">
              <li>• Nationwide support for wig styling and bridal hair.</li>
              <li>• Venues or home service bookings available.</li>
              <li>• Secure payment options via bank transfer and card.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="/gallery1.jpg" alt="Salon wig styling" className="h-72 w-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="/gallery3.jpg" alt="Bridal wig look" className="h-72 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
