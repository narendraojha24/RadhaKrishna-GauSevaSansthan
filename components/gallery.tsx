"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const images = [
    { src: "/placeholder.svg?height=400&width=600", alt: "गौशाला में गायें" },
    { src: "/placeholder.svg?height=400&width=600", alt: "गायों को खिलाना" },
    { src: "/placeholder.svg?height=400&width=600", alt: "गायों का चिकित्सा उपचार" },
    { src: "/placeholder.svg?height=400&width=600", alt: "स्वयंसेवक गायों के साथ" },
    { src: "/placeholder.svg?height=400&width=600", alt: "आध्यात्मिक समारोह" },
    { src: "/placeholder.svg?height=400&width=600", alt: "खेत में खेलती गाय" },
    { src: "/placeholder.svg?height=400&width=600", alt: "गौशाला का अवलोकन" },
    { src: "/placeholder.svg?height=400&width=600", alt: "जागरूकता अभियान" },
  ]

  const videos = [
  { thumbnail: "/video1.mp4", title: "हमारी गौशाला में एक दिन" },
  { thumbnail: "/video2.mp4", title: "गौ आहार समारोह" },
  { thumbnail: "/video3.mp4", title: "स्वयंसेवक अनुभव" },
  { thumbnail: "/video4.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
  { thumbnail: "/video5.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
   { thumbnail: "/video6.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
    { thumbnail: "/video7.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
     { thumbnail: "/video8.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
      { thumbnail: "/video9.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
       { thumbnail: "/video10.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
        { thumbnail: "/video11.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
         { thumbnail: "/video12.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
          { thumbnail: "/video13.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
           { thumbnail: "/video14.mp4", title: "गायों के साथ आध्यात्मिक संबंध" },
]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle keyboard navigation in the dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDialogOpen) return

      if (e.key === "ArrowRight") {
        nextImage()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "Escape") {
        setIsDialogOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isDialogOpen])

  return (
    <div>
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="photos">तस्वीरें</TabsTrigger>
          <TabsTrigger value="videos">वीडियो</TabsTrigger>
        </TabsList>

        <TabsContent value="photos" className="mt-6">
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
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/90">
              <div className="relative h-[80vh] w-full">
                <Image
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-contain"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2">
                  <p>{images[currentImageIndex].alt}</p>
                  <p className="text-sm text-gray-300">
                    {currentImageIndex + 1} / {images.length}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </TabsContent>

       <TabsContent value="videos" className="mt-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {videos.map((video, index) => (
      <div
        key={index}
        className="rounded-lg overflow-hidden shadow-md block hover:shadow-lg transition-shadow"
      >
        <div className="relative aspect-video">
          <video
            src={video.thumbnail} // Replace with the actual video URL
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
