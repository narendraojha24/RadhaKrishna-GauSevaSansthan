"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy } from "lucide-react"

const UPI_ID = "9424516994m@pnb"
const QR_IMAGE = "QR.jpg" // Place your QR code image in the public folder

export default function DonationForm() {
  const amountRef = useRef<HTMLInputElement>(null)
  const [showTxnField, setShowTxnField] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleUPIClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const amount = amountRef.current?.value
    if (!amount || Number(amount) < 1) {
      alert("कृपया पहले दान राशि दर्ज करें।")
      amountRef.current?.focus()
      return
    }
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=Gauseva%20Donation&am=${amount}&cu=INR`
    window.location.href = upiLink
    setShowTxnField(true)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-green-50 p-6 sm:p-10 rounded-xl shadow-2xl max-w-lg mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-orange-600 mb-2 drop-shadow">दान करें</h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mb-4 rounded" />
        <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg">
          अपने मोबाइल UPI ऐप से नीचे दिए गए QR कोड को स्कैन करें या UPI ID का उपयोग करें। भुगतान के बाद ट्रांजेक्शन नंबर दर्ज करें।
        </p>
      </div>
      <div className="flex flex-col items-center mb-8">
        <div className="relative group">
          <img
            src={QR_IMAGE}
            alt="UPI QR Code"
            className="w-48 h-48 border-4 border-orange-200 rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-2 right-2 bg-white/80 text-xs text-orange-700 px-2 py-0.5 rounded shadow">
            Scan Me
          </span>
        </div>
        <div className="flex items-center gap-2 mt-4 mb-2">
          <span className="font-semibold text-orange-700">UPI ID:</span>
          <span className="bg-orange-50 px-2 py-1 rounded text-orange-900 font-mono select-all text-sm">{UPI_ID}</span>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="ml-1"
            onClick={handleCopy}
            aria-label="UPI ID कॉपी करें"
          >
            <Copy className="h-5 w-5 text-orange-600" />
          </Button>
          {copied && (
            <span className="text-green-600 text-xs font-medium animate-pulse">कॉपी हो गया!</span>
          )}
        </div>
        <Button
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white mt-2 px-6 py-2 rounded-full shadow transition-transform duration-200 hover:scale-105"
          onClick={handleUPIClick}
        >
          UPI ऐप से भुगतान करें
        </Button>
      </div>
      <form
        action="https://formspree.io/f/xkgzonop"
        method="POST"
        encType="multipart/form-data"
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
            className="focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">पूरा नाम</Label>
          <Input
            name="name"
            id="name"
            placeholder="अपना पूरा नाम दर्ज करें"
            required
            className="focus:ring-2 focus:ring-orange-400"
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
            className="focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">फोन नंबर</Label>
          <Input
            name="phone"
            id="phone"
            placeholder="अपना फोन नंबर दर्ज करें"
            required
            className="focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {showTxnField && (
          <div className="space-y-2 animate-fade-in">
            <Label htmlFor="txnId">UPI ट्रांजेक्शन/रेफरेंस नंबर</Label>
            <Input
              name="txnId"
              id="txnId"
              placeholder="UPI भुगतान का ट्रांजेक्शन/रेफरेंस नंबर दर्ज करें"
              required
              className="focus:ring-2 focus:ring-green-400"
            />
            
            <p className="text-xs text-gray-500">
              भुगतान के बाद UPI ऐप से ट्रांजेक्शन/रेफरेंस नंबर कॉपी करें और चाहें तो स्क्रीनशॉट अपलोड करें।
            </p>
          </div>
        )}
        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 rounded-full text-lg shadow-lg transition-transform duration-200 hover:scale-105">
          दान फॉर्म सबमिट करें
        </Button>
        <div className="text-xs text-gray-500 text-center mt-2">
          आपका दान धारा 80G के तहत कर छूट के लिए पात्र है। दान प्रक्रिया पूरी होने के बाद आपके ईमेल पर एक रसीद भेजी जाएगी।
        </div>
      </form>
    </div>
  )
}