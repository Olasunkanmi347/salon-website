"use client";

import React, { useState } from "react";

export default function CreateImagePage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setImageUrl(null);
    if (!prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/images", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Unable to generate image.");
      } else if (!data.imageUrl) {
        setError("No image returned from the API.");
      } else {
        setImageUrl(data.imageUrl);
      }
    } catch (err) {
      setError("Could not generate image. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-3">Image Studio</p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">Create salon images with a prompt</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Enter a description of the salon scene or beauty shot you want. The app will generate a preview image for you online.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Image prompt</label>
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              rows={4}
              className="mt-3 w-full rounded-3xl border border-gray-200 px-4 py-4 text-sm text-gray-800 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
              placeholder="For example: a luxurious salon interior with velvet chairs, gold accents, and soft natural light"
            />
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-gray-500">Best results when you describe mood, lighting, and style.</p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-bold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Generating..." : "Generate Image"}
            </button>
          </div>

          {error && <p className="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</p>}
        </form>

        <div className="mt-12">
          {imageUrl ? (
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4">
              <p className="mb-4 text-sm text-gray-500">Generated image result:</p>
              <img src={imageUrl} alt="Generated result" className="w-full rounded-3xl object-cover" />
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-200 bg-gray-50 p-12 text-center text-sm text-gray-500">
              <p>Enter a prompt and click &quot;Generate Image&quot; to create a new salon visual.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
