"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

type CartItem = {
  id: string
  title: string
  color: string
  quantity: number
  price: number
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = window.localStorage.getItem('wigCart')
      setCart(storedCart ? JSON.parse(storedCart) : [])
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('wigCart', JSON.stringify(cart))
    }
  }, [cart])

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function updateQuantity(id: string, delta: number) {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  function removeItem(id: string) {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <div className="min-h-screen bg-stone-50 text-gray-900 px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37] font-bold">Shopping Cart</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">Your Selected Wig Items</h1>
          </div>
          <Link
            href="/wigs"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold uppercase text-gray-900 shadow-sm hover:bg-gray-50"
          >
            Continue Shopping
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center shadow-sm">
            <p className="text-xl font-semibold text-gray-900 mb-4">Your cart is empty</p>
            <p className="text-gray-600 mb-8">Add wig styles from the gallery to start building your order.</p>
            <Link
              href="/wigs"
              className="inline-flex rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase text-black shadow-lg"
            >
              View Wig Gallery
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.color}`} className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
                      <p className="text-sm text-gray-600">Color: {item.color}</p>
                    </div>
                    <p className="text-lg font-bold text-gray-900">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-2 rounded-3xl border border-gray-200 bg-gray-50 p-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="h-10 w-10 rounded-full bg-white border border-gray-300 text-lg font-bold text-gray-700"
                      >
                        −
                      </button>
                      <span className="min-w-[32px] text-center text-lg font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-10 w-10 rounded-full bg-[#D4AF37] text-lg font-bold text-black"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="rounded-3xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">Order Summary</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-5">
                  <p className="text-sm text-gray-600">Your cart is connected with the wig detail page and will update automatically when you change quantities or remove items.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearCart}
                className="mt-8 w-full rounded-3xl border border-gray-300 bg-white px-6 py-4 text-sm font-semibold uppercase text-gray-900 hover:bg-gray-50"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
