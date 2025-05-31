"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "राधाकृष्ण गौ सेवा संस्थान द्वारा किया जा रहा कार्य वास्तव में दिव्य है। वे गायों को जो प्यार और देखभाल दिखाते हैं वह प्रेरणादायक है। मुझे एक दानदाता होने पर गर्व है।",
    name: "श्री जयवर्धन सिंह",
    title: "विधानसभा सदस्य",
    avatar: "jai.jpeg",
  },
  {
    quote:
      "गौशाला में स्वयंसेवा करना एक आध्यात्मिक रूप से समृद्ध अनुभव रहा है। गायों के साथ संबंध और शांतिपूर्ण वातावरण ने मेरे जीवन के दृष्टिकोण को बदल दिया है।",
    name: "श्री राधेश्याम ओझा",
    title: "स्वयंसेवक",
    avatar: "ojhaaa.jpg",
  },
  {
    quote:
      "मैंने उनके कार्यक्रम के माध्यम से एक गाय को गोद लिया और नियमित अपडेट प्राप्त करता हूं। टीम की पारदर्शिता और समर्पण प्रशंसनीय है। वास्तव में एक महान कार्य।",
    name: "अमित सिंह",
    title: "गाय गोद लेने वाले",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "संस्थान द्वारा आयोजित जागरूकता कार्यक्रमों ने गौ संरक्षण के महत्व के प्रति कई लोगों की आंखें खोल दी हैं। उनका काम समाज में सकारात्मक प्रभाव पैदा कर रहा है।",
    name: "सुनीता देवी",
    title: "समुदाय सदस्य",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="h-10 w-10 text-orange-600 mb-4" />
                    <p className="text-lg mb-6 italic text-gray-700">"{testimonial.quote}"</p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-orange-600">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-orange-50 z-10"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft className="h-6 w-6 text-orange-600" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-orange-50 z-10"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight className="h-6 w-6 text-orange-600" />
      </button>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-orange-600" : "bg-orange-200"}`}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          />
        ))}
      </div>
    </div>
  )
}
