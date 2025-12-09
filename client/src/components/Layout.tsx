import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SYSTEM", path: "/system" },
    { name: "GALLERY", path: "/gallery" },
    { name: "LOCATION", path: "/location" },
    { name: "RESERVATION", path: "/reservation" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg border-b border-white/10" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
            <span className="text-gold-gradient">PERFECT</span> KARAOKE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-white/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/reservation">
              <Button variant="default" className="bg-primary text-black hover:bg-primary/90 font-bold">
                예약문의
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 border-l border-white/10 text-white w-[300px]">
                <VisuallyHidden>
                  <SheetTitle>모바일 메뉴</SheetTitle>
                </VisuallyHidden>
                <div className="flex flex-col gap-8 mt-10">
                  {navItems.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.path}
                      className={`text-xl font-medium transition-colors hover:text-primary ${
                        location === item.path ? "text-primary" : "text-white/80"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/reservation">
                    <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                      예약문의 바로가기
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                <span className="text-primary">PERFECT</span> KARAOKE
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                강남 최고의 시설과 서비스를 자랑하는 퍼펙트 가라오케입니다.
                정직한 가격과 투명한 시스템으로 모시겠습니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">CONTACT US</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>010-2603-5238 (24시간 문의)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold text-xs bg-primary/10 px-1 rounded">KAKAO</span>
                  <span>amm1929</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>서울 강남구 논현로 645 엘리에나 호텔 지하</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>연중무휴 24시간 영업</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">QUICK LINKS</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <Link href="/about" className="hover:text-primary transition-colors">가게소개</Link>
                <Link href="/system" className="hover:text-primary transition-colors">시스템/가격</Link>
                <Link href="/gallery" className="hover:text-primary transition-colors">갤러리</Link>
                <Link href="/location" className="hover:text-primary transition-colors">오시는길</Link>
                <Link href="/reservation" className="hover:text-primary transition-colors">예약문의</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Gangnam Perfect Karaoke. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
