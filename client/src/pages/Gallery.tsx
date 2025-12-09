import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ZoomIn } from "lucide-react";
import SEO from "@/components/SEO";

export default function Gallery() {
  const images = [
    { src: "/images/slide1.jpg", alt: "Luxury Room 1", category: "VIP ROOM" },
    { src: "/images/slide2.jpg", alt: "Luxury Room 2", category: "PARTY ROOM" },
    { src: "/images/slide3.jpg", alt: "Interior Detail 1", category: "INTERIOR" },
    { src: "/images/slide4.jpg", alt: "Interior Detail 2", category: "INTERIOR" },
    { src: "/images/slide5.jpg", alt: "Luxury Room 3", category: "VIP ROOM" },
    { src: "/images/slide6.jpg", alt: "Hallway", category: "FACILITY" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-background">
      <SEO 
        title="갤러리" 
        description="강남 퍼펙트 가라오케 룸 및 시설 사진. 고급스러운 인테리어와 최신 시설을 미리 확인하세요."
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/slide2.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            PHOTO <span className="text-gold-gradient">GALLERY</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            강남 퍼펙트 가라오케의 고급스러운 시설을 미리 확인하세요.<br />
            사진보다 실제가 더 아름다운 공간입니다.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-lg aspect-[4/3]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center">
                      <ZoomIn className="h-10 w-10 text-primary mb-2" />
                      <span className="text-white font-bold tracking-widest text-sm">{image.category}</span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-black/95 border-white/10 p-0 overflow-hidden">
                  <VisuallyHidden>
                    <DialogTitle>{image.alt}</DialogTitle>
                  </VisuallyHidden>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
