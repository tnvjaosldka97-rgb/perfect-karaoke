import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <Card className="w-full max-w-lg mx-4 shadow-[0_0_30px_rgba(255,0,255,0.2)] border border-primary/30 bg-black/80 backdrop-blur-sm relative z-10 neon-box">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
              <AlertCircle className="relative h-20 w-20 text-primary drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]" />
            </div>
          </div>

          <h1 className="text-6xl font-bold text-white mb-4 neon-text">404</h1>

          <h2 className="text-2xl font-semibold text-white mb-6">
            페이지를 찾을 수 없습니다
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed text-lg">
            요청하신 페이지가 존재하지 않거나,<br />
            이동 또는 삭제되었습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 rounded-xl transition-all duration-200 shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] text-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              홈으로 돌아가기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
