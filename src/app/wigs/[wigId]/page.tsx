"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Build wigsData from the existing images in public (download (1)..(8))
const wigsData = [
  {
    id: "wig-1",
    name: "Soft Lace Glam",
    price: 45000,
    description: "A beautifully styled wig with natural movement and shine.",
    colors: ["Natural Black", "Chocolate Brown", "Honey Blonde", "Chestnut"],
    images: {
      "Natural Black": "/download%20(1).jpeg",
      "Chocolate Brown": "/download%20(2).jpeg",
      "Honey Blonde": "/download%20(3).jpeg",
      "Chestnut": "/download%20(4).jpeg",
    },
  },
  {
    id: "wig-2",
    name: "Silky Edge Finish",
    price: 46000,
    description: "Smooth edges and flawless styling for everyday luxury.",
    colors: ["Soft Black", "Warm Brown", "Caramel Blonde", "Dark Auburn"],
    images: {
      "Soft Black": "/download%20(5).jpeg",
      "Warm Brown": "/download%20(6).jpeg",
      "Caramel Blonde": "/download%20(7).jpeg",
      "Dark Auburn": "/download%20(8).jpeg",
    },
  },
  {
    id: "wig-3",
    name: "Bridal Volume",
    price: 52000,
    description: "Full volume with soft waves designed for special occasions.",
    colors: ["Jet Black", "Espresso", "Warm Blonde", "Rose Gold"],
    images: {
      "Jet Black": "/download%20(1).jpeg",
      "Espresso": "/download%20(2).jpeg",
      "Warm Blonde": "/download%20(3).jpeg",
      "Rose Gold": "/download%20(4).jpeg",
    },
  },
  {
    id: "wig-4",
    name: "Natural Waves",
    price: 48000,
    description: "Light, natural waves with a premium salon finish.",
    colors: ["Deep Brown", "Soft Black", "Creamy Blonde", "Copper Brown"],
    images: {
      "Deep Brown": "/download%20(5).jpeg",
      "Soft Black": "/download%20(6).jpeg",
      "Creamy Blonde": "/download%20(7).jpeg",
      "Copper Brown": "/download%20(8).jpeg",
    },
  },
  {
    id: "wig-5",
    name: "Premium Bob",
    price: 47000,
    description: "Crisp bob styling with smooth, polished edges.",
    colors: ["Jet Black", "Espresso", "Hazelnut", "Champagne Blonde"],
    images: {
      "Jet Black": "/download%20(1).jpeg",
      "Espresso": "/download%20(2).jpeg",
      "Hazelnut": "/download%20(3).jpeg",
      "Champagne Blonde": "/download%20(4).jpeg",
    },
  },
  {
    id: "wig-6",
    name: "Classic Blowout",
    price: 49000,
    description: "A gentle blowout style with soft, elegant waves.",
    colors: ["Rich Black", "Warm Caramel", "Beige Blonde", "Auburn"],
    images: {
      "Rich Black": "/download%20(5).jpeg",
      "Warm Caramel": "/download%20(6).jpeg",
      "Beige Blonde": "/download%20(7).jpeg",
      "Auburn": "/download%20(8).jpeg",
    },
  },
  {
    id: "wig-7",
    name: "Luxury Layers",
    price: 53000,
    description: "Layered texture for natural-looking volume and movement.",
    colors: ["Soft Black", "Mocha", "Blonde Champagne", "Mahogany"],
    images: {
      "Soft Black": "/download%20(1).jpeg",
      "Mocha": "/download%20(2).jpeg",
      "Blonde Champagne": "/download%20(3).jpeg",
      "Mahogany": "/download%20(4).jpeg",
    },
  },
  {
    id: "wig-8",
    name: "Glam Shine",
    price: 54000,
    description: "High-shine finish and sharp styling for standout looks.",
    colors: ["Midnight Black", "Latte Brown", "Sandy Blonde", "Mahogany Red"],
    images: {
      "Midnight Black": "/download%20(5).jpeg",
      "Latte Brown": "/download%20(6).jpeg",
      "Sandy Blonde": "/download%20(7).jpeg",
      "Mahogany Red": "/download%20(8).jpeg",
    },
  },
];

const colorHexMap: Record<string, string> = {
  "Natural Black": "#1C1C1C",
  "Chocolate Brown": "#6B4F3D",
  "Honey Blonde": "#D9B384",
  "Chestnut": "#8B5E3C",
  "Soft Black": "#1D1D1D",
  "Warm Brown": "#7B5230",
  "Caramel Blonde": "#D2A15D",
  "Dark Auburn": "#7B2A2A",
  "Jet Black": "#121212",
  "Espresso": "#4D2F21",
  "Warm Blonde": "#C78B56",
  "Rose Gold": "#B76B52",
  "Deep Brown": "#4A3022",
  "Creamy Blonde": "#E1C196",
  "Copper Brown": "#A26A44",
  "Hazelnut": "#A16C4A",
  "Champagne Blonde": "#E3CEAD",
  "Rich Black": "#1A1A1A",
  "Warm Caramel": "#B07148",
  "Beige Blonde": "#DCC39B",
  "Auburn": "#8B3F2F",
  "Mocha": "#6C4E3E",
  "Blonde Champagne": "#E4CBA8",
  "Mahogany": "#7D3B28",
  "Midnight Black": "#101010",
  "Latte Brown": "#9B6F49",
  "Sandy Blonde": "#D8B89D",
  "Mahogany Red": "#8B2E2C",
};

export default function WigDetailPage() {
  const params = useParams() as { wigId?: string };
  const wigId = params.wigId ?? "";
  const wig = wigsData.find((w) => w.id === wigId);

  if (!wig) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Wig not found</h1>
        <p className="text-slate-600 mb-6 max-w-md">
          That wig style does not exist yet. Please return to the gallery to select another option.
        </p>
        <Link href="/wigs">
          <button className="bg-[#D4AF37] hover:bg-[#b8952e] text-slate-900 font-medium py-3 px-8 rounded-full transition-all duration-200 shadow-md">
            Back to Wig Gallery
          </button>
        </Link>
      </div>
    );
  }

  const [selectedColor, setSelectedColor] = useState<string>(wig.colors[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const selectedColorHex = colorHexMap[selectedColor] || "#000000";

  const handleAddToCart = () => {
    const images = wig.images as unknown as Record<string, string>;
    const imageSrc = images[selectedColor] || Object.values(images)[0];

    const cartItem = {
      id: wig.id,
      name: wig.name,
      price: wig.price,
      color: selectedColor,
      quantity,
      image: imageSrc,
    };

    const existing = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("wigCart") || "[]") : [];
    existing.push(cartItem);
    if (typeof window !== "undefined") window.localStorage.setItem("wigCart", JSON.stringify(existing));
    setMessage(`${quantity} x ${wig.name} (${selectedColor}) added to cart.`);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 shadow-lg group">
          {(() => {
            const imagesForDisplay = wig.images as unknown as Record<string, string>;
            const displaySrc = imagesForDisplay[selectedColor] || Object.values(imagesForDisplay)[0];
            return (
              <>
                <Image
                  src={displaySrc}
                  alt={`${wig.name} in ${selectedColor}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ backgroundColor: selectedColorHex, mixBlendMode: "multiply", opacity: 0.35 }}
                />
              </>
            );
          })()}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">{wig.name}</h1>
            <p className="text-2xl font-semibold text-[#D4AF37] mt-2">₦{wig.price.toLocaleString()}</p>
          </div>

          <p className="text-slate-600 leading-relaxed">{wig.description}</p>

          <hr className="border-slate-200" />

          <div>
            <div className="mb-4 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200">
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-600 mb-1">Selected Color</span>
              <span className="block text-lg font-bold text-slate-900">{selectedColor}</span>
            </div>
            <span className="block text-sm font-medium uppercase tracking-wider text-slate-500 mb-3">
              Choose Your Color:
            </span>
            <div className="flex flex-wrap gap-3">
              {wig.colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`px-5 py-3 text-sm font-bold rounded-full border-2 transition-all duration-300 transform ${
                    selectedColor === color
                      ? "border-[#D4AF37] bg-[#D4AF37] text-slate-900 shadow-lg scale-105"
                      : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:scale-102"
                  }`}
                >
                  <span
                    className="inline-block h-3 w-3 rounded-full mr-2 align-middle border border-slate-300"
                    style={{ backgroundColor: colorHexMap[color] || "#000000" }}
                  />
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium uppercase tracking-wider text-slate-500">Quantity:</span>
            <div className="flex items-center border border-slate-300 rounded-full overflow-hidden bg-white">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 text-slate-600 hover:bg-slate-100 transition">-</button>
              <span className="px-4 font-medium text-slate-800">{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-slate-600 hover:bg-slate-100 transition">+</button>
            </div>
          </div>

          <button type="button" onClick={handleAddToCart} className="w-full bg-slate-950 hover:bg-slate-850 text-white font-medium py-4 px-6 rounded-xl transition duration-200 shadow-md active:scale-[0.99] transform">
            Add to Cart
          </button>

          {message && <div className="text-sm text-green-700 font-medium">{message}</div>}
        </div>
      </div>
    </main>
  );
}
