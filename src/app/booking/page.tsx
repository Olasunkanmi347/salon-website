"use client"

import React, { useState, useEffect } from "react";

export default function BookingPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pkg, setPkg] = useState("Basic Glow");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | { id: string; message: string }>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prepackage = params.get("package");
      if (prepackage) setPkg(prepackage);
    }
  }, []);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, package: pkg, date, time, paymentMethod }),
      });

      if (!res.ok) throw new Error("Failed to save booking");
      const data = await res.json();
      setSuccess(data);
    } catch (err: any) {
      setError(err?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-serif mb-2">Book an Appointment</h1>
        <p className="text-sm text-gray-500 mb-6">Fill the form below to reserve your slot. Bank transfer details provided after booking.</p>

        {success ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded">
              <p className="font-bold">Booking received — reference: {success.id}</p>
              <p className="text-sm text-gray-700">{success.message}</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded">
              <p className="font-bold">Payment Instructions (Bank Transfer)</p>
              <p className="text-sm">Bank: Zenith Bank</p>
              <p className="text-sm">Account number: 2261389434</p>
              <p className="text-sm">Please include your booking reference when transferring.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full name</label>
              <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full border rounded px-3 py-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Package</label>
              <select value={pkg} onChange={(e) => setPkg(e.target.value)} className="mt-2 w-full border rounded px-3 py-2">
                <option>Basic Glow</option>
                <option>Signature Pamper</option>
                <option>Bridal Luxe</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Date</label>
                <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Time</label>
                <input required type="time" value={time} onChange={(e) => setTime(e.target.value)} className="mt-2 w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Payment Method</label>
              <div className="mt-2 flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" checked={paymentMethod === "bank"} onChange={() => setPaymentMethod("bank")} />
                  <span className="text-sm">Bank Transfer</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                  <span className="text-sm">Card (Master/Verve)</span>
                </label>
              </div>
            </div>

            {error && <div className="text-red-600">{error}</div>}

            <div className="flex items-center gap-4">
              <button disabled={loading} className="bg-[#D4AF37] px-6 py-3 rounded font-bold">{loading ? "Saving..." : "Confirm Booking"}</button>
              <a className="text-sm text-gray-500" href="#contact">Need help? Contact us</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
