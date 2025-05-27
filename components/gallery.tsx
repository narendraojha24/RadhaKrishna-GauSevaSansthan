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
      { src: "gallery1/g1 (1).jpg", alt: "गौशाला 1" },
      { src: "gallery1/g1 (2).jpg", alt: "गौशाला 2" },
      { src: "gallery1/g1 (3).jpg", alt: "गौशाला 3" },
      { src: "gallery1/g1 (4).jpg", alt: "गौशाला 4" },
      { src: "gallery1/g1 (5).jpg", alt: "गौशाला 5" },
      { src: "gallery1/g1 (6).jpg", alt: "गौशाला 6" },
      { src: "gallery1/g1 (7).jpg", alt: "गौशाला 7" },
      { src: "gallery1/g1 (8).jpg", alt: "गौशाला 8" },
      { src: "gallery1/g1 (9).jpg", alt: "गौशाला 9" },
      { src: "gallery1/g1 (10).jpg", alt: "गौशाला 10" },
      { src: "gallery1/g1 (11).jpg", alt: "गौशाला 11" },
      { src: "gallery1/g1 (12).jpg", alt: "गौशाला 12" },
      { src: "gallery1/g1 (13).jpg", alt: "गौशाला 13" },
      { src: "gallery1/g1 (14).jpg", alt: "गौशाला 14" },
      { src: "gallery1/g1 (15).jpg", alt: "गौशाला 15" },
      { src: "gallery1/g1 (16).jpg", alt: "गौशाला 16" },
      { src: "gallery1/g1 (17).jpg", alt: "गौशाला 17" },
      { src: "gallery1/g1 (18).jpg", alt: "गौशाला 18" },
      { src: "gallery1/g1 (19).jpg", alt: "गौशाला 19" },
      { src: "gallery1/g1 (20).jpg", alt: "गौशाला 20" },
      { src: "gallery1/g1 (21).jpg", alt: "गौशाला 21" },
      { src: "gallery1/g1 (22).jpg", alt: "गौशाला 22" },
      { src: "gallery1/g1 (23).jpg", alt: "गौशाला 23" },
      { src: "gallery1/g1 (24).jpg", alt: "गौशाला 24" },
      { src: "gallery1/g1 (25).jpg", alt: "गौशाला 25" },
      { src: "gallery1/g1 (26).jpg", alt: "गौशाला 26" }, 
    ],
    events: [
      { src: "gallery2/g2 (1).jpg", alt: "गौशाला 1" },
      { src: "gallery2/g2 (2).jpg", alt: "गौशाला 2" },
      { src: "gallery2/g2 (3).jpg", alt: "गौशाला 3" },
      { src: "gallery2/g2 (4).jpg", alt: "गौशाला 4" },
      { src: "gallery2/g2 (5).jpg", alt: "गौशाला 5" },
      { src: "gallery2/g2 (6).jpg", alt: "गौशाला 6" },
      { src: "gallery2/g2 (7).jpg", alt: "गौशाला 7" },
      { src: "gallery2/g2 (8).jpg", alt: "गौशाला 8" },
      { src: "gallery2/g2 (9).jpg", alt: "गौशाला 9" },
      { src: "gallery2/g2 (10).jpg", alt: "गौशाला 10" },
      { src: "gallery2/g2 (11).jpg", alt: "गौशाला 11" },
      { src: "gallery2/g2 (12).jpg", alt: "गौशाला 12" },
      { src: "gallery2/g2 (13).jpg", alt: "गौशाला 13" },
      { src: "gallery2/g2 (14).jpg", alt: "गौशाला 14" },
      { src: "gallery2/g2 (15).jpg", alt: "गौशाला 15" },
      { src: "gallery2/g2 (16).jpg", alt: "गौशाला 16" },
      { src: "gallery2/g2 (17).jpg", alt: "गौशाला 17" },
      { src: "gallery2/g2 (18).jpg", alt: "गौशाला 18" },
      { src: "gallery2/g2 (19).jpg", alt: "गौशाला 19" },
      { src: "gallery2/g2 (20).jpg", alt: "गौशाला 20" },
      { src: "gallery2/g2 (21).jpg", alt: "गौशाला 21" },
      { src: "gallery2/g2 (22).jpg", alt: "गौशाला 22" },
      { src: "gallery2/g2 (23).jpg", alt: "गौशाला 23" },
      { src: "gallery2/g2 (24).jpg", alt: "गौशाला 24" },
      { src: "gallery2/g2 (25).jpg", alt: "गौशाला 25" },
      { src: "gallery2/g2 (26).jpg", alt: "गौशाला 26" },
      { src: "gallery2/g2 (27).jpg", alt: "गौशाला 27" },
      { src: "gallery2/g2 (28).jpg", alt: "गौशाला 28" },
      { src: "gallery2/g2 (29).jpg", alt: "गौशाला 29" },
      { src: "gallery2/g2 (30).jpg", alt: "गौशाला 30" },
      { src: "gallery2/g2 (31).jpg", alt: "गौशाला 31" },
      { src: "gallery2/g2 (32).jpg", alt: "गौशाला 32" },
      { src: "gallery2/g2 (33).jpg", alt: "गौशाला 33" },
      { src: "gallery2/g2 (34).jpg", alt: "गौशाला 34" },
      { src: "gallery2/g2 (35).jpg", alt: "गौशाला 35" },
      { src: "gallery2/g2 (36).jpg", alt: "गौशाला 36" },
      { src: "gallery2/g2 (37).jpg", alt: "गौशाला 37" },
      { src: "gallery2/g2 (38).jpg", alt: "गौशाला 38" },
      { src: "gallery2/g2 (39).jpg", alt: "गौशाला 39" },
      { src: "gallery2/g2 (40).jpg", alt: "गौशाला 40" },
      { src: "gallery2/g2 (41).jpg", alt: "गौशाला 41" },
      { src: "gallery2/g2 (42).jpg", alt: "गौशाला 42" },
      { src: "gallery2/g2 (43).jpg", alt: "गौशाला 43" },
      { src: "gallery2/g2 (44).jpg", alt: "गौशाला 44" },
      { src: "gallery2/g2 (45).jpg", alt: "गौशाला 45" },
      { src: "gallery2/g2 (46).jpg", alt: "गौशाला 46" },
      { src: "gallery2/g2 (47).jpg", alt: "गौशाला 47" },
      { src: "gallery2/g2 (48).jpg", alt: "गौशाला 48" },
      { src: "gallery2/g2 (49).jpg", alt: "गौशाला 49" },
      { src: "gallery2/g2 (50).jpg", alt: "गौशाला 50" },
      { src: "gallery2/g2 (51).jpg", alt: "गौशाला 51" },
      { src: "gallery2/g2 (52).jpg", alt: "गौशाला 52" },
      { src: "gallery4/g4 (54).jpg", alt: "गौशाला 54" },
      { src: "gallery4/g4 (24).jpg", alt: "गौशाला 24" },
        
    ],
    volunteers: [
      { src: "gallery3/g3 (1).jpg", alt: "गौशाला 1" },
      { src: "gallery3/g3 (2).jpg", alt: "गौशाला 2" },
      { src: "gallery3/g3 (3).jpg", alt: "गौशाला 3" },
      { src: "gallery3/g3 (4).jpg", alt: "गौशाला 4" },
      { src: "gallery3/g3 (5).jpg", alt: "गौशाला 5" },
      { src: "gallery3/g3 (6).jpg", alt: "गौशाला 6" },
      { src: "gallery3/g3 (7).jpg", alt: "गौशाला 7" },
      { src: "gallery3/g3 (8).jpg", alt: "गौशाला 8" },
      { src: "gallery3/g3 (9).jpg", alt: "गौशाला 9" },
      { src: "gallery3/g3 (10).jpg", alt: "गौशाला 10" },
      { src: "gallery3/g3 (11).jpg", alt: "गौशाला 11" },
      { src: "gallery3/g3 (12).jpg", alt: "गौशाला 12" },
      { src: "gallery3/g3 (13).jpg", alt: "गौशाला 13" },
      { src: "gallery3/g3 (14).jpg", alt: "गौशाला 14" },
      { src: "gallery3/g3 (15).jpg", alt: "गौशाला 15" },
      { src: "gallery3/g3 (16).jpg", alt: "गौशाला 16" },
      { src: "gallery3/g3 (17).jpg", alt: "गौशाला 17" },
      { src: "gallery3/g3 (18).jpg", alt: "गौशाला 18" },
      { src: "gallery3/g3 (19).jpg", alt: "गौशाला 19" },
      { src: "gallery3/g3 (20).jpg", alt: "गौशाला 20" },
      { src: "gallery3/g3 (21).jpg", alt: "गौशाला 21" },
      { src: "gallery3/g3 (22).jpg", alt: "गौशाला 22" },
      { src: "gallery3/g3 (23).jpg", alt: "गौशाला 23" },
      { src: "gallery3/g3 (24).jpg", alt: "गौशाला 24" },
      { src: "gallery3/g3 (25).jpg", alt: "गौशाला 25" },
      { src: "gallery3/g3 (26).jpg", alt: "गौशाला 26" },
      { src: "gallery3/g3 (27).jpg", alt: "गौशाला 27" },
      { src: "gallery3/g3 (28).jpg", alt: "गौशाला 28" },
      { src: "gallery3/g3 (29).jpg", alt: "गौशाला 29" },
      { src: "gallery3/g3 (30).jpg", alt: "गौशाला 30" },
      { src: "gallery3/g3 (31).jpg", alt: "गौशाला 31" },
      { src: "gallery3/g3 (32).jpg", alt: "गौशाला 32" },
      { src: "gallery3/g3 (33).jpg", alt: "गौशाला 33" },
      { src: "gallery3/g3 (34).jpg", alt: "गौशाला 34" },
      { src: "gallery3/g3 (35).jpg", alt: "गौशाला 35" },
      { src: "gallery3/g3 (36).jpg", alt: "गौशाला 36" },
      { src: "gallery3/g3 (37).jpg", alt: "गौशाला 37" },
      { src: "gallery3/g3 (38).jpg", alt: "गौशाला 38" },
      { src: "gallery3/g3 (39).jpg", alt: "गौशाला 39" },
      { src: "gallery3/g3 (40).jpg", alt: "गौशाला 40" },
      { src: "gallery3/g3 (41).jpg", alt: "गौशाला 41" },
      { src: "gallery3/g3 (42).jpg", alt: "गौशाला 42" },
      { src: "gallery3/g3 (43).jpg", alt: "गौशाला 43" },
      { src: "gallery3/g3 (44).jpg", alt: "गौशाला 44" },
      { src: "gallery3/g3 (45).jpg", alt: "गौशाला 45" }, 
      { src: "gallery3/g3 (46).jpg", alt: "गौशाला 46" },
      { src: "gallery3/g3 (47).jpg", alt: "गौशाला 47" },
      { src: "gallery3/g3 (48).jpg", alt: "गौशाला 48" },
      { src: "gallery3/g3 (49).jpg", alt: "गौशाला 49" },
      { src: "gallery3/g3 (50).jpg", alt: "गौशाला 50" },
      { src: "gallery3/g3 (51).jpg", alt: "गौशाला 51" },
      { src: "gallery3/g3 (52).jpg", alt: "गौशाला 52" },
      { src: "gallery3/g3 (53).jpg", alt: "गौशाला 53" },
      { src: "gallery3/g3 (54).jpg", alt: "गौशाला 54" }, 
      { src: "gallery3/g3 (55).jpg", alt: "गौशाला 55" },
      { src: "gallery3/g3 (56).jpg", alt: "गौशाला 56" },
      { src: "gallery3/g3 (57).jpg", alt: "गौशाला 57" },
      { src: "gallery3/g3 (58).jpg", alt: "गौशाला 58" },
      { src: "gallery3/g3 (59).jpg", alt: "गौशाला 59" },
      { src: "gallery3/g3 (60).jpg", alt: "गौशाला 60" },
      { src: "gallery3/g3 (61).jpg", alt: "गौशाला 61" },
      { src: "gallery3/g3 (62).jpg", alt: "गौशाला 62" },
      { src: "gallery3/g3 (63).jpg", alt: "गौशाला 63" },
      { src: "gallery3/g3 (64).jpg", alt: "गौशाला 64" },
      { src: "gallery3/g3 (65).jpg", alt: "गौशाला 65" },
      { src: "gallery3/g3 (66).jpg", alt: "गौशाला 66" },
      { src: "gallery3/g3 (67).jpg", alt: "गौशाला 67" },
      { src: "gallery3/g3 (68).jpg", alt: "गौशाला 68" },
      { src: "gallery3/g3 (69).jpg", alt: "गौशाला 69" },
      { src: "gallery3/g3 (70).jpg", alt: "गौशाला 70" }, 
      { src: "gallery3/g3 (71).jpg", alt: "गौशाला 71" },
      { src: "gallery3/g3 (72).jpg", alt: "गौशाला 72" },
      { src: "gallery3/g3 (73).jpg", alt: "गौशाला 73" },
      { src: "gallery3/g3 (74).jpg", alt: "गौशाला 74" },
      { src: "gallery3/g3 (75).jpg", alt: "गौशाला 75" },
      { src: "gallery3/g3 (76).jpg", alt: "गौशाला 76" },
      { src: "gallery3/g3 (77).jpg", alt: "गौशाला 77" },
      { src: "gallery3/g3 (78).jpg", alt: "गौशाला 78" },
      { src: "gallery3/g3 (79).jpg", alt: "गौशाला 79" },
      { src: "gallery3/g3 (80).jpg", alt: "गौशाला 80" },
      { src: "gallery3/g3 (81).jpg", alt: "गौशाला 81" },
      { src: "gallery3/g3 (82).jpg", alt: "गौशाला 82" }, 
      { src: "gallery3/g3 (83).jpg", alt: "गौशाला 83" },
      { src: "gallery3/g3 (84).jpg", alt: "गौशाला 84" },
      { src: "gallery3/g3 (85).jpg", alt: "गौशाला 85" },
      { src: "gallery3/g3 (86).jpg", alt: "गौशाला 86" },
      { src: "gallery3/g3 (87).jpg", alt: "गौशाला 87" },
  
    ],
    spiritual: [
      { src: "gallery4/g4 (1).jpg", alt: "गौशाला 1" },
      { src: "gallery4/g4 (2).jpg", alt: "गौशाला 2" },
      { src: "gallery4/g4 (3).jpg", alt: "गौशाला 3" },
      { src: "gallery4/g4 (4).jpg", alt: "गौशाला 4" },
      { src: "gallery4/g4 (5).jpg", alt: "गौशाला 5" },
      { src: "gallery4/g4 (6).jpg", alt: "गौशाला 6" },
      { src: "gallery4/g4 (7).jpg", alt: "गौशाला 7" },
      { src: "gallery4/g4 (8).jpg", alt: "गौशाला 8" },
      { src: "gallery4/g4 (9).jpg", alt: "गौशाला 9" },
      { src: "gallery4/g4 (10).jpg", alt: "गौशाला 10" },
      { src: "gallery4/g4 (11).jpg", alt: "गौशाला 11" },
      { src: "gallery4/g4 (12).jpg", alt: "गौशाला 12" },
      { src: "gallery4/g4 (13).jpg", alt: "गौशाला 13" },
      { src: "gallery4/g4 (14).jpg", alt: "गौशाला 14" },
      { src: "gallery4/g4 (15).jpg", alt: "गौशाला 15" },
      { src: "gallery4/g4 (16).jpg", alt: "गौशाला 16" },
      { src: "gallery4/g4 (17).jpg", alt: "गौशाला 17" },
      { src: "gallery4/g4 (18).jpg", alt: "गौशाला 18" },
      { src: "gallery4/g4 (19).jpg", alt: "गौशाला 19" },
      { src: "gallery4/g4 (20).jpg", alt: "गौशाला 20" },
      { src: "gallery4/g4 (21).jpg", alt: "गौशाला 21" },
      { src: "gallery4/g4 (22).jpg", alt: "गौशाला 22" },
      { src: "gallery4/g4 (23).jpg", alt: "गौशाला 23" }, 
      { src: "gallery4/g4 (25).jpg", alt: "गौशाला 25" },
      { src: "gallery4/g4 (26).jpg", alt: "गौशाला 26" },
      { src: "gallery4/g4 (27).jpg", alt: "गौशाला 27" },
      { src: "gallery4/g4 (28).jpg", alt: "गौशाला 28" },
      { src: "gallery4/g4 (29).jpg", alt: "गौशाला 29" },
      { src: "gallery4/g4 (30).jpg", alt: "गौशाला 30" },
      { src: "gallery4/g4 (31).jpg", alt: "गौशाला 31" },
      { src: "gallery4/g4 (32).jpg", alt: "गौशाला 32" },
      { src: "gallery4/g4 (33).jpg", alt: "गौशाला 33" },
      { src: "gallery4/g4 (34).jpg", alt: "गौशाला 34" },
      { src: "gallery4/g4 (35).jpg", alt: "गौशाला 35" },
      { src: "gallery4/g4 (36).jpg", alt: "गौशाला 36" },
      { src: "gallery4/g4 (37).jpg", alt: "गौशाला 37" },
      { src: "gallery4/g4 (38).jpg", alt: "गौशाला 38" },
      { src: "gallery4/g4 (39).jpg", alt: "गौशाला 39" },
      { src: "gallery4/g4 (40).jpg", alt: "गौशाला 40" },
      { src: "gallery4/g4 (41).jpg", alt: "गौशाला 41" },
      { src: "gallery4/g4 (42).jpg", alt: "गौशाला 42" },
      { src: "gallery4/g4 (43).jpg", alt: "गौशाला 43" },
      { src: "gallery4/g4 (44).jpg", alt: "गौशाला 44" },
      { src: "gallery4/g4 (45).jpg", alt: "गौशाला 45" },
      { src: "gallery4/g4 (46).jpg", alt: "गौशाला 46" },
      { src: "gallery4/g4 (47).jpg", alt: "गौशाला 47" },
      { src: "gallery4/g4 (48).jpg", alt: "गौशाला 48" },
      { src: "gallery4/g4 (49).jpg", alt: "गौशाला 49" },
      { src: "gallery4/g4 (50).jpg", alt: "गौशाला 50" },
      { src: "gallery4/g4 (51).jpg", alt: "गौशाला 51" },
      { src: "gallery4/g4 (52).jpg", alt: "गौशाला 52" },
      { src: "gallery4/g4 (53).jpg", alt: "गौशाला 53" },
      
      { src: "gallery4/g4 (56).jpg", alt: "गौशाला 56" },
      { src: "gallery4/g4 (57).jpg", alt: "गौशाला 57" },
      { src: "gallery4/g4 (58).jpg", alt: "गौशाला 58" },
      { src: "gallery4/g4 (59).jpg", alt: "गौशाला 59" },
      { src: "gallery4/g4 (60).jpg", alt: "गौशाला 60" },
      { src: "gallery4/g4 (61).jpg", alt: "गौशाला 61" },
      { src: "gallery4/g4 (62).jpg", alt: "गौशाला 62" }, 
      { src: "gallery4/g4 (63).jpg", alt: "गौशाला 63" },
      { src: "gallery4/g4 (64).jpg", alt: "गौशाला 64" },
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
      { src: "gallery4/g4 (79).jpg", alt: "गौशाला 79" },
      { src: "gallery4/g4 (80).jpg", alt: "गौशाला 80" },
      { src: "gallery4/g4 (81).jpg", alt: "गौशाला 81" }, 
      { src: "gallery4/g4 (82).jpg", alt: "गौशाला 82" },
      { src: "gallery4/g4 (83).jpg", alt: "गौशाला 83" },
      { src: "gallery4/g4 (84).jpg", alt: "गौशाला 84" },
      { src: "gallery4/g4 (85).jpg", alt: "गौशाला 85" },
      { src: "gallery4/g4 (86).jpg", alt: "गौशाला 86" },
      { src: "gallery4/g4 (87).jpg", alt: "गौशाला 87" },
      { src: "gallery4/g4 (88).jpg", alt: "गौशाला 88" },
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