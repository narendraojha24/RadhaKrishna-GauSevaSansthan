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
    { key: "events", label: "वृक्षारोपण" },
    { key: "volunteers", label: "निर्माण" },
    { key: "spiritual", label: "आध्यात्मिक" },
  ]

  // Example images for each category
  const imagesByCategory: Record<string, { src: string; alt: string }[]> = {
    gaushala: [
       { src: "gallery1/g1 (16).jpg", alt: "गौशाला 16" },
      { src: "gallery1/g1 (7).jpg", alt: "गौशाला 7" },
      { src: "gallery1/g1 (8).jpg", alt: "गौशाला 8" },
      { src: "gallery1/g1 (10).jpg", alt: "गौशाला 10" },
      { src: "gallery1/g1 (11).jpg", alt: "गौशाला 11" },
      { src: "gallery1/g1 (14).jpg", alt: "गौशाला 14" },
      { src: "gallery1/g1 (15).jpg", alt: "गौशाला 15" },
      { src: "gallery1/g1 (19).jpg", alt: "गौशाला 19" },
      { src: "gallery1/g1 (21).jpg", alt: "गौशाला 21" },
      { src: "gallery1/g1 (22).jpg", alt: "गौशाला 22" },
      { src: "gallery1/g1 (23).jpg", alt: "गौशाला 23" },
      { src: "gallery1/g1 (24).jpg", alt: "गौशाला 24" }, 
      { src: "gallery1/g1 (2).jpg", alt: "गौशाला 2" },
      { src: "gallery1/g1 (4).jpg", alt: "गौशाला 4" },
      { src: "gallery1/g1 (5).jpg", alt: "गौशाला 5" },
    ],
    events: [
      { src: "gallery2/g2 (1).jpg", alt: "गौशाला 1" },
      { src: "gallery2/g2 (2).jpg", alt: "गौशाला 2" },
      { src: "gallery2/g2 (3).jpg", alt: "गौशाला 3" },
      { src: "gallery2/g2 (6).jpg", alt: "गौशाला 6" },
      { src: "gallery2/g2 (9).jpg", alt: "गौशाला 9" },
      { src: "gallery2/g2 (11).jpg", alt: "गौशाला 11" },
      { src: "gallery2/g2 (12).jpg", alt: "गौशाला 12" },
      { src: "gallery2/g2 (14).jpg", alt: "गौशाला 14" },
      { src: "gallery2/g2 (15).jpg", alt: "गौशाला 15" },
      { src: "gallery2/g2 (18).jpg", alt: "गौशाला 18" },
      { src: "gallery2/g2 (22).jpg", alt: "गौशाला 22" },
      { src: "gallery2/g2 (25).jpg", alt: "गौशाला 25" },
      { src: "gallery2/g2 (28).jpg", alt: "गौशाला 28" },
      { src: "gallery2/g2 (30).jpg", alt: "गौशाला 30" },
      { src: "gallery2/g2 (32).jpg", alt: "गौशाला 32" },
      { src: "gallery2/g2 (36).jpg", alt: "गौशाला 36" },
      { src: "gallery2/g2 (37).jpg", alt: "गौशाला 37" },
      { src: "gallery2/g2 (43).jpg", alt: "गौशाला 43" },
      { src: "gallery2/g2 (44).jpg", alt: "गौशाला 44" },
      { src: "gallery2/g2 (46).jpg", alt: "गौशाला 46" },
      { src: "gallery2/g2 (47).jpg", alt: "गौशाला 47" },
      { src: "gallery2/g2 (49).jpg", alt: "गौशाला 49" },
      { src: "gallery2/g2 (51).jpg", alt: "गौशाला 51" },
      { src: "gallery4/g4 (54).jpg", alt: "गौशाला 54" },
      { src: "gallery4/g4 (24).jpg", alt: "गौशाला 24" },
      { src: "gallery3/g3 (87).jpg", alt: "गौशाला 87" },
        
    ],
    volunteers: [
      { src: "gallery3/g3 (73).jpg", alt: "गौशाला 73" },
      { src: "gallery3/g3 (69).jpg", alt: "गौशाला 69" },
      { src: "gallery3/g3 (1).jpg", alt: "गौशाला 1" },
      { src: "gallery3/g3 (2).jpg", alt: "गौशाला 2" },
      { src: "gallery3/g3 (4).jpg", alt: "गौशाला 4" },
      { src: "gallery3/g3 (7).jpg", alt: "गौशाला 7" },
      { src: "gallery3/g3 (8).jpg", alt: "गौशाला 8" },
      { src: "gallery3/g3 (9).jpg", alt: "गौशाला 9" },
      { src: "gallery3/g3 (10).jpg", alt: "गौशाला 10" },
      { src: "gallery3/g3 (11).jpg", alt: "गौशाला 11" },
      { src: "gallery3/g3 (12).jpg", alt: "गौशाला 12" },
      { src: "gallery3/g3 (13).jpg", alt: "गौशाला 13" },
      { src: "gallery3/g3 (14).jpg", alt: "गौशाला 14" },
      { src: "gallery3/g3 (17).jpg", alt: "गौशाला 17" },
      { src: "gallery3/g3 (24).jpg", alt: "गौशाला 24" },
      { src: "gallery3/g3 (25).jpg", alt: "गौशाला 25" },
      { src: "gallery3/g3 (26).jpg", alt: "गौशाला 26" },
      { src: "gallery3/g3 (29).jpg", alt: "गौशाला 29" },
      { src: "gallery3/g3 (30).jpg", alt: "गौशाला 30" },
      { src: "gallery3/g3 (31).jpg", alt: "गौशाला 31" },
      { src: "gallery3/g3 (34).jpg", alt: "गौशाला 34" },
      { src: "gallery3/g3 (35).jpg", alt: "गौशाला 35" },
      { src: "gallery3/g3 (37).jpg", alt: "गौशाला 37" },
      { src: "gallery3/g3 (51).jpg", alt: "गौशाला 51" },
      { src: "gallery3/g3 (52).jpg", alt: "गौशाला 52" },
      { src: "gallery3/g3 (53).jpg", alt: "गौशाला 53" },
      { src: "gallery3/g3 (56).jpg", alt: "गौशाला 56" },
      { src: "gallery3/g3 (57).jpg", alt: "गौशाला 57" },
      { src: "gallery3/g3 (66).jpg", alt: "गौशाला 66" },
      { src: "gallery3/g3 (67).jpg", alt: "गौशाला 67" },
      { src: "gallery3/g3 (68).jpg", alt: "गौशाला 68" },       
      { src: "gallery3/g3 (72).jpg", alt: "गौशाला 72" },
      { src: "gallery3/g3 (74).jpg", alt: "गौशाला 74" },
      { src: "gallery3/g3 (76).jpg", alt: "गौशाला 76" },
      { src: "gallery3/g3 (77).jpg", alt: "गौशाला 77" },
      { src: "gallery3/g3 (78).jpg", alt: "गौशाला 78" },
      { src: "gallery3/g3 (79).jpg", alt: "गौशाला 79" },
      { src: "gallery3/g3 (80).jpg", alt: "गौशाला 80" },
      { src: "gallery3/g3 (82).jpg", alt: "गौशाला 82" }, 
      { src: "gallery3/g3 (83).jpg", alt: "गौशाला 83" },
      { src: "gallery3/g3 (84).jpg", alt: "गौशाला 84" },
  
    ],
    spiritual: [
      { src: "gallery4/g4 (1).jpg", alt: "गौशाला 1" },
      { src: "gallery4/g4 (2).jpg", alt: "गौशाला 2" },
      { src: "gallery4/g4 (3).jpg", alt: "गौशाला 3" },
      { src: "gallery4/g4 (5).jpg", alt: "गौशाला 5" },
      { src: "gallery3/g3 (23).jpg", alt: "गौशाला 23" },
      { src: "gallery4/g4 (6).jpg", alt: "गौशाला 6" },
      { src: "gallery4/g4 (7).jpg", alt: "गौशाला 7" },
      { src: "gallery4/g4 (8).jpg", alt: "गौशाला 8" },
      { src: "gallery4/g4 (11).jpg", alt: "गौशाला 11" },
      { src: "gallery4/g4 (12).jpg", alt: "गौशाला 12" },
      { src: "gallery4/g4 (13).jpg", alt: "गौशाला 13" },
      { src: "gallery4/g4 (14).jpg", alt: "गौशाला 14" },
      { src: "gallery4/g4 (15).jpg", alt: "गौशाला 15" },
      { src: "gallery4/g4 (16).jpg", alt: "गौशाला 16" },
      { src: "gallery4/g4 (17).jpg", alt: "गौशाला 17" },
      { src: "gallery4/g4 (18).jpg", alt: "गौशाला 18" },
      { src: "gallery4/g4 (19).jpg", alt: "गौशाला 19" },
      { src: "gallery4/g4 (21).jpg", alt: "गौशाला 21" },
      { src: "gallery4/g4 (22).jpg", alt: "गौशाला 22" },
      { src: "gallery4/g4 (23).jpg", alt: "गौशाला 23" }, 
      { src: "gallery4/g4 (27).jpg", alt: "गौशाला 27" },
      { src: "gallery4/g4 (28).jpg", alt: "गौशाला 28" },
      { src: "gallery4/g4 (29).jpg", alt: "गौशाला 29" },
      { src: "gallery4/g4 (32).jpg", alt: "गौशाला 32" },
      { src: "gallery4/g4 (38).jpg", alt: "गौशाला 38" },
      { src: "gallery4/g4 (39).jpg", alt: "गौशाला 39" },
      { src: "gallery4/g4 (42).jpg", alt: "गौशाला 42" },
      { src: "gallery4/g4 (44).jpg", alt: "गौशाला 44" },
      { src: "gallery4/g4 (45).jpg", alt: "गौशाला 45" },
      { src: "gallery4/g4 (46).jpg", alt: "गौशाला 46" },
      { src: "gallery4/g4 (47).jpg", alt: "गौशाला 47" },
      { src: "gallery4/g4 (48).jpg", alt: "गौशाला 48" },
      { src: "gallery4/g4 (49).jpg", alt: "गौशाला 49" },
      { src: "gallery4/g4 (50).jpg", alt: "गौशाला 50" },
      { src: "gallery4/g4 (51).jpg", alt: "गौशाला 51" },
      { src: "gallery4/g4 (62).jpg", alt: "गौशाला 62" }, 
      { src: "gallery4/g4 (65).jpg", alt: "गौशाला 65" },
      { src: "gallery4/g4 (66).jpg", alt: "गौशाला 66" },
      { src: "gallery4/g4 (67).jpg", alt: "गौशाला 67" },
      { src: "gallery4/g4 (68).jpg", alt: "गौशाला 68" },
      { src: "gallery4/g4 (69).jpg", alt: "गौशाला 69" },
      { src: "gallery4/g4 (70).jpg", alt: "गौशाला 70" },
      { src: "gallery4/g4 (71).jpg", alt: "गौशाला 71" },
      { src: "gallery4/g4 (72).jpg", alt: "गौशाला 72" },
      { src: "gallery4/g4 (73).jpg", alt: "गौशाला 73" },
      { src: "gallery4/g4 (74).jpg", alt: "गौशाला 74" },
      { src: "gallery4/g4 (75).jpg", alt: "गौशाला 75" },
      { src: "gallery4/g4 (76).jpg", alt: "गौशाला 76" },
      { src: "gallery4/g4 (77).jpg", alt: "गौशाला 77" },
      { src: "gallery4/g4 (89).jpg", alt: "गौशाला 88" },
      { src: "gallery4/g4 (90).jpg", alt: "गौशाला 88" },
      { src: "gallery4/g4 (91).jpg", alt: "गौशाला 88" },
      { src: "gallery4/g4 (92).jpg", alt: "गौशाला 88" },
      { src: "gallery4/g4 (93).jpg", alt: "गौशाला 88" },
      { src: "gallery4/g4 (94).jpg", alt: "गौशाला 88" },
      { src: "gallery4/g4 (95).jpg", alt: "गौशाला 88" },
      { src: "gallery4/g4 (96).jpg", alt: "गौशाला 88" },

    ],
  }

  const images = imagesByCategory[activeCategory] || []

  const videos = [
    { thumbnail: "/video8.mp4", title: "" },
     { thumbnail: "/video14 (1).mp4", title: "" },
     { thumbnail: "/video5.mp4", title: "" },
    { thumbnail: "/video14 (3).mp4", title: "" },
    { thumbnail: "/video14 (4).mp4", title: "" },
    { thumbnail: "/video14 (5).mp4", title: "" },
    { thumbnail: "/video2.mp4", title: "" },
    { thumbnail: "/video3.mp4", title: "" },
    { thumbnail: "/video6.mp4", title: "" },
    { thumbnail: "/video7.mp4", title: "" },
    { thumbnail: "/video9.mp4", title: "" },
    { thumbnail: "/video10.mp4", title: "" },
    { thumbnail: "/video11.mp4", title: "" },
    { thumbnail: "/video14 (2).mp4", title: "" },
    { thumbnail: "/video14 (6).mp4", title: "" },
    { thumbnail: "/video15 (1).mp4", title: "" },
    { thumbnail: "/video15 (2).mp4", title: "" },
    { thumbnail: "/video15 (3).mp4", title: "" },
    { thumbnail: "/video15.mp4", title: "" },
     { thumbnail: "/video1.mp4", title: "" },


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
          {/* Masonry (Pinterest-style) layout */}
           <div
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
            style={{ columnGap: "1rem" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid relative overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                style={{ width: "100%" }}
                onClick={() => {
                  setCurrentImageIndex(index)
                  setIsDialogOpen(true)
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={Math.floor(300 + Math.random() * 200)} // random height for demo
                  className="object-cover w-full h-auto"
                  style={{
                    borderRadius: "0.75rem",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    marginBottom: "1rem",
                  }}
                />
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