import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = "강남가라오케 퍼펙트 | 1위 업소, 정찰제 가격, 24시간 예약", 
  description = "강남가라오케 1등 업소 퍼펙트 가라오케입니다. 강남역 인근 최대 규모 룸 완비, 투명한 정찰제 가격(주대 10만/TC 12만), 24시간 예약 및 픽업 서비스 제공. 댄스팀 공연과 최고의 시설로 모십니다.",
  keywords = "강남가라오케, 강남퍼펙트, 퍼펙트가라오케, 강남역가라오케, 강남룸싸롱, 강남노래방, 강남회식장소, 강남접대, 강남24시가라오케, 강남가라오케가격, 강남가라오케예약, 강남가라오케위치, 강남가라오케추천, 강남가라오케주대, 강남퍼펙트가라오케",
  image = "/images/slide1.jpg",
  url = ""
}: SEOProps) {
  const siteUrl = "https://gangnam-perfect-karaoke.vercel.app"; // 배포 후 실제 도메인으로 변경 권장
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullTitle = title.includes("강남가라오케") ? title : `강남가라오케 ${title} | 퍼펙트`;

  // 구조화된 데이터 (JSON-LD) - LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NightClub", // 또는 EntertainmentBusiness
    "name": "강남 퍼펙트 가라오케",
    "image": [
      `${siteUrl}/images/slide1.jpg`,
      `${siteUrl}/images/slide2.jpg`,
      `${siteUrl}/images/slide3.jpg`
    ],
    "description": "강남 최대 규모와 최고의 시설을 자랑하는 퍼펙트 가라오케입니다. 정찰제 가격과 24시간 예약 시스템으로 운영됩니다.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "강남구 테헤란로",
      "addressLocality": "Seoul",
      "addressRegion": "Seoul",
      "postalCode": "06164",
      "addressCountry": "KR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.5113, 
      "longitude": 127.0314
    },
    "url": siteUrl,
    "telephone": "+82-10-4892-5533",
    "priceRange": "₩100,000 - ₩300,000",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "18:00",
        "closes": "06:00"
      }
    ],
    "servesCuisine": "Drinks, Snacks",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "KRW"
  };

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="강남 퍼펙트 가라오케" />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />

      {/* 구조화된 데이터 (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
