import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, Star, Users, Clock, CheckCircle2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";

export default function Home() {
  let { user, loading, error, isAuthenticated, logout } = useAuth();
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
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 z-0" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((src, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-full min-w-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                  src={src}
                  alt={`Gangnam Perfect Karaoke Interior ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4 pt-20">
          <div className={`transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h2 className="text-primary font-bold tracking-widest mb-4 text-sm md:text-base uppercase">강남가라오케 추천 1위</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              강남가라오케의 중심<br />
              <span className="text-gold-gradient">퍼펙트 가라오케</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              강남가라오케 중 최고의 시설과 합리적인 정찰제 가격으로 모십니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/reservation">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 py-6 h-auto w-full sm:w-auto">
                  지금 바로 예약하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section (사장님이 요청하신 문구 적용) */}
      <section className="py-16 bg-secondary/20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              강남가라오케 No.1 퍼펙트 – 시스템 및 예약 안내
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                강남의 중심에서 최고의 시설과 품격 있는 서비스를 제공하는 강남가라오케 퍼펙트입니다. 
                저희는 고객 한 분 한 분의 소중한 시간을 위해 투명한 정찰제와 최상의 룸 컨디션을 유지하고 있습니다.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-primary mb-4">■ 차별화된 시스템</h3>
                <ul className="space-y-3 pl-4">
                  <li><strong className="text-white">강남 최대 규모:</strong> 비즈니스 접대, 생일 파티, 단체 회식에 최적화되어 있습니다.</li>
                  <li><strong className="text-white">최첨단 음향 시설:</strong> 최고급 스피커와 최신 노래방 시스템을 도입하였습니다.</li>
                  <li><strong className="text-white">철저한 위생 관리:</strong> 매일 진행되는 방역과 청결 관리를 통해 쾌적합니다.</li>
                </ul>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-primary mb-4">■ 합리적인 가격 가이드</h3>
                <p>
                  강남가라오케 가격 부분을 투명하게 안내해 드립니다. 사전 예약 시 추가 혜택을 제공하고 있습니다.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-primary mb-4">■ 자주 묻는 질문 (FAQ)</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-white mb-1">Q: 혼자 방문해도 이용이 가능한가요?</p>
                    <p className="pl-4 text-gray-400">A: 네, 1인 예약 상담을 운영하고 있어 부담 없이 방문하실 수 있습니다.</p>
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">Q: 주차 공간이 넉넉한가요?</p>
                    <p className="pl-4 text-gray-400">A: 전문 발렛 파킹 서비스를 지원하여 편리한 방문이 가능합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
