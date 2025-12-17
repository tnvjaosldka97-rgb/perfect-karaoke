import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, Star, Users, Clock, CheckCircle2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import SEO from "@/components/SEO";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
    "/images/slide6.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO />
      {/* Hero Section with Image Slider */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Slider */}
        <div className="absolute inset-0 z-0" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((src, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-full min-w-0">
                <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
                <img
                  src={src}
                  alt={`Gangnam Perfect Karaoke Interior ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4 pt-20">
          <div className={`transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h2 className="text-primary font-bold tracking-widest mb-4 text-sm md:text-base uppercase">강남 프리미엄 노래방 추천 1위</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              강남가라오케의 중심  

              <span className="text-gold-gradient">퍼펙트 가라오케</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              강남 최고급 시설과 합리적인 정찰제 가격으로 모십니다.<br className="hidden md:block" />
              비즈니스 접대부터 프라이빗한 파티까지 완벽한 시간을 약속드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservation">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto w-full sm:w-auto">
                  지금 바로 예약하기
                </Button>
              </Link>
              <Link href="/system">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6 h-auto w-full sm:w-auto">
                  시스템 및 가격 확인
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-widest">Scroll Down</span>
              <ChevronDown className="h-6 w-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border border-white/5 p-8 rounded-xl text-center hover:border-primary/30 transition-colors group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">정찰제 가격</h3>
              <p className="text-gray-400 leading-relaxed">
                추가금 없는 투명한 가격 정책으로  

                신뢰할 수 있는 서비스를 제공합니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-white/5 p-8 rounded-xl text-center hover:border-primary/30 transition-colors group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">강남 최대 규모</h3>
              <p className="text-gray-400 leading-relaxed">
                50개 이상의 다양한 컨셉 룸 완비.  

                소규모 모임부터 대형 회식까지 가능합니다.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-white/5 p-8 rounded-xl text-center hover:border-primary/30 transition-colors group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24시간 운영</h3>
              <p className="text-gray-400 leading-relaxed">
                언제든지 편하게 문의주세요.  

                항상 친절하게 모시겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Performance & Casting Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-accent font-bold tracking-widest mb-2 uppercase animate-pulse">Special Event</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              화려한 <span className="text-gold-gradient">퍼포먼스 & 캐스팅</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              매일 밤 펼쳐지는 전문 댄스팀의 환상적인 공연과  

              강남 최고의 퀄리티를 자랑하는 캐스팅 라인업을 만나보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Performance Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-primary/30 neon-box">
              <div className="aspect-[4/3] bg-gray-900 relative">
                {/* Placeholder for Dance Team Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-black">
                  <span className="text-white/50 text-lg">댄스팀 공연 이미지 영역</span>
                </div>
                <img 
                  src="/images/slide4.jpg" 
                  alt="Special Dance Performance" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 neon-text">Special Dance Team</h3>
                <p className="text-gray-300">눈을 뗄 수 없는 화려한 무대 매너와 퍼포먼스</p>
              </div>
            </div>

            {/* Casting Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-accent/30 neon-box">
              <div className="aspect-[4/3] bg-gray-900 relative">
                {/* Placeholder for Casting Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-900/50 to-black">
                  <span className="text-white/50 text-lg">캐스팅/아가씨 이미지 영역</span>
                </div>
                <img 
                  src="/images/slide5.jpg" 
                  alt="Premium Casting Lineup" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 neon-text">Premium Casting</h3>
                <p className="text-gray-300">엄격한 기준으로 선발된 최고의 라인업</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black font-bold px-8">
                갤러리 더 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-secondary/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl neon-box">
                <img src="/images/slide2.jpg" alt="Perfect Karaoke Interior" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-lg">Luxury Interior Design</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-primary font-bold tracking-widest mb-2 uppercase">Why Choose Us</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                퍼펙트 가라오케만의  

                <span className="text-gold-gradient">특별한 가치</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                단순한 유흥 공간을 넘어, 귀하의 품격에 맞는 최고의 서비스를 제공합니다. 
                최신 음향 시설과 고급스러운 인테리어, 그리고 철저한 직원 교육을 통해 
                강남가라오케를 찾으시는 모든 분들께 잊지 못할 추억을 선사합니다.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>최신식 음향 시스템 및 대형 모니터 완비</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>프라이버시가 보장되는 독립된 룸 구조</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>엄선된 주류 라인업과 고품격 안주</span>
                </li>
              </ul>
              <Link href="/about">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                  자세히 알아보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/slide3.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            오늘 밤, <span className="text-primary">퍼펙트</span>한 시간을 예약하세요
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            망설이지 마시고 지금 바로 연락주세요. 인원, 예산, 목적에 맞춰 가장 알맞은 룸과 코스를 추천해 드립니다.
          </p>
          <Link href="/reservation">
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-xl px-10 py-8 h-auto rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all">
              예약 및 문의하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
