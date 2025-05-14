"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Heart,
  Leaf,
  Users,
  Calendar,
  MessageCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import DonationForm from "@/components/donation-form"
import Gallery from "@/components/gallery"
import { useEffect } from "react"

import { useState } from 'react';// adjust this import as needed

const images = ['cow3.jpeg', 'cow1.jpeg', 'cow2.jpeg', 'cow3.jpeg', 'cow4.jpeg'];

const galleryImages = Array.from({ length: 20 }, (_, i) => `/gallery/image${i + 1}.jpeg`);// Put your images in public/gallery/


export default function Home() {

   const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-orange-600">श्री राधाकृष्ण गौ सेवा संस्थान</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-orange-600 transition-colors">
              हमारे बारे में
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-orange-600 transition-colors">
              हमारी सेवाएं
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-orange-600 transition-colors">
              हमारी टीम
            </Link>
            <Link href="#donate" className="text-sm font-medium hover:text-orange-600 transition-colors">
              दान करें
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-orange-600 transition-colors">
              गैलरी
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-orange-600 transition-colors">
              प्रशंसापत्र
            </Link>
            <Link href="#involved" className="text-sm font-medium hover:text-orange-600 transition-colors">
              जुड़ें
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
              संपर्क
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:flex border-orange-600 text-orange-600 hover:bg-orange-50"
            onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
          >
            अभी दान करें
          </Button>
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu")
              if (mobileMenu) {
                mobileMenu.classList.toggle("hidden")
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col p-4">
            <Link
              href="#about"
              className="py-2 text-gray-800 hover:text-orange-600"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              हमारे बारे में
            </Link>
            <Link
              href="#services"
              className="py-2 text-gray-800 hover:text-orange-600"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              हमारी सेवाएं
            </Link>
            <Link
              href="#team"
              className="py-2 text-gray-800 hover:text-orange-600"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              हमारी टीम
            </Link>
            <Link
              href="#donate"
              className="py-2 text-gray-800 hover:text-orange-600"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              दान करें
            </Link>
            <Link
              href="#gallery"
              className="py-2 text-gray-800 hover:text-orange-600"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              गैलरी
            </Link>
            <Link
              href="#testimonials"
              className="py-2 text-gray-800 hover:text-orange-600"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              प्रशंसापत्र
            </Link>
            <Link
              href="#involved"
              className="py-2 text-gray-800 hover:text-orange-600"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              जुड़ें
            </Link>
            <Link
              href="#contact"
              className="py-2 text-gray-800 hover:text-orange-600"
              onClick={() => document.getElementById("mobile-menu")?.classList.add("hidden")}
            >
              संपर्क
            </Link>
            <Button
              className="mt-2 bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => {
                document.getElementById("mobile-menu")?.classList.add("hidden")
                document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              अभी दान करें
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">


         <section className="relative h-[70vh] overflow-hidden">
      {/* Background Images in Loop */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={`/${img}`}
          alt="Cow background"
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-green-600/70 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
          श्री राधाकृष्ण गौ सेवा संस्थान - पवित्र गौमाता की सेवा में समर्पित
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8 drop-shadow-md">
          प्रेम, देखभाल और आध्यात्मिक भक्ति के माध्यम से गायों के संरक्षण और कल्याण के लिए समर्पित
        </p>
        <Button
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full "
          onClick={() =>
            document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          अभी दान करें <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>


     <div className="w-full overflow-hidden bg-white py-6 mt-10">
      <div className="flex scroll-horizontal w-max gap-6">
        {/* Repeat the row twice for infinite effect */}
        {[...Array(2)].map((_, repeatIndex) =>
          images.map((src, index) => (
            <div key={`${repeatIndex}-${index}`} className="relative w-[180px] h-[120px]">
              <Image
                src={src}
                alt={`gallery-img-${index}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))
        )}
      </div>
    </div>

    
        {/* Hero Section 
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/70 to-green-700/70 z-10" />
          <Image
            src="cow.jpeg"
            alt="Cows with spiritual background"
            width={1600}
            height={600}
            className="w-full h-[70vh] object-cover"
            priority
          />
          <div className="container relative z-20 flex flex-col items-center justify-center text-center text-white h-[70vh]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              श्री राधाकृष्ण गौ सेवा संस्थान - पवित्र गौमाता की सेवा में समर्पित
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8">
              प्रेम, देखभाल और आध्यात्मिक भक्ति के माध्यम से गायों के संरक्षण और कल्याण के लिए समर्पित
            </p>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
            >
              अभी दान करें <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>*/}

        {/* About Us Section */}
        <section id="about" className="py-16 bg-orange-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">हमारे बारे में</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                श्री राधाकृष्ण गौसेवा संस्थान, सनातन संस्कृति और करुणा की भावना से प्रेरित होकर, बेसहारा और पीड़ित गायों की सेवा, देखभाल और संरक्षण के लिए पूर्णतः समर्पित एक निःस्वार्थ एवं गैर-लाभकारी संस्था है। हमारा उद्देश्य केवल गौसेवा नहीं, बल्कि समाज में सहअस्तित्व और दया की भावना को जागृत करना भी है।

              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">हमारा मिशन</h3>
                <p className="text-gray-600">
                  (1.) बेसहारा गायों के लिए चारा, पानी एवं उनके ठहरने की उचित व्यवस्था करना।

(2.) बीमार अथवा चोट ग्रस्त गायों की देखभाल करना तथा उन्हें यथा संभव चिकित्सीय उपचार की व्यवस्था करना।

(3.) रोजगार एवं स्वरोजगार हेतु बेरोजगारों के रोजगारमूलक पाठ्यक्रम का संचालन करना एवं प्रशिक्षण शिविर लगाना।

(4.) प्रारंभिक एवं माध्यमिक शिक्षा हेतु विद्यालय का संचालन करना।

(5.) अनुसूचित जाति / अनुसूचित जनजाति एवं पिछड़े वर्ग एवं आर्थिक रूप से पिछड़े लोगों को निःशुल्क शिक्षा देकर उनको समाज की मुख्यधारा से जोड़ने का प्रयास करना एवं शासकीय / अशासकीय नीतियों का क्रियान्वयन करना।

(6.) जल संरक्षण हेतु आम जनता को जागरूक करना एवं शासकीय नीतियों का क्रियान्वयन करना।

(7.) महिलाओं के सामाजिक एवं शैक्षणिक विकास के लिये तहसील एवं जिला स्तर पर कार्य करना।

(8.) परिवार परामर्श केन्द्र का संचालन करना एवं कमजोर एवं असहाय महिला एवं वृद्धों को परामर्श सेवाएं तथा कानूनी सलाह देकर उनके उनके अधिकार दिलाने हेतु सहायता करना।

(9.) समय समय पर नशा मुक्ति अभियाना आयोजित करना।
(11.) रक्त दान शिविरों का आयोजन करने का प्रयास करना।

(12.) खेल एवं सांस्कृतिक कार्यक्रमों का संचालन करने का प्रयास करना।

(13.) राष्ट्र एवं धार्मिक आधार पर पीड़ित जन चेतना विस्तारित कर मानव अधिकार एवं सामाजिक न्याय के संरक्षण का प्रयास करना।

(14.) वन्य जीवों के संरक्षण एवं संपोषण हेतु प्रयास करना एवं आम जन को वन्य जीवों की रक्षा हेतु जागरूक करने का प्रयास करना।

(15.) जन चिकित्सालय ध्यान विद्या आदि की स्थापना करने हेतु आमजनो को प्रेरित करने हेतु शिविर लगाने का प्रयास करना।

(16.) मानव अधिकार एवं/उपभोक्ता जागरूकता से संबंधित कार्यक्रम संचालित करना।
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">हमारा विज़न</h3>
                <p className="text-gray-600">  "गौ सेवा से ही मोक्ष की प्राप्ति होती है, यही हमारा संकल्प है।"

हमारा विज़न है — एक ऐसे आदर्श समाज की स्थापना करना जहाँ हर गौ माता को संरक्षण, सम्मान और सेवा मिले। हम यह मानते हैं कि गौमाता केवल एक पशु नहीं, बल्कि भारतीय संस्कृति और सनातन धर्म की आत्मा हैं।

संस्थान का उद्देश्य केवल गौसेवा तक सीमित नहीं है, बल्कि इससे जुड़ी मानवता, शिक्षा, सेवा, आत्मनिर्भरता और सामाजिक upliftment को भी बढ़ावा देना है। हम एक ऐसा पारदर्शी, समर्पित और सत्कार्य पर केंद्रित प्लेटफॉर्म प्रदान करना चाहते हैं जहाँ कोई लाभ कमाने की प्रवृत्ति न हो, बल्कि सेवा भावना हो।

हम यह सपना देखते हैं कि:

कोई भी गाय भूखी न रहे।

बेसहारा गायों को एक सुरक्षित और स्नेहपूर्ण घर मिले।

समाज में संवेदनशीलता, सहानुभूति और नैतिक चेतना का विकास हो।

युवा पीढ़ी गौसंरक्षण के प्रति जागरूक हो।

और समाज के वंचित वर्गों को शिक्षा, स्वावलंबन और आत्मबल प्राप्त हो।

हमारा यह मिशन 2021 से प्रारंभ हुआ और तब से हम निरंतर निःस्वार्थ सेवा के इस मार्ग पर अग्रसर हैं।

"हम सेवा के माध्यम से समाज को जोड़ते हैं, और गौसेवा के माध्यम से आत्मा को परमात्मा से जोड़ते हैं।"

</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">हमारी टीम</h3>
                <p className="text-gray-600">
                  आजीवन सदस्य – संस्था में जो व्यक्ति दान के रूप में 11000 (ग्यारह हजार) रुपये या अधिक प्रतिवर्ष देकर आजीवन सदस्य बन सकता है दान राशि प्रतिवर्ष जमा करना अनिवार्य है।

साधारण सदस्य – संस्था में जो व्यक्ति दान के रूप में 5000 (पाँच हजार) रुपये या अधिक प्रतिवर्ष देकर साधारण सदस्य बन सकता है दान राशि प्रतिवर्ष जमा करना अनिवार्य है।

सहयोगी सदस्य – वह कोई भी व्यक्ति जो समिति के उद्देश्य को प्रियहित हेतु श्रद्धा अनुसार दान/सामग्री, श्रम आदि अथवा अन्य किसी रूप में समिति को सहयोग प्रदान करे।

6. सदस्यता की योग्यता – कोई भी व्यक्ति जो समिति के उद्देश्य से प्रति निष्ठावान हो समिति का सदस्य बनने की योग्यता रखता है।

7. सदस्यता की समाप्ति – यदि कोई सदस्य समिति की सदस्यता को समाप्त करना चाहे तो लिखित रूप में सचिव को सूचित कर सकता है एवं पूर्व प्रदत्त सदस्यता का पूर्ण मास समाप्ति तिथि के साथ समाप्त की जाएगी।

8. सदस्यता की समाप्ति – संस्था की सदस्यता निम्नलिखित कारणों से समाप्त हो जाएगी।
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">हमारी यात्रा</h3>
                <p className="text-gray-600">
                  "श्री राधा कृष्ण गौ सेवा संस्थान" की स्थापना वर्ष 2021 में एक पवित्र संकल्प के साथ की गई थी – गौ माता की सेवा, संरक्षण और संवर्धन के उद्देश्य से। यह संस्था न सिर्फ एक संगठन है, बल्कि एक भावना है, एक आंदोलन है, जो समाज को गौ माता के प्रति अपने कर्तव्यों और संस्कारों की ओर लौटने के लिए प्रेरित करता है।

संस्थान की यात्रा छोटे प्रयासों से शुरू हुई – कुछ घायल और लावारिस गायों को आश्रय देने से लेकर उन्हें चारा-पानी और उपचार की व्यवस्था तक। धीरे-धीरे यह प्रयास एक सेवा अभियान में बदल गया, जिसे क्षेत्रीय जनसमुदाय का सहयोग और आशीर्वाद प्राप्त होता गया।
श्री राधा कृष्ण गौ सेवा संस्थान एक गैर-लाभकारी संस्था (Non-Profit Organization) है। इसका उद्देश्य कमाई करना नहीं, सेवा करना है। हमारा हर कार्य समाज हित और गौ सेवा के लिए समर्पित है।

यह संस्था पूरी तरह से दान, सेवा और समाज के सहयोग से चलती है। कोई भी व्यक्ति अपनी श्रद्धा और सामर्थ्य के अनुसार दान, सामग्री सहयोग या स्वयंसेवा (Volunteering) के रूप में सहयोग करता है।

👉 हमारे कुछ मुख्य बिंदु जो संस्था को खास बनाते हैं:
कोई भी सदस्यता व्यापारिक उद्देश्य से नहीं दी जाती, बल्कि सेवा भाव से जोड़ने हेतु दी जाती है।

हम सरकारी सहायता या अनुदान की अपेक्षा नहीं करते — संस्था जनसहयोग से ही संचालित होती है।

हर दान पारदर्शिता से खर्च किया जाता है — चारे, दवाइयों, आश्रय निर्माण, पानी और सफाई में।

संस्था के सदस्य एवं कार्यकर्ता वेतन नहीं लेते, वे इसे धार्मिक कर्तव्य मानकर सेवा करते हैं।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">हमारी टीम</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                हमारे संस्थान के समर्पित सदस्य जो गौ माता की सेवा में अपना जीवन समर्पित कर रहे हैं।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="श्री रामकृष्ण शर्मा"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-orange-600">श्री गिरधर गोपाल शर्मा </h3>
                <p className="text-sm text-green-600 mb-3">संरक्षक एवं मार्गदर्शक</p>
                <p className="text-gray-600 text-sm">
                  30 वर्षों से गौ सेवा में समर्पित, श्री शर्मा जी ने 2005 में इस संस्थान की स्थापना की और तब से हजारों गायों की रक्षा की है।
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="radhemeena.jpg"
                    alt="डॉ. सुनीता देवी"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-orange-600">श्री राधेश्याम मीना </h3>
                <p className="text-sm text-green-600 mb-3"> अध्यक्ष</p>
                <p className="text-gray-600 text-sm">
                  15 वर्षों के अनुभव के साथ, डॉ. देवी हमारी गौशाला में सभी गायों के स्वास्थ्य और कल्याण की देखभाल करती हैं।
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="ojhaaa.jpg"
                    alt="श्री गोपाल कृष्ण गोयल"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-orange-600"> श्री राधेश्याम ओझा</h3>
                <p className="text-sm text-green-600 mb-3">उपाध्यक्ष</p>
                <p className="text-gray-600 text-sm">
                  एक अनुभवी वित्तीय विशेषज्ञ, श्री गोयल संस्थान के वित्तीय मामलों का प्रबंधन करते हैं और पारदर्शिता सुनिश्चित करते हैं।
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="श्रीमती राधिका वर्मा"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-orange-600"> श्री सुमेर सिंह किरार</h3>
                <p className="text-sm text-green-600 mb-3">कोषाध्यक्ष</p>
                <p className="text-gray-600 text-sm">
                  श्रीमती वर्मा हमारे 200+ स्वयंसेवकों का प्रबंधन करती हैं और गौशाला में दैनिक गतिविधियों का समन्वय करती हैं।
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="श्रीमती राधिका वर्मा"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-orange-600"> डॉ. जितेन्द्र जैन</h3>
                <p className="text-sm text-green-600 mb-3">सचिव</p>
                <p className="text-gray-600 text-sm">
                  श्रीमती वर्मा हमारे 200+ स्वयंसेवकों का प्रबंधन करती हैं और गौशाला में दैनिक गतिविधियों का समन्वय करती हैं।
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="श्रीमती राधिका वर्मा"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-orange-600"> श्री रघुवीर सिंह केवट</h3>
                <p className="text-sm text-green-600 mb-3">स्वयंसेवक समन्वयक</p>
                <p className="text-gray-600 text-sm">
                  श्रीमती वर्मा हमारे 200+ स्वयंसेवकों का प्रबंधन करती हैं और गौशाला में दैनिक गतिविधियों का समन्वय करती हैं।
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="श्रीमती राधिका वर्मा"
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-orange-600"> श्री गिरधर गोपाल मीना</h3>
                <p className="text-sm text-green-600 mb-3">स्थायी सदस्य</p>
                <p className="text-gray-600 text-sm">
                  श्रीमती वर्मा हमारे 200+ स्वयंसेवकों का प्रबंधन करती हैं और गौशाला में दैनिक गतिविधियों का समन्वय करती हैं।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">हमारी सेवाएं</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                हम विभिन्न सेवाओं और कार्यक्रमों के माध्यम से गायों के लिए व्यापक देखभाल और संरक्षण प्रदान करते हैं।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <div className="aspect-video relative">
                  <Image src="/placeholder.svg?height=300&width=600" alt="Cow shelter" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">गौ आश्रय और देखभाल (गौशाला)</h3>
                  <p className="text-gray-600 mb-4">
                    हम त्यागी गई, घायल और बूढ़ी गायों के लिए एक सुरक्षित आश्रय प्रदान करते हैं, उन्हें हमारी विशेष रूप से डिज़ाइन की गई
                    गौशाला में भोजन, आश्रय और प्यार देते हैं।
                  </p>
                  <Link href="#" className="text-orange-600 font-medium flex items-center hover:underline">
                    अधिक जानें <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-green-100 hover:border-green-300 transition-colors">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Medical treatment"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-600">गायों के लिए चिकित्सा उपचार</h3>
                  <p className="text-gray-600 mb-4">
                    हमारी पशु चिकित्सकों की टीम नियमित जांच, आपातकालीन देखभाल और विशेष उपचार प्रदान करती है ताकि हमारी गायों का
                    स्वास्थ्य सुनिश्चित हो सके।
                  </p>
                  <Link href="#" className="text-green-600 font-medium flex items-center hover:underline">
                    अधिक जानें <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-green-100 hover:border-green-300 transition-colors">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Awareness campaigns"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-600">जागरूकता अभियान</h3>
                  <p className="text-gray-600 mb-4">
                    हम समाज में गौ संरक्षण और कल्याण के महत्व के बारे में जागरूकता बढ़ाने के लिए शैक्षिक कार्यक्रम और अभियान चलाते हैं।
                  </p>
                  <Link href="#" className="text-green-600 font-medium flex items-center hover:underline">
                    अधिक जानें <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Volunteer programs"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">स्वयंसेवक कार्यक्रम</h3>
                  <p className="text-gray-600 mb-4">
                    हमारे स्वयंसेवक कार्यक्रमों में शामिल होकर हमारी गौशाला में गौ देखभाल, खिलाने और रखरखाव गतिविधियों में सीधे भाग लें।
                  </p>
                  <Link href="#" className="text-orange-600 font-medium flex items-center hover:underline">
                    अधिक जानें <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Section*/}
        <section id="donate" className="py-16 bg-gradient-to-r from-orange-50 to-green-50">
         <div className="container">{/*
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">हमारे कार्य का समर्थन करें</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                आपके उदार योगदान से हम अपनी प्यारी गायों को भोजन, आश्रय और चिकित्सा देखभाल प्रदान कर पाते हैं।
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-orange-600">आपके दान का प्रभाव</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-orange-600 font-bold">₹500</span>
                    </div>
                    <div>
                      <h4 className="font-medium">एक गाय को एक सप्ताह तक खिलाता है</h4>
                      <p className="text-gray-600 text-sm">पौष्टिक चारा और पूरक आहार प्रदान करता है</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-orange-600 font-bold">₹2000</span>
                    </div>
                    <div>
                      <h4 className="font-medium">एक गाय के लिए चिकित्सा देखभाल</h4>
                      <p className="text-gray-600 text-sm">नियमित जांच और बुनियादी उपचार को कवर करता है</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-orange-600 font-bold">₹5000</span>
                    </div>
                    <div>
                      <h4 className="font-medium">एक महीने के लिए एक गाय को प्रायोजित करें</h4>
                      <p className="text-gray-600 text-sm">भोजन, आश्रय और देखभाल सहित सभी खर्चों को कवर करता है</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-orange-600 font-bold">₹25000</span>
                    </div>
                    <div>
                      <h4 className="font-medium">एक वर्ष के लिए एक गाय को गोद लें</h4>
                      <p className="text-gray-600 text-sm">आपकी गोद ली गई गाय पर नियमित अपडेट के साथ पूर्ण प्रायोजन</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="bg-green-50 p-2 rounded flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">100% पारदर्शिता</span>
                  </div>

                  <div className="bg-green-50 p-2 rounded flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">रसीद प्रदान की जाती है</span>
                  </div>

                  <div className="bg-green-50 p-2 rounded flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">कर लाभ</span>
                  </div>
                </div>
              </div>

              
            </div>*/}
             <DonationForm />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">फोटो और वीडियो गैलरी</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                हमारी गौशाला, हमारी देखभाल वाली गायों और हमारे द्वारा आयोजित गतिविधियों की झलक।
              </p>
            </div>

            <Gallery />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-orange-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">प्रशंसापत्र</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                हमारी गौशाला के साथ अपने अनुभवों के बारे में हमारे स्वयंसेवकों, दानदाताओं और समर्थकों से सुनें।
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Get Involved Section */}
        <section id="involved" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">जुड़ें</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">गौ संरक्षण और कल्याण के हमारे मिशन में योगदान देने के कई तरीके हैं।</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">स्वयंसेवक बनें</h3>
                  <p className="text-gray-600 mb-4">
                    गौशाला में दैनिक गतिविधियों में मदद करने के लिए हमारे समर्पित स्वयंसेवकों की टीम में शामिल हों।
                  </p>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full">
                    स्वयंसेवक के रूप में जुड़ें
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-green-600">एक गाय को गोद लें</h3>
                  <p className="text-gray-600 mb-4">
                    एक गाय की पूरी देखभाल को प्रायोजित करें और अपनी गोद ली गई गाय के बारे में नियमित अपडेट प्राप्त करें।
                  </p>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
                    अभी गोद लें
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">चारा प्रायोजित करें</h3>
                  <p className="text-gray-600 mb-4">
                    एक बार या नियमित आधार पर हमारी गायों की दैनिक आहार आवश्यकताओं के लिए योगदान दें।
                  </p>
                  <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full">
                    अभी प्रायोजित करें
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-green-600">जागरूकता फैलाएं</h3>
                  <p className="text-gray-600 mb-4">
                    सोशल मीडिया और अपने समुदाय में हमारे काम को साझा करके गौ संरक्षण का संदेश फैलाने में हमारी मदद करें।
                  </p>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full">
                    कैसे करें जानें
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-orange-50 to-green-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">संपर्क करें</h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                किसी भी जानकारी, प्रतिक्रिया या हमारी गौशाला का दौरा करने के लिए हमसे संपर्क करें।
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-orange-600">हमारा स्थान</h3>
                  <p className="text-gray-600 mb-2 font-semibold">श्री राधाकृष्ण गौसेवा संस्थान</p>
                  <p className="text-gray-600 mb-1">
सीएम राइज़ स्कूल के सामने, वार्ड क्रमांक 14 ,डोंगर
</p>
                  <p className="text-gray-600 mb-1">नगरपालिका राघौगढ़, तहसील राघौगढ़
जिला – गुना (मध्य प्रदेश) पिन कोड – 473111</p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">लैंडमार्क:सीएम राइज़ स्कूल के सामने</span>
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-orange-600">पहुंचने के निर्देश</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <span className="font-medium">रेलवे स्टेशन से:</span> मथुरा जंक्शन से ऑटो या टैक्सी द्वारा 15 मिनट की दूरी पर
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">बस स्टैंड से:</span> मथुरा बस स्टैंड से 10 मिनट की दूरी पर
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">दिल्ली से:</span> NH-2 मार्ग से लगभग 3.5 घंटे की दूरी पर
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-orange-600">संपर्क जानकारी</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 flex items-center">
                      <svg
                        className="h-5 w-5 mr-2 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      +91 98765 43210, +91 98765 43211
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <svg
                        className="h-5 w-5 mr-2 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      info@radhakrishnagauseva.org
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <svg
                        className="h-5 w-5 mr-2 text-orange-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      दर्शन समय: सुबह 6:00 बजे से शाम 7:00 बजे तक (प्रतिदिन)
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md h-64 md:h-80">
                  {/* Google Map Embed Placeholder */}
                  <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1293.6734978880284!2d77.12697122330904!3d24.493685499286727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397af96a62b6e121%3A0xc06bedfba5b1b238!2z4KS24KWN4KSw4KWAIOCksOCkvuCkp-CkvuCkleClg-Ckt-CljeCkoyDgpJfgpYvgpLjgpYfgpLXgpL4g4KS44KSC4KS44KWN4KSl4KS-4KSoIOCkoeCli-CkguCkl-CksCDgpLDgpL7gpJjgpYzgpJfgpKLgpLw!5e1!3m2!1sen!2sin!4v1747224497790!5m2!1sen!2sin" 
      
    className="w-full h-full bg-gray-200 rounded flex items-center justify-center"></iframe>
                    
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-orange-600">हमें संदेश भेजें</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        आपका नाम
                      </label>
                      <Input id="name" placeholder="अपना नाम दर्ज करें" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        ईमेल पता
                      </label>
                      <Input id="email" type="email" placeholder="अपना ईमेल दर्ज करें" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      विषय
                    </label>
                    <Input id="subject" placeholder="विषय दर्ज करें" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      संदेश
                    </label>
                    <Textarea id="message" placeholder="अपना संदेश दर्ज करें" className="min-h-[120px]" />
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700">संदेश भेजें</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">संस्थान के बारे में</h3>
              <p className="text-orange-200 mb-4">
                राधा कृष्ण गौ सेवा संस्थान प्रेम, देखभाल और आध्यात्मिक भक्ति के माध्यम से गायों के संरक्षण और कल्याण के लिए समर्पित है।
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-orange-200">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">फेसबुक</span>
                </Link>
                <Link href="#" className="text-white hover:text-orange-200">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">इंस्टाग्राम</span>
                </Link>
                <Link href="#" className="text-white hover:text-orange-200">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">ट्विटर</span>
                </Link>
                <Link href="#" className="text-white hover:text-orange-200">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">यूट्यूब</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">त्वरित लिंक</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-orange-200 hover:text-white transition-colors">
                    हमारे बारे में
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-orange-200 hover:text-white transition-colors">
                    हमारी सेवाएं
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-orange-200 hover:text-white transition-colors">
                    हमारी टीम
                  </Link>
                </li>
                <li>
                  <Link href="#donate" className="text-orange-200 hover:text-white transition-colors">
                    दान करें
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-orange-200 hover:text-white transition-colors">
                    गैलरी
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-orange-200 hover:text-white transition-colors">
                    संपर्क करें
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">जुड़ें</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-orange-200 hover:text-white transition-colors">
                    स्वयंसेवक बनें
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-orange-200 hover:text-white transition-colors">
                    एक गाय को गोद लें
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-orange-200 hover:text-white transition-colors">
                    चारा प्रायोजित करें
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-orange-200 hover:text-white transition-colors">
                    जागरूकता फैलाएं
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-orange-200 hover:text-white transition-colors">
                    कॉर्पोरेट साझेदारी
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">न्यूज़लेटर</h3>
              <p className="text-orange-200 mb-4">
                हमारी गतिविधियों और कार्यक्रमों के बारे में अपडेट प्राप्त करने के लिए हमारे न्यूज़लेटर की सदस्यता लें।
              </p>
              <form className="space-y-2">
                <Input
                  placeholder="आपका ईमेल पता"
                  className="bg-orange-800 border-orange-700 text-white placeholder:text-orange-300"
                />
                <Button className="w-full bg-orange-600 hover:bg-orange-700">सदस्यता लें</Button>
              </form>
            </div>
          </div>

          <div className="border-t border-orange-800 pt-6 text-center">
            <p className="text-orange-200">
              &copy; {new Date().getFullYear()} राधाकृष्ण गौ सेवा संस्थान। सर्वाधिकार सुरक्षित।
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
