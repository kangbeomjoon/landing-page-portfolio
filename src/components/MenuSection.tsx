"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Clock, Flame } from "lucide-react";

const MenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("signature");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "signature", name: "시그니처" },
    { id: "classic", name: "클래식" },
    { id: "premium", name: "프리미엄" },
    { id: "side", name: "사이드" },
  ];

  const menuItems = {
    signature: [
      {
        name: "터키안 디라이트 케밥",
        description:
          "50년 전통 레시피로 만든 대표 메뉴. 부드러운 양고기와 비밀 소스의 완벽한 조화",
        price: "₩15,900",
        image: "🥙",
        isPopular: true,
        spicyLevel: 2,
        cookTime: "8분",
      },
      {
        name: "이스탄불 치킨 케밥",
        description: "신선한 닭가슴살과 지중해식 허브가 어우러진 건강한 한 끼",
        price: "₩13,900",
        image: "🌯",
        isPopular: false,
        spicyLevel: 1,
        cookTime: "6분",
      },
      {
        name: "로얄 믹스 케밥",
        description: "양고기와 닭고기를 함께 즐길 수 있는 프리미엄 콤보",
        price: "₩18,900",
        image: "🥖",
        isPopular: true,
        spicyLevel: 3,
        cookTime: "10분",
      },
    ],
    classic: [
      {
        name: "오리지널 도네르 케밥",
        description: "터키 전통 방식 그대로 만든 정통 케밥",
        price: "₩12,900",
        image: "🌮",
        isPopular: false,
        spicyLevel: 2,
        cookTime: "7분",
      },
      {
        name: "클래식 비프 케밥",
        description: "부드러운 소고기와 전통 양념의 깊은 맛",
        price: "₩14,900",
        image: "🥙",
        isPopular: false,
        spicyLevel: 2,
        cookTime: "9분",
      },
    ],
    premium: [
      {
        name: "트러플 램 케밥",
        description: "최고급 양고기에 트러플 오일을 더한 프리미엄 메뉴",
        price: "₩24,900",
        image: "🥖",
        isPopular: true,
        spicyLevel: 1,
        cookTime: "12분",
      },
      {
        name: "와규 케밥 스페셜",
        description: "일본산 와규로 만든 최고급 케밥",
        price: "₩29,900",
        image: "🌯",
        isPopular: false,
        spicyLevel: 1,
        cookTime: "15분",
      },
    ],
    side: [
      {
        name: "터키식 후무스",
        description: "전통 방식으로 만든 크리미한 후무스",
        price: "₩6,900",
        image: "🍽️",
        isPopular: false,
        spicyLevel: 0,
        cookTime: "즉시",
      },
      {
        name: "그릴드 할루미",
        description: "지중해산 치즈를 구워낸 고소한 사이드",
        price: "₩8,900",
        image: "🧀",
        isPopular: true,
        spicyLevel: 0,
        cookTime: "3분",
      },
    ],
  };

  return (
    <section ref={sectionRef} id="menu" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        {/* 섹션 헤더 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            MENU
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            50년 전통의 정통 터키 레시피로 만든 프리미엄 케밥
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-primary hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 메뉴 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map(
            (item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                {/* 메뉴 이미지 영역 */}
                <div className="relative h-48 bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
                  <div className="text-6xl">{item.image}</div>
                  {item.isPopular && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Flame size={14} className="mr-1" />
                      인기
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* 메뉴 정보 */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* 메뉴 세부 정보 */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {item.cookTime}
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1">🌶️</span>
                        <div className="flex">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full mr-1 ${
                                i < item.spicyLevel
                                  ? "bg-red-500"
                                  : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* 주문 버튼 */}
                  <button className="w-full mt-4 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 py-3 rounded-lg font-semibold">
                    메뉴 상세보기
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        {/* 전체 메뉴 보기 버튼 */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="btn-primary text-lg px-8 py-4">
            전체 메뉴 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
