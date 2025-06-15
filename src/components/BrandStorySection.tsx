"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Heart, Globe } from "lucide-react";

const BrandStorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const storyItems = [
    {
      icon: Heart,
      title: "정통 터키의 맛",
      description:
        "1973년 이스탄불에서 시작된 우리의 여정은 진정한 터키 케밥의 맛을 전 세계에 알리는 것이었습니다.",
    },
    {
      icon: Award,
      title: "50년 전통 레시피",
      description:
        "3대째 이어져 내려오는 비법 레시피와 전통 조리법으로 최고의 품질을 보장합니다.",
    },
    {
      icon: Globe,
      title: "글로벌 브랜드",
      description:
        "전 세계 25개국 1,500여 개 매장에서 사랑받는 프리미엄 케밥 브랜드입니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="brand-story" className="py-20 bg-white">
      <div className="container-max section-padding">
        {/* 섹션 헤더 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            BRAND STORY
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            터키의 전통과 현대적 감각이 만나 탄생한 프리미엄 케밥 브랜드
          </p>
        </div>

        {/* 메인 스토리 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              진정성 있는 맛의 시작
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              1973년, 터키 이스탄불의 작은 거리에서 시작된 KEBAB HOUSE는
              할아버지의 전통 레시피를 고수하며 정통 터키 케밥의 맛을 세상에
              알려왔습니다.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              신선한 재료와 정성스러운 손길, 그리고 변함없는 품질에 대한
              약속으로 50년이 넘는 시간 동안 전 세계 고객들의 사랑을
              받아왔습니다.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">50+</span>
                <span className="ml-2 text-gray-600">Years</span>
              </div>
              <div className="w-1 h-8 bg-gray-300"></div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">25</span>
                <span className="ml-2 text-gray-600">Countries</span>
              </div>
              <div className="w-1 h-8 bg-gray-300"></div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">1500+</span>
                <span className="ml-2 text-gray-600">Stores</span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="text-lg leading-relaxed">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "세계 어디서나 진정한 터키의 맛을 경험할 수 있도록 하는 것"
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* 핵심 가치들 */}
        <div className="grid md:grid-cols-3 gap-8">
          {storyItems.map((item, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-all duration-500 transform hover:scale-105 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${700 + index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                <item.icon size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
