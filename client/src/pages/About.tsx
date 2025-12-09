import { CheckCircle2, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <SEO 
        title="가게소개" 
        description="강남 퍼펙트 가라오케 소개. 강남 최대 규모, 투명한 정찰제, 최고의 시설과 서비스를 약속드립니다."
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/slide4.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ABOUT <span className="text-gold-gradient">US</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            강남 퍼펙트 가라오케는 고객님의 소중한 시간을<br />
            가장 완벽하게 만들어 드리는 프리미엄 공간입니다.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                강남 최대 규모, 최고의 시설<br />
                <span className="text-primary">퍼펙트 가라오케</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  안녕하세요. 강남 퍼펙트 가라오케를 찾아주신 고객 여러분께 진심으로 감사드립니다.
                  저희 퍼펙트 가라오케는 강남 중심가에 위치한 최대 규모의 정통 가라오케로서,
                  오랜 기간 동안 수많은 고객님들의 사랑을 받아왔습니다.
                </p>
                <p>
                  단순히 술과 노래를 즐기는 공간을 넘어, 비즈니스 성공을 위한 파트너이자
                  지인들과의 소중한 추억을 만드는 공간이 되고자 노력하고 있습니다.
                  최신 음향 시설과 고급스러운 인테리어, 그리고 철저한 직원 교육을 통해
                  어떤 자리에나 어울리는 품격 있는 서비스를 제공합니다.
                </p>
                <p>
                  특히, <strong className="text-white">투명한 정찰제 가격 시스템</strong>을 도입하여
                  고객님들께서 가격에 대한 부담이나 의구심 없이 오직 즐거운 시간에만 집중하실 수 있도록 했습니다.
                  거품 없는 가격과 정직한 서비스로 모시겠습니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/slide1.jpg" alt="Interior 1" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <img src="/images/slide5.jpg" alt="Interior 2" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">CORE VALUES</h2>
            <p className="text-gray-400">퍼펙트 가라오케가 지키는 4가지 약속</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">정직 (Honesty)</h3>
              <p className="text-gray-400 text-sm">
                투명한 정찰제 운영으로<br />
                신뢰를 최우선으로 합니다.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">최고 (Best)</h3>
              <p className="text-gray-400 text-sm">
                강남 최고의 시설과<br />
                최상의 룸 컨디션을 유지합니다.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <HeartHandshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">감동 (Touching)</h3>
              <p className="text-gray-400 text-sm">
                고객 한 분 한 분께<br />
                진심을 담은 서비스를 제공합니다.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-white/5 hover:border-primary/50 transition-colors text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">완벽 (Perfect)</h3>
              <p className="text-gray-400 text-sm">
                예약부터 귀가하시는 순간까지<br />
                완벽한 케어를 약속합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
