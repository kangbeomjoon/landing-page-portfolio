"use client";

import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("brand-story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-amber-800 via-orange-700 to-red-800"
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="container-max section-padding text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 메인 헤드라인 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            정통 터키의 맛을
            <br />
            <span className="text-secondary">당신의 도시에서</span>
          </h1>

          {/* 서브 헤드라인 */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
            50년 전통의 레시피로 만드는 프리미엄 케밥
            <br />
            이제 당신도 KEBAB HOUSE의 파트너가 되어보세요
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button
              onClick={() => {
                const franchiseSection = document.getElementById("franchise");
                if (franchiseSection) {
                  franchiseSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              가맹 문의하기
            </button>
            <button
              onClick={() => {
                const menuSection = document.getElementById("menu");
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-secondary text-lg px-8 py-4"
            >
              메뉴 보기
            </button>
          </div>

          {/* 통계 정보 */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                150+
              </div>
              <div className="text-sm md:text-base opacity-80">전국 매장</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                50년
              </div>
              <div className="text-sm md:text-base opacity-80">전통 레시피</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                98%
              </div>
              <div className="text-sm md:text-base opacity-80">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-secondary transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
