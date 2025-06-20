"use client";

import { useState, useEffect, useRef } from "react";
import { Star, Clock, Flame, X, MapPin, Users } from "lucide-react";
import Image from "next/image";

// 메뉴 아이템 타입 정의
interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isPopular: boolean;
  spicyLevel: number;
  cookTime: string;
  // 상세 정보 추가
  calories: number;
  ingredients: string[];
  origin: string;
  nutrition: {
    protein: string;
    carbs: string;
    fat: string;
  };
  allergens: string[];
  cookingMethod: string;
  recommendedSides: string[];
  servingSize: string;
}

const MenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("signature");
  const [showAllMenus, setShowAllMenus] = useState(false);
  // 모달 상태 추가
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // 모달 열기 함수
  const openMenuDetail = (item: MenuItem) => {
    setSelectedMenuItem(item);
    setIsModalOpen(true);
    // 스크롤 방지
    document.body.style.overflow = "hidden";
  };

  // 모달 닫기 함수
  const closeMenuDetail = () => {
    setIsModalOpen(false);
    setSelectedMenuItem(null);
    // 스크롤 복원
    document.body.style.overflow = "auto";
  };

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
        image:
          "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&h=400&fit=crop&crop=center&auto=format",
        isPopular: true,
        spicyLevel: 2,
        cookTime: "8분",
        calories: 650,
        ingredients: [
          "신선한 양고기",
          "터키식 피타 브레드",
          "양파",
          "토마토",
          "오이",
          "요거트 소스",
          "터키 향신료",
        ],
        origin: "터키 이스탄불",
        nutrition: {
          protein: "45g",
          carbs: "35g",
          fat: "28g",
        },
        allergens: ["글루텐", "유제품"],
        cookingMethod: "숯불 직화구이로 육즙을 살린 전통 터키식 조리법",
        recommendedSides: ["터키식 후무스", "그릭 샐러드"],
        servingSize: "1인분 (350g)",
      },
      {
        name: "이스탄불 치킨 케밥",
        description: "신선한 닭가슴살과 지중해식 허브가 어우러진 건강한 한 끼",
        price: "₩13,900",
        image:
          "https://cdn.pixabay.com/photo/2022/05/17/04/51/mix-grill-7201653_1280.jpg",
        isPopular: false,
        spicyLevel: 1,
        cookTime: "6분",
        calories: 520,
        ingredients: [
          "닭가슴살",
          "피타 브레드",
          "양상추",
          "토마토",
          "오이",
          "갈릭 소스",
          "지중해 허브",
        ],
        origin: "터키 이스탄불",
        nutrition: {
          protein: "42g",
          carbs: "32g",
          fat: "18g",
        },
        allergens: ["글루텐"],
        cookingMethod: "지중해식 허브로 마리네이드 후 그릴 조리",
        recommendedSides: ["터키식 치킨 윙", "후무스"],
        servingSize: "1인분 (320g)",
      },
      {
        name: "로얄 믹스 케밥",
        description: "양고기와 닭고기를 함께 즐길 수 있는 프리미엄 콤보",
        price: "₩18,900",
        image:
          "https://cdn.pixabay.com/photo/2022/08/14/12/52/masahawii-mix-grill-7414541_1280.jpg",
        isPopular: true,
        spicyLevel: 3,
        cookTime: "10분",
        calories: 780,
        ingredients: [
          "프리미엄 양고기",
          "닭가슴살",
          "피타 브레드",
          "구운 야채",
          "터키식 소스 3종",
        ],
        origin: "터키 전 지역 전통 레시피",
        nutrition: {
          protein: "52g",
          carbs: "38g",
          fat: "35g",
        },
        allergens: ["글루텐", "유제품"],
        cookingMethod: "두 가지 고기를 각각 최적의 방법으로 조리 후 조합",
        recommendedSides: ["구운 야채", "터키 라이스"],
        servingSize: "1인분 (420g)",
      },
    ],
    classic: [
      {
        name: "오리지널 도네르 케밥",
        description: "터키 전통 방식 그대로 만든 정통 케밥",
        price: "₩12,900",
        image:
          "https://cdn.pixabay.com/photo/2022/06/11/16/24/biryani-platter-7253751_1280.jpg",
        isPopular: false,
        spicyLevel: 2,
        cookTime: "7분",
        calories: 580,
        ingredients: [
          "도네르용 양고기",
          "피타 브레드",
          "양파",
          "파슬리",
          "요거트 소스",
        ],
        origin: "터키 전통",
        nutrition: {
          protein: "38g",
          carbs: "42g",
          fat: "24g",
        },
        allergens: ["글루텐", "유제품"],
        cookingMethod: "회전식 도네르 방식으로 균일하게 조리",
        recommendedSides: ["피클", "터키 차이"],
        servingSize: "1인분 (300g)",
      },
      {
        name: "터키식 쉬쉬 케밥",
        description: "숯불에 구운 소고기 꼬치와 향신료의 깊은 맛",
        price: "₩14,900",
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=400&fit=crop&crop=center&auto=format",
        isPopular: false,
        spicyLevel: 2,
        cookTime: "9분",
        calories: 620,
        ingredients: [
          "프리미엄 소고기",
          "양파",
          "피망",
          "토마토",
          "터키 향신료",
          "올리브오일",
        ],
        origin: "터키 아나톨리아",
        nutrition: {
          protein: "48g",
          carbs: "28g",
          fat: "26g",
        },
        allergens: ["없음"],
        cookingMethod: "숯불 직화로 겉은 바삭, 속은 촉촉하게 조리",
        recommendedSides: ["터키 라이스", "구운 야채"],
        servingSize: "1인분 (350g)",
      },
    ],
    premium: [
      {
        name: "트러플 램 케밥",
        description: "최고급 양고기에 트러플 오일을 더한 프리미엄 메뉴",
        price: "₩24,900",
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop&crop=center&auto=format",
        isPopular: true,
        spicyLevel: 1,
        cookTime: "12분",
        calories: 720,
        ingredients: [
          "뉴질랜드산 양고기",
          "이탈리아산 트러플 오일",
          "로즈마리",
          "갈릭",
          "프리미엄 피타",
        ],
        origin: "뉴질랜드 + 이탈리아",
        nutrition: {
          protein: "55g",
          carbs: "25g",
          fat: "42g",
        },
        allergens: ["글루텐"],
        cookingMethod: "저온 숙성 후 고온 마무리로 완벽한 식감 구현",
        recommendedSides: ["트러플 감자", "아루굴라 샐러드"],
        servingSize: "1인분 (400g)",
      },
      {
        name: "와규 케밥 스페셜",
        description: "일본산 와규로 만든 최고급 케밥",
        price: "₩29,900",
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=400&fit=crop&crop=center&auto=format",
        isPopular: false,
        spicyLevel: 1,
        cookTime: "15분",
        calories: 850,
        ingredients: [
          "일본산 A5 와규",
          "프리미엄 버터",
          "바질",
          "발사믹 리덕션",
          "아티잔 브레드",
        ],
        origin: "일본",
        nutrition: {
          protein: "60g",
          carbs: "30g",
          fat: "48g",
        },
        allergens: ["글루텐", "유제품"],
        cookingMethod: "정밀 온도 제어로 와규 본연의 맛과 식감 극대화",
        recommendedSides: ["트러플 버섯", "프리미엄 와인"],
        servingSize: "1인분 (450g)",
      },
    ],
    side: [
      {
        name: "터키식 후무스",
        description: "전통 방식으로 만든 크리미한 후무스와 피타 브레드",
        price: "₩6,900",
        image:
          "https://cdn.pixabay.com/photo/2019/06/02/19/13/carrot-4225861_1280.jpg",
        isPopular: false,
        spicyLevel: 0,
        cookTime: "즉시",
        calories: 280,
        ingredients: [
          "유기농 병아리콩",
          "타히니",
          "레몬즙",
          "올리브오일",
          "갈릭",
          "피타 브레드",
        ],
        origin: "중동 전통",
        nutrition: {
          protein: "12g",
          carbs: "25g",
          fat: "18g",
        },
        allergens: ["참깨", "글루텐"],
        cookingMethod: "24시간 불린 병아리콩을 전통 방식으로 갈아 제조",
        recommendedSides: ["구운 야채", "올리브"],
        servingSize: "1인분 (200g)",
      },
      {
        name: "터키식 치킨 윙",
        description: "향신료에 절인 닭날개를 바삭하게 구운 인기 사이드",
        price: "₩8,900",
        image:
          "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=400&fit=crop&crop=center&auto=format",
        isPopular: true,
        spicyLevel: 2,
        cookTime: "3분",
        calories: 420,
        ingredients: [
          "신선한 닭날개",
          "터키 향신료",
          "요거트",
          "레몬",
          "올리브오일",
        ],
        origin: "터키",
        nutrition: {
          protein: "28g",
          carbs: "8g",
          fat: "32g",
        },
        allergens: ["유제품"],
        cookingMethod: "24시간 마리네이드 후 고온에서 바삭하게 구이",
        recommendedSides: ["갈릭 소스", "셀러리 스틱"],
        servingSize: "1인분 (250g)",
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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {item.isPopular && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Flame size={14} className="mr-1" />
                      인기
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
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
                  <button
                    onClick={() => openMenuDetail(item)}
                    className="w-full mt-4 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 py-3 rounded-lg font-semibold"
                  >
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
          <button
            onClick={() => setShowAllMenus(!showAllMenus)}
            className="btn-primary text-lg px-8 py-4"
          >
            {showAllMenus ? "카테고리별 보기" : "전체 메뉴 보기"}
          </button>
        </div>

        {/* 전체 메뉴 표시 영역 */}
        {showAllMenus && (
          <div className="mt-16 space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                전체 메뉴
              </h3>
            </div>

            {Object.entries(menuItems).map(([categoryKey, items]) => {
              const categoryName =
                categories.find((cat) => cat.id === categoryKey)?.name ||
                categoryKey;
              return (
                <div key={categoryKey} className="space-y-6">
                  <h4 className="text-2xl font-bold text-primary text-center">
                    {categoryName}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
                      >
                        {/* 메뉴 이미지 영역 */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={500}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            unoptimized
                          />
                          {item.isPopular && (
                            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                              <Flame size={14} className="mr-1" />
                              인기
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
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
                          <button
                            onClick={() => openMenuDetail(item)}
                            className="w-full mt-4 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 py-3 rounded-lg font-semibold"
                          >
                            메뉴 상세보기
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 메뉴 상세 모달 */}
        {isModalOpen && selectedMenuItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* 모달 배경 */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeMenuDetail}
            ></div>

            {/* 모달 콘텐츠 */}
            <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* 모달 헤더 */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedMenuItem.name}
                </h3>
                <button
                  onClick={closeMenuDetail}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* 모달 본문 */}
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* 이미지 영역 */}
                  <div className="space-y-4">
                    <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                      <Image
                        src={selectedMenuItem.image}
                        alt={selectedMenuItem.name}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                      {selectedMenuItem.isPopular && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Flame size={14} className="mr-1" />
                          인기 메뉴
                        </div>
                      )}
                    </div>

                    {/* 기본 정보 카드 */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        기본 정보
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">가격:</span>
                          <span className="font-semibold text-primary">
                            {selectedMenuItem.price}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">칼로리:</span>
                          <span className="font-semibold">
                            {selectedMenuItem.calories}kcal
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">조리시간:</span>
                          <span className="font-semibold">
                            {selectedMenuItem.cookTime}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">1인분 양:</span>
                          <span className="font-semibold">
                            {selectedMenuItem.servingSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 상세 정보 영역 */}
                  <div className="space-y-6">
                    {/* 설명 */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        메뉴 설명
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedMenuItem.description}
                      </p>
                    </div>

                    {/* 원산지 */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <MapPin size={16} className="mr-1" />
                        원산지
                      </h4>
                      <p className="text-gray-600">{selectedMenuItem.origin}</p>
                    </div>

                    {/* 재료 */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        주요 재료
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMenuItem.ingredients.map(
                          (ingredient, index) => (
                            <span
                              key={index}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                            >
                              {ingredient}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* 영양 정보 */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        영양 정보
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center bg-blue-50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-blue-600">
                            {selectedMenuItem.nutrition.protein}
                          </div>
                          <div className="text-sm text-gray-600">단백질</div>
                        </div>
                        <div className="text-center bg-green-50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-green-600">
                            {selectedMenuItem.nutrition.carbs}
                          </div>
                          <div className="text-sm text-gray-600">탄수화물</div>
                        </div>
                        <div className="text-center bg-orange-50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-orange-600">
                            {selectedMenuItem.nutrition.fat}
                          </div>
                          <div className="text-sm text-gray-600">지방</div>
                        </div>
                      </div>
                    </div>

                    {/* 매운맛 정도 */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        매운맛 정도
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">순함</span>
                        <div className="flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < selectedMenuItem.spicyLevel
                                  ? "bg-red-500"
                                  : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">매움</span>
                      </div>
                    </div>

                    {/* 알레르기 정보 */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        알레르기 정보
                      </h4>
                      {selectedMenuItem.allergens.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {selectedMenuItem.allergens.map((allergen, index) => (
                            <span
                              key={index}
                              className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                            >
                              {allergen}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-600">알레르기 유발 요소 없음</p>
                      )}
                    </div>

                    {/* 조리법 */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        조리법
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {selectedMenuItem.cookingMethod}
                      </p>
                    </div>

                    {/* 추천 조합 */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Users size={16} className="mr-1" />
                        추천 조합
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMenuItem.recommendedSides.map(
                          (side, index) => (
                            <span
                              key={index}
                              className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm"
                            >
                              {side}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 모달 하단 버튼 */}
                <div className="mt-8 flex gap-4">
                  <button
                    onClick={closeMenuDetail}
                    className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors py-3 rounded-lg font-semibold"
                  >
                    닫기
                  </button>
                  <button className="flex-1 bg-primary text-white hover:bg-primary/90 transition-colors py-3 rounded-lg font-semibold">
                    주문하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
