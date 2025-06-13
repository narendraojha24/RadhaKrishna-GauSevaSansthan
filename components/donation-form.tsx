"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DonationForm() {
  const amountRef = useRef<HTMLInputElement>(null)
  const upiId = "gauseva@upi" // <-- Replace with your actual UPI ID
  const [showTxnField, setShowTxnField] = useState(false)

 const handleUPIClick = (e: React.MouseEvent) => {
  e.preventDefault()
  const amount = amountRef.current?.value
  if (!amount || Number(amount) < 1) {
    alert("कृपया पहले दान राशि दर्ज करें।")
    amountRef.current?.focus()
    return
  }
  const upiLink = `upi://pay?pa=${upiId}&pn=Gauseva%20Donation&am=${amount}&cu=INR`
  window.location.href = upiLink // <-- Use this instead of window.open
  setShowTxnField(true)
}

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-orange-600">दान करें</h3>
      <form
        action="https://formspree.io/f/xlddyryg"
        method="POST"
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label htmlFor="amount">दान राशि (₹)</Label>
          <Input
            name="amount"
            id="amount"
            type="number"
            placeholder="दान राशि दर्ज करें"
            min="1"
            required
            ref={amountRef}
          />
          <p className="text-xs text-gray-500">न्यूनतम दान राशि ₹1 है</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">पूरा नाम</Label>
          <Input name="name" id="name" placeholder="अपना पूरा नाम दर्ज करें" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">ईमेल पता</Label>
          <Input name="email" id="email" type="email" placeholder="अपना ईमेल दर्ज करें" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">फोन नंबर</Label>
          <Input name="phone" id="phone" placeholder="अपना फोन नंबर दर्ज करें" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">पता</Label>
          <Input name="address" id="address" placeholder="अपना पता दर्ज करें" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="panCard">पैन कार्ड नंबर (वैकल्पिक)</Label>
          <Input name="panCard" id="panCard" placeholder="कर लाभ के लिए पैन कार्ड नंबर दर्ज करें" />
          <p className="text-xs text-gray-500">80G कर छूट के लिए</p>
        </div>

        <div>
          <Label className="text-base mb-3 block">भुगतान विधि</Label>
          <div className="bg-orange-50 border border-orange-200 rounded p-4 text-center">
            <span className="font-semibold text-orange-700">हमारा UPI ID:</span>
            <Button
              type="button"
              variant="outline"
              className="ml-2 text-orange-900 border-orange-600 hover:bg-orange-100"
              onClick={handleUPIClick}
            >
              {upiId} से भुगतान करें
            </Button>
            <div className="text-xs text-gray-500 mt-1">
              ऊपर दिए गए बटन पर क्लिक करें, अपने UPI ऐप में भुगतान पूरा करें। भुगतान के बाद, कृपया नीचे ट्रांजेक्शन/रेफरेंस नंबर दर्ज करें और फॉर्म सबमिट करें।
            </div>
          </div>
        </div>

        {showTxnField && (
          <div className="space-y-2">
            <Label htmlFor="txnId">UPI ट्रांजेक्शन/रेफरेंस नंबर</Label>
            <Input
              name="txnId"
              id="txnId"
              placeholder="UPI भुगतान का ट्रांजेक्शन/रेफरेंस नंबर दर्ज करें"
              required
            />
            <p className="text-xs text-gray-500">भुगतान के बाद UPI ऐप से ट्रांजेक्शन/रेफरेंस नंबर कॉपी करें।</p>
          </div>
        )}

        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6">
          दान फॉर्म सबमिट करें
        </Button>

        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">
            आपका दान धारा 80G के तहत कर छूट के लिए पात्र है। दान प्रक्रिया पूरी होने के बाद आपके ईमेल पर एक रसीद भेजी जाएगी।
          </p>
          <p className="text-xs text-gray-500">
            अधिक जानकारी के लिए हमें +91 98765 43210 पर कॉल करें या info@radhakrishnagauseva.org पर ईमेल करें।
          </p>
        </div>
      </form>
    </div>
  )
}