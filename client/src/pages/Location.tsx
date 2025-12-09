import { MapPin, Phone, Car, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapView } from "@/components/Map";
import SEO from "@/components/SEO";

export default function Location() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <SEO 
        title="오시는 길" 
        description="강남 퍼펙트 가라오케 위치 안내. 강남역 11번, 12번 출구 도보 3분. 주차 및 발렛 파킹 가능."
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/slide6.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            LOCATION <span className="text-gold-gradient">INFO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            강남역 중심가에 위치하여 접근성이 뛰어납니다.<br />
            편안하게 방문하실 수 있도록 최선을 다해 안내해 드립니다.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative z-0">
              <MapView
                className="w-full h-full"
                onMapReady={(map: google.maps.Map) => {
                  // Gangnam Station coordinates
                  const center = { lat: 37.4979, lng: 127.0276 };
                  map.setCenter(center);
                  map.setZoom(16);
                  
                  new google.maps.Marker({
                    position: center,
                    map: map,
                    title: "강남 퍼펙트 가라오케",
                  });
                }}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-8">
                오시는 길 안내
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">주소 (Address)</h3>
                    <p className="text-gray-300 leading-relaxed">
                      서울 강남구 논현로 645 엘리에나 호텔 지하<br />
                      (강남역 11번, 12번 출구 도보 3분 거리)
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      ※ 상세 주소는 예약 시 문자로 정확하게 안내해 드립니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Train className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">대중교통 이용 시</h3>
                    <p className="text-gray-300 leading-relaxed">
                      지하철 2호선/신분당선 강남역 하차<br />
                      11번 또는 12번 출구로 나오셔서 도보 3분 거리입니다.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">자차 이용 시 (주차)</h3>
                    <p className="text-gray-300 leading-relaxed">
                      건물 내 발렛 파킹 서비스가 준비되어 있습니다.<br />
                      도착 5분 전에 연락 주시면 픽업 도와드립니다.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Link href="/reservation">
                    <Button size="lg" className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                      <Phone className="mr-2 h-5 w-5" />
                      길 안내 전화 연결하기
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
