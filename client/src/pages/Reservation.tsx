import { Phone, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function Reservation() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <SEO 
        title="예약문의" 
        description="강남 퍼펙트 가라오케 24시간 예약 문의. 전화, 문자, 카카오톡으로 간편하게 예약하세요."
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/slide5.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            RESERVATION <span className="text-primary">CONTACT</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            24시간 언제든지 편하게 문의주세요.<br />
            친절하고 상세하게 안내해 드리겠습니다.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex justify-center mb-16">
            {/* Phone Contact */}
            <div className="w-full max-w-md bg-card border border-white/10 rounded-2xl p-10 text-center hover:border-primary/50 transition-all shadow-2xl group neon-box">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/20 transition-colors shadow-[0_0_15px_rgba(255,0,255,0.3)]">
                <Phone className="h-10 w-10 text-primary animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">전화 문의</h2>
              <p className="text-gray-400 mb-8">
                가장 빠르고 정확한 상담이 가능합니다.<br />
                터치 한 번으로 바로 연결하세요.
              </p>
              <a href="tel:010-2603-5238">
                <Button size="lg" className="w-full bg-primary text-black hover:bg-primary/90 font-bold text-xl py-8 rounded-xl shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] transition-all">
                  010-2603-5238
                </Button>
              </a>
            </div>
          </div>

          {/* Reservation Guide */}
          <div className="bg-secondary/20 border border-white/5 rounded-2xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-bold text-white mb-8 text-center neon-text">
              <Clock className="inline-block mr-2 h-6 w-6 text-primary" />
              예약 시 참고사항
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">인원 수 체크</h4>
                  <p className="text-gray-400 text-sm">
                    방문하시는 정확한 인원 수를 말씀해 주시면, 가장 쾌적하고 알맞은 크기의 룸으로 배정해 드립니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">방문 시간 준수</h4>
                  <p className="text-gray-400 text-sm">
                    예약 시간보다 10분 이상 늦으실 경우 미리 연락 부탁드립니다. (노쇼 방지를 위해 예약이 취소될 수 있습니다.)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">선호 스타일 요청</h4>
                  <p className="text-gray-400 text-sm">
                    원하시는 분위기나 특별히 선호하는 주류가 있다면 예약 시 미리 말씀해 주세요. 완벽하게 준비해 놓겠습니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">픽업 서비스</h4>
                  <p className="text-gray-400 text-sm">
                    강남 인근 지역 픽업이 필요하신 경우, 예약 시 미리 요청해 주시면 차량 배차 가능 여부를 확인해 드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
