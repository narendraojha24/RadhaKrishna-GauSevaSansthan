"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonationForm() {
  const [amount, setAmount] = useState<string>("1000")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    panCard: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    alert("आपका दान फॉर्म सफलतापूर्वक जमा किया गया है। धन्यवाद!")
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-orange-600">दान करें</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Tabs defaultValue="onetime" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="onetime">एक बार</TabsTrigger>
            <TabsTrigger value="monthly">मासिक</TabsTrigger>
          </TabsList>

          <TabsContent value="onetime" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="amount">दान राशि (₹)</Label>
              <Input id="amount" type="number" placeholder="दान राशि दर्ज करें" min="100" required defaultValue="1000" />
              <p className="text-xs text-gray-500">न्यूनतम दान राशि ₹100 है</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">पूरा नाम</Label>
              <Input
                id="name"
                placeholder="अपना पूरा नाम दर्ज करें"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">ईमेल पता</Label>
              <Input
                id="email"
                type="email"
                placeholder="अपना ईमेल दर्ज करें"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">फोन नंबर</Label>
              <Input
                id="phone"
                placeholder="अपना फोन नंबर दर्ज करें"
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">पता</Label>
              <Input id="address" placeholder="अपना पता दर्ज करें" value={formData.address} onChange={handleInputChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="panCard">पैन कार्ड नंबर (वैकल्पिक)</Label>
              <Input
                id="panCard"
                placeholder="कर लाभ के लिए पैन कार्ड नंबर दर्ज करें"
                value={formData.panCard}
                onChange={handleInputChange}
              />
              <p className="text-xs text-gray-500">80G कर छूट के लिए</p>
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="monthly-amount">मासिक दान राशि (₹)</Label>
              <Input
                id="monthly-amount"
                type="number"
                placeholder="मासिक दान राशि दर्ज करें"
                min="500"
                required
                defaultValue="1000"
              />
              <p className="text-xs text-gray-500">न्यूनतम मासिक दान राशि ₹500 है</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name-monthly">पूरा नाम</Label>
              <Input id="name-monthly" placeholder="अपना पूरा नाम दर्ज करें" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-monthly">ईमेल पता</Label>
              <Input id="email-monthly" type="email" placeholder="अपना ईमेल दर्ज करें" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone-monthly">फोन नंबर</Label>
              <Input id="phone-monthly" placeholder="अपना फोन नंबर दर्ज करें" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address-monthly">पता</Label>
              <Input id="address-monthly" placeholder="अपना पता दर्ज करें" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">अवधि (महीने)</Label>
              <Input id="duration" type="number" min="3" defaultValue="12" required />
              <p className="text-xs text-gray-500">न्यूनतम अवधि 3 महीने है</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="panCard-monthly">पैन कार्ड नंबर (वैकल्पिक)</Label>
              <Input id="panCard-monthly" placeholder="कर लाभ के लिए पैन कार्ड नंबर दर्ज करें" />
              <p className="text-xs text-gray-500">80G कर छूट के लिए</p>
            </div>
          </TabsContent>
        </Tabs>

        <div>
          <Label className="text-base mb-3 block">भुगतान विधि</Label>
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-md p-3 text-center hover:border-orange-600 cursor-pointer">
              <svg className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span className="text-sm">कार्ड</span>
            </div>

            <div className="border rounded-md p-3 text-center hover:border-orange-600 cursor-pointer">
              <svg className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">यूपीआई</span>
            </div>

            <div className="border rounded-md p-3 text-center hover:border-orange-600 cursor-pointer">
              <svg className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">नेट बैंकिंग</span>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6">
          दान करने के लिए आगे बढ़ें
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
