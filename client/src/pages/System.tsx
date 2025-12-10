import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function System() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <SEO 
        title="시스템 및 가격" 
        description="강남 퍼펙트 가라오케 가격 및 시스템 안내. 투명한 정찰제 가격표, 주대 및 코스별 상세 가격 확인."
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/slide3.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            SYSTEM & <span className="text-primary">PRICE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            투명하고 합리적인 정찰제 가격 시스템<br />
            추가 비용 걱정 없이 즐거운 시간만 생각하세요.
          </p>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">PRICE LIST</h2>
            <p className="text-gray-400">
              ※ 아래 가격은 기본 예시이며, 인원 수와 상황에 따라 변동될 수 있습니다.<br />
              정확한 견적은 전화 문의 주시면 친절하게 안내해 드립니다.
            </p>
          </div>

          <div className="bg-card border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,0,255,0.15)] relative neon-box">
            {/* Decorative elements for more flashy look */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></div>
            <div className="absolute -left-10 top-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 bottom-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-primary font-bold text-lg py-6 text-center w-1/3">구분</TableHead>
                  <TableHead className="text-white font-bold text-lg py-6 text-center w-1/3">내용</TableHead>
                  <TableHead className="text-white font-bold text-lg py-6 text-center w-1/3">가격</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="font-medium text-white text-center py-6 text-lg">주대</TableCell>
                  <TableCell className="text-gray-300 text-center py-6">
                    위스키 12년산 1병<br />
                    + 맥주 + 음료 무제한<br />
                    + 진안주 모듬과일
                  </TableCell>
                  <TableCell className="text-primary font-bold text-center py-6 text-2xl neon-text">10만원</TableCell>
                </TableRow>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="font-medium text-white text-center py-6 text-lg">T/C (티시)</TableCell>
                  <TableCell className="text-gray-300 text-center py-6">
                    담당 매니저 케어<br />
                    (시간 제한 없음)
                  </TableCell>
                  <TableCell className="text-primary font-bold text-center py-6 text-2xl neon-text">12만원</TableCell>
                </TableRow>
                <TableRow className="border-white/10 hover:bg-white/5 transition-colors">
                  <TableCell className="font-medium text-white text-center py-6 text-lg">R/T (룸티)</TableCell>
                  <TableCell className="text-gray-300 text-center py-6">
                    VIP 룸 이용료<br />
                    (시간 제한 없음)
                  </TableCell>
                  <TableCell className="text-primary font-bold text-center py-6 text-2xl neon-text">5만원</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Special Event Section - Dance Team */}
          <div className="mt-16 relative overflow-hidden rounded-xl border border-primary/50 bg-black p-8 md:p-12 text-center shadow-[0_0_50px_rgba(255,0,255,0.2)] neon-box group">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/dance_team.png" 
                alt="Dance Team Performance" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-1 rounded-full border border-primary bg-primary/20 text-primary text-sm font-bold mb-4 animate-pulse shadow-[0_0_10px_rgba(255,0,255,0.5)]">
                SPECIAL EVENT
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white neon-text">화려한 댄스팀 공연</span>
              </h3>
              <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                매일 밤 펼쳐지는 전문 댄스팀의 환상적인 퍼포먼스!<br />
                강남 퍼펙트 가라오케에서만 즐길 수 있는 특별한 무대를 경험하세요.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-black/50 backdrop-blur-sm border border-primary/30 rounded-lg shadow-[0_0_15px_rgba(255,0,255,0.1)]">
                  <span className="block text-primary font-bold text-lg">매일 밤</span>
                  <span className="text-sm text-gray-400">상시 공연 진행</span>
                </div>
                <div className="px-6 py-3 bg-black/50 backdrop-blur-sm border border-primary/30 rounded-lg shadow-[0_0_15px_rgba(255,0,255,0.1)]">
                  <span className="block text-primary font-bold text-lg">다양한 장르</span>
                  <span className="text-sm text-gray-400">K-POP, 힙합, 퍼포먼스</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link href="/reservation">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold px-8 shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all">
                실시간 견적 문의하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* System Process */}
      <section className="py-20 bg-secondary/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">HOW TO ENJOY</h2>
            <p className="text-gray-400 mb-8">퍼펙트 가라오케 이용 안내</p>
            
            {/* New Banner Image */}
            <div className="w-full max-w-5xl mx-auto h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,0,255,0.2)] border border-primary/30 relative mb-12 group">
              <img 
                src="/images/choice_setting.png" 
                alt="How to Enjoy Banner" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 neon-text">Premium Service</h3>
                <p className="text-gray-300">최고의 시설과 서비스로 모십니다.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative group h-[350px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              <div className="absolute inset-0 bg-gray-900 group-hover:scale-110 transition-transform duration-700">
                <img src="/images/slide1.jpg" alt="예약 및 문의" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/90 absolute inset-0 z-10" />
              </div>
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="text-6xl font-bold text-white/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">01</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors neon-text">예약 및 문의</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  전화 또는 문자로 인원, 방문 시간, 원하시는 주류 등을 말씀해 주세요.
                  최적의 룸을 미리 준비해 드립니다.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group h-[350px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              <div className="absolute inset-0 bg-gray-800 group-hover:scale-110 transition-transform duration-700">
                <img src="/images/slide3.jpg" alt="방문 및 안내" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/90 absolute inset-0 z-10" />
              </div>
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="text-6xl font-bold text-white/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">02</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors neon-text">방문 및 안내</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  예약 시간에 맞춰 방문해 주시면 담당 매니저가 입구에서부터 친절하게 룸으로 안내해 드립니다.
                  (발렛 파킹 가능)
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group h-[350px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              <div className="absolute inset-0 bg-gray-900 group-hover:scale-110 transition-transform duration-700">
                <img src="/images/choice_setting.png" alt="초이스 및 세팅" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/90 absolute inset-0 z-10" />
              </div>
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="text-6xl font-bold text-white/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">03</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors neon-text">초이스 및 세팅</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  고객님의 취향에 맞는 분위기를 조성하고, 주문하신 주류와 안주를 신속하게 세팅해 드립니다.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group h-[350px] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]">
              <div className="absolute inset-0 bg-gray-800 group-hover:scale-110 transition-transform duration-700">
                <img src="/images/dance_team.png" alt="즐거운 시간" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/90 absolute inset-0 z-10" />
              </div>
              
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="text-6xl font-bold text-white/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">04</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors neon-text">즐거운 시간</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  최고의 음향 시설과 서비스 속에서 즐거운 시간을 보내세요.
                  필요한 것이 있다면 언제든 호출해 주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary/5 border border-primary/30 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-start shadow-[0_0_20px_rgba(255,0,255,0.1)]">
            <Info className="h-8 w-8 text-primary flex-shrink-0 mt-1 animate-pulse" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">꼭 확인해주세요!</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1" />
                  <span>미성년자는 출입이 절대 불가능합니다. (신분증 지참 필수)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1" />
                  <span>만취 고객은 입장이 제한될 수 있습니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1" />
                  <span>사전 예약 시 더 좋은 룸과 서비스를 제공받으실 수 있습니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
