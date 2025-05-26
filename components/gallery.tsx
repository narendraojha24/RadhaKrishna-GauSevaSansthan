"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("gaushala")

  // Example categories
  const categories = [
    { key: "gaushala", label: "गौशाला" },
    { key: "events", label: "इवेंट्स" },
    { key: "volunteers", label: "स्वयंसेवक" },
    { key: "spiritual", label: "आध्यात्मिक" },
  ]

  // Example images for each category
  const imagesByCategory: Record<string, { src: string; alt: string }[]> = {
    gaushala: [
      { src: "i1.jpg", alt: "गौशाला 1" },
      { src: "i2.jpg", alt: "गौशाला 2" },
      { src: "i3.jpg", alt: "गौशाला 3" },
    ],
    events: [
      { src: "i4.jpg", alt: "इवेंट 1" },
      { src: "i5.jpg", alt: "इवेंट 2" },
      { src: "i6.jpg", alt: "इवेंट 3" },
    ],
    volunteers: [
      { src: "i7.jpg", alt: "स्वयंसेवक 1" },
      { src: "i8.jpg", alt: "स्वयंसेवक 2" },
      { src: "i9.jpg", alt: "स्वयंसेवक 3" },
    ],
    spiritual: [
      { src: "i10.jpg", alt: "आध्यात्मिक 1" },
      { src: "i11.jpg", alt: "आध्यात्मिक 2" },
      { src: "i12.jpg", alt: "आध्यात्मिक 3" },
    ],
  }

  const images = imagesByCategory[activeCategory] || []

  const videos = [
    { thumbnail: "/video1.mp4", title: "" },
    { thumbnail: "/video2.mp4", title: "" },
    { thumbnail: "/video3.mp4", title: "" },
    { thumbnail: "/video5.mp4", title: "" },
    { thumbnail: "/video6.mp4", title: "" },
    { thumbnail: "/video7.mp4", title: "" },
    { thumbnail: "/video8.mp4", title: "" },
    { thumbnail: "/video9.mp4", title: "" },
    { thumbnail: "/video10.mp4", title: "" },
    { thumbnail: "/video11.mp4", title: "" },
    { thumbnail: "/video14 (1).mp4", title: "" },
    { thumbnail: "/video14 (2).mp4", title: "" },
    { thumbnail: "/video14 (3).mp4", title: "" },
    { thumbnail: "/video14 (4).mp4", title: "" },
    { thumbnail: "/video14 (5).mp4", title: "" },
    { thumbnail: "/video14 (6).mp4", title: "" },
    { thumbnail: "/video15 (1).mp4", title: "" },
    { thumbnail: "/video15 (2).mp4", title: "" },
    { thumbnail: "/video15 (3).mp4", title: "" },


    // ...your videos
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeCategory])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDialogOpen) return
      if (e.key === "ArrowRight") nextImage()
      else if (e.key === "ArrowLeft") prevImage()
      else if (e.key === "Escape") setIsDialogOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDialogOpen, images])

  return (
    <div>
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="photos">तस्वीरें</TabsTrigger>
          <TabsTrigger value="videos">वीडियो</TabsTrigger>
        </TabsList>

        {/* Photo Gallery with Categories */}
        <TabsContent value="photos" className="mt-6">
          <div className="flex justify-center mb-6 gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                  activeCategory === cat.key
                    ? "bg-orange-600 text-white border-orange-600"
                    : "bg-white text-orange-600 border-orange-300 hover:bg-orange-50"
                }`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => {
                  setCurrentImageIndex(index)
                  setIsDialogOpen(true)
                }}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white/90">
              <div className="relative h-[80vh] w-full">
                <Image
                  src={images[currentImageIndex]?.src || "/placeholder.svg"}
                  alt={images[currentImageIndex]?.alt}
                  fill
                  className="object-contain"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-white/40 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-white/40 rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2">
                  <p>{images[currentImageIndex]?.alt}</p>
                  <p className="text-sm text-gray-300">
                    {currentImageIndex + 1} / {images.length}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* Videos Section (unchanged) */}
        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md block hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video">
                  <video
                    src={video.thumbnail}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}