"use client"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function DonationForm() {
  const [form, setForm] = useState({
    amount: "",
    name: "",
    email: "",
    phone: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setLoading(false)
    if (data.id) {
      const stripe = await stripePromise
      await stripe?.redirectToCheckout({ sessionId: data.id })
    } else {
      alert("कुछ गलत हो गया: " + (data.error || ""))
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">दान करें</h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-600">
          आपके द्वारा दिया गया दान बेसहारा और पीड़ित गायों की सेवा, देखभाल और संरक्षण के लिए उपयोग किया जाएगा। कृपया आगे बढ़ें और अपने योगदान से इस पुण्य कार्य में सहभागी बनें।
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">दान राशि (₹)</Label>
          <Input
            name="amount"
            id="amount"
            type="number"
            placeholder="दान राशि दर्ज करें"
            min="1"
            required
            value={form.amount}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">पूरा नाम</Label>
          <Input
            name="name"
            id="name"
            placeholder="अपना पूरा नाम दर्ज करें"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">ईमेल पता</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="अपना ईमेल दर्ज करें"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">फोन नंबर</Label>
          <Input
            name="phone"
            id="phone"
            placeholder="अपना फोन नंबर दर्ज करें"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6"
          disabled={loading}
        >
          {loading ? "प्रोसेस हो रहा है..." : "Stripe से सुरक्षित भुगतान करें"}
        </Button>
      </form>
    </div>
  )
}