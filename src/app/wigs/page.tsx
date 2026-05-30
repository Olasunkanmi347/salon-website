import Image from 'next/image'
import Link from 'next/link'

const wigCards = [
  {
    id: 'wig-1',
    title: 'Soft Lace Glam',
    description: 'A beautifully styled wig with natural movement and shine.',
    image: '/download%20(1).jpeg',
  },
  {
    id: 'wig-2',
    title: 'Silky Edge Finish',
    description: 'Smooth edges and flawless styling for everyday luxury.',
    image: '/download%20(2).jpeg',
  },
  {
    id: 'wig-3',
    title: 'Bridal Volume',
    description: 'Full volume with soft waves designed for special occasions.',
    image: '/download%20(3).jpeg',
  },
  {
    id: 'wig-4',
    title: 'Natural Waves',
    description: 'Light, natural waves with a premium salon look.',
    image: '/download%20(4).jpeg',
  },
  {
    id: 'wig-5',
    title: 'Premium Bob',
    description: 'Crisp bob styling with smooth, polished edges.',
    image: '/download%20(5).jpeg',
  },
  {
    id: 'wig-6',
    title: 'Classic Blowout',
    description: 'A gentle blowout style with soft, elegant waves.',
    image: '/download%20(6).jpeg',
  },
  {
    id: 'wig-7',
    title: 'Luxury Layers',
    description: 'Layered texture for natural-looking volume and movement.',
    image: '/download%20(7).jpeg',
  },
  {
    id: 'wig-8',
    title: 'Glam Shine',
    description: 'High-shine finish and sharp styling for standout looks.',
    image: '/download%20(8).jpeg',
  },
]

export default function WigsGalleryPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-900">
      <section className="bg-[#111111] text-white px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-bold">
              Wig Styling Collection
            </span>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              Wig styling, installation, and bridal wig looks made easy.
            </h1>
            <p className="max-w-xl text-gray-300 text-lg leading-relaxed">
              Explore wig styles, color options, and custom fittings before adding your favorite
              selections to the cart.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking?package=Bridal%20Luxe"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase text-black shadow-lg"
              >
                Book Wig Styling
              </Link>
              <Link
                href="/wig-styling"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase text-white hover:bg-white/15"
              >
                View Styling Services
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative h-96 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/download%20(7).jpeg"
                alt="Wig styling preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-44 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-lg">
                <Image
                  src="/download%20(8).jpeg"
                  alt="Wig finish preview"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-44 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-lg">
                <Image
                  src="/download%20(6).jpeg"
                  alt="Wig styling detail"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-bold">
                Wig Styling Portfolio
              </span>
              <h2 className="font-serif text-4xl">Modern wig looks from premium salon styling.</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our wig collection features premium finishes that are ready for weddings,
                events, or everyday luxury.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• Custom wig fitting & blending for every face shape.</li>
                <li>• Full lace and lace-front wig installation.</li>
                <li>• Bridal wig styling, event-ready finishes, and maintenance tips.</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl">
                <Image src="/download%20(2).jpeg" alt="Salon wig styling" fill sizes="50vw" className="object-cover" />
              </div>
              <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl">
                <Image src="/download%20(3).jpeg" alt="Bridal wig look" fill sizes="50vw" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-3xl mb-6">Wig Gallery</h3>
            <p className="text-gray-600 text-base max-w-2xl">
              Click any wig below to choose your color, quantity, and add it to cart.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {wigCards.map((wig) => (
                <Link
                  key={wig.id}
                  href={`/wigs/${wig.id}`}
                  className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1"
                >
                  <div className="relative h-72 w-full">
                    <Image
                      src={wig.image}
                      alt={wig.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-semibold text-gray-900">{wig.title}</p>
                    <p className="mt-2 text-sm text-gray-600">{wig.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] text-white px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-3 text-center">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h4 className="text-xl font-semibold">Custom Wig Fit</h4>
            <p className="text-sm text-gray-300">Lens-free ventilation and natural edges for a seamless finish.</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h4 className="text-xl font-semibold">Bridal Ready</h4>
            <p className="text-sm text-gray-300">Bridal wig design, trial styling and finishes for your wedding day.</p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h4 className="text-xl font-semibold">Nationwide Delivery</h4>
            <p className="text-sm text-gray-300">We deliver finished wig styles to clients across Nigeria.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
